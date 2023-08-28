import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactBox from "./components/ContactBox/ContactBox";
import Falling from "./components/Falling/Falling";
import Hero from "./components/Hero/Hero";
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
          <MyProjects />
        </ScrollPage>
        <ScrollPage>
          <AboutMe />
        </ScrollPage>
        <ScrollPage>
          <Falling />
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <MyProjects />
//       <AboutMe />
//       <ContactBox />
//     </div>
//   );
// }

// export default App;
