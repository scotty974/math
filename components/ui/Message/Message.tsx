"use client";

import { useEffect, useState } from "react";

// Type definition for messages
type Message = {
  text: string;
  image?: string;
};

const calculateMessageIndex = (startDate: Date, messages: Message[]) => {
  const today = new Date();
  const validStartDate = startDate > today ? today : startDate;
  const daysElapsed = Math.floor((today.getTime() - validStartDate.getTime()) / (1000 * 60 * 60 * 24));
  return daysElapsed % messages.length;
};

const messages: Message[] = [
  { text: "Tu es la mélodie qui accompagne les battements de mon cœur.", image: "/IMG_8471.webp" },
  { text: "Ton sourire me réchauffe plus que le soleil. 🌞", image: "/IMG_4197.webp" },
  { text: "Ta persévérance est inspirante. 💪" },
  { text: "Ne te sous-estime pas. Tu es unique et remarquable.", image: "/IMG_4043.webp" },
  { text: "Tu es comme une étoile, mes yeux sont capturés par ta splendide lueur." },
  { text: "Ne doute jamais de ta valeur inestimable. 💎" },
  { text: "Encore un jour de moins avant tes 23 ans !", image: "/IMG_8509.webp" },
  { text: "Ta passion pour la vie est incroyable. 🌟", image: "/IMG_4225.webp" },
  { text: "Ton amour pour la nature est une source d'inspiration. 🌳", image: "/IMG_3989.webp" },
  { text: "Pitié, un capybara dans notre appartement !" },
  { text: "J'adore tes cheveux et tes yeux !" },
  { text: "Ma zoreil favorite !", image: "/public/IMG_8471.webp" },
  { text: "Je t'aime de tout mon cœur !" },
  { text: "Tu es l'histoire de ma vie au final !" },
];

export default function PositiveMessage({ startDate }: { startDate: Date }) {
  const [message, setMessage] = useState<Message | null>(null);

  useEffect(() => {
    if (!startDate) return; // Guard clause if startDate is undefined
    const index = calculateMessageIndex(startDate, messages);
    setMessage(messages[index]);
  }, [startDate]);

  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-emerald-100 shadow-sm">
      <div className="text-center space-y-4">
        <h2 className="text-lg font-medium text-emerald-700 mb-2">
          💌 Citation inspirante du jour :
        </h2>
        {message && (
          <>
            <p className="text-emerald-800 italic leading-relaxed">
              "{message.text}"
            </p>
            {message.image && (
              <img
                src={message.image}
                alt="Illustration"
                className="w-full h-64 object-cover mx-auto rounded-lg shadow-md"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
