import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooked } from "../../Redux/Booked/BookedSlice";
import useBooked from "../../../Components/Hooks/useBooked";
import { FaTrash } from "react-icons/fa6";

const MyOrder = () => {
  const [booked, refetch] = useBooked();
  useEffect(() => {
    booked;
  }, [refetch]);
  const [activeTab, setActiveTab] = useState("All");
  console.log(booked);
  const tabs = ["All", "Completed", "Incomplete"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  // Just Product Price
  const subtotal = booked.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );
  const vatRate = 0.05;
  const total = subtotal * (1 + vatRate);

  // Apply discount when the total is 10000 or more
  let discount = 0;
  if (total >= 30000) {
    discount = 3000;
  } else if (total >= 20000) {
    discount = 2000;
  } else if (total >= 10000) {
    discount = 1000;
  }

  const discountedTotal = total - discount;

  return (
    <div className="px-5 pt-7">
      <div className="flex border-b border-gray-400">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`cursor-pointer  px-4 py-2 border-b-2 ${
              activeTab === tab
                ? "border-black font-bold"
                : "border-transparent"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Content for each tab */}
      <div className="pt-5">
        {activeTab === "All" && (
          <section>
            <div className="px-10 mx-auto">
              <div className="mt-5">
                <h2 className="mb-3 text-xl text-gray-700 font-semibold">
                  View Your Cart ({booked.length})
                </h2>
                <ul className="space-y-4">
                  {booked.map((book) => (
                    <li key={book._id} className="flex items-center gap-4">
                      <div className="border border-gray-400 p-1 rounded-md">
                        <img
                          src={book.image}
                          alt="Book mark Image"
                          className="h-20 w-20 rounded object-cover  transform hover:scale-110 duration-200"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {book?.name}
                        </h3>

                        <dl className="mt-0.5 space-y-px text-[12px] font-medium text-gray-600">
                          <p className="">Size:{book?.size}</p>
                          <p className="">Price:{book?.price} TK</p>
                          <p className="">
                            Upper Material:{book?.upperMaterial}
                          </p>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        <form>
                          <label htmlFor="Line1Qty" className="sr-only">
                            {" "}
                            Quantity{" "}
                          </label>

                          <input
                            type="number"
                            defaultValue={book?.quantity}
                            readOnly
                            id="Line1Qty"
                            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                          />
                        </form>

                        <button className="text-gray-600 transition hover:text-red-600">
                          <span className="sr-only">Remove item</span>
                          <FaTrash size={20} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex justify-end border-t border-gray-400 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Discount:</span>
                        <span className="font-bold text-gray-900">
                          {discount.toFixed(2)} TK
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-bold text-gray-900">
                          {subtotal.toFixed(2)} TK
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          VAT ({(vatRate * 100).toFixed(0)}%):
                        </span>
                        <span className="font-bold text-gray-900">
                          {(subtotal * vatRate).toFixed(2)} TK
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total:</span>
                        <span className="font-bold text-gray-900">
                          {discountedTotal.toFixed(2)} TK
                        </span>
                      </div>
                    </dl>
{/* 
                    <div className="flex justify-end">
                          <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="-ms-1 me-1.5 h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                              />
                            </svg>

                            <p className="whitespace-nowrap text-xs">
                              2 Discounts Applied
                            </p>
                          </span>
                        </div> */}
                        <div className="flex justify-end">
                  {discount > 0 && (
                    <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                        />
                      </svg>
                      <p className="whitespace-nowrap text-xs">
                        {discount} TK Discount Applied
                      </p>
                    </span>
                  )}
                </div>

                    <div className="flex justify-end">
                      <a
                        href="#"
                        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "Completed" && <div>There are no previous orders.</div>}
        {activeTab === "Incomplete" && <div>There are no previous orders.</div>}
      </div>
    </div>
  );
};

export default MyOrder;
