import SocialLink from "./SocialLink";
import { IoMail } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import Link from "next/link";
import FacebookLike from "./FacebookLike";

function Footer() {
  return (
    <>
      <SocialLink />
      <footer className="bg-secondary lg:flex lg:flex-row lg:justify-between text-gray-400 p-8">
        <div className="lg:w-[30%]">
          <h3 className="text-lg font-bold text-tertiary mb-4">
            GÉNIE CLIM FRANCE
          </h3>
          <p>
            est le spécialiste de la rénovation globale énergétique. Profitez de
            la rénovation de votre système de chauffage, de distribution
            d&apos;eau chaude sanitaire mais également de votre isolation à prix
            mini
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mt-8 text-tertiary mb-2">
            Coordonnées
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <IoMail className="text-primary" />
              <a href="mailto:contact@genieclimfrance.fr">
                contact@genieclimfrance.fr
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <IoMdPhonePortrait className="text-primary" />
              <a href="tel:0972121401">09 72 12 14 01</a>
            </li>
            <li className="mt-2">
              <FacebookLike />
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-tertiary mt-8 mb-2">
            Liens utiles
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/">Accueil</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/notre-mission">Notre mission</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/eligibility">Éligibilité</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/notre-mission#retrouvez-nous">Contactez-nous</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-tertiary mt-8 mb-2">
            Produits
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/services/pompe-a-chaleur">Pompe à chaleur</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/services/vmc">VMC</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/services/ballon-thermodynamique">
                Ballon thermodynamique
              </Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/services/isolation">Isolation</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/services/menuiserie">Menuiseries</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
