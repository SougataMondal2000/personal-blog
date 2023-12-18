import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Story from "./pages/Story";
import AllStories from "./pages/Story";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/allstories" element={<AllStories />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
