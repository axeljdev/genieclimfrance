import pac from "../../../public/pac.jpg";
import ballon from "../../../public/ballon.png";
import isolation from "../../../public/isolation.png";
import { StaticImageData } from "next/image";
import pacIcon from "../../../public/icon/pac.svg";
import ballonIcon from "../../../public/icon/ballon.svg";
import isolationIcon from "../../../public/icon/isolation.svg";

type Service = {
  name: string;
  title: string;
  description: string;
  content: string[];
  image: StaticImageData;
  bgImage: string;
  icon: StaticImageData;
};

export const services: { [key: string]: Service } = {
  "pompe-a-chaleur": {
    name: "pompe-a-chaleur",
    title: "Pompe à Chaleur",
    description: "Solution écologique pour le chauffage de votre maison",
    content: [
      "Polyvalente et performante, elle permet de chauffer votre maison en hiver, de la rafraîchir en été et de produire de l'eau chaude sanitaire.",
      "Elle contribue à un mode de vie plus durable tout en augmentant la valeur de votre habitation.",
    ],
    image: pac,
    bgImage: "bg-[url('/pac.jpg')]",
    icon: pacIcon,
  },
  "ballon-thermodynamique": {
    name: "ballon-thermodynamique",
    title: "Ballon Thermodynamique",
    description: "La solution écologique pour votre eau chaude",
    content: [
      "Le ballon thermodynamique est la solution écologique et économique de référence.",
      "Vous pouvez réaliser jusqu'à 50% d'économie sur votre facture d'électricité.",
    ],
    image: ballon,
    bgImage: "bg-[url('/ballon.png')]",
    icon: ballonIcon,
  },
  isolation: {
    name: "isolation",
    title: "Isolation",
    description: "Optimisez l'efficacité énergétique de votre habitat",
    content: [
      "Améliorez la performance énergétique de votre maison grâce à une isolation sur mesure.",
      "Notre programme complet inclut l'isolation des combles et des planchers bas pour une rénovation énergétique intégrale.",
    ],
    image: isolation,
    bgImage: "bg-[url('/isolation.png')]",
    icon: isolationIcon,
  },
};
