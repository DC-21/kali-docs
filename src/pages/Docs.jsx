import { useState } from "react";
import { Link } from "react-router-dom";
import error1 from "../images/error1.png";

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
        <div className="w-full flex justify-center h-auto py-10">
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
                <div className="px-2 py-2 w-full flex flex-col">
                  <p>
                    1. Update your package list to ensure you have the latest
                    information about available packages:
                  </p>
                  <p className="mt-2 px-2 py-3 bg-gray-500 rounded text-white text-lg">
                    sudo apt update
                  </p>
                </div>
                <div className="px-2 py-2 w-full flex flex-col">
                  <p>2. Install PostgreSQL and the PostgreSQL client:</p>
                  <p className="mt-2 px-2 py-3 bg-gray-500 rounded text-white text-lg">
                    sudo apt install postgresql postgresql-client
                  </p>
                </div>
                <div className="px-2 py-2 w-full flex flex-col">
                  <p>
                    3. During the installation, the PostgreSQL server will be
                    started automatically. You can check its status with:
                  </p>
                  <p className="mt-2 px-2 py-3 bg-gray-500 rounded text-white text-lg">
                    sudo systemctl status postgresql
                  </p>
                </div>
                <div className="px-2 py-2 w-full flex flex-col">
                  <p>
                    4. By default, PostgreSQL is configured to use the
                    "postgres" user. You should change to the "postgres" user to
                    perform administrative tasks:
                  </p>
                  <p className="mt-2 px-2 py-3 bg-gray-500 rounded text-white text-lg">
                    sudo -i -u postgres
                  </p>
                </div>
                <div className="px-2 py-2 w-full flex flex-col">
                  <p>
                    5. Now, you are logged in as the "postgres" user. You can
                    access the PostgreSQL command prompt by typing::
                  </p>
                  <p className="mt-2 px-2 py-3 bg-gray-500 rounded text-white text-lg">
                    psql
                  </p>
                </div>
                <div className="px-2 py-2 w-full flex flex-col">
                  <p>6. To exit the PostgreSQL command prompt, you can type:</p>
                  <p className="mt-2 px-2 py-3 bg-gray-500 rounded text-white text-lg">
                    \q
                  </p>
                </div>
                <div className="px-2 py-2 w-full flex flex-col">
                  <p>
                    7. To exit the "postgres" user shell and return to your
                    regular user account, type:
                  </p>
                  <p className="mt-2 px-2 py-3 bg-gray-500 rounded text-white text-lg">
                    exit
                  </p>
                </div>
                <div className="px-2 py-2 w-full flex flex-col">
                  <p>
                    7. You have successfully installed PostgreSQL on Kali Linux.
                    You can now create and manage databases using the PostgreSQL
                    command-line tools or other PostgreSQL client applications.
                  </p>
                </div>
                <div className="w-full flex flex-col py-2">
                  <p className="text-[30px]">
                    Common Errors you may encounter during installing or while
                    using postgres
                  </p>
                  <div className="w-full flex flex-col py-3">
                    <img
                      className="object-cover w-[700px] h-auto rounded"
                      src={error1}
                    />
                    <div className="px-2 py-2 w-full flex flex-col">
                      <p>
                        The error message you're encountering is related to a
                        collation version mismatch in the PostgreSQL database.
                        It suggests that the default collation settings in your
                        database template "template1" do not match the collation
                        version provided by the operating system.
                      </p>
                      <p className="mt-3">
                        To resolve this issue, you can follow these steps:
                      </p>
                      <p className="mt-3 text-[25px]">
                        1. Access PostgreSQL as a Superuser:
                      </p>
                      <p className="mt-3">
                        First, you'll need to access PostgreSQL as a superuser,
                        typically the "postgres" user. You can do this using the
                        sudo command:
                      </p>
                      <p className="mt-2 px-2 py-3 bg-gray-500 rounded text-white text-lg">
                        sudo -u postgres psql
                      </p>
                      <p className="mt-3 text-[25px]">
                        2. Rebuild Template Database:
                      </p>
                      <p className="mt-3">
                        Once you are in the PostgreSQL prompt, rebuild the
                        "template1" database with the correct collation version.
                        Run the following SQL command:
                      </p>
                      <p className="mt-2 px-2 py-3 bg-gray-500 rounded text-white text-lg">
                        ALTER DATABASE template1 REFRESH COLLATION VERSION;
                      </p>
                      <p className="mt-3">
                        This command refreshes the collation version of the
                        "template1" database to match the one provided by the
                        operating system.
                      </p>
                      <p className="mt-3 text-[25px]">
                        3. Exit PostgreSQL:
                      </p>
                      <p className="mt-3">
                      After running the command, exit the PostgreSQL prompt:
                      </p>
                      <p className="mt-2 px-2 py-3 bg-gray-500 rounded text-white text-lg">
                        \q
                      </p>
                      <p className="mt-3 text-[25px]">
                        4. Restart PostgreSQL:
                      </p>
                      <p className="mt-3">
                      Restart the PostgreSQL service to apply the changes:
                      </p>
                      <p className="mt-2 px-2 py-3 bg-gray-500 rounded text-white text-lg">
                        sudo systemctl restart postgresql
                      </p>
                      <p className="mt-3 text-[25px]">
                        5. Retry Prisma:
                      </p>
                      <p className="mt-3">
                      Try running your Prisma setup or application again to see if the issue is resolved.
                      </p>
                    </div>
                  </div>
                </div>
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
