"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
const UserMenu = () => {
  const [isOPen, setIsOpen] = React.useState<boolean>(false);
  const toggleOPen = React.useCallback(() => {
    setIsOpen((value: boolean) => !value);
  }, []);

  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center ">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          UserMenu
        </div>
        <div
          onClick={toggleOPen}
          className="h-11 px-3 md:px-2 border-[1px] border-neutral-100 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOPen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden top-full mt-2 right-0 text-sm">
          <MenuItem label="Register" onClick={() => {}} />
          <MenuItem label="Login" onClick={() => {}} />
        </div>
      )}
    </div>
  );
};

export default UserMenu;
