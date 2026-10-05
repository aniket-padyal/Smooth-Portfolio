import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import HeroText from "./components/HeroText";
import ScrollMarquee from "./components/ScrollMarquee";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CursorFollow from "./scrollEffects/CursorFollow";

function App() {
  return (
    <>
      <CursorFollow />
      <Navbar />
      <Introduction />
      <HeroText />
      <ScrollMarquee />
      <Expertise />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
