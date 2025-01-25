'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

  return (
    <Image src="/images/logo.png" alt="logo" className="hidden md:block cursor-pointer" width="90" height="90" />
  )
}

export default Logo