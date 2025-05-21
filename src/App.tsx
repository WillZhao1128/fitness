
import { useEffect, useState } from "react";
import Home from "./scenes/Home";
import Navbar from "./scenes/NavBar";
import Benefits from "./scenes/Benefits";
import Classes from "./scenes/Classes";
import ContactUs from "./scenes/ContactUs";


enum Page {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

function App() {
  const [selectedPage, setSelectedPage] = useState<Page>(Page.Home);
  const [isPageTop, setIsPageTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0){
        setIsPageTop(true);
        setSelectedPage(Page.Home);
      }
      else{
        setIsPageTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className = "app bg-gray-50">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isPageTop={isPageTop}/>
        <Home setSelectedPage={setSelectedPage}></Home>
        <Benefits setSelectedPage={setSelectedPage}></Benefits>
        <Classes setSelectedPage={setSelectedPage}></Classes>
        <ContactUs setSelectedPage={setSelectedPage}></ContactUs>
      </div>
  )
}

export default App;
