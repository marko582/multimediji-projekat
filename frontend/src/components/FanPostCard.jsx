import { motion } from "framer-motion";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function FanPostCard({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  return (
    <motion.div
      className="bg-barcaBlue/90 rounded-2xl p-6 shadow-2xl relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 0px 30px rgba(253,185,39,0.7)" }}
    >
      <div className="flex items-center mb-4 gap-4">
        <img
          src={post.avatar}
          alt={post.username}
          className="w-12 h-12 rounded-full border-2 border-barcaPink"
        />
        <div>
          <h4 className="text-barcaYellow font-bold">{post.username}</h4>
          <p className="text-white text-sm">{post.date}</p>
        </div>
      </div>

      <p className="text-white text-lg mb-4">{post.message}</p>

      <motion.button
        onClick={handleLike}
        whileTap={{ scale: 1.3 }}
        className="flex items-center gap-2 text-barcaPink font-bold"
      >
        <FaHeart className={liked ? "text-red-500" : ""} /> {likes}
      </motion.button>
    </motion.div>
  );
}
