import { motion } from "framer-motion";

export default function PlayerCard({ player }) {
  return (
    <motion.div
      className="relative w-72 h-96 rounded-2xl overflow-hidden bg-barcaBlue cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.06,
        boxShadow: "0px 0px 35px rgba(253,185,39,0.9)",
      }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {/* FRONT SIDE */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5">
          <h3 className="text-barcaYellow text-2xl font-extrabold">
            {player.name}
          </h3>
          <p className="text-white text-sm mt-1">{player.position}</p>
          <span className="inline-block mt-2 px-3 py-1 rounded-full bg-barcaPink text-white font-bold text-sm">
            #{player.number}
          </span>
        </div>
      </motion.div>

      {/* BACK SIDE */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-barcaPink via-barcaBlue to-black p-6 flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h4
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-barcaYellow text-2xl font-extrabold mb-4"
        >
          Trofeji sa Barçom
        </motion.h4>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="space-y-2"
        >
          {player.trophies.length > 0 ? (
            player.trophies.map((trophy, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-white font-medium"
              >
                🏆 {trophy}
              </motion.li>
            ))
          ) : (
            <motion.li
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="text-white italic"
            >
              Još bez trofeja
            </motion.li>
          )}
        </motion.ul>

        {/* DECORATIVE BALL */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-6 text-3xl"
        >
          ⚽
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
