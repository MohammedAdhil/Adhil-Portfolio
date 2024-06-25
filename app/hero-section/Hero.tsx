import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import profile from "../../public/Profile.png";
import { faGithub , faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[80vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover  bg-center py-0 sm:h-[90vh]  md:h-[100vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="https://drive.google.com/file/d/1tlOd9C6YN7j5LXSkLbJaqxifalI_sLIy/view"
            target="_blank"
            aria-label="View Resume"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block  md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              VIEW RESUME
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-4 text-[#e4ded7] sm:gap-12 md:gap-4 lg:gap-4">
          <Link
            href="https://github.com/MohammedAdhil"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
               <FontAwesomeIcon
                icon={faGithub}
                className=" w-[20px] rounded-full p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mohammed-adhil-p/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
               <FontAwesomeIcon
                icon={faLinkedin}
                className=" w-[20px] rounded-full p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}   `}
        >
          <AnimatedWords
            title="MOHAMMED ADHIL"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="absolute bottom-[-200px] mx-auto sm:bottom-[-200px] md:bottom-[-200px] lg:bottom-[-200px]"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              alt="Adhil's headshot"
              // data-blobity-tooltip="Fine boy"
              data-blobity-invert="false"
              className=" w-[150px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
          Frontend Developer with a Full-Stack Proficiency, adept in crafting seamless user experiences.
          </p>
        </motion.div>

        <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Focused on interfaces and experiences, Based in Dubai,
            UAE.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
