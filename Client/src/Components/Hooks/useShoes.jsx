import { useQuery } from "@tanstack/react-query";
import React from "react";

const useShoes = () => {
  const {
    refetch,
    data: shoes = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["shoes"],
    queryFn: async () => {
      const res = await fetch("./shoes.json");
      return res.json();
    },
  });
  return [shoes, refetch, loading];
};

export default useShoes;
