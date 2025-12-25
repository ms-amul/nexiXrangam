import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background Grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-7xl w-full px-6 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full animate-pulse"
              style={{
                background: "rgba(139, 92, 246, 0.2)",
                border: "1px solid rgba(139, 92, 246, 0.5)",
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#a78bfa" }}
              />
              <span style={{ color: "#c4b5fd", fontWeight: 600, fontSize: "14px", letterSpacing: "0.05em" }}>
                NEXI HUB
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              TalentArbor
              <span className="text-purple-400">.AI</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">
              AI-powered talent acquisition platform. Intelligent agents that source, schedule, match, and engage candidates—accelerating your hiring with precision.
            </p>

            <a href="#projects">
              <MagicButton
                title="Explore Solutions"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

          {/* Right Image - Large */}
          <div className="hidden lg:block absolute -top-[78%] left-[35%] w-[1030px] pointer-events-none hero-img_res">
            <img
              src="/home/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
