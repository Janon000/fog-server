"use client"
import Link from "next/link";
import { useState } from "react";

function Navbar() {

  const [showNav, setShowNav] = useState("hidden")

  const handleNavClick =()=>{
    showNav === "hidden" ? setShowNav("") : setShowNav("hidden")

  }

  return (
      <div
        id="rest"
        className="sm:flex sm:min-h-screen w-[250px] flex-shrink-0 flex-col text-sm bg-gradient-to-b from-[#0C2263] via-[#300C4D] to-[#3A0647] "
      >
        <div id="smallNav" className="flex sm:hidden h-[56px] from-[#0C2263] via-[#300C4D] to-[#3A0647] ">
          <div className="flex w-full justify-between items-center px-4">
            <h1 className="text-[1.1rem] text-white">FOG SERVER</h1>
            <button onClick={handleNavClick} className="border border-gray-600 text-gray-300 bg-[rgba(255,255,255,0.1)] p-2 rounded ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div id="bigNav" className={`${showNav} sm:block text-white`}>
          {/* <Link href={"/login"} className="">
            <div className="h-12 hover:rounded flex items-center hover:bg-[rgba(255,255,255,0.25)] px-4 py-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="18"
                viewBox="0 0 8 8"
                className=""
              >
                <path
                  fill="currentColor"
                  d="M4 0L0 3h1v4h2V5h2v2h2V2.97L8 3L4 0z"
                />
              </svg>
              <p>Logout</p>
            </div>
          </Link> */}
          <Link href={"/"} className="">
            <div className=" h-12 rounded flex items-center hover:bg-[rgba(255,255,255,0.25)] px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="17"
                viewBox="0 0 8 8"
              >
                <path
                  fill="currentColor"
                  d="M0 0v3h3V0H0zm4 0v1h4V0H4zm0 2v1h3V2H4zM0 4v3h3V4H0zm4 0v1h4V4H4zm0 2v1h3V6H4z"
                />
              </svg>
              <p>Device List</p>
            </div>
          </Link>
          <Link href={"/alerts"} className="">
            <div className="h-12 rounded flex items-center hover:bg-[rgba(255,255,255,0.25)] px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="17"
                viewBox="0 0 8 8"
              >
                <path
                  fill="currentColor"
                  d="M0 0v3h3V0H0zm4 0v1h4V0H4zm0 2v1h3V2H4zM0 4v3h3V4H0zm4 0v1h4V4H4zm0 2v1h3V6H4z"
                />
              </svg>
              <p>Alerts Log</p>
            </div>
          </Link>
        </div>
      </div>
  );
}

export default Navbar;
