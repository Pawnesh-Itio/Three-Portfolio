import Image from "next/image";
import bg from "../../../../public/background/magicWinterAbout.png";
import RenderModel from "@/components/RenderModel";
import { Hat } from "@/components/models/Hat";
import AboutDetails from "@/components/about";
import { MagicienHat } from "@/components/models/MagicienHat";

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-75"/>
      {/* Rendering model */}
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
            <MagicienHat />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col item-center justify-center">
        <div className="absolute flex flex-col item-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 ">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">TechWizard  </h1>
          <p className="font-light text-foreground text-ls">Meet the Dev behind this portfolio</p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
