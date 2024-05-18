import Image from "next/image";
import home from "@/public/home.jpg";
import { ContactForm } from "@/components/contact-form";
const LandingPage = () => {
  return (
    <div className="">
      <Image src={home} alt="landing page" fill className="object-cover" />
      <div className="flex justify-evenly items-center min-h-screen">
        <section className="z-10 text-lg">test</section>
        <section className="z-10">
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
