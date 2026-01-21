import { useState, useRef, useEffect } from "react";
import { timelineData } from "../data/timeline";
import TimelineItem from "../components/TimelineItem";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Timeline() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [autoplay, setAutoplay] = useState(true);

  const scrollToIndex = (i, smooth = true) => {
    const container = containerRef.current;
    if (!container || !container.children[i]) return;

    container.children[i].scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      inline: "center",
      block: "nearest",
    });
  };

  const next = () => {
    setIndex((prev) => {
      const nextIndex = prev < timelineData.length - 1 ? prev + 1 : prev;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  };

  const prev = () => {
    setIndex((prev) => {
      const prevIndex = prev > 0 ? prev - 1 : prev;
      scrollToIndex(prevIndex);
      return prevIndex;
    });
  };

  {/* AUTOPLAY */}
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = prev < timelineData.length - 1 ? prev + 1 : 0;
        scrollToIndex(nextIndex, true); 
        return nextIndex;
      });
    }, 4000); 

    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="py-20">
      {/* TITLE */}

{/* YEAR + AUTOPLAY */}
<div className="absolute top-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center mt-5">
  <h1 className="text-center text-5xl font-extrabold text-barcaYellow mb-4">
    Istorija FC Barcelone
  </h1>

  {/* Godina + dugme u istom redu */}
  <div className="flex items-center gap-4">
    <p className="text-5xl font-extrabold text-barcaYellow">
      {timelineData[index]?.year}
    </p>

    <button
      onClick={() => setAutoplay(!autoplay)}
      className={`px-5 py-2 rounded-full transition
        ${autoplay ? "bg-barcaPink text-white" : "bg-barcaYellow text-white"}`}
    >
      {autoplay ? "⏸ Pause" : "▶ Play"}
    </button>
  </div>
</div>


      {/* ARROWS */}
      <button
        onClick={prev}
        onMouseEnter={() => setAutoplay(false)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20
          bg-barcaYellow p-4 rounded-full
          hover:scale-110 hover:bg-black/80 transition"
      >
        <ChevronLeft size={36} />
      </button>

      <button
        onClick={next}
        onMouseEnter={() => setAutoplay(false)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20
          bg-barcaYellow p-4 rounded-full
          hover:scale-110 hover:bg-black/80 transition"
      >
        <ChevronRight size={36} />
      </button>

      {/* TIMELINE */}
      <div
        ref={containerRef}
        className="flex gap-32 overflow-x-hidden overflow-y-hidden py-20"
        style={{ height: "80vh" }}
      >
        {timelineData.map((item, i) => (
          <TimelineItem key={i} item={item} onOpen={setSelected} />
        ))}
      </div>

      {/* PROGRESS BAR */}
      <div className="mt-20 flex justify-center">
        <div className="w-2/3 h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-barcaBlue to-barcaYellow"
            animate={{ width: `${((index + 1) / timelineData.length) * 100}%` }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
}
