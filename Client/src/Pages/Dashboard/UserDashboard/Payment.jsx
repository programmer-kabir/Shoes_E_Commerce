import React, { useEffect, useState } from "react";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import useAuth from "../../../Components/Hooks/useAuth";
import toast from "react-hot-toast";
import useBooked from "../../../Components/Hooks/useBooked";
import { useNavigate } from "react-router-dom";
const Payment = ({ discountedTotal, closeModal }) => {
  // console.log(discountedTotal);
  const { user } = useAuth();
  const [booked, refetch] = useBooked();
  const navigate = useNavigate();

  // console.log(user);
  const price = discountedTotal.toFixed(2);
  // console.log(price);
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState(" ");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const dataToSave = booked.map(({ _id, productId }) => ({ _id, productId }));
  // console.log(dataToSave);
  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      // console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error?.message);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      setCardError(" ");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonyms user",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      toast.error(confirmError);
    }
    // console.log(paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const transactionId = paymentIntent.id;

      const data = {
        transactionId,
        email: user?.email,
        price,
        data: new Date(),
        productId: booked.map((item) => item.productId),
        bookedId: booked.map((item) => item._id),
      };
      // console.log(data);
      axiosSecure.post("/payment", data).then((res) => {
        console.log(res);
        if (res.data.insertResult) {
          toast.success("payment succeeded");
          closeModal();
          navigate(`./thank_you_page`, { state: { bookedData: booked } });
        }
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-end mb-2 pt-5 ">
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="bg-red-400  px-5 text-base font-semibold py-1 rounded-md"
          >
            Pay
          </button>
        </div>
      </form>
      <p className="text-red-500">{cardError}</p>
      {/* {transactionId && <div>toast.success('payment succeeded')</div>} */}
    </div>
  );
};

export default Payment;
