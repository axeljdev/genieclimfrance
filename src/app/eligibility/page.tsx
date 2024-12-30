import Form from "./components/Form";

function page() {
  return (
    <>
      <header className="lg:bg-[url('/img-formulaire.png')] bg-[url('/hero-mobile-pages.png')] bg-cover bg-center bg-no-repeat flex p-4 font-kollektif lg:p-0">
        <aside className="hidden lg:block text-4xl font-emOne uppercase text-primary mb-8 lg:mb-10 bg-primary rounded-xl w-[">
          1€
        </aside>
        <Form />
      </header>
      <article className="flex flex-col items-center px-8 py-12 lg:px-20 2xl:px-40">
        <h2 className=" text-2xl font-emOne uppercase text-secondary pb-8 after:content-[''] after:block after:w-10 after:h-1 after:bg-primary  after:mt-4">
          Un accompagnement 100% personnalisé à chaque projet
        </h2>
        <p className="text-lg font-kollektif text-secondary pb-8">
          Notre cabinet vous accompagne dans le financement de votre rénovation
          énergétique. Notre programme de rénovation énergétique est un
          dispositif qui s&apos;inscrit dans le cadre des certificats
          d&apos;énergie CEE. Ce dispositif a été mis en place depuis plus de
          deux ans en France
        </p>
        <p className="text-xl font-bold font-kollektif text-secondary">
          Rénover votre logement n&apos;a jamais été aussi facile avec GENIE
          CLIM FRANCE.
        </p>
      </article>
    </>
  );
}

export default page;
