import AnchorLink from "react-anchor-link-smooth-scroll";
import { Page } from "../../shared/Page";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import ActionButton from "../../shared/ActionButton";

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
            <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                <div className="z-10 mt-32 md:basis-3/5">
                    <div className="md:-mt-20">
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:content-evolvetext">
                                <img alt="home-page-text" src={HomePageText} />
                            </div>
                        </div>
                        <p>
                            Unrivaled Gym. UnParalleled Training Experience.
                        </p>
                    </div>

                    <div>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink 
                            className="text-sm font-bold text-red-500 underline hover:text-yellow-500" 
                            onClick={() => setSelectedPage(Page.ContactUs)}
                            href={`#${Page.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                    </div>
                </div>

                <div>
                    <img alt="home-page-graphic" src={HomePageGraphic} />
                </div>
            </div>

            {isBigScreen && (
                <div>
                    <div>
                        <div>
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