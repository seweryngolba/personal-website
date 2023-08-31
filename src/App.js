import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MyProjects from "./components/MyProjects/MyProjects";
import Navbar from "./components/Navbar/Navbar";
import SpeedGame from "./components/SpeedGame/SpeedGame";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MyProjects />
      <AboutMe />
      <SpeedGame />
      <Footer />
    </>
  );
}

export default App;
