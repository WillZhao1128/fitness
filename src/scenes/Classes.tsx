import { motion } from "framer-motion";
import { Page } from "../types/Page";
import Header from "../components/Header";
import { useMediaQuery } from "../hooks/useMediaQuery";
import type { FitnessClassType } from "../types/FitnessClassType";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import FitnessClass from "../components/FitnessClass";

type Props = {
    setSelectedPage: (value:Page) => void;
}

const Classes = ({setSelectedPage}: Props) => {
    const isBigScreen = useMediaQuery("(min-width:1060px)");
    const classes: FitnessClassType[] = [
        {
            image: image1,
            name: "Weight Training Classes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image: image2,
            name: "Yoga Classes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image: image3,
            name: "Ab Core Classes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image: image4,
            name: "Adventure Classes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image: image5,
            name: "Fitness Classes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image: image6,
            name: "Training Classes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ];

    return (
    <section id="ourclasses" className="w-full py-40 bg-red-200">
        <motion.div
            onViewportEnter={() => setSelectedPage(Page.OurClasses)}>

            <motion.div 
            className="mx-auto w-5/6"
            initial="hidden" 
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden: {opacity:0 , x: -50},
                visible: {opacity: 1, x: 0},
            }}>
                <Header>
                    OUR CLASSES
                </Header>

                <p className="mt-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
                </p>

            </motion.div>

            <div className="h-96 w-full overflow-y-hidden overflow-x-scroll mt-10">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map( (item:FitnessClassType, i) => (<FitnessClass key={`${i}-${item.name}`} fitnessClass={item}/>))}
                </ul>
            </div>
                
        </motion.div>
    </section>);
};

export default Classes