import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function getTimeLeft(date) {
  const diff = new Date(date) - new Date();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
  };
}

export default function MatchCard({ match }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(match.date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(match.date));
    }, 60000);
    return () => clearInterval(timer);
  }, [match.date]);

  return (
    <motion.div
      className="relative w-full max-w-xl bg-barcaBlue rounded-2xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
    >
      {/* IMAGE */}
      <div className="relative h-56">
        <img
          src={match.image}
          alt={match.opponent}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h3 className="absolute bottom-4 left-4 text-3xl font-extrabold text-barcaYellow">
          FC Barcelona vs {match.opponent}
        </h3>
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-4">
        <p className="text-barcaPink font-semibold">{match.competition}</p>
        <p className="text-white">📍 {match.stadium}</p>
        <p className="text-white">🕘 {new Date(match.date).toLocaleString()}</p>

        {/* COUNTDOWN */}
        {timeLeft ? (
          <div className="flex gap-4 text-center">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className="bg-black/40 px-4 py-2 rounded-lg">
                <p className="text-barcaYellow text-xl font-bold">{value}</p>
                <span className="text-white text-sm">{key}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-barcaPink font-bold">
            Utakmica je u toku ili završena
          </p>
        )}

        {/* BUY TICKETS */}
        <motion.a
          href={match.ticketLink}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          className="inline-block mt-4 px-6 py-3 rounded-full bg-barcaYellow text-barcaBlue font-extrabold"
        >
          🎟️ Kupi karte
        </motion.a>
      </div>
    </motion.div>
  );
}
