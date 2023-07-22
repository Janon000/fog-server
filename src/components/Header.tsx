"use client"
import Link from "next/link";

function Header() {
  return (
    <div className="hidden sm:flex sticky top-0 w-full">
      <div
        id="left"
        className="flex w-[250px] bg-[#0A133A] h-[56px] text-white items-center"
      >
        <div className="px-8">FOG SERVER</div>
      </div>
      <div className="flex flex-grow bg-gray-50 border border-b h-[56px] justify-end items-center">
        <Link href={"/login"} className="mx-4">
          Log Out
        </Link>
      </div>
    </div>
  );
}

export default Header;
