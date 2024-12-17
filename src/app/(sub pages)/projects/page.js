import Image from "next/image";
import bg from "../../../../public/background/magicWinterProject.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";
import { WinterHeroinBack } from "@/components/models/WinterHeroinBack";

export default function Home() {
  return (
    <>
      <Image src={bg} 
      alt="background-image" 
      className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-75"/>
      <div className="w-full h-screen relative" style={{height:"1000px"}}>
        <ProjectList projects={projectsData} />
      </div>
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <RenderModel>
          <WinterHeroinBack />
        </RenderModel>
      </div>
    </>
  );
}
