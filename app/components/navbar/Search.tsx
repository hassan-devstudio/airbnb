"use client";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border border-[#DDDDDD] w-full md:w-auto py-2 rounded-full hover:shadow-sm transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6 text-[#222222]">
          Any Where
        </div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x border-gray-200 flex-1 text-center text-[#222222]">
          Any Week
        </div>
        <div className="text-sm pl-6 pr-2 text-[#717171] flex flex-row items-center gap-3">
          <div className="hidden sm:block text-sm font-semibold">
            Add Guests
          </div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
