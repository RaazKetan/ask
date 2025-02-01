import { useState } from "react";
import { motion } from "framer-motion";

export default function DateInvite() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);
  const [clickedNo, setClickedNo] = useState(0);

  const moveNoButton = () => {
    setNoPosition({
      x: (Math.random() - 0.5) * 300,
      y: (Math.random() - 0.5) * 300,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-400 to-red-500 text-center p-4 text-white">
      {!accepted ? (
        <>
          <h1 className="text-4xl font-extrabold mb-6 drop-shadow-lg animate-bounce">
            Will you go on a date with me? MUSKAN PODDAR❤️
          </h1>
          <div className="flex gap-6 relative">
            <button
              className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-xl hover:bg-green-600 transform hover:scale-110 transition"
              onClick={() => setAccepted(true)}
            >
              Yes 💖
            </button>
            <motion.button
              className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-xl"
              style={{ transform: `translate(${noPosition.x}px, ${noPosition.y}px)` }}
              onMouseEnter={moveNoButton}
              onClick={() => setClickedNo(clickedNo + 1)}
            >
              No 😢
            </motion.button>
          </div>
          {clickedNo > 0 && (
            <p className="mt-4 text-lg font-semibold animate-pulse">
              You can't say no {clickedNo} times! 😆
            </p>
          )}
        </>
      ) : (
        <h1 className="text-5xl font-extrabold text-yellow-300 animate-pulse drop-shadow-2xl">
          Yay! Can't wait for our date! 🥰🎉
        </h1>
      )}
    </div>
  );
}
