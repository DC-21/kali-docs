import { useState } from "react";
import backgroundImage from "../images/sun.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(false);
  const HandleMenu = () => {
    setOpen(!open);
  };

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <div className="w-full min-h-screen flex flex-col px-6" style={divStyle}>
      <div className="flex w-full py-4 justify-between items-center">
        <Link to="/" className="text-[25px] cursor-pointer font-semibold text-white">Kali-Docs</Link>
        <li className="flex gap-4 items-baseline">
          <Link to="/news" className="md:flex hidden cursor-pointer text-[20px] text-white hover:bg-[#5295e0] px-2 py-2 rounded">
            News
          </Link>
          <Link to="/docs" className="md:flex hidden cursor-pointer text-[20px] text-white hover:bg-[#5295e0] px-2 py-2 rounded">
            Docs
          </Link>
          <a href='https://bmc.link/cholahkuboQ' className="md:flex hidden cursor-pointer text-[20px] text-white hover:bg-[#5295e0] px-2 py-2 rounded">
            Donate
          </a>
          <button
            onClick={HandleMenu}
            className="md:hidden lg:hidden sm:flex text-white"
          >
            {open ? (
              <ion-icon size="large" name="close-outline"></ion-icon>
            ) : (
              <ion-icon size="large" name="grid-outline"></ion-icon>
            )}
            {open && (
              <div className="w-full z-50 h-[200px] justify-center items-center text-blue-950 left-0 absolute py-4 flex flex-col backdrop-blur-md bg-[#f1f3fa] rounded">
                <Link to="/news" className="py-2 w-full cursor-pointer hover:bg-blue-400">
                  News
                </Link>
                <Link to="/docs" className="py-2 w-full cursor-pointer hover:bg-blue-400">
                  Docs
                </Link>
                <a href='https://bmc.link/cholahkuboQ' className="py-2 w-full cursor-pointer hover:bg-blue-400">
                  Donate
                </a>
              </div>
            )}
          </button>
        </li>
      </div>
      <div className="flex-grow flex justify-center items-center py-6">
        <div className="w-full justify-center items-center flex">
          <div htmlFor="searchInput" className="flex text-black gap-4 justify-center items-center lg:w-[450px] md:w-[450px] w-full lg:py-5 md:py-5 py-3 px-2 bg-white rounded-full">
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
      </div>
      <div className="w-full flex py-4 text-white justify-between items-center">
        <a>DiCE Labs||Copyright @ 2023</a>
        <a href='https://github.com/dc-21' className="text-white cursor-pointer"><ion-icon size="large" name="logo-github"></ion-icon></a>
      </div>
    </div>
  );
};

export default Home;
