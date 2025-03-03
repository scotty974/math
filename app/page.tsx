"use client";

import { useEffect, useState } from "react";
import CustomDatePicker from "@/components/ui/DatePick/DatePicker";
import Countdown from "@/components/ui/countDown/CountDown";
import PositiveMessage from "@/components/ui/Message/Message";

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tempDate, setTempDate] = useState<Date | null>(null); // Utilisation d'un état temporaire

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Utilise la date temporaire si elle est définie, sinon utilise la date actuelle
    const dateToSave = tempDate || new Date();
    localStorage.setItem("selectedDate", dateToSave.toISOString());
    setSelectedDate(dateToSave); // Force la mise à jour de l'état
  };

  useEffect(() => {
    const storedDate = localStorage.getItem("selectedDate");
    setSelectedDate(storedDate ? new Date(storedDate) : null);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
            Countdown Joyeux
          </h1>
          <p className="mt-2 text-emerald-600">
            Créez votre compte à rebours personnalisé
          </p>
        </header>

        {!selectedDate ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-emerald-800 text-center">
                🗓️ Choisissez votre date
              </h2>
              <CustomDatePicker
                selected={tempDate || new Date()} // Utilise tempDate ici
                onChange={(date: Date) => setTempDate(date)} // Met à jour tempDate au lieu de selectedDate
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Enregistrer la date
            </button>
          </form>
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-emerald-800 mb-2">
                📅 Date sélectionnée :
              </h2>
              <p className="text-2xl font-bold text-emerald-600 bg-emerald-50 rounded-lg py-3 px-6">
                {selectedDate.toLocaleDateString("fr-FR")}
              </p>
            </div>

            <Countdown birthday={selectedDate.toISOString()} />
            <PositiveMessage startDate={selectedDate} />

            <button
              onClick={() => setSelectedDate(null)}
              className="w-full py-2.5 px-6 border border-emerald-600 text-emerald-600 font-medium rounded-lg transition-all duration-300 hover:bg-emerald-50 flex items-center justify-center gap-2"
            >
              ✏️ Modifier la date
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
