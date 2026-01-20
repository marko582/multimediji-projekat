import { motion } from "framer-motion";

export default function LegendCard({ legend, onSelect }) {
  return (
    <motion.div
      onClick={() => onSelect(legend)}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 40px rgba(197,31,93,0.9)",
      }}
      className="relative w-80 h-96 rounded-2xl overflow-hidden cursor-pointer bg-barcaBlue"
    >
      <img
        src={legend.image}
        alt={legend.name}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-3xl font-extrabold text-barcaYellow">
          {legend.name}
        </h3>
        <p className="text-barcaPink font-semibold">
          {legend.position}
        </p>
        <p className="text-white text-sm mt-2">
          {legend.description}
        </p>
      </div>
    </motion.div>
  );
}
