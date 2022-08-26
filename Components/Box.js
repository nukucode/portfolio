import Fade from "react-reveal/Fade";

function Box({ name, more }) {
  return (
    <>
      <Fade bottom>
      <div className="group relative  cursor-pointer">
        <div className="flex items-center">
          <p className="point">{name}</p>
        </div>
        <div className="border-2 border-[#3CCF91] rounded-md shadow-xl p-2 absolute top-0 right-0b bg-black w-[300px] hidden group-hover:block transition-all duration-200">
          <p className="text-sm text-gray-200  z-[1100] bg-black  cursor-none">{more}</p>
        </div>
      </div>
      </Fade>
    </>
  );
}

export default Box;
