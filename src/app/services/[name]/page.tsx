import { services } from "@/app/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import Buttons from "./components/Buttons";
import ProgressBar from "./components/ProgressBar";
import Accordion from "./components/Accordion";
import BrandBanner from "./components/BrandBanner";
import MidBanner from "./components/MidBanner";
import FormDevis from "@/app/components/home/FormDevis";

export default async function ServicePage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = await params;
  const service = services[name];

  if (!service) {
    notFound();
  }

  return (
    <>
      <div className="relative">
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
          <div className="relative z-5 lg:w-2/3 lg:px-16">
            <h1 className="text-3xl text-center mt-8 font-emOne uppercase text-tertiary">
              Votre {service.title}
            </h1>
          </div>
        </header>
        <Buttons />
      </div>
      <article className="px-8 lg:px-20 2xl:px-40 pt-32">
        <h2 className="text-xl font-emOne uppercase after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mt-4">
          {service.titleArticle}
        </h2>
        <p className="text-lg mt-8">{service.text1}</p>
        <p className="text-lg mt-4">{service.text2}</p>
        <p className="text-lg mt-4">{service.text3}</p>
      </article>
      <aside className="flex flex-col justify-center gap-4 bg-[#f5f5f5] m-8 rounded-xl p-8">
        <ProgressBar
          percentage={93}
          animation="animate-fill-93"
          title="Économie"
        />
        <ProgressBar
          percentage={100}
          animation="animate-fill-100"
          title="Efficacité"
        />
        <ProgressBar
          percentage={95}
          animation="animate-fill-95"
          title="Esthétique"
        />
      </aside>
      <div className="flex justify-center m-8">
        <Image
          src={service.image2}
          alt={service.title}
          className="rounded-xl shadow-xl"
        />
      </div>
      {service.name === "pompe-a-chaleur" && <Accordion />}
      <BrandBanner />
      <MidBanner />
      <section className="flex flex-col items-center justify-center gap-8">
        <h3 className="text-2xl font-emOne uppercase text-center after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mt-4 after:mx-auto mt-16">
          Prêt à faire de réelles économies ?
        </h3>
        <FormDevis />
      </section>
    </>
  );
}
