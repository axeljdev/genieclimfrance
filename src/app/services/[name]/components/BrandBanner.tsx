import Image from "next/image";
import daikin from "../../../../../public/daikin.svg";
import hitachi from "../../../../../public/hitachi.svg";
import panasonic from "../../../../../public/panasonic.svg";
import lg from "../../../../../public/lg.svg";

function BrandBanner() {
  return (
    <div className="flex flex-col gap-10 py-12 justify-center items-center bg-secondary">
      <h3 className="text-2xl font-bold text-primary uppercase">
        Nous installons
      </h3>
      <div className="flex flex-col justify-center items-center gap-14">
        <Image src={daikin} alt="Daikin" />
        <Image src={hitachi} alt="Hitachi" />
        <Image src={lg} alt="LG" />
        <Image src={panasonic} alt="Panasonic" />
      </div>
    </div>
  );
}

export default BrandBanner;
