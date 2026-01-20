import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-[90vh] flex items-center justify-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover opacity-30"
        src="/videos/campnou.mp4"
      />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center"
      >
        <h1 className="text-6xl font-extrabold text-barcaYellow">
          MÉS QUE UN CLUB
        </h1>
        <p className="text-xl mt-4 text-barcaPink">
          Dobrodošli u FC Barcelona Fan Zone
        </p>
      </motion.div>
    </div>
  );
}
