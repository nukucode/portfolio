import Skill from "../Components/Skill";
import Image from "next/image";

function skills() {
  return (
    <>
      <div className="bg-white h-screen w-full">
        <div className="max-w-7xl mt-5 text-white mx-auto p-5">
          <div className="flex flex-col items-center justify-center">
            <div className="shadow-2xl mb-5 rounded-md w-full max-w-[800px] p-3">
              <Image
                src="https://github.com/therogersak/therogersak/raw/main/Artboard%201.png?raw=true"
                alt="therogersak"
                width={3000}
                height={1000}
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="w-full flex flex-wrap items-center justify-center gap-5">
              <Skill name="Javascript" active />
              <Skill name="Html" />
              <Skill name="Css" active />
              <Skill name="Sass" />
              <Skill name="Tailwind Css" />
              <Skill name="Bootstrap" />
              <Skill name="React-Js" active />
              <Skill name="Next-Js" />
              <Skill name="Firebase" active />
              <Skill name="Git" />
              <Skill name="Github" />
              <Skill name="Linux" active />
              <Skill name="Hacking" />
              <Skill name="Networking" />
              <Skill name="Jquery" active />
              <Skill name="Node-Js" />
              <Skill name="Python" active />
              <Skill name="Danjo" />
              <Skill name="Mongo DB" />
              <Skill name="SQL" active />
            </div>
          <span className="text-black mx-auto mt-10 font-extrabold">WORK IN DEVELOPMENT</span>
          </div>

        </div>
      </div>
    </>
  );
}

export default skills;
