import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "./useAuth";
const usePayment = () => {
  const { user } = useAuth();
  const {
    refetch,
    data: payments = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_KEY}/payment?email=${user.email}`
      );
      return res.json();
    },
  });
  return [payments, refetch, loading];
};

export default usePayment;
