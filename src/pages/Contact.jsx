import { motion } from "framer-motion";
import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";
import { Helmet, HelmetData } from "react-helmet-async";

const helmetData = new HelmetData({});

const Contact = () => {
  return (
    <>
      <Helmet helmetData={helmetData}>
        <title>FrontendDev | Contact Me</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="container mx-auto flex justify-center flex-col py-5 lg:py-10 lg:mt-10"
      >
        <ContactForm />
        <ContactDetails />
      </motion.div>
    </>
  );
};

export default Contact;
