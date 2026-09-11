"use client";

import React, { useState, useEffect } from "react";
import DonationModal from "./DonationModal";

export default function GlobalDonationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("10");

  useEffect(() => {
    const handleOpen = (e?: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent?.detail?.amount) {
        setAmount(String(customEvent.detail.amount));
      } else {
        setAmount("10");
      }
      setIsOpen(true);
    };

    window.addEventListener("open-donation-modal", handleOpen);
    window.addEventListener("highlight-donation-widget", handleOpen);

    return () => {
      window.removeEventListener("open-donation-modal", handleOpen);
      window.removeEventListener("highlight-donation-widget", handleOpen);
    };
  }, []);

  return (
    <DonationModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      defaultAmount={amount}
    />
  );
}
