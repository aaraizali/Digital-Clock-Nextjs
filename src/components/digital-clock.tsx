"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DigitalClock() {
  const [time, setTime] = useState<Date>(new Date());
  const [is24Hour, set24Hour] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = is24Hour
    ? time.toLocaleTimeString("en-GB")
    : time.toLocaleTimeString("en-US");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-700 via-blue-500 to-teal-500 animate-gradient-xy">
      <Card className="p-10 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Digital Clock</h2>
        <div className="text-6xl font-mono font-semibold text-gray-900 mb-6">
          {formattedTime}
        </div>
        <Button
          onClick={() => set24Hour(!is24Hour)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300"
        >
          Switch to {is24Hour ? "12-hour" : "24-hour"} format
        </Button>
      </Card>
      
      <div className="mt-4 text-gray-100 text-sm font-semibold tracking-wide">
        <span className="text-indigo-300 drop-shadow-[0_0_4px_rgba(0,0,0,0.4)]">
          Built by Aaraiz
        </span>
      </div>
    </div>
  );
}
