
import Link from "next/link";

function Header() {
  return (
    <div className="w-full hidden sm:flex  bg-gray-50 border border-b h-[56px] sticky top-0 justify-end items-center">
      <Link href={'/login'} className="mx-4">Log Out</Link>
    </div>
  );
}

export default Header;
