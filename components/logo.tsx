import l from "@/public/logo.png";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="absolute">
      <div className="flex items-center justify-between text-3xl font-bold">
        {" "}
        <Image src={l} alt="logo" height={50} width={50} />
        Boat Works Marine Surveyors
      </div>
    </div>
  );
};

export default Logo;
