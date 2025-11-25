"use client";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const TimelineItem = ({ item }: { item: TimelineEntry }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={itemRef}
      className="flex justify-start pt-10 md:gap-10 md:pt-40"
    >
      <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
        <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-cream md:left-3">
          {/* White/cream outer ring to cover the line */}
          <div className="h-7 w-7 rounded-full bg-cream flex items-center justify-center">
            {/* Orange filled circle */}
            <div className="h-5 w-5 rounded-full shadow-lg timeline-dot" />
          </div>
        </div>
        <h3 className="hidden text-xl font-bold text-muted md:block md:pl-20 md:text-5xl">
          {item.title}
        </h3>
      </div>

      <div className="relative w-full pl-20 pr-4 md:pl-4">
        <h3 className="mb-4 block text-left text-2xl font-bold text-muted md:hidden">
          {item.title}
        </h3>
        {item.content}
      </div>
    </div>
  );
};

const TimelineLineContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute left-8 md:left-8 top-0 w-0.5 overflow-hidden z-0">
      <div className="h-(--timeline-height)">
        {children}
      </div>
    </div>
  );
};

const AnimatedLine = ({ heightTransform }: { heightTransform: MotionValue<number> }) => {
  return (
    <motion.div
      className="absolute inset-x-0 top-0 w-0.5 rounded-full"
      style={{ height: heightTransform }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-full rounded-full timeline-gradient-bg" />
    </motion.div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
        if (containerRef.current) {
          containerRef.current.style.setProperty("--timeline-height", `${rect.height}px`);
        }
      }
    };

    // Measure on mount
    measure();

    // Re-measure on resize to keep line height in sync
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height]
  );

  return (
    <div
      className="w-full bg-cream font-sans md:px-10"
      ref={containerRef}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
        <h2 className="mb-12 text-center text-4xl font-bold text-muted md:text-5xl">
          Education 🎓
        </h2>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => {
          return <TimelineItem key={index} item={item} />;
        })}

        {/* Continuous orange line (behind circles) */}
        <TimelineLineContainer>
          <AnimatedLine heightTransform={heightTransform} />
        </TimelineLineContainer>
      </div>
    </div>
  );
};
