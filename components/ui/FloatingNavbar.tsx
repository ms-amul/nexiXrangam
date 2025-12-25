"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export const FloatingNav = ({ navItems }: { navItems: any[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-[5000] w-full px-4 md:px-8 py-2 md:py-4 transition-all duration-300",
          scrolled && "py-1"
        )}
      >
        <div
          className={cn(
            "flex max-w-6xl mx-auto items-center justify-between px-6 md:px-8 py-2 md:py-4 rounded-2xl transition-all duration-300",
            "border border-white/10 bg-black/70 backdrop-blur-md"
          )}
        >
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white tracking-tight">
              TalentArbor.AI
            </span>
            <span className="text-sm text-white/50">
              by <span className="font-semibold text-purple-400">NexI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((navItem, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href={navItem.link}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                >
                  {navItem.name}
                </a>

                {/* Dropdown */}
                <AnimatePresence>
                  {hoveredIndex === idx && navItem.subItems && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-4 min-w-[200px] py-2 rounded-xl 
                        border border-white/10 bg-black/90 backdrop-blur-lg"
                    >
                      {navItem.subItems.map((sub: any, sIdx: number) => (
                        <a
                          key={sIdx}
                          href={sub.link}
                          className="block px-4 py-2.5 text-sm text-white/60 hover:text-white 
                            hover:bg-white/5 transition-colors"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 mx-4 md:mx-8 overflow-hidden"
            >
              <div className="p-4 rounded-xl border border-white/10 bg-black/90 backdrop-blur-lg">
                {navItems.map((navItem, idx) => (
                  <div key={idx}>
                    <a
                      href={navItem.link}
                      className="block px-4 py-3 text-white/70 hover:text-white transition-colors font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {navItem.name}
                    </a>
                    {navItem.subItems && (
                      <div className="ml-4 border-l border-white/10 pl-4">
                        {navItem.subItems.map((sub: any, sIdx: number) => (
                          <a
                            key={sIdx}
                            href={sub.link}
                            className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};