import pac from "../../../public/pac.webp";
import ballon from "../../../public/ballon.webp";
import isolation from "../../../public/isolation.webp";
import { StaticImageData } from "next/image";
import pacIcon from "../../../public/icon/pac.svg";
import ballonIcon from "../../../public/icon/ballon.svg";
import isolationIcon from "../../../public/icon/isolation.svg";
import pacImage from "../../../public/imgarticlepac.webp";
import ballonImage from "../../../public/ballonimg.webp";
import isolationImage from "../../../public/isolimg.webp";
import vmcIcon from "../../../public/icon/vmc.svg";
import vmcArticle from "../../../public/vmcarticle.webp";
import vmcImage from "../../../public/vmcbg.webp";
import menuiseriesIcon from "../../../public/icon/menuiseries.svg";
import menuiseriesImage from "../../../public/menuiseriebg.webp";
import menuiseriesArticle from "../../../public/menuiserieimg.webp";

type Service = {
  name: string;
  title: string;
  description: string;
  content: string[];
  image: StaticImageData;
  bgImage: string;
  icon: StaticImageData;
  titleArticle: string;
  text1?: string;
  text2?: string;
  text3?: string;
  image2: StaticImageData;
  eco: number;
  efficiency: number;
  esthetic: number;
  accordion?: {
    sections: {
      title: string;
      content: string[];
    }[];
  };
};

