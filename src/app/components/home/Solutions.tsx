import pac from "../../../../public/icon/pac.svg";
import isolation from "../../../../public/icon/isolation.svg";
import menuiseries from "../../../../public/icon/menuiseries.svg";
import vmc from "../../../../public/icon/vmc.svg";
import ballon from "../../../../public/icon/ballon.svg";
import ButtonSolution from "./ButtonSolution";

function Solutions() {
  const solutions = [
    { id: 1, icon: pac, title: "Pompe à chaleur" },
    { id: 2, icon: ballon, title: "Ballon thermodynamique" },
    { id: 3, icon: isolation, title: "Isolation" },
    { id: 4, icon: vmc, title: "VMC" },
    { id: 5, icon: menuiseries, title: "Menuiserie" },
  ];
  return (
    <section className="flex flex-col gap-4 p-8 xl:px-20 2xl:px-[9.5rem] lg:my-10">
      <h3 className="text-xl font-emOne uppercase after:content-[''] after:mt-4 after:block after:w-14 after:h-[0.35rem]  after:bg-primary lg:text-2xl lg:px-[8.5rem]">
        NOS SOLUTIONS POUR VOTRE RÉNOVATION D&apos;AMPLEUR
      </h3>
      <div className="flex flex-col lg:flex-row flex-wrap gap-4 lg:px-[8.5rem] lg:gap-6 mt-10">
        {solutions.map((solution) => (
          <ButtonSolution
            key={solution.id}
            icon={solution.icon}
            title={solution.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Solutions;
