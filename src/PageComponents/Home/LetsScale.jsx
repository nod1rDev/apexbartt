import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function LetsScale() {
  return (
    <div
      className="w-full py-[70px]"
      style={{
        backgroundImage: `url("https://cdn.prod.website-files.com/6427c6c769d01c2f58037956/6427ce2ee23a16d26b372c45_bg-lines-axe.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "600px",
        width: "100%",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
        viewport={{ once: true, amount: 0.3 }}
        initial="hidden"
        whileInView="visible"
        className="cont bg-[#4434ff] text-white py-[80px] rounded-[28px] flex justify-center items-center"
      >
        <div className="flex flex-col gap-[24px] items-center">
          <h1 className="text-[36px] tracking-[-2px] leading-[120%]">
            Lets scale together
          </h1>
          <p className="text-[18px] leading-[140%]  opacity-[0.6] text-center">
            We've helped many businesses save 50,000+ hours and $100K+ with
            automation. <br />
            Let us do the same for your company.
          </p>

          <Link to={"/contact"}>
            <div className="py-[16px] flex items-center px-[24px] rounded-[90px] bg-white text-[#4434ff] transition-all duration-700 text-[18px] font-[500] hover:bg-[#f7eaf7]">
              Book a Free Call{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#4434ff"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default LetsScale;
