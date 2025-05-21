import AnchorLink from "react-anchor-link-smooth-scroll";
import type { BenefitType } from "../types/BenefitType";
import { Page } from "../types/Page";
import { motion } from "framer-motion";

type Props = {
    key: string;
    benefit: BenefitType;
    setSelectedPage: (value: Page) => void; 
}

const Benefit = ({benefit, setSelectedPage}: Props) => {

  return (
    <motion.div className="mt-5 rounded-md border-2 border-gray-400 px-5 py-16 text-center" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{once:true, amount:0.5}}
    transition={{duration:0.5}}
    variants={{hidden: {opacity:0, scale:0.9}, visible: {opacity:1, scale:1}}} >
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-400 bg-red-200 p-4">
                {benefit.icon}
            </div>
        </div>

        <h4 className="font-bold">{benefit.title}</h4>
        <p className="my-3">{benefit.description}</p>
        
        <AnchorLink 
            className="text-sm font-bold text-red-500 underline hover:text-yellow-500" 
            onClick={() => setSelectedPage(Page.ContactUs)}
            href={`#${Page.ContactUs}`}>
            <p>Learn More</p>
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit