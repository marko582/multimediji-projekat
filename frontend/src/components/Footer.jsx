import { motion } from "framer-motion";
import { sponsors, titles } from "../data/footer";

export default function Footer() {
  return (
    <footer className="footer-gradient text-white mt-24 py-12 px-6 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent -z-10" />

      {/* TITLES */}
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-extrabold text-barcaYellow mb-6">
          Osvojene titule
        </h3>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {titles.map((title) => (
            <motion.div
              key={title.id}
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 px-8 py-5 rounded-xl flex flex-col items-center justify-center text-center w-44"
            >
              <p className="font-bold text-barcaPink text-lg">{title.name}</p>
              <p className="text-white font-extrabold text-2xl mt-1">
                {title.count}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* SPONSORS */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-extrabold text-barcaYellow mb-4">
          Sponzori
        </h3>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {sponsors.map((s) => (
            <motion.a
              key={s.id}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <img src={s.logo} alt={s.name} className="w-32 h-auto" />
              <motion.span className="absolute left-0 bottom-0 h-1 bg-barcaYellow w-0 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <p className="text-center text-white/70 mt-12">
        &copy; 2026 FC Barcelona Fan Klub. Sva prava zadržana.
      </p>
    </footer>
  );
}
