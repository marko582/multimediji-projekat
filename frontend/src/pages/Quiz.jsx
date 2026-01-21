import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import quizQuestions from "../data/quiz";
import QuizAnimation from "../components/QuizAnimation";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  // Funkcija za nasumično biranje 10 pitanja
  const generateQuestions = () => {
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
    setIndex(0);
    setScore(0);
    setFeedback(null);
    setShowConfetti(false);
  };

  useEffect(() => {
    generateQuestions();
  }, []);

  const question = questions[index];

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

  // Kada su sva pitanja odgovorena
  if (!question) {
    return (
      <div className="text-center mt-32">
        <h2 className="text-5xl text-barcaYellow font-extrabold">
          Kviz završen!
        </h2>
        <p className="text-2xl text-white mt-6">
          Tvoj rezultat: {score} / {questions.length}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={generateQuestions}
          className="mt-8 px-8 py-4 bg-barcaPink text-white font-bold rounded-xl text-xl"
        >
          Igraj ponovo
        </motion.button>
      </div>
    );
  }

  // Izračunavanje za progress bar
  const progressPercent = ((index) / questions.length) * 100;

  return (
    <div className="relative max-w-3xl mx-auto mt-20 p-10 bg-barcaBlue rounded-3xl shadow-2xl overflow-hidden">
      {showConfetti && <Confetti numberOfPieces={300} />}
      {feedback === "correct" && <QuizAnimation />}

      {/* PROGRESS */}
      <div className="mb-6">
        <p className="text-white font-bold text-lg text-center mb-2">
          Pitanje {index + 1} / {questions.length}
        </p>
        <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
          <motion.div
            className="h-4 bg-barcaPink rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

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
