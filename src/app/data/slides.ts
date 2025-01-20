import { StaticImageData } from "next/image";
import ballon from "@/../public/ballon.webp";
import isolation from "@/../public/isolation.webp";
import pac from "@/../public/pac.webp";
import vmc from "@/../public/vmc.jpg";
import menuiseries from "@/../public/menuiserie.webp";

interface Slide {
  id: number;
  title: string;
  content: string[];
  image: StaticImageData;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "Ballon Thermodynamique",
    content: [
      "Le ballon thermodynamique est la solution écologique et économique de référence.",
      "Vous pouvez réaliser jusqu'à 50% d'économie sur votre facture d'électricité en utilisant un chauffe-eau thermodynamique.",
    ],
    image: ballon,
  },
  {
    id: 2,
    title: "Isolation (ITE, Plancher Bas, Combles)",
    content: [
      "Améliorez la performance énergétique de votre maison grâce à une isolation sur mesure.",
      "Notre programme complet inclut l'isolation des combles et des planchers bas pour une rénovation énergétique intégrale de votre habitation.",
    ],
    image: isolation,
  },
  {
    id: 3,
    title: "Pompe à Chaleur",
    content: [
      "Polyvalente et performante, elle permet de chauffer votre maison en hiver, de la rafraîchir en été et de produire de l'eau chaude sanitaire.",
      "Elle contribue à un mode de vie plus durable tout en augmentant la valeur de votre habitation.",
    ],
    image: pac,
  },
  {
    id: 4,
    title: "VMC",
    content: [
      "Elle contribue à un mode de vie plus durable tout en augmentant la valeur de votre habitation.",
      "Genie Clim France installe des solutions uniques et sur mesure pour garantir une qualité d'air intérieur optimale tout en minimisant les pertes de chaleur.",
    ],
    image: vmc,
  },
  {
    id: 5,
    title: "Menuiseries",
    content: [
      "Optez pour des menuiseries modernes et isolantes qui améliorent à la fois le confort et l'esthétique de votre maison.",
      "Découvrez notre gamme de fenêtres, portes et volets alliant design, durabilité et performance énergétique.",
    ],
    image: menuiseries,
  },
];
