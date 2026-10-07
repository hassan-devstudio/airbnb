import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src="/images/Placeholder.png"
      alt="avatar"
      className="rounded-full"
      width={26}
      height={26}
    />
  );
};

export default Avatar;
