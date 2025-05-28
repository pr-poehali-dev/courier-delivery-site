import { useState } from "react";

export const useTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrackingSearch = () => {
    if (trackingNumber) {
      alert(`Отслеживание заказа №${trackingNumber}: Заказ в пути`);
    }
  };

  return {
    trackingNumber,
    setTrackingNumber,
    handleTrackingSearch,
  };
};
