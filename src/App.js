import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import MyProjects from "./components/MyProjects/MyProjects";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MyProjects />
      <AboutMe />
    </div>
  );
}

export default App;
