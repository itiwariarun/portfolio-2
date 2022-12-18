import AboutMeBio from "../components/about/AboutMeBio";
import { Helmet, HelmetData } from "react-helmet-async";
import { AboutMeProvider } from "../context/AboutMeContext";
import { motion } from "framer-motion";

const helmetData = new HelmetData({});
const About = () => {
  return (
    <>
      <Helmet helmetData={helmetData}>
        <title>FrontendDev | About Me</title>
      </Helmet>
      <AboutMeProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          exit={{ opacity: 0 }}
          className="container  mx-auto"
        >
          <AboutMeBio />
        </motion.div>

        {/** Counter without paddings */}
      </AboutMeProvider>
    </>
  );
};

export default About;
