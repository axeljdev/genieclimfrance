import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  return (
    <header className="relative min-h-[50vh] lg:min-h-[90vh] bg-cover bg-center bg-no-repeat lg:bg-[url('/hero-desktop.png')] bg-[url('/hero-mobile.png')]">
      <div className="container xl:mx-0 p-8 lg:px-28 lg:py-16 2xl:p-28 2xl:px-48">
        <div className="max-w-[50rem] flex flex-col items-center lg:items-start">
          <h1 className="text-white text-2xl lg:text-5xl xl:text-6xl lg:leading-tight xl:leading-tight uppercase font-bold mb-8">
            Votre programme de rénovation énergétique{" "}
            <span className="text-primary bg-tertiary rounded-full px-2 lg:px-5 text-nowrap">
              sur mesure
            </span>
          </h1>
          <p className="text-white text-2xl font-bold uppercase lg:pr-28 xl:mt-8">
            Bénéficiez de toute votre installation pour{" "}
            <span className="text-primary bg-tertiary rounded-lg px-3 py-1 lg:pt-3 text-4xl lg:text-8xl font-emOne inline-block align-middle ml-2 mt-1">
              1€*
            </span>
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center lg:mt-10 xl:mt-16 font-emOne lg:gap-8 xl:gap-10">
            <Link
              href="/eligibility"
              className="btn xl:btn-lg bg-primary text-white text-lg xl:text-xl font-bold uppercase mt-8 px-8 lg:mt-0 rounded-full hover:bg-hover"
            >
              Test d&apos;éligibilité
              <IoIosArrowForward />
            </Link>
            <Link
              href="/eligibility"
              className="btn xl:btn-lg bg-secondary border-none text-white text-md xl:text-lg font-bold uppercase mt-4 lg:mt-0 px-4 rounded-full hover:bg-secondary/80"
            >
              Contactez-nous
            </Link>
          </div>
          <p className="text-white text-xs mt-8 font-kollektif pt-10">
            * Eligibilité et restant dû à charge défini selon les revenus du
            foyer et les caractéristiques du bien concerné.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
