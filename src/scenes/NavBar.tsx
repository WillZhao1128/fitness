import Logo from "@/assets/Logo.png";
import type { Page } from "../types/Page";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "./link";
import ActionButton from "../components/ActionButton";

type Props = {
  selectedPage: string;
  setSelectedPage: (value:Page) => void;
  isPageTop: boolean;
}

const Navbar = ({selectedPage, setSelectedPage, isPageTop}: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const flexBetween = "flex items-center justify-between";
  const isBigScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
        <div className={`${flexBetween} ${isPageTop ?  "": "bg-red-200"} fixed top-0 z-30 w-full py-6`}>
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                <img src={Logo} alt="logo" />
                {/*Right Side*/}
                {
                    isBigScreen ? (
                    <div className={`${flexBetween} w-full`}>
                  
                      <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                      </div>
    
                      <div className={`${flexBetween} gap-8`}>
                        <Link page="Sign In" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                      </div>
    
                    </div>) : (
                    <button className="rounded-full bg-yellow-500 p-2" onClick={() => setIsMenuToggled((prev) => !prev)}>
                      <Bars3Icon className="h-6 w-6 text-white"/>
                    </button>
                    )
                }
                
            </div>

          </div>
            
        </div>
        {!isBigScreen && isMenuToggled && (
          <div className="fixed right-0 z-40 bottom-0 h-full w-75 bg-red-200">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(prev => !prev)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>

            </div>

            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>

          </div>
        )}
    </nav>
  )
}

export default Navbar