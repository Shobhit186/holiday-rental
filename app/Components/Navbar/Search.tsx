'use client';
import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { differenceInCalendarDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const {getByValue} = useCountries();

  const locationValue = params?.get('locationValue');
  const guestCount = params?.get('guestcount');
  const startDate = params?.get('startDate');
  const endDate = params?.get('endDate');


  const locationLabel = useMemo(()=> {
    if(locationValue) {
      return getByValue(locationValue as string)?.label;
    }
    return "Anywhere"
  },[getByValue,locationValue])

  const durationLabel = useMemo(()=> {
    if(startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInCalendarDays(end,start);
      if(diff === 0) {
        diff = 1;
      }
      return `${diff} Days`;
    }
    return "Any Week"
  },[startDate,endDate])  

  const guestLabel = useMemo(() => {
    if(guestCount) {
      return `${guestCount} Guests`;
    }
    return "Add Guests";
  },[guestCount]);


  return (
    <div onClick={searchModal.onOpen} className="border-[1px] rounded-full w-full md:w-auto py-2 shadow-sm hover:shadow-md transition cursor-pointer">
       <div className="flex flex-row items-center justify-between">
          <div className="text-sm font-semibold px-6">
            {locationLabel}
          </div>
          <div className="flex-1 hidden sm:block text:sm font-semibold px-6 border-x-[1px] text-center">
            {durationLabel}
          </div>
          <div className="text-sm pl-6 pr-2 text-gray-600 gap-3 items-center flex flex-row">
            <div className="hidden sm:block">
                {guestLabel}
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