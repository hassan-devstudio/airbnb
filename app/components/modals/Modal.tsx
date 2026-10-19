"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";
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
    if (disabled) return;
    if (secondaryAction) {
      secondaryAction();
    } else {
      handleClose();
    }
  }, [disabled, secondaryAction, handleClose]);

  if (!isOpen) return null;
  return (
    <div
      className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0
      outline-none focus:outline-none bg-neutral-800/70"
    >
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        {/* Content */}
        <div
          className={`translate duration-300 h-full ${showModal ? "translate-y-0" : "translate-y-full"} ${showModal ? "opacity-100" : "opacity-0"}  `}
        >
          <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* HEADER */}
            <div className="flex items-center p-6 rounded-t justify-center border-gray-100 border-b-[1px] relative">
              <button
                type="button"
                aria-label="Close modal"
                disabled={disabled}
                onClick={handleClose}
                className="absolute left-6 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-colors enabled:hover:border-neutral-400 enabled:hover:bg-neutral-100 enabled:hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <IoMdClose />
              </button>
              <div className="text-lg font-semibold ">{title}</div>
            </div>
            {/* BODY */}
            <div className="relative p-6 flex-auto">{body}</div>
            {/* FOOTER */}
            <div className="flex flex-row items-center p-6 gap-4 w-full">
              <Button
                outline
                label={secondaryLabel ? secondaryLabel : "Cancel"}
                onClick={handleSecondaryAction}
                disabled={disabled}
              />
              <Button
                label={actionLabel}
                onClick={handlesubmit}
                disabled={disabled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
