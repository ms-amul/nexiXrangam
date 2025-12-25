"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Our AI-Powered{" "}
        <span className="text-purple">Recruiting Solutions</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title="Learn More" href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                {/* Background */}
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/backgrounds/bg.png" alt="bgimg" className="w-full h-full object-cover opacity-50" />
                </div>

                {/* 3D Tilted Image Container */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className="relative w-[85%] h-[85%]"
                    style={{
                      transform: "rotateX(10deg) rotateY(-10deg) rotateZ(2deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Glow Effect */}
                    <div
                      className="absolute -inset-4 rounded-2xl opacity-60 blur-xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(59, 130, 246, 0.3))",
                      }}
                    />

                    {/* Image with Frame */}
                    <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black/50">
                      {/* Browser Top Bar */}
                      <div className="flex items-center gap-2 px-4 py-2 bg-black/80 border-b border-white/10">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="h-5 rounded-md bg-white/10 max-w-[60%]" />
                        </div>
                      </div>

                      {/* Screenshot */}
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    {/* Reflection/Shine Effect */}
                    <div
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Learn More
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
