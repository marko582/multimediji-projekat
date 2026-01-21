import photos from "../data/photos";
import PhotoCard from "../components/PhotoCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -30,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Photos() {
  return (
    <div className="relative">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-barcaYellow text-center mb-16"
      >
        Foto Galerija
      </motion.h2>

      {/* GRID */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            variants={cardVariants}
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.3 },
            }}
          >
            <PhotoCard photo={photo} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
