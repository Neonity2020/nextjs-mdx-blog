"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.3;

      if (scrollY > threshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-opacity-70 backdrop-blur-md bg-background/80 dark:bg-gray-800/80 shadow-sm transition-transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* 移动端导航栏 */}
      <div className="relative flex items-center justify-between max-w-4xl mx-auto px-4 py-5 md:px-6 md:py-6 md:text-base">

        <div className="flex justify-center items-center"> {/* 使链接居中 */}
          <Link href="/" className="font-bold text-3xl md:text-4xl whitespace-nowrap">
            Neonity&apos;s <span className="text-green-700">Blog</span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-sm hover:text-green-500 font-bold">
            主页
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-green-500">
            博客
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-green-500">
            关于
          </Link>
        </div>
        {/* 汉堡包 */}
        <div className="md:hidden flex items-center justify-end w-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
          <ModeToggle />
        </div>
        <div className="hidden md:flex">
          <ModeToggle />
        </div>
      </div>
      
      {/* web端导航栏 */}
      {isOpen && (
        <div className="md:hidden flex justify-center">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              主页
            </Link>
            <Link href="/blog" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              博客
            </Link>
            <Link href="/about" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              关于
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}