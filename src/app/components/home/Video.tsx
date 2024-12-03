import Image from "next/image";
import video from "../../../../public/video.svg";

function Video() {
  return (
    <section className="flex flex-col p-8 xl:px-20 2xl:px-[9.5rem]">
      <h4 className="text-xl font-emOne uppercase text-nowrap after:content-[''] after:mt-2 after:block after:w-10 after:h-[0.35rem]  after:bg-primary lg:text-2xl lg:px-[8.5rem]">
        Ils nous ont fait confiance !
      </h4>
      <Image
        src={video}
        alt="Génieclim france"
        className="w-72 pt-8 lg:mx-[8.5rem]"
      />
    </section>
  );
}

export default Video;
