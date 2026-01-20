import { motion } from "framer-motion";

export default function LegendModal({ legend, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="relative bg-barcaBlue rounded-2xl p-6 w-[90%] max-w-4xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-barcaPink text-2xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-4xl font-extrabold text-barcaYellow mb-4">
          {legend.name}
        </h2>

        <iframe
          width="100%"
          height="450"
          src={legend.video}
          title={legend.name}
          allowFullScreen
          className="rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
}
