import players from "../data/players";
import PlayerCard from "../components/PlayerCard";
import { motion } from "framer-motion";

export default function Players() {
  return (
    <div>
      {/* NASLOV */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-barcaYellow text-center mb-16"
      >
        Prvi tim FC Barcelone
      </motion.h2>

      {/* GRID */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {players.map((player) => (
          <motion.div
            key={player.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <PlayerCard player={player} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
