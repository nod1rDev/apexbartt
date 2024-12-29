import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Info() {
  return (
    <div
      className="w-full pt-[170px]  "
      style={{
        backgroundImage: `url("https://cdn.prod.website-files.com/6427c6c769d01c2f58037956/6429745b66cfe6b77f861dbe_Line%206.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="flex justify-between gap-[32px] cont">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.5, ease: "easeOut" },
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
          initial="hidden"
          whileInView="visible"
          className="py-[52px] px-[32px] rounded-[28px] max-h-[458px] bg-[#4434ff] flex flex-col justify-center items-start max-w-[40%]"
        >
          <h1 className="text-[44px] text-[#f1f1f1] max-w-[90%] tracking-[-2px] pb-[20px] leading-[120%]">
            Ready to systematize and automate your business?
          </h1>

          <p className="text-[18px]  leading-[140%] opacity-[0.6] mt-[16px]  text-[#f1f1f1]">
            Manual processes are time-consuming and tedious. Automation allows
            your employees to focus on more engaging tasks, which increases
            their satisfaction.
          </p>

          <Link to={"/contact"}>
            <div className="py-[16px] mt-[30px] flex items-center px-[24px] rounded-[90px] bg-white text-[#4434ff] transition-all duration-700 text-[18px] font-[500] hover:bg-[#f7eaf7]">
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
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.5, ease: "easeOut" },
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col text-[#151515] items-start rounded-[28px] py-[52px] px-[32px] max-w-[58%] max-h-[458px] bg-[#f1f1f1]"
        >
          <p className=" opacity-[0.6] text-[18px] leading-[140%] mb-[16px] ">
            Not sure if your business is ready to automate yet?
          </p>

          <h1 className="text-[44px] leading-[140%]  tracking-[-2px] pb-[20px]">
            Check our Automation Business Assessment below
          </h1>

          <Link to={"/contact"}>
            <div className="py-[16px] mt-[30px] flex items-center px-[24px] rounded-[90px] bg-white text-[#4434ff] transition-all duration-700 text-[18px] font-[500] hover:bg-[#f7eaf7]">
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
        </motion.div>
      </div>
    </div>
  );
}

export default Info;
