import { Page } from "../types/Page";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import type { BenefitType } from "../types/BenefitType";
import Benefit from "../components/Benefit";
import BenefitsPageGraphic from "../assets/BenefitsPageGraphic.png";
import AbstractWaves from "../assets/AbstractWaves.png";
import ActionButton from "../components/ActionButton";
import Sparkles from "../assets/Sparkles.png";

type Props = {
    setSelectedPage: (value:Page) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
    const benefits:BenefitType[] = [
        {
            icon: <HomeModernIcon className="h-6 w-6"/>,
            title: "State of the Art Facilities",
            description: "description description description description description description description description description",
        },
        {
            icon: <UserGroupIcon className="h-6 w-6"/>,
            title: "100's of Diverse Classes",
            description: "description description description description description description description description description",
        },
        {
            icon: <AcademicCapIcon className="h-6 w-6"/>,
            title: "Expert and Pro Trainers",
            description: "description description description description description description description description description",
        }
    ]

    return (
    <section id="benefits" className="mx-auto w-5/6 py-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(Page.Benefits)}>
            <motion.div className="md:my-5 md:w-3/5"
            initial="hidden" 
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden: {opacity:0 , x: -50},
                visible: {opacity: 1, x: 0},
            }}>
                <Header>
                    More than just a Gym.
                </Header>
                <p className="my-5 text-sm">
                    We provide world class Fitniess equimenet and trainers and classes.
                </p>
            </motion.div>

            <motion.div className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden" 
                whileInView="visible" 
                viewport={{once:true, amount:0.5}}
                transition={{ duration:0.5}}
                variants={{hidden: {}, visible: {transition:{staggerChildren:0.2}}}}>
                {
                    benefits.map((benefit) => <Benefit key={benefit.title} benefit={benefit} setSelectedPage={setSelectedPage} ></Benefit>)
                }
            </motion.div>

            <div className="md:flex md:mt-20 mt-10 justify-center gap-10">
                <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic"/>

                <div className="mt-10 z-10">
                    <motion.div className="relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{hidden:{opacity:0, x:50}, visible: {opacity:1, x:0}}}>
                        <img className="absolute -z-1 -top-20 -left-20" src={AbstractWaves} alt="abstract-waves"/>
                        <Header>
                            MILLIONS OF HAPPY MEMBERS GETTING <span className="text-red-300">FIT</span>
                        </Header>
                    </motion.div>
                    <motion.div className="relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.5, delay:0.3}}
                    variants={{hidden:{opacity:0, x:50}, visible: {opacity:1, x:0}}}>
                        <p className="my-5">
                            Nascetur aenean massa auctor tincidunt. 
                            Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. 
                            Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. 
                            Consequat sed facilisis dui sit egestas ultrices tellus. 
                            Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio.
                        </p>

                        <p className="mb-5">
                            Fringilla a sed at suspendisse ut enim volutpat. 
                            Rhoncus vel est tellus quam porttitor. 
                            Mauris velit euismod elementum arcu neque facilisi. 
                            Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
                        </p>
                    </motion.div>

                    <div className="relative mt-20 z-10">
                        <img className="absolute -bottom-20 right-40 -z-1" alt="sparkles" src={Sparkles} />
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        
                    </div>

                </div>
            </div>
        </motion.div>
    </section>);
};

export default Benefits