import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import quizQuestions from "../data/quiz";
import QuizAnimation from "../components/QuizAnimation";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const question = quizQuestions[index];

  const handleAnswer = (answer) => {
    if (answer === question.correct) {
      setScore(score + 1);
      setFeedback("correct");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1500);
    } else {
      setFeedback("wrong");
    }

    setTimeout(() => {
      setFeedback(null);
      setIndex(index + 1);
    }, 1200);
  };

  if (!question) {
    return (
      <div className="text-center mt-32">
        <h2 className="text-5xl text-barcaYellow font-extrabold">
          Kviz završen!
        </h2>
        <p className="text-2xl text-white mt-6">
          Tvoj rezultat: {score} / {quizQuestions.length}
        </p>
      </div>
    );
  }

  return (
    <div className="relative max-w-3xl mx-auto mt-20 p-10 bg-barcaBlue rounded-3xl shadow-2xl overflow-hidden">
      {showConfetti && <Confetti numberOfPieces={300} />}
      {feedback === "correct" && <QuizAnimation />}

      {/* QUESTION */}
      <motion.h2
        key={question.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl text-barcaYellow font-extrabold text-center mb-10"
      >
        {question.question}
      </motion.h2>

      {/* ANSWERS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {question.options.map((option) => (
          <motion.button
            key={option}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={
              feedback === "wrong"
                ? { x: [0, -10, 10, -10, 10, 0] }
                : {}
            }
            className="bg-barcaPink text-white font-bold py-4 rounded-xl text-lg"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </motion.button>
        ))}
      </div>

      {/* FEEDBACK */}
      {feedback === "correct" && (
        <p className="text-center text-green-400 text-2xl font-bold mt-6">
          ✔ Tačan odgovor!
        </p>
      )}
      {feedback === "wrong" && (
        <p className="text-center text-red-500 text-2xl font-bold mt-6">
          ✖ Pogrešan odgovor!
        </p>
      )}
    </div>
  );
}
