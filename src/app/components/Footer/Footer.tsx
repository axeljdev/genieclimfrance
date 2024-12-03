import SocialLink from "./SocialLink";
import { IoMail } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import Link from "next/link";

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
              <p>contact@genieclimfrance.fr</p>
            </li>
            <li className="flex items-center gap-2 hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <IoMdPhonePortrait className="text-primary" />
              <p>09 72 12 14 01</p>
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
              <Link href="/">Nos produits</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/">Solution de financement</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/">Contactez-nous</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/">A propos</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/">Mentions légales</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-tertiary mt-8 mb-2">
            Produits
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/">PAC Air / Air</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/">PAC Air / Eau</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/">Ballon thermodynamique</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/">Isolation</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
