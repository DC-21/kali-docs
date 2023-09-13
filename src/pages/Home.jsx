import backgroundImage from "../images/sun.jpg";

const Home = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div
      className="w-full min-h-screen flex bg-blue-900 px-6 justify-center"
      style={divStyle}
    >
      <div className="flex w-full py-6 justify-center">
        <a>Kali-Docs</a>
        <li>
          <a>Docs</a>
          <a>Donate</a>
        </li>
      </div>
    </div>
  );
};

export default Home;
