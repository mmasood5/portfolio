import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <Particles 
    className = "particles"
    params = {{
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area:900
          }
        },
        shape: {
          type: "circle",
          stroke: {
            width: 6
          }
        }
      }
    }}/>
    <Navbar />
    <Header />
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
