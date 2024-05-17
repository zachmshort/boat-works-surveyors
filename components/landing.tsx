import Image from "next/image";
import home from "@/public/home.jpg";
const LandingPage = () => {
  return (
    <>
      <Image src={home} alt="landing page" fill className="object-cover" />
    </>
  );
};

export default LandingPage;
