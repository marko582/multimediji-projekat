import fanPosts from "../data/fanzone";
import FanPostCard from "../components/FanPostCard";
import { motion } from "framer-motion";

export default function FanZone() {
  return (
    <div className="relative">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover opacity-10 -z-10"
        src="/videos/fanzone-bg.mp4"
      />

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-barcaYellow text-center mb-16"
      >
        Fan Zone
      </motion.h2>

      {/* POSTS GRID */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {fanPosts.map((post) => (
          <FanPostCard key={post.id} post={post} />
        ))}
      </motion.div>
    </div>
  );
}
