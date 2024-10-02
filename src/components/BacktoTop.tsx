'use client'
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function BacktoTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") { // 添加检查
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        setIsVisible(scrollPosition > windowHeight * 0.3);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && <Button onClick={scrollToTop}>Back to Top</Button>}
    </>
  );
}
