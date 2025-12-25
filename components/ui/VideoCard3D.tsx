"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const VideoCard3D = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    // Motion values for high-performance updates
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth following without lag
    const springConfig = { damping: 15, stiffness: 100, mass: 1 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);
    const scale = useSpring(isHovering ? 0.95 : 1, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        // Calculate normalized position (-0.5 to 0.5)
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        x.set(0);
        y.set(0);
    };

    return (
        <div
            className={cn(
                "relative group/video z-50 block",
                containerClassName
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            ref={containerRef}
            style={{ perspective: "1000px" }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    scale,
                    x: "-50%",
                    y: "-50%",
                    transformStyle: "preserve-3d",
                }}
                className="absolute left-1/2 top-1/2 w-full h-full flex justify-center items-center"
            >
                {/* Main Content (Video) */}
                <div className={cn(
                    "relative z-50 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border border-white/10 group-hover/video:border-purple/50 bg-black",
                    className
                )}>
                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent z-[60] pointer-events-none" />

                    {children}
                </div>

                {/* Depth Layers/Shadows for cool 3D effect */}
                <div className="absolute inset-0 bg-purple/20 blur-3xl -z-10 transform translate-y-10 group-hover/video:translate-y-20 transition-all duration-700" />
            </motion.div>
        </div>
    );
};
