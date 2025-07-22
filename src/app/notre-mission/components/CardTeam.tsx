import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

interface CardTeamProps {
  name: string;
  role: string;
  mail: string;
  phone?: string;
  isContactPage?: boolean;
}

function CardTeam({ name, role, mail, phone, isContactPage }: CardTeamProps) {
  return (
    <div
      className={`flex items-center justify-end bg-[#F5F5F5] p-6 rounded-3xl rounded-bl-none text-secondary relative w-full md:w-96 h-36 xl:h-32 shadow-xl lg:w-[30%] lg:p-0 ${
        isContactPage ? "lg:w-full 2xl:h-48" : ""
      }`}
    >
      <div className="flex flex-col w-full pl-10">
        <h3 className=" font-emOne uppercase 2xl:text-xl">{name}</h3>
        <p className="text-xs text-primary mb-2 uppercase 2xl:text-sm">
          {role}
        </p>
        <div className="flex gap-4 items-center">
          <a
            href={`mailto:${mail}`}
            className="text-xs 2xl:text-sm hover:text-primary"
          >
            <IoMail className="text-2xl" />
          </a>
          <a
            href={`tel:${phone ? phone : ""}`}
            className="text-xs 2xl:text-sm hover:text-primary"
          >
            <FaPhoneVolume className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardTeam;
