import useThemeSwitcher from "../../customhooks/useThemeSwitcher";
import { FiArrowRightCircle } from "react-icons/fi";
import developerLight from "../../img/lightdev.png";
import developerDark from "../../img/darkdev.png";
import { motion } from "framer-motion";

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
    >
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
      >
        <img
          src={activeTheme === "dark" ? developerLight : developerDark}
          alt="Developer"
        />
      </motion.div>
      <div className="w-full md:w-1/3 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
        >
          Hi, I am Arun
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          A Entry-level Frontend/UI Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center  sm:justify-start"
        >
          <a
            download="resum_e.pdf"
            href="/files/resum_e.pdf"
            aria-label="Download Resume"
            className="font-general-medium group flex  justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-cyan-300 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-cyan-50 focus:ring-1 focus:ring-cyan-900 hover:bg-cyan-700 text-gray-500 hover:text-white duration-500"
          >
            <FiArrowRightCircle className="mr-2 hidden transition-transform ease-linear group-hover:block group-hover:animate-bounce sm:mr-3 w-5 sn:w-6 sm:h-6 duration-200"></FiArrowRightCircle>
            <span className="text-sm sm:text-lg font-general-medium duration-100">
              Download CV
            </span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AppBanner;
