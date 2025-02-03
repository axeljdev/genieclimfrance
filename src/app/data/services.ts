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
    bgImage: "bg-[url('/pac.webp')]",
    icon: pacIcon,
    titleArticle: "Chauffage: La pompe à chaleur",
    text1:
      "Bénéficiez du meilleur système de chauffage du marché pour un confort thermique absolu, le tout à la force de l'air. La pompe à chaleur offre un fonctionnement simple et autonome. Vous obtenez facilement une chaleur douce et homogène dans toute votre maison.",
    text2:
      "La PAC produit de la chaleur à partir d'une énergie gratuite, celle de l'air !",
    text3: "Grâce à cela, vous réduisez vos factures de chauffage jusqu'à 80%.",
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
            "La pompe à chaleur Air/Air est un système de chauffage et de climatisation réversible qui capte les calories de l'air extérieur pour les transformer en chaleur dans votre logement. En été, elle fonctionne en sens inverse pour rafraîchir votre intérieur, garantissant ainsi un confort optimal toute l'année.",
            "Le fonctionnement d'une PAC Air/Air s'appuie sur quatre principes essentiels :",
            "Capture de l'énergie : L'unité extérieure capte les calories présentes dans l'air, même en période de froid.",
            "Compression : Ces calories sont converties en chaleur grâce à un fluide frigorigène circulant dans le système.",
            "Diffusion de la chaleur : L'air chaud est distribué dans votre habitation par des unités murales, des consoles ou des gaines, selon votre configuration.",
            "Mode réversible : En été, le système inverse son fonctionnement pour extraire la chaleur de votre intérieur et le rafraîchir.",
          ],
        },
        {
          title: "BIEN CHOISIR SA PAC",
          content: [
            "Les deux principales caractéristiques à connaître pour juger de la performance d'une pompe à chaleur sont :",
            "- le coefficient de performance (COP) indiqué en valeur saisonnière (SCOP pour le chauffage, SEER pour le rafraîchissement pour la PAC air-air), qui représente le nombre de kWh de chaleur produits, pour 1 kWh d'électricité consommée ;",
            "- la puissance calorifique (en kW) qui représente la capacité de production de chaleur de la PAC : la puissance moyenne des PAC air-air se situe entre 2 et 20 kW.",
            "Où placer le groupe extérieur ?",
            "Nous vous conseillons tout de même de choisir un emplacement qui occasionne le moins de bruit possible pour votre voisinage (distance minimale, éviter les angles et recoins qui renvoient le son), mais aussi pour vous !",
            "Choisissez un emplacement éloigné de vos fenêtres. Notez néanmoins que les modèles récents de pompes à chaleur sont moins bruyants, et que vous pouvez, si besoin, installer des plots antivibratiles ou un écran phonique pour atténuer le bruit.",
            "Vous aurez en plus besoin d’un emplacement dans votre logement pour installer l’unité intérieure. La jonction entre les deux est assurée par un circuit de fluide frigorigène.",
            "Dois-je prendre un contrat d'entretien pour ma PAC ?",
            "Il est fortement recommandé de prendre un contrat d'entretien. 1 fois par an, votre matériel est entretenu et vérifié par une équipe de professionnel.",
            "Notre équipe commerciale reste disponible pour vous proposer un contrat sur-mesure répondant à vos besoins.",
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
    bgImage: "bg-[url('/ballon.webp')]",
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
    accordion: {
      sections: [
        {
          title: "En résumé",
          content: [
            "Utilisant les calories présentes dans l’air pour chauffer votre eau, le cumulus thermodynamique est une installation écologique et abordable.",
            "Le chauffe-eau thermodynamique, ou CET, capte l’énergie gratuite présente dans l’air grâce à son fonctionnement comparable à une pompe à chaleur aérothermique, ce qui lui permet de consommer jusqu’à 3 fois moins d’énergie qu’un chauffe-eau électrique.",
            "Un ballon thermodynamique émet 10 fois moins de CO2 qu’un chauffe-eau fonctionnant au gaz ou au fioul selon la marque retenue. Comme il ne rejette quasiment pas de gaz à effet de serre, son impact sur l’environnement est minime.",
            "L’échangeur restitue ensuite la chaleur créée au ballon d’eau pour produire de l’eau chaude sanitaire.",
            "Le processus se répète chaque fois que le fluide redevient liquide.",
            "Si les températures extérieures sont trop faibles en hiver, un système électrique prend le relais du CET, de même si votre consommation connaît un bref pic.",
            "Le chauffe-eau thermodynamique présente son meilleur rendement à des températures comprises entre -5°C et 35°C. S’il fait plus froid chez vous l’hiver, vous devrez coupler votre CET avec un système de chauffage électrique de l’eau.",
            "Cette solution de secours reste dédiée aux situations occasionnelles. Si vous utilisez votre chauffe-eau thermodynamique dans des conditions optimales, sa consommation d’électricité sera réduite.",
            "Pour installer un chauffe-eau thermodynamique, nous réalisons trois types de raccordement : électrique, hydraulique et aéraulique. Cela peut sembler technique, mais en réalité l’installation d’un chauffe-eau thermodynamique prend environ 4 petites heures le temps de procéder à tous les raccordements.",
            "Vous serez également satisfait d’apprendre qu’un CET ne nécessite pas de contrat d’entretien. Une ou deux fois par an, détartrez la cuve et l’anode de votre chauffe-eau pour optimiser son fonctionnement pour les mois suivants.",
            "L'entretien d'un chauffe-eau thermodynamique est vraiment très simple et rapide !",
          ],
        },
      ],
    },
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
    bgImage: "bg-[url('/isolation.webp')]",
    icon: isolationIcon,
    titleArticle: "Les isolation : Combles, plancher bas, ITE",
    text1:
      "Inclus dans votre programme, nous vous proposons d'isoler vos combles et vos planchers bas, pour une rénovation énergétique complète de votre maison.",
    text2:
      "Notre équipe de professionnels choisit des produits alliant confort et écologie pour une isolation saine et efficace.",
    text3:
      "Le toit est la 1ère source de déperdition de chaleur dans une maison. En isolant les combles, vous réduisez jusqu'à 30% vos factures de chauffage !",
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
            "Également, l'isolation des combles vous permet de maintenir la chaleur en hiver, vous pouvez ainsi gagner jusqu'à 3 degrés !",
            "En été, vous conservez plus longtemps la fraîcheur dans votre maison.",
            "Enfin, ces travaux vous permettent d'améliorer le DPE (Diagnostic de Performance Énergétique) de votre logement.",
            "En moyenne, vous réalisez une plus-value de 5% pour chaque classe énergétique gagnée.",
            "Notre équipe s'attarde à choisir les meilleurs produits correspondant à vos besoins.",
            "La laine soufflée sera parfaite pour vos combles perdus, tandis que la laine en rouleaux servira vos combles aménageables ou aménagés.",
          ],
        },
        {
          title: "Isolation des planchers bas",
          content: [
            "L'isolation des planchers bas est essentielle pour limiter les pertes de chaleur par le sol, représentant jusqu'à 10 % des déperditions énergétiques d'un logement.",
            "Une isolation efficace de vos planchers améliore votre confort thermique en toute saison et permet de réaliser des économies d'énergie importantes. Cette solution élimine la sensation désagréable de sol froid et prévient les remontées d'humidité.",
            "Chez Genie Clim France, nous vous proposons des techniques d'isolation performantes adaptées à votre habitation, garantissant un confort durable et une réduction de vos factures.",
          ],
        },
        {
          title: "ITE (isolation thermique extérieure)",
          content: [
            "L'Isolation Thermique par l'Extérieur (ITE) consiste à envelopper votre habitation d'une couche isolante pour réduire significativement les pertes de chaleur.",
            "Cette solution présente plusieurs avantages majeurs : elle améliore la performance énergétique, élimine les ponts thermiques, assure un meilleur confort quelle que soit la saison et augmente la valeur de votre bien immobilier.",
            "L'ITE permet également de moderniser l'aspect de votre façade. Avec Genie Clim France, profitez d'une isolation personnalisée, mise en œuvre par des experts, pour un habitat plus économique et respectueux de l'environnement.",
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
    accordion: {
      sections: [
        {
          title: "VMC : Ventilation Mécanique Contrôlée",
          content: [
            "La VMC est essentielle pour garantir un air intérieur sain et limiter l’humidité dans votre logement.",
            "Elle renouvelle l’air en continu, éliminant les polluants, les mauvaises odeurs et l’excès d’humidité, tout en préservant la qualité de l’air que vous respirez.",
            "Opter pour une VMC performante, c’est :",
            "Améliorer la qualité de l’air intérieur en évacuant l’humidité et les allergènes.",
            "Réaliser des économies d’énergie grâce à un système optimisé.",
            "Prévenir les problèmes d’humidité et de moisissures dans votre maison.",
          ],
        },
      ],
    },
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
    bgImage: "bg-[url('/menuiseriebg.webp')]",
    icon: menuiseriesIcon,
    titleArticle: "La rénovation de vos fenêtres",
    text1:
      "La menuiserie joue un rôle essentiel dans la construction et l'aménagement des espaces.",
    text2:
      "Optez pour des menuiseries modernes et isolantes pour améliorer le confort et l'esthétique de votre maison. Choisissez des fenêtres, portes et volets qui allient design et performance énergétique pour permettre le passage des personnes, de l'air et de la lumière, tout en garantissant la protection et l'isolation thermique de votre habitation.",
    image2: menuiseriesArticle,
    eco: 85,
    efficiency: 85,
    esthetic: 100,
    accordion: {
      sections: [
        {
          title: "La rénovation de vos fenêtres",
          content: [
            "Les fenêtres jouent un rôle clé dans la performance énergétique de votre logement. Mal isolées, elles peuvent représenter jusqu’à 15 % des pertes de chaleur.",
            "Fenêtres en PVC Blanc",
            "Les fenêtres en PVC blanc sont la solution idéale pour améliorer l’isolation thermique et acoustique de votre logement. Chez Genie Clim France, nous vous proposons des fenêtres sur-mesure.",
            "Grâce à leurs excellentes performances d’isolation thermique, nos fenêtres en PVC blanc limitent les déperditions énergétiques, réduisent les nuisances sonores et contribuent à la baisse de vos factures de chauffage. Robustes, faciles d’entretien et résistantes aux intempéries, elles offrent également un design sobre et intemporel qui s’intègre parfaitement à tous les styles d’habitations.",
          ],
        },
      ],
    },
  },
};
