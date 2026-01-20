import matches from "../data/matches";
import MatchCard from "../components/MatchCard";
import { motion } from "framer-motion";

export default function Matches() {
  return (
    <div className="relative">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover opacity-10 -z-10"
        src="/videos/match-bg.mp4"
      />

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-barcaYellow text-center mb-16"
      >
        Predstojeće utakmice
      </motion.h2>

      {/* MATCH LIST */}
      <div className="flex flex-col items-center gap-16">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}
