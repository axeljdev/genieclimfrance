import Image from "next/image";
import imgGcf from "@/../public/img-gcf.png";

function Article() {
  return (
    <article className="flex flex-col lg:items-center lg:justify-center xl:gap-14 lg:flex-row p-8 xl:px-20 lg:p-24 2xl:px-36">
      <div className="lg:w-1/2 2xl:text-xl">
        <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold uppercase pb-1 font-emOne">
          Génieclim france
        </h2>
        <h3 className="text-sm font-bold uppercase pb-4 2xl:text-xl after:content-[''] after:mt-2 after:block after:w-10 after:h-[0.35rem] after:bg-primary font-emOne">
          La référence de la rénovation globale énergétique
        </h3>
        <p className="pb-4 font-kollektif lg:pt-6">
          GénieClim France, votre partenaire de confiance pour tous vos besoins
          en rénovation énergétique.
        </p>
        <p className="pb-4 font-kollektif">
          Notre mission est de vous accompagner vers un avenir plus durable,
          économique et respectueux de l&apos;environnement en transformant
          votre habitation en un lieu plus éco-responsable.
        </p>
        <p className="pb-4 font-kollektif">
          Nous vous offrons des solutions clé en main pour améliorer
          l&apos;efficacité énergétique de votre maison. Que ce soit
          l&apos;isolation, installation de pompe à chaleur, d&apos;un ballon
          thermodynamique, nous avons l&apos;expertise pour réaliser des travaux
          de qualité inscrits dans le cadre du certificat d&apos;économie
          d&apos;énergie CEE.
        </p>
      </div>
      <div className="lg:w-fit lg:pl-16">
        <Image src={imgGcf} alt="Génieclim france" />
      </div>
    </article>
  );
}

export default Article;
