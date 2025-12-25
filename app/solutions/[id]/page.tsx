"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheck } from "react-icons/fa6";
import { projects } from "@/data";
import { Spotlight } from "@/components/ui/Spotlight";
import MagicButton from "@/components/MagicButton";

export default function SolutionPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = Number(params.id);
  
  const project = projects.find((p) => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Solution Not Found</h1>
          <button 
            onClick={() => router.push("/")}
            className="text-purple-400 hover:text-purple-300"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  // Extended features for each solution
  const features = [
    "AI-powered automation",
    "Real-time analytics dashboard",
    "Seamless ATS integration",
    "24/7 autonomous operation",
    "Enterprise-grade security",
    "Custom workflow configuration",
  ];

  return (
    <main className="relative bg-black-100 min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      </div>
      
      <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black-100/[0.2] absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push("/#projects")}
          className="flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Solutions</span>
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
              <span className="text-sm font-medium text-purple-400">AI Agent</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              {project.des}
            </p>

            {/* Extended Description */}
            <p className="text-white/50 leading-relaxed mb-10">
              Leverage the power of artificial intelligence to streamline your recruitment process. 
              Our {project.title} works autonomously around the clock, ensuring you never miss 
              an opportunity to connect with top talent. Built with enterprise-grade security 
              and seamless integration capabilities.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <FaCheck className="text-purple-400 text-xs" />
                  </div>
                  <span className="text-white/70">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <MagicButton
                title="Request Demo"
                icon={<FaArrowLeft className="rotate-180" />}
                position="right"
              />
              <button className="px-6 py-3 rounded-lg border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all font-medium">
                Contact Sales
              </button>
            </div>
          </motion.div>

          {/* Right - Image & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-white/10 p-8 mb-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <img
                src={project.img}
                alt={project.title}
                className="relative z-10 w-full h-auto rounded-2xl"
              />
            </div>

            {/* Tech Stack Card */}
            <div className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500/30 transition-colors"
                  >
                    <img src={icon} alt="tech" className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
