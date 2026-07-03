import Header from "@/components/layout/Header";
import LeftSide from "@/components/layout/LeftSide";
import Banner from "@/components/sections/Banner";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import RightSide from "@/components/layout/RightSide";
import Reveal from "@/components/common/Reveal";

import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Dhruv Panchagatti",
  description: "Electrical engineer portfolio showcasing projects and experience.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden bg-bodyColor font-bodyFont text-textLight">
      <Header />
      <div className="w-full items-center justify-between gap-10 lg:flex">
        <div className="fixed bottom-0 left-0 hidden h-full w-32 xl:inline-flex">
          <LeftSide />
        </div>
        <div className="mx-auto w-full p-4">
          <Banner />
          <Reveal>
            <About />
          </Reveal>
          <Reveal>
            <Experience />
          </Reveal>
          <Reveal>
            <Projects />
          </Reveal>
          <Reveal>
            <Contact />
          </Reveal>
          <Footer />
        </div>
        <div className="fixed bottom-0 right-0 hidden h-full w-32 xl:inline-flex">
          <RightSide />
        </div>
      </div>
    </main>
  );
}
