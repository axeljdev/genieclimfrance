import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

function Buttons() {
  return (
    <div className="flex flex-col justify-center items-center absolute top-[19.5rem] w-full">
      <Link href="/contact">
        <button className="btn btn-lg min-w-[24rem] shadow-md flex items-center justify-between bg-primary border-none text-white text-md xl:text-lg font-bold uppercase mt-4 rounded-xl hover:bg-secondary lg:mt-16">
          Obtenir un devis
          <IoIosArrowForward className="ml-2" />
        </button>
      </Link>
      <Link href="/contact">
        <button className="btn btn-lg bg-tertiary shadow-md text-secondary self-center text-md xl:text-lg font-bold uppercase mt-2 rounded-xl hover:bg-secondary hover:text-white lg:mt-16">
          Estimer mes aides financières
          <IoIosArrowForward className="ml-2" />
        </button>
      </Link>
    </div>
  );
}

export default Buttons;
