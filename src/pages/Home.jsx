import { useState } from "react";
import backgroundImage from "../images/sun.jpg";

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
        <a className="text-[25px] font-semibold text-white">Kali-Docs</a>
        <li className="flex gap-4 items-baseline">
          <a className="md:flex hidden text-[20px] text-white hover:bg-[#5295e0] px-2 py-2 rounded">
            News
          </a>
          <a className="md:flex hidden text-[20px] text-white hover:bg-[#5295e0] px-2 py-2 rounded">
            Docs
          </a>
          <a className="md:flex hidden text-[20px] text-white hover:bg-[#5295e0] px-2 py-2 rounded">
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
              <div className="w-full h-[200px] justify-center items-center text-blue-950 left-0 absolute py-4 flex flex-col backdrop-blur-md bg-[#f1f3fa] rounded">
                <a className="py-2 w-full cursor-pointer hover:bg-blue-400">
                  News
                </a>
                <a className="py-2 w-full cursor-pointer hover:bg-blue-400">
                  Docs
                </a>
                <a className="py-2 w-full cursor-pointer hover:bg-blue-400">
                  Donate
                </a>
              </div>
            )}
          </button>
        </li>
      </div>
      <div className="flex-grow flex justify-center items-center py-6">
        <div className="w-full justify-center items-center flex">
          <div className="flex gap-4 justify-center items-center w-[450px] py-5 bg-white rounded-full">
            <input
              type="text"
              placeholder="Search..."
              className="py-4 px-2 w-[350px] bg-white  focus:outline-none focus:ring-0"
            />
            <ion-icon size="large" name="search-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div className="py-4 text-white text-center">Footer</div>
    </div>
  );
};

export default Home;
