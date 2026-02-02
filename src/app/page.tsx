"use client";

import { useState } from "react";
import OpenedCard from "@/components/OpenedCard";
import ClosedCard from "@/components/ClosedCard";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <div
        style={{
          minHeight: "100dvh",
          backgroundColor: "#f8f5f7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <OpenedCard onClose={() => setIsOpen(false)} />
      </div>
    );
  }

  return <ClosedCard onOpen={() => setIsOpen(true)} />;
}