export const services: { [key: string]: Service } = {
  "pompe-a-chaleur": {
    name: "pompe-a-chaleur",
    title: "Votre pompe à chaleur",
    description: "Solution écologique pour le chauffage de votre maison",
    content: [
      "Polyvalente et performante, elle permet de chauffer votre maison en hiver, de la rafraîchir en été et de produire de l'eau chaude sanitaire.",
      "Elle contribue à un mode de vie plus durable tout en augmentant la valeur de votre habitation.",
    ],
    image: pac,
    bgImage: "bg-[url('/pac.jpg')]",
    icon: pacIcon,
    titleArticle: "Chauffage: La pompe à chaleur",
    text1:
      "Bénéficiez du meilleur système de chauffage du marché pour un confort thermique absolu, le tout à la force de l'air. La pompe à chaleur offre un fonctionnement simple et autonome. Vous obtenez facilement une chaleur douce et homogène dans toute votre maison.",
    text2:
      "La PAC produit de la chaleur à partir d'une énergie gratuite, celle de l'air !",
    text3: "Grâce à cela, vous réduiez vos factures de chauffage jusqu'à 80%.",
    image2: pacImage,
    eco: 93,
    efficiency: 100,
    esthetic: 95,
    accordion: {
      sections: [
        {
          title: "PAC AIR / EAU",
          content: [
            "La pompe à chaleur (PAC) air-eau est un système de chauffage, qui assure le chauffage et la production d'eau chaude de votre logement.",
            "Le fonctionnement d'une pompe à chaleur air-eau est simple :",
            "Une unité extérieure puise les calories de chaleur présentes dans l'air extérieur, ces calories sont transportées via un fluide frigorigène qui se comprime et se condense, vers l'unité intérieure, créant ainsi de la chaleur. Cette chaleur est acheminée vers vos émetteurs de chauffage (radiateurs, planchers, chauffants...) et vos points d'eau.",
          ],
        },
        {
          title: "PAC AIR / AIR",
          content: [
            "La pompe à chaleur (PAC) air-air est un système de chauffage, qui assure le chauffage et la production d'eau chaude de votre logement.",
          ],
        },
        {
          title: "BIEN CHOISIR SA PAC",
          content: [
            "La pompe à chaleur (PAC) eau-eau est un système de chauffage, qui assure le chauffage et la production d'eau chaude de votre logement.",
          ],
        },
      ],
    },
  },
  "ballon-thermodynamique": {
    name: "ballon-thermodynamique",
    title: "Votre ballon thermodynamique",
    description: "La solution écologique pour votre eau chaude",
    content: [
      "Le ballon thermodynamique est la solution écologique et économique de référence.",
      "Vous pouvez réaliser jusqu'à 50% d'économie sur votre facture d'électricité.",
    ],
    image: ballon,
    bgImage: "bg-[url('/ballon.png')]",
    icon: ballonIcon,
    titleArticle: "Eau chaude sanitaire",
    text1:
      "Choisissez le chauffe-eau thermodynamique pour la distribution d'eau chaude sanitaire dans votre maison sans interruption et à une température précise et constante à toute heure de la journée.",
    text2: "C'est la solution écologique et économique de référence.",
    text3:
      "Vous pouvez réalisez jusqu'à 50% d'économie sur votre facture d'électricité en utilisant un ballon thermodynamique.",
    image2: ballonImage,
    eco: 85,
    efficiency: 100,
    esthetic: 90,
  },
  isolation: {
    name: "isolation",
    title: "Votre isolation",
    description: "Optimisez l'efficacité énergétique de votre habitat",
    content: [
      "Améliorez la performance énergétique de votre maison grâce à une isolation sur mesure.",
      "Notre programme complet inclut l'isolation des combles et des planchers bas pour une rénovation énergétique intégrale.",
    ],
    image: isolation,
    bgImage: "bg-[url('/isolation.png')]",
    icon: isolationIcon,
    titleArticle: "Les isolation : Combles, plancher bas, ITE",
    text1:
      "Inclus dans votre programme, nous vous proposons d'isoler vos combles et vos planchers bas, pour une rénovation énergétique complète de votre maison.",
    text2:
      "Notre équipe de professionnels choisit des produits alliant confort et écologie pour une isolation saine et efficace.",
    text3:
      "Le toit est la 1er source de déperdition de chaleur dans une maison. En isolant les combles, vous réduisez jusqu'à 30% vos factures de chauffage !",
    image2: isolationImage,
    eco: 85,
    efficiency: 100,
    esthetic: 100,
    accordion: {
      sections: [
        {
          title: "Isolation des combles",
          content: [
            "Aménagés, aménageables ou perdus, nous isolons tout vos espaces en contact avec des pièces chauffées.",
            "Également, l'isolation des combles vous permet de maintenir la chaluer en hiver, vous pouvez ainsi gagner jusqu'à 3 degrés !",
            "En été, vous conservez plus longtemps la fraîcheur dans votre maison.",
            "Enfin, ces travaux vous premettent d'améliorer le DPE (Diagnostic de Performance Énergétique) de votre logement.",
            "En moyenne, vous réalisez une plus-value de 5% pour chaque classe énergétique gagnée.",
            "Notre équipe s'attarde à choisir les meilleurs produits correspondant à vos besoins.",
            "La laine est soufflée sera parfaite pour vos combles perdus, tandis que la laine en rouleaux servira vos combles aménageables ou aménagés.",
          ],
        },
        {
          title: "Isolation des planchers bas",
          content: [
            "La pompe à chaleur (PAC) air-air est un système de chauffage, qui assure le chauffage et la production d'eau chaude de votre logement.",
          ],
        },
        {
          title: "ITE (isolation thermique extérieure)",
          content: [
            "La pompe à chaleur (PAC) eau-eau est un système de chauffage, qui assure le chauffage et la production d'eau chaude de votre logement.",
          ],
        },
      ],
    },
  },
  vmc: {
    name: "vmc",
    title: "Votre VMC",
    description: "Votre VMC est une solution écologique et économique",
    content: [
      "La VMC (Ventilation Mécanique Contrôlée) est une solution écologique et économique pour votre maison.",
      "Elle permet de maintenir une qualité d'air intérieur sain et de réduire vos factures de chauffage.",
    ],
    image: vmcImage,
    bgImage: "bg-[url('/vmcbg.webp')]",
    icon: vmcIcon,
    titleArticle: "VMC : Ventilation Mécanique Contrôlée",
    text1:
      "La VMC (Ventilation Mécanique Contrôlée) est une solution écologique et économique pour votre maison.",
    text2:
      "Elle permet de maintenir une qualité d'air intérieur sain et de réduire vos factures de chauffage.",
    text3:
      "La VMC est une solution écologique et économique pour votre maison.",
    image2: vmcArticle,
    eco: 85,
    efficiency: 100,
    esthetic: 100,
  },
  menuiserie: {
    name: "menuiserie",
    title: "Vos menuiserie",
    description: "La rénovation de vos fenêtres",
    content: [
      "Votre menuiseries sont une solution écologique et économique",
      "Elle permet de maintenir une qualité d'air intérieur sain et de réduire vos factures de chauffage.",
    ],
    image: menuiseriesImage,
    bgImage: "bg-[url('/menuiseriebg.png')]",
    icon: menuiseriesIcon,
    titleArticle: "La rénovation de vos fenêtres",
    text1:
      "La menuiserie joue un rôle essentiel dans la construction et l'aménagement des espaces.",
    text2:
      "Optez pour des menuiseries modernes et isolantes pour améliorer le confort et l'esthétique de votre maison. Choisissez des fenêtres, portes et voletd qui allient design et performance énergétique pour permettre le passage des personnes, de l'air et de la lumière, tout en garantissant la protection et l'isolation thermique de votre habitation.",
    image2: menuiseriesArticle,
    eco: 85,
    efficiency: 85,
    esthetic: 100,
  },
};
