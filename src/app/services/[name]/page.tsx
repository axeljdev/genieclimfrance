import { services } from "@/app/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import Buttons from "./components/Buttons";
export default function ServicePage({ params }: { params: { name: string } }) {
  const service = services[params.name];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen relative">
      <header
        className={`relative flex flex-col items-center ${service.bgImage} bg-cover bg-center bg-no-repeat px-8 py-24 lg:px-20 2xl:px-40`}
      >
        <div className="absolute inset-0 bg-black/30" />
        <Image
          src={service.icon}
          alt={service.title}
          width={80}
          height={80}
          className="brightness-0 invert"
        />
        <div className="relative z-10 lg:w-2/3 lg:px-16">
          <h1 className="text-3xl text-center mt-8 font-emOne uppercase text-tertiary">
            Votre {service.title}
          </h1>
        </div>
      </header>
      <Buttons />
    </div>
  );
}
