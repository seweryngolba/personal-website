import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactBox from "./components/ContactBox/ContactBox";
import Falling from "./components/Falling/Falling";
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
        <ScrollPage>
          <Navbar />
          <Hero />
        </ScrollPage>
        <ScrollPage>
          <Animator>
            <MyProjects />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator>
            <AboutMe />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade())}>
            <Falling />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div className="contactSection">
            <div className="avLanding">
              <Animator animation={Move(0, -4000)}>
                <Landing />
              </Animator>
            </div>
            <div className="contactContainer">
              <Animator animation={Fade()}>
                <ContactBox />
              </Animator>
            </div>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}

export default App;
