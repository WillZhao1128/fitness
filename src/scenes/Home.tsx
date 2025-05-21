import AnchorLink from "react-anchor-link-smooth-scroll";
import { Page } from "../types/Page";
import { useMediaQuery } from "../hooks/useMediaQuery";
import HomePageText from "@/assets/HomePageText.png";
import EvolveText from "../assets/EvolveText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import ActionButton from "../components/ActionButton";
import {motion} from "framer-motion";

type Props = {
    setSelectedPage: (value:Page) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isBigScreen = useMediaQuery("(min-width:1060px)");


    return (
        <section
        id="home"
        className="gap-16 bg-gray-50 py-10 md:h-full md:pb-0"
        >
            <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage(Page.Home)}>
                <div className="z-10 mt-32 md:basis-3/5">
                    <motion.div className="md:-mt-20" 
                    initial="hidden" 
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden: {opacity:0 , x: -50},
                        visible: {opacity: 1, x: 0},
                    }}>
                        <div className="relative">
                            {isBigScreen &&(<img className="absolute -top-10 -left-20 -z-1" alt="evolve-text" src={EvolveText} />)}
                            
                            <img alt="home-page-text" src={HomePageText} />
                        </div>
                        <p className="mt-8 text-sm font-sans text-red-950">
                            Unrivaled Gym. UnParalleled Training Experience.
                        </p>
                    </motion.div>

                    <motion.div className="mt-8 flex items-center gap-8 md:justify-start"
                    initial="hidden" 
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration:0.5, delay:0.3}}
                    variants={{
                        hidden: {opacity:0 , x: -50},
                        visible: {opacity: 1, x: 0},
                    }}>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink 
                            className="text-sm font-bold text-red-500 underline hover:text-yellow-500" 
                            onClick={() => setSelectedPage(Page.ContactUs)}
                            href={`#${Page.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>

                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
                    <img alt="home-page-graphic" src={HomePageGraphic} />
                </div>
            </motion.div>

            {isBigScreen && (
                <div className="h-36 w-full bg-red-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex items-center justify-between gap-8">
                            <img alt = "redbull" src={SponsorRedBull}/>
                            <img alt = "forbes" src={SponsorForbes}/>
                            <img alt = "fortune" src={SponsorFortune}/>
                        </div>
                    </div>

                </div>

            )}
        </section>
    )
}

export default Home