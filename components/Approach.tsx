"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { approachPhases } from "@/data";

const Approach = () => {
  return (
    <section className="w-full py-20" id="approach">
      <h1 className="heading">
        Our <span className="text-purple">Approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {approachPhases.map((phase, index) => (
          <Card
            key={phase.id}
            title={phase.title}
            subtitle={phase.subtitle}
            phase={phase.phase}
            icon={<AceternityIcon order={`Phase ${phase.id}`} />}
            des={phase.description}
          >
            <CanvasRevealEffect
              animationSpeed={index === 0 ? 5.1 : 3}
              containerClassName={`${index === 0 ? "bg-emerald-900" : index === 1 ? "bg-pink-900" : "bg-sky-600"
                } rounded-3xl overflow-hidden`}
              colors={
                index === 1
                  ? [[255, 166, 158], [221, 255, 247]]
                  : index === 2
                    ? [[125, 211, 252]]
                    : undefined
              }
              dotSize={index === 1 ? 2 : undefined}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  subtitle,
  phase,
  icon,
  children,
  des,
}: {
  title: string;
  subtitle: string;
  phase: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        {/* Default State - Icon */}
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
          group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>

        {/* Hover State - Premium Floating Card */}
        <motion.div
          className="opacity-0 group-hover/canvas-card:opacity-100 transition-all duration-300
            group-hover/canvas-card:-translate-y-2"
        >
          {/* Phase Badge */}
          <div className="flex justify-center mb-4">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold 
              bg-white/10 border border-white/20 text-white/80 backdrop-blur-sm">
              PHASE {phase}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h2 className="dark:text-white text-center text-2xl md:text-3xl font-bold mb-1">
            {title}
          </h2>
          <p className="text-center text-purple-400 text-sm font-medium mb-4">
            {subtitle}
          </p>

          {/* Floating Content Card */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <p className="text-sm text-left leading-relaxed" style={{ color: "#E4ECFF" }}>
              {des}
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center mt-4 gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400/60" />
            <span className="w-2 h-2 rounded-full bg-purple-400/40" />
            <span className="w-2 h-2 rounded-full bg-purple-400/20" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
          bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
          justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
