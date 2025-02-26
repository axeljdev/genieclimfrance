import CardTeam from "./CardTeam";
import cards from "@/app/data/team";

function OurTeam() {
  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-xl lg:text-2xl font-emOne uppercase text-secondary mb-4 mt-8 lg:mb-2 lg:mt-16 2xl:text-3xl">
          Notre équipe
        </h3>
        <p className="font-emOne uppercase lg:text-xl text-primary after:content-[''] after:block after:w-10 after:h-1 after:bg-primary after:mt-2 after:mb-4 2xl:text-2xl">
          Expertise. Passion. Sourire.
        </p>
        <div className="flex flex-wrap gap-14 mt-16 lg:gap-10">
          {cards.map((card) => (
            <CardTeam key={card.id} {...card} />
          ))}
          <a
            href="https://fr.indeed.com/cmp/Genie-Clim-France/jobs"
            target="_blank"
            className="bg-primary text-tertiary w-full text-center py-10 rounded-lg shadow-xl uppercase font-emOne hover:bg-primary/80 transition-all duration-300 lg:w-[30%] flex justify-center items-center"
          >
            Nous rejoindre
          </a>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
