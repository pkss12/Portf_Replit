import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return scrollProgress;
}
