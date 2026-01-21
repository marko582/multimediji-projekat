import { motion } from "framer-motion";

export default function TimelineItem({ item, onOpen }) {
  return (
    <motion.div
      onClick={() => onOpen(item)}
      className="
    relative w-[90vw] max-w-6xl rounded-[2.5rem] overflow-hidden
    cursor-pointer bg-black/60 backdrop-blur-xl border border-white/10
    shrink-0
    h-[80vh] flex flex-col
  "
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.04 }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      {item.special && (
        <div className="absolute inset-0 ring-4 ring-barcaYellow animate-pulse rounded-[2.5rem]" />
      )}

      <div className="relative z-10 flex flex-col justify-end px-12 pb-12 h-full">
        <h2 className="text-7xl font-extrabold text-barcaYellow truncate">
          {item.year}
        </h2>
        <h3 className="text-4xl font-bold mt-4 truncate">{item.title}</h3>
        <p className="text-lg opacity-90 mt-6 max-w-2xl line-clamp-4">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
