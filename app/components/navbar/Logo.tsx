"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div className="hidden md:block md:w-20 lg:w-[100px] shrink-0">
      <Image
        src="/Images/logo.png"
        alt="Logo"
        width={100}
        height={100}
        loading="eager"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default Logo;
