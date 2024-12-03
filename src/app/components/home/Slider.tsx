// Import Swiper React components
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import ballon from "@/../public/ballon.png";
import isolation from "@/../public/isolation.png";
import pac from "@/../public/pac.jpg";
import vmc from "@/../public/vmc.jpg";
import menuiseries from "@/../public/menuiserie.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";

export default function App() {
  const ballonStyle = {
    backgroundImage: `url(${ballon.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const isolationStyle = {
    backgroundImage: `url(${isolation.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const pacStyle = {
    backgroundImage: `url(${pac.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const vmcStyle = {
    backgroundImage: `url(${vmc.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const menuiseriesStyle = {
    backgroundImage: `url(${menuiseries.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <style global jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #219f0b;
        }
        .swiper-pagination-progressbar {
          color: #219f0b;
          position: absolute;
          width: 100%;
        }
        @media (min-width: 1024px) {
          .swiper-pagination-progressbar {
            bottom: 0 !important;
            top: auto !important;
          }
        }
        .swiper-pagination-progressbar-fill {
          background-color: #219f0b !important;
        }
        .mySwiper {
          height: auto;
          position: relative;
        }
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: true,
        }}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="h-full lg:h-[25rem] 2xl:h-[30rem]"
      >
        <SwiperSlide style={ballonStyle}>
          <div className="lg:h-[90%] lg:w-[45rem] lg:p-10 lg:mr-60 bg-secondary/80 rounded-3xl m-6 lg:ml-4 xl:mr-[25rem] 2xl:mr-[32rem] p-6">
            <h3 className="text-white text-xl lg:text-2xl font-bold uppercase font-emOne">
              Ballon Thermodynamique
            </h3>
            <p className="text-white pt-4 lg:pt-8 lg:text-lg font-kollektif">
              Le ballon thermodynamique est la solution écologique et économique
              de référence.
            </p>
            <p className="text-white pt-4 lg:pt-4 lg:text-lg font-kollektif">
              Vous pouvez réaliser jusqu&apos;à 50% d&apos;économie sur votre
              facture d&apos;électricité en utilisant un chauffe-eau
              thermodynamique.
            </p>
            <button className="btn uppercase bg-primary text-white px-8 rounded-full mt-4 lg:mt-10 hover:bg-primary/80 font-emOne border-none">
              En savoir plus
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide style={isolationStyle}>
          <div className="lg:h-[90%] lg:w-[45rem] lg:p-10 lg:mr-60 bg-secondary/80 rounded-3xl m-6 lg:ml-4 xl:mr-[25rem] 2xl:mr-[32rem] p-6">
            <h3 className="text-white text-xl lg:text-2xl font-bold uppercase">
              Isolation (ITE, Plancher Bas, Combles)
            </h3>
            <p className="text-white pt-4 lg:pt-8 lg:text-lg font-kollektif">
              Améliorez la performance énergétique de votre maison grâce à une
              isolation sur mesure.
            </p>
            <p className="text-white pt-4 lg:pt-4 lg:text-lg font-kollektif">
              Notre programme complet inclut l&apos;isolation des combles et des
              planchers bas pour une rénovation énergétique intégrale de votre
              habitation.
            </p>
            <button className="btn uppercase bg-primary text-white px-8 rounded-full mt-4 lg:mt-10 hover:bg-primary/80 border-none">
              En savoir plus
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide style={pacStyle}>
          <div className="lg:h-[90%] lg:w-[45rem] lg:p-10 lg:mr-60 bg-secondary/80 rounded-3xl m-6 lg:ml-4 xl:mr-[25rem] 2xl:mr-[32rem] p-6">
            <h3 className="text-white text-xl lg:text-2xl font-bold uppercase">
              Pompe à Chaleur
            </h3>
            <p className="text-white pt-4 lg:pt-8 lg:text-lg font-kollektif">
              Polyvalente et performante, elle permet de chauffer votre maison
              en hiver, de la rafraîchir en été et de produire de l&apos;eau
              chaude sanitaire.
            </p>
            <p className="text-white pt-4 lg:pt-4 lg:text-lg font-kollektif">
              Elle contribue à un mode de vie plus durable tout en augmentant la
              valeur de votre habitation.
            </p>
            <button className="btn uppercase bg-primary text-white px-8 rounded-full mt-4 lg:mt-10 hover:bg-primary/80 border-none">
              En savoir plus
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide style={vmcStyle}>
          <div className="lg:h-[90%] lg:w-[45rem] lg:p-10 lg:mr-60 bg-secondary/80 rounded-3xl m-6 lg:ml-4 xl:mr-[25rem] 2xl:mr-[32rem] p-6">
            <h3 className="text-white text-xl lg:text-2xl font-bold uppercase">
              VMC
            </h3>
            <p className="text-white pt-4 lg:pt-8 lg:text-lg font-kollektif">
              Elle contribue à un mode de vie plus durable tout en augmentant la
              valeur de votre habitation.
            </p>
            <p className="text-white pt-4 lg:pt-4 lg:text-lg font-kollektif">
              Genie Clim France installe des solutions uniques et sur mesure
              pour garantir une qualité d&apos;air intérieur optimale tout en
              minimisant les pertes de chaleur.
            </p>
            <button className="btn uppercase bg-primary text-white px-8 rounded-full mt-4 lg:mt-10 hover:bg-primary/80 border-none">
              En savoir plus
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide style={menuiseriesStyle}>
          <div className="lg:h-[90%] lg:w-[45rem] lg:p-10 lg:mr-60 bg-secondary/80 rounded-3xl m-6 lg:ml-4 xl:mr-[25rem] 2xl:mr-[32rem] p-6">
            <h3 className="text-white text-xl lg:text-2xl font-bold uppercase">
              Menuiseries
            </h3>
            <p className="text-white pt-4 lg:pt-8 lg:text-lg font-kollektif">
              Optez pour des menuiseries modernes et isolantes qui améliorent à
              la fois le confort et l&apos;esthétique de votre maison.
            </p>
            <p className="text-white pt-4 lg:pt-4 lg:text-lg font-kollektif">
              Découvrez notre gamme de fenêtres, portes et volets alliant
              design, durabilité et performance énergétique.
            </p>
            <button className="btn uppercase bg-primary text-white px-8 rounded-full mt-4 lg:mt-10 hover:bg-primary/80 border-none">
              En savoir plus
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
