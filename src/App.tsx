import Navbar from "@/scenes/navbar/Navbar";
import { useEffect, useState } from "react";
import Home from "./scenes/navbar/Home";

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
    const handleScroll: () => void = () => {
      if (window.scrollY == 0){
      setIsPageTop(true);
      setSelectedPage(Page.Home);
    } else {
      setIsPageTop(false);
    }
  };

    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  })

  return (
      <div className = "app bg-gray-50">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isPageTop={isPageTop}/>
        <Home setSelectedPage={setSelectedPage}></Home>
      </div>
  )
}

export default App;
