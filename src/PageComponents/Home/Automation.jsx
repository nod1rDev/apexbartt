import React from "react";
import { motion } from "framer-motion";
function Automation() {
  const automations = [
    " Payment & Contracts",
    "Client Onboarding",
    "Sales Pipeline",
    "Proposal Creation",
    "Employee Onboarding",
    "Project Management",
    "CRM",
    "Client Reporting",
    "Client Communications",
    "Operations",
    "And so much more!",
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true, amount: 0.3 }}
      className="cont pt-[70px] flex flex-wrap w-full justify-center  items-center gap-x-[10px] gap-y-[20px]"
    >
      <h1 className="text-[32px] leading-[120%] font-[700] ">
        Our Automation:
      </h1>
      {automations.map((e, i) => (
        <div
          key={i + 1}
          className="flex gap-[10px] items-center font-[500] text-[#333]"
        >
          <span className="text-[60px] opacity-[0.7]">/</span>
          <span className="text-[34px] opacity-[1] font-[500] relative">
            {e}
            <sup className=" absolute font-[400] text-[20px] opacity-[0.5] top-[1px] right-[-15px]">
              0{i + 1}
            </sup>
          </span>
        </div>
      ))}
    </motion.div>
  );
}

export default Automation;
