import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Docs from "./pages/Docs";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/docs" element={<Docs/>} />
      </Routes>
    </>
  );
};

export default App;
