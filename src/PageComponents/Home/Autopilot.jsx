import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Autopilot() {
  const categories = [
    "More focus on strategic work vs. manual work",
    "No more bottlenecks or delays",
    "Higher output per employee",
  ];
  return (
    <div className="w-full mt-[170px] py-[70px] bg-[#f1f1f1]">
      <div className="flex cont  justify-between   flex-row-reverse">
        <motion.img
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
          src="https://cdn.prod.website-files.com/6427c6c769d01c2f58037956/642958e569d01c5b241c5469_unsplash_UpsEF48wAgk.png"
          alt=""
        />

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.5, ease: "easeOut" },
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col py-[40px] justify-between items-start text-[#333]  "
        >
          <h3 className="text-[36px]  leading-[120%] tracking-[-2px] mb-[20px]">
            Put repetitive tasks on autopilot
          </h3>

          <div className="flex gap-[24px]  items-center ">
            <svg
              width={"97px"}
              height={"180px"}
              viewBox="0 0 97 180"
              fill="none"
              xmlns="http://www.w3.org/200/svg"
            >
              <path
                fillRule="evenodd"
                clip-clipRule="evenodd"
                fill="#C7C7C7"
                d="M54.8841 5.49528C43.433 4.63084 26.22 6.58817 1.27908 12.3701L0.149902 7.49925C25.2208 1.68722 43.0335 -0.413549 55.2605 0.509469C67.4596 1.43038 74.8783 5.45871 77.7148 12.6943C80.4048 19.556 78.4966 28.3464 74.9047 37.5832C71.2578 46.961 65.5595 57.5447 59.7506 68.3281L59.689 68.4423C53.8633 79.2569 47.9086 90.3108 43.5379 100.887C39.1368 111.537 36.4746 121.402 37.0182 129.814C37.5489 138.026 41.1301 144.956 49.6383 150.057C57.4709 154.752 69.5882 157.956 87.5546 158.835L76.2195 147.07C75.2615 146.075 75.291 144.493 76.2853 143.535C77.2796 142.577 78.8622 142.606 79.8202 143.6L95.4313 159.804C96.3892 160.798 96.3598 162.381 95.3655 163.339L79.1623 178.95C78.168 179.908 76.5853 179.878 75.6273 178.884C74.6694 177.89 74.6988 176.307 75.6931 175.349L87.6341 163.844C69.0943 162.97 55.944 159.666 47.0674 154.345C37.0859 148.361 32.6603 139.911 32.0287 130.136C31.4099 120.562 34.4299 109.835 38.917 98.9772C43.3857 88.1638 49.4413 76.9226 55.2189 66.1976L55.3486 65.9568C61.2016 55.0918 66.7327 44.8018 70.2446 35.771C73.8114 26.5991 74.9911 19.4459 73.0598 14.5192C71.275 9.96654 66.3632 6.36184 54.8841 5.49528Z"
              ></path>
            </svg>

            <h1 className="text-[#151515] max-w-[450px] transform-3d rotate-x-51 rotate-z-43  opacity-[0.6] text-[18px] leading-[140%]">
              You're not in the business of preparing documents, filling
              spreadsheets, copying data, or writing the same emails every day.
              <br />
              <br />
              You are in the business of delivering results to your clients.
            </h1>
          </div>

          <div className="flex gap-[10px] flex-col">
            {categories.map((e, i) => (
              <div
                key={i + 1}
                className="flex items-center gap-[8px] text-[#151515]  text-[18px] leading-[140%]"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/200/svg"
                >
                  <circle cx="8" cy={8} r={8} fill="#4434ff"></circle>
                  <line
                    x1={4.643773}
                    y1={8.68965}
                    x2={6.24373}
                    y2={10.2896}
                    stroke="white"
                    strokeWidth={1.06667}
                  ></line>
                  <line
                    x1={11.5773}
                    y1={5.71062}
                    x2={6.24399}
                    y2={11.044}
                    stroke="white"
                    strokeWidth={1.06667}
                  ></line>
                </svg>

                <span className="opacity-[0.6]">{e}</span>
              </div>
            ))}
          </div>

          <Link to={"/contact"}>
            <div className="py-[16px] flex items-center px-[24px] rounded-[90px] text-white bg-[#4434ff] transition-all duration-700 text-[18px] font-[500] hover:bg-[#1f13ac]">
              Book a Free Call{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(248,239,239,1)"
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

export default Autopilot;
