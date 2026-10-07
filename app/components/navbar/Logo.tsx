"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      className="hidden lg:block"
      src="/Images/logo.png"
      alt="Logo"
      width="100"
      height="100"
    />
  );
};

export default Logo;
