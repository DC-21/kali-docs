import { useState } from "react";
import { Link } from "react-router-dom";
import kali1 from "../images/kali1.jpg";
import kali2 from "../images/banner-kali-10-year.jpg"

const News = () => {
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
        <div className="w-[900px] justify-center items-center flex flex-col">
          <h1 className="text-[35px] font-bold text-blue-950">
            Kali Latest News
          </h1>
          <div className="w-full justify-start flex flex-col">
            <h1 className="text-[30px] text-blue-900">
              Kali Linux 2023.3 Release (Internal Infrastructure & Kali
              Autopilot)
            </h1>
            <p className="text-[15px] text-blue-800">
              Wednesday, 23 August 2023
            </p>
            <img className="object-cover rounded w-full" src={kali1} />
            <p className="text-[20px]">
              Today we are delighted to introduce our latest release of Kali,
              2023.3. This release blog post does not have the most features in
              it, as a lot of the changes have been behind-the-scenes, which
              brings a huge benefit to us and an indirect positive effect to you
              as end-users. It always goes without saying, but there are a
              number of new packages and tools as well as the standard updates.
              If you want to see what’s new for yourself download or upgrade if
              you have an existing Kali Linux installation.
            </p>
            <button className="text-[20px] py-2 px-2 bg-blue-700 w-[150px] rounded text-white">
              Read More
            </button>
          </div>
          <div className="w-full justify-start flex flex-col">
            <h1 className="text-[30px] text-blue-900">
              Happy 10th anniversary & Kali's story ...so far
            </h1>
            <p className="text-[15px] text-blue-800">29 March 2023</p>
            <img className="object-cover rounded w-full" src={kali2} />
            <p className="text-[20px]">
              Wednesday 13th, March 2013, 10 years ago, Kali Linux v1.0 was
              first released. Today we want to celebrate Kali’s 10th
              anniversary! Time has flown. And gosh, a lot has changed since
              then! They grow up so fast! This is the story of how Kali came to
              be, and some of the challenges along the way.
            </p>
            <button className="text-[20px] py-2 px-2 bg-blue-700 w-[150px] rounded text-white">
              Read More
            </button>
          </div>
          <div className="w-full justify-start flex flex-col">
            <h1 className="text-[30px] text-blue-900">
              Kali Linux 2023.3 Release (Internal Infrastructure & Kali
              Autopilot)
            </h1>
            <p className="text-[15px] text-blue-800">
              Wednesday, 23 August 2023
            </p>
            <img className="object-cover rounded w-full" src={kali1} />
            <p className="text-[20px]">
              Today we are delighted to introduce our latest release of Kali,
              2023.3. This release blog post does not have the most features in
              it, as a lot of the changes have been behind-the-scenes, which
              brings a huge benefit to us and an indirect positive effect to you
              as end-users. It always goes without saying, but there are a
              number of new packages and tools as well as the standard updates.
              If you want to see what’s new for yourself download or upgrade if
              you have an existing Kali Linux installation.
            </p>
            <button className="text-[20px] py-2 px-2 bg-blue-700 w-[150px] rounded text-white">
              Read More
            </button>
          </div>
          <div className="w-full justify-start flex flex-col">
            <h1 className="text-[30px] text-blue-900">
              Kali Linux 2023.3 Release (Internal Infrastructure & Kali
              Autopilot)
            </h1>
            <p className="text-[15px] text-blue-800">
              Wednesday, 23 August 2023
            </p>
            <img className="object-cover rounded w-full" src={kali1} />
            <p className="text-[20px]">
              Today we are delighted to introduce our latest release of Kali,
              2023.3. This release blog post does not have the most features in
              it, as a lot of the changes have been behind-the-scenes, which
              brings a huge benefit to us and an indirect positive effect to you
              as end-users. It always goes without saying, but there are a
              number of new packages and tools as well as the standard updates.
              If you want to see what’s new for yourself download or upgrade if
              you have an existing Kali Linux installation.
            </p>
            <button className="text-[20px] py-2 px-2 bg-blue-700 w-[150px] rounded text-white">
              Read More
            </button>
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

export default News;
