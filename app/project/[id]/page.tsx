"use client";

import MagicButton from "@/components/MagicButton";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Spotlight } from "@/components/ui/Spotlight";
import { StickyScroll } from "@/components/ui/StickyScrollReveal";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { navItems, projects } from "@/data";
import { VideoCard3D } from "@/components/ui/VideoCard3D";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaRocket } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState<any>(null);

    useEffect(() => {
        if (id) {
            const proj = projects.find((p) => p.id === Number(id));
            setProject(proj);
        }
    }, [id]);

    if (!project) return <div className="h-screen w-full bg-black-100 flex items-center justify-center text-white">Loading...</div>;

    // Prepare content for Sticky Scroll
    const stickyContent = (project.features || []).map((feature: any, idx: number) => ({
        title: feature.title,
        description: feature.desc,
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <div className="text-4xl font-bold opacity-30">{idx + 1}</div>
            </div>
        ),
    }));

    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto min-h-screen">
            <FloatingNav navItems={navItems} />

            {/* Premium Spotlights for Depth */}
            <div className="pointer-events-none">
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            {/* Background Grid */}
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center pointer-events-none">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            {/* Main Content with Tracing Beam */}
            <TracingBeam className="px-6 pt-36 pb-20">

                {/* Back Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-5 transition-colors pl-4">
                    <FaArrowLeft /> Back to Projects
                </Link>

                {/* Hero Section - Left Aligned */}
                <div className="pl-4 mb-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            {project.title}
                        </h1>
                    </motion.div>

                    <div className="mb-5 max-w-2xl">
                        <TextGenerateEffect words={project.des} className="text-xl md:text-2xl text-purple font-light" />
                    </div>

                    <div className="flex flex-wrap gap-4 mb-5">
                        {project.iconLists.map((icon: string, idx: number) => (
                            <div key={idx} className="w-12 h-12 rounded-full border border-white/[0.1] bg-black-100/50 backdrop-blur-sm flex justify-center items-center hover:scale-110 transition-transform">
                                <img src={icon} alt="tech" className="p-2.5 w-full h-full object-contain" />
                            </div>
                        ))}
                    </div>

                    <Link href="/demo">
                        <MagicButton
                            title="See It In Action"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </Link>
                </div>

                {/* Project Showcase Image */}
                <div className="relative mb-32 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                    {/* Glossy Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-10" />
                    <img src={project.img} alt={project.title} className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>

                {/* The Narrative - Deep Dive */}
                <div className="pl-4 max-w-3xl mb-32">
                    <div className="mb-5">
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-purple">01.</span> The Challenge
                        </h2>
                        <p className="text-white/70 text-xl leading-relaxed font-light">
                            {project.challenges || "Organizations were struggling with inefficient processes that slowed down hiring and frustrated candidates."}
                        </p>
                    </div>

                    <div className="mb-5">
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-purple">02.</span> Our Solution
                        </h2>
                        <p className="text-white/70 text-xl leading-relaxed font-light mb-6">
                            {project.solution || "We implemented a smart agentic workflow that autonomous handles the busywork."}
                        </p>
                        <p className="text-white/60 text-lg leading-relaxed font-light">
                            {project.longDes}
                        </p>
                    </div>
                </div>

                {/* Key Capabilities - Sticky Scroll */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold text-white mb-5 pl-4 flex items-center gap-3">
                        <span className="text-purple">03.</span> Intelligence Under the Hood
                    </h2>
                    <div className="w-full">
                        <StickyScroll content={stickyContent} />
                    </div>
                </div>



                {/* Video Showcase Section */}
                <div className="mb-40 pl-4 pr-4">
                    <div className="mb-5">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            See It In <span className="text-purple">Action</span>
                        </h2>
                        <p className="text-white/60 text-lg">
                            Watch how the {project.title} transforms the workflow in real-time.
                        </p>
                    </div>

                    <div className="h-[50vh] md:h-[70vh] w-full flex items-center justify-center relative">
                        <VideoCard3D
                            containerClassName="w-[90vw] md:w-[70vw] lg:w-[60vw] aspect-video"
                            className="w-full h-full"
                        >
                            {project.videoUrl && (
                                <iframe
                                    className="w-full h-full object-cover"
                                    src={project.videoUrl}
                                    title="Product Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )}
                        </VideoCard3D>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="pl-4">
                    <div className="p-10 rounded-3xl bg-gradient-to-br from-[#04071D] to-[#0C0E23] border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 opacity-20 transform translate-x-1/3 -translate-y-1/3">
                            <FaRocket className="text-9xl text-purple" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to deploy?</h2>
                            <p className="text-white/50 mb-8 max-w-lg text-lg">
                                Integrate {project.title} into your workflow today and instantly upgrade your hiring capacity.
                            </p>
                            <Link href="/demo">
                                <MagicButton
                                    title="Get Started Now"
                                    icon={<FaLocationArrow />}
                                    position="right"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

            </TracingBeam>
        </main>
    );
};

export default ProjectDetails;
