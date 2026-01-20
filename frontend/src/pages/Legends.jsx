import legends from "../data/legends";
import LegendCard from "../components/LegendCard";
import LegendModal from "../components/LegendModal";
import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    rotate: -2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Legends() {
  const [selectedLegend, setSelectedLegend] = useState(null);

  return (
    <div className="relative">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover opacity-10 -z-10"
        src="/videos/legends-bg.mp4"
      />

      {/* NASLOV */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-barcaYellow text-center mb-16"
      >
        Legende FC Barcelone
      </motion.h2>

      {/* GRID */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {legends.map((legend) => (
          <motion.div
            key={legend.id}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <LegendCard
              legend={legend}
              onSelect={setSelectedLegend}
            />
          </motion.div>
        ))}
      </motion.div>

      {selectedLegend && (
        <LegendModal
          legend={selectedLegend}
          onClose={() => setSelectedLegend(null)}
        />
      )}
    </div>
  );
}
