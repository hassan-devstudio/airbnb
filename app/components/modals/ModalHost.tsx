"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function ModalHost() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onSubmit={() => {}}
      actionLabel="Submit"
      title="Modal Title"
    />
  );
}
