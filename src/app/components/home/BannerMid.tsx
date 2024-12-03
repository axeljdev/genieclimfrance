import medals from "../../../../public/icon/medals.svg";
import euro from "../../../../public/icon/euro.svg";
import location from "../../../../public/icon/location.svg";
import ecolo from "../../../../public/icon/ecolo.svg";
import Image from "next/image";

function BannerMid() {
  return (
    <section>
      <ul className="flex flex-col lg:flex-row justify-center items-center gap-8 bg-secondary lg:items-start p-6 lg:justify-normal lg:px-[8.5rem] xl:px-32 2xl:px-52 lg:gap-12 lg:py-12">
        <li className="flex flex-col items-center gap-2 px-4 lg:w-1/4">
          <Image
            src={medals}
            alt="medals"
            className="w-24 h-24 gap-2 rounded-full bg-primary p-4"
          />
          <p className="text-white text-center font-emOne text-xs px-20 lg:px-3 2xl:px-14">
            Des professionnels qualifiés à votre écoute
          </p>
        </li>
        <li className="flex flex-col items-center gap-2 lg:w-1/4">
          <Image
            src={ecolo}
            alt="ecolo"
            className="w-24 h-24 rounded-full bg-primary p-3"
          />
          <p className="text-white text-center font-emOne text-xs px-20 lg:px-3 2xl:px-14">
            Subventions des pollueurs/payeurs
          </p>
        </li>
        <li className="flex flex-col items-center gap-2 lg:w-1/4">
          <Image
            src={location}
            alt="location"
            className="w-24 h-24 gap-2 rounded-full bg-primary p-4"
          />
          <p className="text-white text-center font-emOne text-xs px-28 lg:px-3 2xl:px-14">
            Intervention dans toute la France
          </p>
        </li>
        <li className="flex flex-col items-center gap-2 lg:w-1/4">
          <Image
            src={euro}
            alt="euro"
            className="w-24 h-24 gap-2 rounded-full bg-primary p-4"
          />
          <p className="text-white flex flex-col text-center font-emOne text-xs px-20 lg:px-3 2xl:px-14">
            Pose complète pour 1€*
            <span className="text-xs">*sous réserve d&apos;éligibilité</span>
          </p>
        </li>
      </ul>
    </section>
  );
}

export default BannerMid;