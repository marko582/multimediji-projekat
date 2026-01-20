import { motion } from "framer-motion";

export default function PhotoCard({ photo }) {
  return (
    <motion.div
      className="relative h-72 w-full rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* IMAGE */}
      <motion.img
        src={photo.image}
        alt={photo.title}
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ scale: 1.2, filter: "blur(6px)", opacity: 0.2 }}
        transition={{ duration: 0.5 }}
      />

      {/* INFO OVERLAY */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-extrabold text-barcaYellow mb-3">
          {photo.title}
        </h3>
        <p className="text-white text-lg">{photo.description}</p>
      </motion.div>

      {/* COLOR GLOW */}
      <motion.div
        className="absolute inset-0 border-4 border-barcaPink rounded-2xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
