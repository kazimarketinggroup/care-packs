import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <Hero />
    </main>
  );
}
