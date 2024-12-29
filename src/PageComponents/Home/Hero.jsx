import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  const tituls = [
    "https://cdn.prod.website-files.com/6427c6c769d01c2f58037956/66e085795e224b8166c2a6e2_top_clutch.co_robotics_process_automation_united_states_2024-p-500.png",
    "https://cdn.prod.website-files.com/6427c6c769d01c2f58037956/66e085834b518277f17d9a19_top_clutch.co_robotics_process_automation_2024_award-p-500.png",
    "https://cdn.prod.website-files.com/6427c6c769d01c2f58037956/66e085834b518277f17d9a19_top_clutch.co_robotics_process_automation_2024_award-p-500.png",
    "https://cdn.prod.website-files.com/6427c6c769d01c2f58037956/66e085834b518277f17d9a19_top_clutch.co_robotics_process_automation_2024_award-p-500.png",
  ];
  return (
    <section id="home_hero" className="">
      <div className="cont pt-[45px] flex justify-center items-center ">
        <h1 className="inline text-[70px] text-center leading-[120%] tracking-[-5px] whitespace-break-spaces">
          We automate your workflows <br />{" "}
          <span className="text-center"> for highly profitable scale,</span>{" "}
          <br />{" "}
          <span className="opacity-[0.6] italic font-[500]">
            custom and done-for-you.
          </span>
        </h1>
      </div>

      <div className="relative pt-[65px]">
        <div className="bg-[#1515153d] w-full h-[3px]"></div>

        {/* Circle Text */}
        <Link to={"/"}>
          <div className=" absolute top-[-45px] left-[10%]">
            <div className="relative w-[150px] h-[150px] bg-[#4434ff] duration-750 transition-all hover:bg-[#2e1cf0]  rounded-full">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="44"
                    height="44"
                    fill="rgba(255,250,250,1)"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 animate-spin-slow font-[700] flex items-center justify-center">
                {"ApexBart Solution ".split("").map((char, index) => (
                  <span
                    key={index}
                    className="absolute text-white text-[16px]"
                    style={{
                      transform: `rotate(${
                        index * 20
                      }deg) translate(55px) rotate(-${index * 20}deg)`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
        <div className=" absolute max-w-[38%] top-[65px] right-[10%] flex flex-col gap-[24px] text-[18px] leading-[140%]">
          <div className="w-[60%] bg-[#151515] h-[3px] rounded-[20px]"></div>

          <span className=" text-[#151515] opacity-[0.6]">
            We integrate your apps and automate your processes to end busywork
            and skyrocket productivity across your entire company.
          </span>
        </div>

        <div className="flex items-center cont pt-[110px] pl-[270px] gap-[40px]">
          {tituls.map((e) => (
            <img className="max-w-[107px] max-h-[115px]" src={e} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
