import React from "react";
import { motion } from "framer-motion";

function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  return (
    <div className="cont py-[70px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true, amount: 0.8 }}
        className="flex gap-[256px]"
      >
        <button className="w-[256px] mx-auto h-[55px] hover:bg-[#4434ff] hover:border-[#4434ff] hover:text-white  flex justify-center items-center rounded-[90px] border-[2px] border-[#000] text-[18px] font-[500]  transition-all duration-700">
          Learn More About Us →
        </button>

        <div className="flex text-[26px] font-[600] flex-col gap-[44px] max-w-[660px]">
          <span>
            Highly automated businesses are 6x more likely to see significant
            revenue growth
          </span>

          <p className="flex gap-2 items-center text-[18px]  leading-[140%] font-[400]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="rgba(14,14,14,1)"
            >
              <path d="M13.0001 1.99974L11.0002 1.9996L11.0002 18.1715L7.05044 14.2218L5.63623 15.636L12.0002 22L18.3642 15.636L16.9499 14.2218L13.0002 18.1716L13.0001 1.99974Z"></path>
            </svg>

            <span>Check the list of our Automated Processes</span>
          </p>
        </div>
      </motion.div>
      <motion.div
        className="mt-[100px] rounded-lg"
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <iframe
          src="https://player.vimeo.com/video/1042574564?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="100%"
          height="600px"
          frameborder="0"
          allow=" fullscreen"
          scrolling="no"
          title="ApexBart Solution"
        ></iframe>
      </motion.div>
    </div>
  );
}

export default About;
