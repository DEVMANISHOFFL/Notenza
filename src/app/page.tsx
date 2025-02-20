// import { main } from "framer-motion/client";
import Image from "next/image";
import Navbar from "./components/global/navbar";
import { HeroParallax } from "./components/global/HeroParallax";
import HeroParallaxDemo from "./components/global/Parallax-use";
import { ContainerScroll } from "./components/global/container-scroll-animation";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialised">
        {/* <div className="max-w-4xl mx-auto p-4 realtive z-10 flex items-center justify-center flex-col"></div> */}
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background: radial-gradient(125%_125%_at_50%_10%, #000_35%,#223_100%]">
          <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          </div>
        </div>
      </section>
    </main >
  );
}
