import React from "react";
import { motion } from "framer-motion";
function ClientSay() {
  const clients = [
    {
      name: "Adeline M.",
      p: `"Our company was struggling to keep up with the demands of our growing business until we found this automation agency. They helped us streamline our workflow and cut down our workload significantly. We are now able to focus on what matters most to our business, and it has resulted in a noticeable increase in productivity."`,
    },
    {
      name: "Trevor D.",
      p: `"I was skeptical at first about using an automation agency, but I am so glad I did. They helped me automate all of my repetitive tasks, which has given me back so much time in my day. I can now focus on the things that I'm passionate about in my business without feeling overwhelmed."`,
    },
    {
      name: "Meredith L.",
      p: `"If you're looking for a way to scale your business without sacrificing your personal life, then this automation agency is the way to go. They helped me automate everything from social media management to customer support, which has allowed me to take my business to the next level without burning out."`,
    },
    {
      name: "Michael H.",
      p: `"This automation agency has been a game-changer for my business. They helped me automate my entire workflow, which has resulted in a significant increase in productivity. I can't imagine running my business without their help."`,
    },
    {
      name: "Alice K.",
      p: `"If you're tired of feeling like you're always behind on your work, then you need to work with this automation agency. They helped me automate all of my repetitive tasks, which has given me more time to focus on the things that matter most in my business. I'm so grateful for their help!"`,
    },
    {
      name: "Corey W.",
      p: `"I can't recommend this automation agency enough. They have helped me automate my entire workflow, which has saved me so much time and energy. I no longer feel like I'm drowning in my work, and I'm able to focus on growing my business."`,
    },
  ];
  return (
    <div className="cont flex flex-col  gap-[100px] py-[70px]">
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
        Look at what our clients say:
        <span className="text-[18px] opacity-[0.6] tracking-[0] leading-[24px]">
          Reviews from our automation clients:
        </span>
      </motion.h2>

      <div className=" flex flex-wrap justify-center items-center gap-x-[20px] gap-y-[48px]">
        {clients.map((e, i) => (
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
            key={i + 1}
            className=" relative h-[339px] bg-[#f1f1f1] max-w-[390px] rounded-[20px] p-[32px]"
          >
            <div className="flex flex-col justify-between h-full  relative">
              <p className=" opacity-[0.6] text-[18px] leading-[140%] ">
                {e.p}
              </p>

              <h1 className="flex gap-2 items-center text-[18px] leading-[120%] font-[500] tracking-[0.5px]">
                {" "}
                {e.name}{" "}
                <span className="text-[22px] text-[#4434ff] leading-[140%] font-[400]">
                  ★★★★★
                </span>
              </h1>
            </div>

            <div className=" top-[-40px] absolute">
              <svg
                width="72px"
                height="58px"
                viewBox="0 0 84 68"
                fill="none"
                xmlns="http://www.w3.org/200/svg"
              >
                <path
                  fill="rgb(21, 21, 21)"
                  d="M18.6934 34.9043C18.6934 36.4395 20.7829 38.2305 24.9619 40.2773C26.4971 40.9596 27.9043 42.3669 29.1836 44.499C30.5482 46.6312 31.2305 49.403 31.2305 52.8145C31.2305 56.2259 29.8659 59.4668 27.1367 62.5371C24.4928 65.5221 21.124 67.0146 17.0303 67.0146C12.9365 67.0146 9.69564 66.2897 7.30762 64.8398C5.00488 63.3047 3.38444 61.3431 2.44629 58.9551C0.825846 54.8613 0.015625 50.2132 0.015625 45.0107C0.015625 31.4502 8.28841 16.6956 24.834 0.74707L35.3242 9.95801C24.237 20.5335 18.6934 28.849 18.6934 34.9043ZM66.667 34.9043C66.667 36.4395 68.7565 38.2305 72.9355 40.2773C74.4707 40.9596 75.8779 42.3669 77.1572 44.499C78.5218 46.6312 79.2041 49.403 79.2041 52.8145C79.2041 56.2259 77.8395 59.4668 75.1104 62.5371C72.4665 65.5221 69.0977 67.0146 65.0039 67.0146C60.9102 67.0146 57.6693 66.2897 55.2812 64.8398C52.9785 63.3047 51.3581 61.3431 50.4199 58.9551C48.7995 54.8613 47.9893 50.2132 47.9893 45.0107C47.9893 31.4502 56.262 16.6956 72.8076 0.74707L83.2979 9.95801C72.2106 20.5335 66.667 28.849 66.667 34.9043Z"
                ></path>
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ClientSay;
