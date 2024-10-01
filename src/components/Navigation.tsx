"use client";

import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-70 backdrop-blur-md bg-background/80 dark:bg-gray-800/80 shadow-sm">
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors md:text-sm">
              主页
            </Link>
            <Link href="/blog" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors md:text-sm">
              博客
            </Link>
            <Link href="/about" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors md:text-sm">
              关于
            </Link>
          </div>
        </div>
      )}
      <div className="w-full relative flex items-center justify-between max-w-4xl mx-auto px-4 py-5 md:px-6 md:py-6 md:text-base">
        <Link href="/" className="font-bold text-3xl md:text-4xl">
          NeoMatrix - Neonity&apos;s <span className="text-green-700">Blog</span> 
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-green-500 font-bold md:text-base">
            主页
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-green-500 font-bold md:text-base">
            博客
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-green-500 font-bold md:text-base">
            关于
          </Link>
          <ModeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}