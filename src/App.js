import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar"
import Showcase from "./components/Showcase";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar/>
      <Showcase/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );  
}

export default App;
