import { useState } from "react";
import { Link } from "react-router-dom";
import kali1 from "../images/kali1.jpg";
import kali2 from "../images/banner-kali-10-year.jpg";
import purple from "../images/purple.jpg";
import kali3 from "../images/kali-everywhere-banner.jpg";
import kali4 from "../images/azure.jpg";

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
        <div className="md:w-[900px] ld:w-[900px] w-full justify-center items-center flex flex-col">
          <h1 className="md:text-[35px] lg:text-[35px] text-3xl lg:font-bold md:font-bold font-semibold text-blue-950">
            Kali Latest News
          </h1>
          <div className="w-full md:justify-start justify-center items-center flex flex-col m-4">
            <p className="lg:text-[30px] md:text-[30px] text-[18px] text-blue-900">
              Kali Linux 2023.3 Release (Internal Infrastructure & Kali
              Autopilot)
            </p>
            <p className="text-[15px] text-blue-800 mt-2">
              Wednesday, 23 August 2023
            </p>
            <img className="object-cover rounded w-full" src={kali1} />
            <p className="md:text-[20px] text-[18px] py-3">
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
          <div className="w-full justify-start flex flex-col m-4">
            <h1 className="text-[30px] text-blue-900">
              Happy 10th anniversary & Kali's story ...so far
            </h1>
            <p className="text-[15px] text-blue-800">29 March 2023</p>
            <img className="object-cover rounded w-full" src={kali2} />
            <p className="text-[20px] py-3">
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
          <div className="w-full justify-start flex flex-col m-4">
            <h1 className="text-[30px] text-blue-900">
              Kali Linux 2023.1 Release (Kali Purple & Python Changes)
            </h1>
            <p className="text-[15px] text-blue-800">Monday, 13 March 2023</p>
            <img className="object-cover rounded w-full" src={purple} />
            <p className="text-[20px] py-3">
              Today we are releasing Kali 2023.1 (and on our 10th anniversary)!
              It will be ready for immediate download or updating by the time
              you have finished reading this post. Given its our 10th
              anniversary, we are delighted to announce there are a few special
              things lined up to help celebrate. Stay tuned for a blog post
              coming out for more information!
            </p>
            <button className="text-[20px] py-2 px-2 bg-blue-700 w-[150px] rounded text-white">
              Read More
            </button>
          </div>
          <div className="w-full justify-start flex flex-col m-4">
            <h1 className="text-[30px] text-blue-900">
              Kali Linux (is) Everywhere!
            </h1>
            <p className="text-[15px] text-blue-800">11 January 2023</p>
            <img className="object-cover rounded w-full" src={kali3} />
            <p className="text-[20px] py-3">
              One of the primary goals of Kali Linux is to put the tools you
              need as close to you as possible. Over the years this has resulted
              in a number of different ways to get Kali, but not everyone knows
              about all the options! In this post we are going to do an overview
              of different options you have for running Kali, and where you can
              go for more information for each option.
            </p>
            <button className="text-[20px] py-2 px-2 bg-blue-700 w-[150px] rounded text-white">
              Read More
            </button>
          </div>
          <div className="w-full justify-start flex flex-col m-4">
            <h1 className="text-[30px] text-blue-900">
              Kali Linux 2022.4 Release (Azure, Social & Kali NetHunter Pro)
            </h1>
            <p className="text-[15px] text-blue-800">06 December 2022</p>
            <img className="object-cover rounded w-full" src={kali4} />
            <p className="text-[20px] py-3">
              Before the year is over, we thought it was best to get the final
              2022 release out. Today we are publishing Kali Linux 2022.4. This
              is ready for immediate download or updating existing
              installations. A summary of the changelog since August’s 2022.3
              release: Microsoft Azure - We are back on the Microsoft Azure
              store More Platforms - Generic Cloud, QEMU VM image & Vagrant
              libvirt Social Networks - New homes, keeping in touch & press
              packs Kali NetHunter Pro - Announcing the first release of a
              “true” Kali Linux on the mobile phone (PinePhone / Pro) Kali
              NetHunter - Internal Bluetooth support, kernel porting video,
              firmware updates & other improvements Desktop Updates - GNOME 43 &
              KDE 5.
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
