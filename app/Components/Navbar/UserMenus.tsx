'use client';
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useregisterModal";

const UserMenus = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  },[]);
  return (
    <div className="relative">
        <div className="gap-3 flex flex-row items-center">
          <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full transition cursor-pointer hover:bg-neutral-100" onClick={()=>{}}>
              Your Dream Rental
          </div>
          <div onClick={toggleOpen} className="md:px-2 md:py-1 p-4 border-[1px] items-center border-neutral-200 rounded-full flex flex-row gap-3 cursor-pointer transition hover:shadow-md">
            <AiOutlineMenu />
            <div className="hidden md:block">
              <Avatar/>
            </div>
          </div>
        </div>
        {isOpen && (
            <div className="absolute shadow-md rounded-xl w-[40vw] bg-white overflow-hidden top-12 text-sm md:w-3/4 right-0">
                <div className="flex flex-col cursor-pointer">
                    <>
                      <MenuItem 
                        onClick={() => {}}
                        label="Login"
                      />
                      <MenuItem 
                        onClick={registerModal.onOpen}
                        label="Register"
                      />
                    </>
                </div>
            </div>
        )}
    </div>
  )
}

export default UserMenus;