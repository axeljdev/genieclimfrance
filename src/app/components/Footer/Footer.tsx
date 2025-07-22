import SocialLink from "./SocialLink";
import { IoMail } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import Link from "next/link";
import FacebookLike from "./FacebookLike";
import Image from "next/image";

function Footer() {
  return (
    <>
      <SocialLink />
      <footer className="bg-secondary lg:flex lg:flex-row lg:justify-between text-gray-400 p-8 lg:px-28 xl:px-40 2xl:px-80">
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
          <h3 className="text-lg font-bold mt-8 lg:mt-0 text-tertiary mb-2">
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
              <a href="tel:0769762636">07 69 76 26 36</a>
            </li>
            <li className="mt-2">
              <FacebookLike />
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-tertiary mb-2 mt-8 lg:mt-0">
            Navigation
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
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-tertiary mb-2 mt-8 lg:mt-0">
            Nos solutions
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/services/pompe-a-chaleur">Pompes à chaleur</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/services/chauffe-eau-thermodynamique">
                Chauffe-eau thermodynamique
              </Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/services/isolation">Isolation</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/services/vmc">VMC</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/services/menuiserie">Menuiseries</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/services/panneaux-solaires">Panneaux solaires</Link>
            </li>
            <li className="flex items-center gap-4 mt-2">
              <Image
                src="/rge-qualipac.png"
                alt="Logo RGE Qualibat"
                width={100}
                height={100}
              />
              <Image
                src="/qualibat.jpg"
                alt="Logo RGE Qualibat"
                width={70}
                height={70}
              />
            </li>
          </ul>
        </div>
      </footer>
      <div className="bg-secondary text-center text-gray-500 py-4 px-8 lg:px-28 xl:px-40 2xl:px-80 border-t border-gray-600">
        <p className="text-sm">
          © {new Date().getFullYear()} GÉNIE CLIM FRANCE. Tous droits réservés.
        </p>
      </div>
    </>
  );
}

export default Footer;
