import { useState } from 'react'
import { Link } from 'react-router-dom'

const News = () => {
    const[open,setOpen]=useState(false);
    const HandleMenu=()=>{
        setOpen(!open);
    }
  return (
    <div className="w-full min-h-screen flex flex-col px-6">
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
    </div>
  )
}

export default News