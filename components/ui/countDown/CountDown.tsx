"use client";

import { useState, useEffect } from "react";

export default function Countdown({ birthday }: { birthday: string }) {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const today = new Date();
      const birthDate = new Date(birthday);
      birthDate.setFullYear(today.getFullYear());

      if (birthDate < today) {
        birthDate.setFullYear(today.getFullYear() + 1);
      }

      const diffTime = birthDate.getTime() - today.getTime();
      setDaysLeft(Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    };

    calculateDaysLeft();
  }, [birthday]);

  return (
    <div className="bg-emerald-50 p-6 rounded-xl border-2 border-emerald-100">
      <div className="text-center space-y-3">
        <h2 className="text-xl font-semibold text-emerald-800 flex items-center justify-center gap-2">
          🎉 Jours restants avant votre anniversaire
        </h2>
        <div className="text-4xl font-bold text-emerald-600 animate-pulse">
          <span className="bg-gradient-to-r from-emerald-600 to-green-500 text-transparent bg-clip-text">
            {daysLeft}
          </span>
          <span className="text-2xl ml-2 text-emerald-500">jours</span>
        </div>
      </div>
    </div>
  );
}