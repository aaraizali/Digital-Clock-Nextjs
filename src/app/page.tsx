import DigitalClock from "@/components/digital-clock";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <DigitalClock />
    </main>
  );
}
