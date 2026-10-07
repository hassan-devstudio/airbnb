"use client";
import React from "react";
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModal, setShowModal] = React.useState(isOpen);
  React.useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = React.useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  }, [disabled, onClose]);

  const handlesubmit = React.useCallback(() => {
    if (disabled) return;
    onSubmit?.();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = React.useCallback(() => {
    if (disabled || !secondaryAction) return;
    secondaryAction?.();
  }, [disabled, secondaryAction]);

  if (!open) return null;
  return <div>Modal</div>;
};

export default Modal;
