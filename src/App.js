import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactBox from "./components/ContactBox/ContactBox";
import Falling from "./components/Falling/Falling";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Landing from "./components/Landing/Landing";
import MyProjects from "./components/MyProjects/MyProjects";
import Navbar from "./components/Navbar/Navbar";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

function App() {
  return (
    <>
      <ScrollContainer>
        <Navbar />
        <Hero />
        <MyProjects />
        <AboutMe />
        <ScrollPage>
          <div className="contactSection">
            <div className="avLanding">
              <Animator animation={Move(0, -1000)}></Animator>
            </div>
            <Landing />
            <div className="contactContainer">
              <Animator animation={Fade()}></Animator>
              <ContactBox />
            </div>
          </div>
        </ScrollPage>
        <Footer />
      </ScrollContainer>
    </>
  );
}

export default App;
