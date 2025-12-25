"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import { FaSearch, FaUserCheck, FaCalendarAlt, FaBullhorn, FaChartLine, FaChartBar, FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Link from "next/link";

const iconMap: { [key: string]: React.ElementType } = {
  FaSearch,
  FaUserCheck,
  FaCalendarAlt,
  FaBullhorn,
  FaChartLine,
  FaChartBar,
};

export const FloatingNav = ({ navItems }: { navItems: any[] }) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[5000] transition-all duration-300 ${scrolled || activeDropdown !== null
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm dark:bg-black/90 dark:border-white/10"
            : "bg-white/60 backdrop-blur-md dark:bg-black/60 border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-50">
          <div className="flex items-center justify-between h-20">
            {/* Brand */}
            <Link href="/" className="flex items-center space-x-3 group relative overflow-hidden">
              <div className="flex flex-col relative z-20">
                <span className="text-xl font-bold shimmer-text">
                  TalentArbor.AI
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider">
                  by NexI
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((navItem, idx) => (
                <div
                  key={idx}
                  className="relative group h-20 flex items-center"
                  onMouseEnter={() => navItem.subItems && setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={navItem.link}
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-colors relative rounded-full 
                      ${activeDropdown === idx
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-white/10"
                        : "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                      }`}
                  >
                    {navItem.name}
                    {navItem.subItems && (
                      <HiChevronDown
                        className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === idx ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </a>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/demo"
                className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/30"
              >
                Request Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {mobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {activeDropdown !== null && navItems[activeDropdown].subItems && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-20 left-0 right-0 w-full border-t border-gray-200 dark:border-white/10 shadow-xl z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Left Side - Overview */}
                  <div className="col-span-3 border-r border-gray-200 dark:border-white/10 pr-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {navItems[activeDropdown].name === "Solutions" ? "AI Solutions" : navItems[activeDropdown].name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                      Empower your hiring team with intelligent agents that automate engaging, screening, and scheduling candidates at scale.
                    </p>
                    <Link
                      href="/demo"
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Explore Platform <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Right Side - Grid Items */}
                  <div className="col-span-9 grid grid-cols-3 gap-4">
                    {navItems[activeDropdown].subItems.map((sub: any, sIdx: number) => {
                      const Icon = iconMap[sub.icon] || FaSearch;
                      return (
                        <a
                          key={sIdx}
                          href={sub.link}
                          className="group flex flex-col p-4 rounded-xl border border-transparent hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-200 dark:hover:border-white/10 transition-all duration-200"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className={cn(
                              "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border",
                              sub.status === "online"
                                ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-500/20 dark:text-green-400 dark:border-green-500/30"
                                : "bg-gray-100 text-gray-600 border-gray-200 dark:bg-white/10 dark:text-gray-400 dark:border-white/10"
                            )}>
                              {sub.status || "offline"}
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {sub.name}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300">
                            {sub.desc}
                          </p>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-black-100 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">T</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        TalentArbor.AI
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">by NexI</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                  >
                    <HiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-1">
                  {navItems.map((navItem, idx) => (
                    <div key={idx}>
                      <a
                        href={navItem.link}
                        onClick={() => !navItem.subItems && setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {navItem.name}
                        {navItem.subItems && (
                          <HiChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </a>
                      {navItem.subItems && (
                        <div className="ml-4 mt-1 space-y-1">
                          {navItem.subItems.map((sub: any, sIdx: number) => (
                            <a
                              key={sIdx}
                              href={sub.link}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span>{sub.name}</span>
                                {sub.status && (
                                  <span className={cn(
                                    "text-[10px] uppercase font-bold px-1.5 py-0.5 rounded",
                                    sub.status === "online" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                  )}>
                                    {sub.status}
                                  </span>
                                )}
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  <Link
                    href="/demo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-5 py-3 text-center text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};