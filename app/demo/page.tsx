"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Spotlight } from "@/components/ui/Spotlight";
import { navItems } from "@/data";
import { FaCalendarAlt, FaCheck, FaArrowRight } from "react-icons/fa";

const DemoPage = () => {
    const [formState, setFormState] = useState({
        email: "",
        company: "",
        name: "",
    });

    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
            <FloatingNav navItems={navItems} />

            {/* Spotlights */}
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
       absolute top-0 left-0 flex items-center justify-center pointer-events-none"
            >
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                            <span className="text-xs font-medium text-purple-300 tracking-wide uppercase">
                                Live Interactive Demo
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                            Experience the
                            <span className="block text-purple-400">Future of Hiring</span>
                        </h1>

                        <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-lg">
                            See how our intelligent agents autonomously source, screen, and schedule candidates—saving you countless hours and reducing generic spam.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Instant Candidate Matching",
                                "Autonomous Outreach & Follow-ups",
                                "24/7 AI Phone Screening",
                                "Seamless ATS Integration"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-center gap-3 text-white/80"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                                        <FaCheck className="text-emerald-400 text-xs" />
                                    </div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-600 overflow-hidden">
                                        <img src={`/social/avatar-${i}.png`} alt="" className="w-full h-full object-cover opacity-80" onError={(e) => e.currentTarget.style.display = 'none'} />
                                        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm text-white/60">
                                Trusted by <span className="text-white font-semibold">500+</span> companies
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Form Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 animate-pulse" />

                        <div className="relative p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Schedule a Demo</h3>
                                <p className="text-white/50 text-sm">
                                    Get a personalized walkthrough of the TalentArbor platform.
                                </p>
                            </div>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2">Work Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                        placeholder="name@company.com"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-white/70 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                            placeholder="Jane"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white/70 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                        placeholder="Acme Inc."
                                    />
                                </div>

                                <button className="w-full group py-4 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold shadow-lg shadow-purple-500/25 transition-all flex items-center justify-center gap-2">
                                    <span>Book Demo</span>
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-xs text-center text-white/30 mt-4">
                                    No credit card required. SOC2 Type II Certified.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default DemoPage;
