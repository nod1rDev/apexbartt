import React, { useState } from "react";
import { motion } from "framer-motion";
function Work() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const works = [
    {
      title: "Driven by strategy",
      p1: "We may work with robots all day, but we’re very human. We’ll ",
      blueP: "tailor our strategy",
      p2: " around your industry, needs, and goals. Copy-paste? No thanks.",
    },
    {
      title: "Part of your team",
      p1: "We’re all in. Add us to your slack channels, email us with concerns, and have your vendors reach out directly. We'll be your  ",
    },
    {
      title: "Innovators to the core",
      p1: "We’ll solve your bottlenecks—whether we need to go over, under, or through.  ",
      blueP: "We combine expertise + creativity",
      p2: "  to work out your knots.",
    },
  ];
  return (
    <div className="cont flex gap-[70px] flex-col py-[70px]">
      <motion.h2
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
        className="text-center flex max-w-[500px] mx-auto justify-center items-center flex-col text-[36px]  tracking-[-2px]  leading-[120%] gap-[24px]"
      >
        Take a look into how we work
        <span className="text-[18px] opacity-[0.6] tracking-[0] leading-[24px]">
          Automate your processes to increase productivity and regain control of
          your time.
        </span>
      </motion.h2>

      <div className="flex flex-col gap-[40px] pb-[40px] border-b border-b-[#1515154d]">
        {works.map((e, i) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 + (i + 1), ease: "easeOut" },
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
            initial="hidden"
            whileInView="visible"
            key={i + 1}
            className="pt-[40px] flex-col flex gap-[20px] border-t border-t-[#1515154d] w-full"
          >
            <div className="w-full flex justify-between items-center">
              <h1 className="flex gap-[6px] text-[32px] leading-[110%] tracking-[-0.4px] ">
                <span className="text-[18px] opacity-[0.6] ">0{i + 1}</span>{" "}
                {e.title}
              </h1>

              <button
                onClick={() => {
                  setOpen(!open);
                  setActive(i + 1);
                }}
              >
                <img
                  className={`w-[48px] h-[48px] transition-all duration-700 ${
                    open && i + 1 === active ? "openChangeIcon" : ""
                  }`}
                  src="https://cdn.prod.website-files.com/6427c6c769d01c2f58037956/64296ea326a472864cba72da_arrow-down.png"
                  alt=""
                />
              </button>
            </div>

            <div
              className={` ${
                open && i + 1 === active
                  ? "block transition-all duration-700"
                  : "hidden transition-all duration-700"
              } transition-all duration-700 text-[18px] w-[70%] leading-[140%] tracking-[-1px] text-[#15151599] opacity-[0.8]`}
            >
              {e.p1}
              {e.blueP && (
                <>
                  <span className="text-[#4434ff]">{e.blueP}</span> {e.p2}
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Work;
