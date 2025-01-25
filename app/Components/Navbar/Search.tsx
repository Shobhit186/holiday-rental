'use client';
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] rounded-full w-full md:w-auto py-2 shadow-sm hover:shadow-md transition cursor-pointer">
       <div className="flex flex-row items-center justify-between">
          <div className="text-sm font-semibold px-6">
            Search
          </div>
          <div className="flex-1 hidden sm:block text:sm font-semibold px-6 border-x-[1px] text-center">
            Anywhere
          </div>
          <div className="text-sm pl-6 pr-2 text-gray-600 gap-3 items-center flex flex-row">
            <div className="hidden sm:block">
                Guests
            </div>
            <div className="p-2 bg-rose-500 rounded-full text-white ">
               <BiSearch size={18} />
            </div>
          </div>
       </div>
    </div>
  )
}

export default Search