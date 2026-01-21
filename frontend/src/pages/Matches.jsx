import { useState } from "react";
import matches from "../data/matches";
import MatchCard from "../components/MatchCard";
import { motion } from "framer-motion";

export default function Matches() {
  const ITEMS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(matches.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMatches = matches.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="relative">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
        {currentMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-6 mt-16">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-6 py-2 rounded bg-barcaYellow text-black font-bold disabled:opacity-40"
        >
          Prethodna
        </button>

        <span className="text-white font-semibold">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-6 py-2 rounded bg-barcaYellow text-black font-bold disabled:opacity-40"
        >
          Sledeca
        </button>
      </div>
    </div>
  );
}
