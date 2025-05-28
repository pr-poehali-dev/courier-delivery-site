import { useState } from "react";
import { OrderData } from "@/types";

export const useOrderForm = () => {
  const [orderData, setOrderData] = useState<OrderData>({
    fromAddress: "",
    toAddress: "",
    phone: "",
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
    setTimeout(() => setOrderSubmitted(false), 3000);
  };

  const updateOrderData = (field: keyof OrderData, value: string) => {
    setOrderData((prev) => ({ ...prev, [field]: value }));
  };

  return {
    orderData,
    orderSubmitted,
    handleOrderSubmit,
    updateOrderData,
  };
};
