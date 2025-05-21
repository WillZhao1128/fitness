import { motion } from "framer-motion";
import { Page } from "../types/Page";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "../assets/ContactUsPageGraphic.png";
import EvolveText from "../assets/EvolveText.png";
import { useMediaQuery } from "../hooks/useMediaQuery";

type Props = {
    setSelectedPage: (value:Page) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
    const {register, trigger, formState:{errors}} = useForm();
    const isBigScreen = useMediaQuery("(min-width:1060px)");

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid){
            e.preventDefault();
        }
    }

    return (
    <section id="contactus" className="w-5/6 mx-auto pt-24 pb-32">
        <motion.div
            onViewportEnter={() => setSelectedPage(Page.ContactUs)}>

            <motion.div 
            initial="hidden" 
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden: {opacity:0 , y:-50},
                visible: {opacity: 1, y: 0},
            }}>
                <Header>
                    <span className="text-red-300">JOIN NOW</span> TO GET IN SHAPE
                </Header>

                <p className="my-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
                </p>
            </motion.div>

            <div className="mt-10 md:flex justify-between gap-8">
                <form 
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/hifibimo@mailgolem.com"
                method="POST"
                >
                    <input className="bg-amber-300 text-white rounded-lg placeholder:text-white w-full py-3 px-2 my-2"
                    type="text"
                    placeholder="NAME"
                    {...register("name", {required:true, maxLength:100})}>
                    </input>

                    {
                        errors.name && (
                            <p className="mt-1 text-red-500">
                                {errors.name.type=="required" && "Name is required"}
                                {errors.name.type=="maxLength" && "Name must be under 100 characters"}
                            </p>
                        )
                    }

                    <input className="bg-amber-300 text-white rounded-lg placeholder:text-white w-full py-3 px-2 my-2"
                    type="text"
                    placeholder="EMAIL"
                    {...register("email", {required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}>
                    </input>

                    {
                        errors.email && (
                            <p className="mt-1 text-red-500">
                                {errors.email.type=="required" && "Email is required"}
                                {errors.email.type=="pattern" && "Must enter a valid email"}
                            </p>
                        )
                    }

                    <textarea className="bg-amber-300 text-white rounded-lg placeholder:text-white w-full py-3 px-2 my-2"
                    rows={4}
                    cols={50}
                    placeholder="MESSAGE"
                    {...register("message", {required:true, maxLength:1000})}>
                    </textarea>

                    {
                        errors.message && (
                            <p className="mt-1 text-red-500">
                                {errors.message.type=="required" && "Message is required"}
                                {errors.message.type=="maxLength" && "Message must be under 1000 characters"}
                            </p>
                        )
                    }

                    <button
                    type="submit"
                    className="rounded-lg hover:text-white bg-yellow-400 px-20 py-3 mt-3 transition duration-500">
                        SUBMIT
                    </button>
                </form>

                <div className="relative z-10 mt-10 basis-2/5 md:mt-0">
                    {isBigScreen && (<img className="absolute -z-1 -bottom-20 -left-20 w-full" src={EvolveText} alt="evolve"/>)}
                    <img src={ContactUsPageGraphic} alt="contact-us" className="w-full"/>
                </div>
            </div>
                
        </motion.div>
    </section>);
};

export default ContactUs