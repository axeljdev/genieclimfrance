import midBanner from "../../../../../public/midBannerServices.png";
import Image from "next/image";

function MidBanner() {
  return (
    <div className="flex flex-col justify-center items-center bg-primary pt-12 px-8">
      <h3 className="text-2xl font-bold text-tertiary uppercase leading-relaxed">
        Engagez-vous dans la{" "}
        <span className="text-primary bg-white rounded-full px-2 py-1">
          rénovation d&apos;ampleur
        </span>{" "}
        avec Génieclim
      </h3>
      <p className="text-7xl font-bold font-emOne text-white mt-16">+ 1000</p>
      <p className="font-bold text-2xl font-kollektif text-white">
        logements rénovés
      </p>
      <div className="divider divider-neutral w-1/2 mx-auto after:bg-white before:bg-white"></div>
      <p className="text-7xl font-bold font-emOne text-white">35 M€</p>
      <p className="text-2xl font-bold font-kollektif text-white mb-16">
        d&apos;aides financières
      </p>
      <Image src={midBanner} alt="Mid Banner" className="bottom-0" />
    </div>
  );
}

export default MidBanner;
