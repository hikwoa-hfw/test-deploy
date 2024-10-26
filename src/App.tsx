import "./App.css";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Aboutme />
      <Project />
      <Contact />
    </>
  );
}

export default App;
