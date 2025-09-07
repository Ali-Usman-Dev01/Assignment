"use client";

import { useRef, useState, useEffect } from "react";

export function useHorizontalScroll(step: number = 300) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    left: false,
    right: true,
  });

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setScrollState({
      left: el.scrollLeft > 0,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth - 1,
    });
  };

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll(); // check on mount
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  return { scrollRef, scroll, scrollState };
}
