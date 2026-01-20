import { motion } from "framer-motion";

export default function QuizAnimation() {
  const balls = [...Array(5)]; // loptice ⚽
  const fireworks = [...Array(2)]; // 2 vatrometa: levo i desno

  // random boje za vatromet
  const colors = ["#FFD700", "#FF4500", "#00FFFF", "#FF69B4", "#7CFC00"];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* LOPTICE — u plavom div-u */}
      {balls.map((_, i) => (
        <motion.div
          key={i}
          className="text-4xl absolute left-1/2 top-1/2"
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 200 - 100],
            rotate: [0, 360],
          }}
          transition={{
            duration: 1.2,
            delay: i * 0.1,
          }}
        >
          ⚽
        </motion.div>
      ))}

      {/* VATROMETI — izvan plavog diva, slobodno na vrhu */}
      {fireworks.map((_, i) => {
        const side = i === 0 ? 100 : window.innerWidth - 100; // pozicija levo/desno u px
        const topPos = 50; // 50px od vrha
        return (
          <div
            key={i}
            className="absolute"
            style={{ left: side, top: topPos, width: 0, height: 0 }}
          >
            {[...Array(12)].map((__, j) => {
              const angle = (j / 12) * 2 * Math.PI;
              const color = colors[Math.floor(Math.random() * colors.length)];
              return (
                <motion.div
                  key={j}
                  className="absolute w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                  animate={{
                    x: [0, Math.cos(angle) * 140],
                    y: [0, Math.sin(angle) * 140],
                    scale: [1, 0],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 1.9, // duže od prethodnog
                    ease: "easeOut",
                    delay: j * 0.05,
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
