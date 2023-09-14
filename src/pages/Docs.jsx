import { useState } from "react";
import { Link } from "react-router-dom";

const Docs = () => {
  const [open, setOpen] = useState(false);
  const HandleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full min-h-screen flex flex-col px-6">
      <div className="flex w-full py-4 justify-between items-center">
        <Link
          to="/"
          className="text-[25px] cursor-pointer font-semibold text-blue-900"
        >
          Kali-Docs
        </Link>
        <li className="flex gap-4 items-baseline">
          <Link
            to="/news"
            className="md:flex hidden cursor-pointer text-[20px] text-blue-900 hover:bg-[#5295e0] px-2 py-2 rounded"
          >
            News
          </Link>
          <Link
            to="/docs"
            className="md:flex hidden cursor-pointer text-[20px] text-blue-900 hover:bg-[#5295e0] px-2 py-2 rounded"
          >
            Docs
          </Link>
          <a
            href="https://bmc.link/cholahkuboQ"
            className="md:flex hidden cursor-pointer text-[20px] text-blue-900 hover:bg-[#5295e0] px-2 py-2 rounded"
          >
            Donate
          </a>
          <button
            onClick={HandleMenu}
            className="md:hidden lg:hidden sm:flex text-blue-900"
          >
            {open ? (
              <ion-icon size="large" name="close-outline"></ion-icon>
            ) : (
              <ion-icon size="large" name="grid-outline"></ion-icon>
            )}
            {open && (
              <div className="w-full z-50 h-[200px] justify-center items-center text-blue-950 left-0 absolute py-4 flex flex-col backdrop-blur-md bg-[#f1f3fa] rounded">
                <Link
                  to="/news"
                  className="py-2 w-full cursor-pointer hover:bg-blue-400"
                >
                  News
                </Link>
                <Link
                  to="/docs"
                  className="py-2 w-full cursor-pointer hover:bg-blue-400"
                >
                  Docs
                </Link>
                <a
                  href="https://bmc.link/cholahkuboQ"
                  className="py-2 w-full cursor-pointer hover:bg-blue-400"
                >
                  Donate
                </a>
              </div>
            )}
          </button>
        </li>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center py-6">
        <div className="w-full justify-center items-center flex">
          <div
            htmlFor="searchInput"
            className="flex border border-blue-900 text-black gap-4 justify-center items-center lg:w-[450px] md:w-[450px] w-full lg:py-5 md:py-5 py-3 px-2 bg-white rounded-full"
          >
            <input
              type="text"
              id="searchInput"
              placeholder="Search..."
              className="py-2 px-2 cursor-pointer lg:w-[350px] md:w-[350px] w-full focus:outline-none focus:ring-0 bg-white"
            />
            <a className="cursor-pointer">
              <ion-icon size="large" name="search-outline"></ion-icon>
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center h-screen py-10">
          <div className="border-2 justify-center flex w-full rounded border-blue-900">
            <div className="justify-start w-1/4 flex">
              <li className="w-full flex flex-col px-4 py-4">
                <a className="py-2 px-2  hover:bg-blue-500 rounded">
                  Install Postgres
                </a>
                <a className="py-2 px-2  hover:bg-blue-500 rounded">
                  Install MySQL
                </a>
              </li>
            </div>
            <div className="justify-start w-3/4 flex">
              <div className="py-4 flex w-full flex-col">
                <p className="text-[30px]">
                  Installing a PostgreSQL database on Kali
                </p>
                <p>
                  To install PostgreSQL server on Kali Linux, you can use the
                  APT package manager, which is the default package manager for
                  Kali. Here are the steps to install PostgreSQL:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex py-4 text-blue-900 justify-between items-center">
        <a>DiCE Labs||Copyright © 2023</a>
        <a
          href="https://github.com/dc-21"
          className="text-blue-900 cursor-pointer"
        >
          <ion-icon size="large" name="logo-github"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default Docs;
