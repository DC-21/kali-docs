import backgroundImage from "../images/sun.jpg";

const Home = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div
      className="w-full min-h-screen flex px-6 justify-center"
      style={divStyle}
    >
      <div className="flex w-full py-6 justify-between">
        <a className="text-[25px] text-white">Kali-Docs</a>
        <li className="flex gap-4 items-baseline">
          <a className="text-[20px] text-white hover:bg-[#5295e0] px-2 py-2 rounded">Docs</a>
          <a className="text-[20px] text-white hover:bg-[#5295e0] px-2 py-2 rounded">Donate</a>
        </li>
      </div>
    </div>
  );
};

export default Home;
