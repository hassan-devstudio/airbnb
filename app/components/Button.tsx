interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: React.ReactElement;
}

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`relative w-full rounded-lg border font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${outline ? "bg-white border-neutral-300 text-neutral-800 enabled:hover:border-neutral-800 enabled:hover:bg-neutral-50 enabled:active:bg-neutral-100" : "bg-rose-500 border-rose-500 text-white enabled:hover:bg-rose-600 enabled:hover:border-rose-600 enabled:active:bg-rose-700"} ${small ? "text-sm py-1 px-2" : "text-base py-3 px-4"}
      ${icon ? "flex flex-row items-center justify-center" : ""} ${
        icon ? (small ? "gap-1" : "gap-2") : ""
      } `}
    >
      {label}
    </button>
  );
};

export default Button;
