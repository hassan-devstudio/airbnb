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
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${outline ? "bg-white" : "bg-rose-500"} ${outline ? "border-black" : "border-rose-500"} ${outline ? "text-black" : "text-white"} ${small ? "text-sm" : "text-md"} ${small ? "py-1" : "py-3"} ${small ? "px-2" : "px-4"} ${small ? "border-[1px]" : "border-[2px]"} ${small ? "font-light" : "font-semibold"}
      ${icon ? "flex flex-row items-center justify-center" : ""} ${
        icon ? (small ? "gap-1" : "gap-2") : ""
      } `}
    >
      {label}
    </button>
  );
};

export default Button;
