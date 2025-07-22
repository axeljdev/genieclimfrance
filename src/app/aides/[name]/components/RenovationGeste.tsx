import Image from "next/image";
import Link from "next/link";

function RenovationGeste() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="flex flex-col pb-80 lg:pb-10 lg:flex-row bg-[url('/hero-mobile-pages.webp')] lg:bg-[url('/hero-desktop-history.webp')] bg-cover bg-center bg-no-repeat px-8 py-12 lg:items-center lg:pl-20 lg:pr-0 2xl:pl-64 2xl:pr-0 relative">
        <div className="lg:w-2/3 lg:px-16">
          <h1 className="text-3xl font-emOne uppercase text-tertiary mb-8 lg:mb-10 leading-tight lg:text-4xl">
            Rénovation{" "}
            <span className="text-primary bg-tertiary rounded-full text-nowrap px-2 lg:px-4">
              geste par geste
            </span>
          </h1>
          <p className="text-xl font-kollektif text-tertiary mb-6">
            Des économies, un geste après l&apos;autre.
          </p>
          <p className="text-xl font-kollektif text-tertiary">
            La rénovation par geste est idéale pour rénover votre logement étape
            par étape. Chauffage, isolation, menuiseries... chaque intervention
            est financée par l&apos;État.
          </p>
        </div>
        <div className="absolute bottom-2 right-0 lg:relative lg:bottom-auto lg:right-auto lg:flex lg:justify-end lg:items-center lg:flex-1 lg:pr-0">
          <Image
            src="/help.png"
            alt="Aide et conseil"
            width={500}
            height={400}
            className="w-92 h-80 lg:w-full lg:h-auto"
          />
        </div>
      </header>

      {/* Section explication */}
      <section className="py-16 px-8 lg:px-28 xl:px-40 2xl:px-80">
        <h2 className="text-3xl font-bold uppercase mb-8">
          Qu&apos;est-ce qu&apos;une rénovation geste par geste ?
        </h2>
        <div>
          <p className="text-lg mb-8">
            Contrairement à une rénovation globale, ce parcours vous permet
            d&apos;agir selon vos priorités : une fenêtre aujourd&apos;hui, une
            pompe à chaleur demain. Plus flexible et plus accessible, c&apos;est
            une solution pour tous les budgets.
          </p>

          <h3 className="text-2xl font-bold mb-6 text-green-600 uppercase">
            LES ATOUTS DE LA RÉNOVATION GESTE PAR GESTE
          </h3>

          <p className="text-lg mb-8">
            Le parcours de rénovation par geste est très adapté aux
            propriétaires souhaitant rénover leur logement étape par étape, en
            fonction de leurs priorités et de leur budget. Voici les principaux
            avantages de ce type de rénovation :
          </p>

          <ul className="space-y-8 list-disc list-inside">
            <li className="text-lg">
              Flexibilité accrue : vous planifiez vos travaux à votre rythme, en
              choisissant le moment et l&apos;ordre des interventions pour
              minimiser les désagréments liés aux chantiers. Cela vous permet
              aussi de mesurer les bénéfices de chaque amélioration au fur et à
              mesure.
            </li>
            <li className="text-lg">
              Adaptation budgétaire : vous adaptez vos travaux à vos capacités
              financières, en répartissant les coûts dans la durée. Résultat,
              vous contrôler vos dépenses tout en bénéficiant des aides
              disponibles pour chaque poste de travaux.
            </li>
            <li className="text-lg">
              Amélioration progressive : vous optimisez peu à peu
              l&apos;efficacité énergétique de votre logement ainsi que votre
              confort thermique.
            </li>
          </ul>
        </div>
      </section>

      {/* Conditions d'éligibilité */}
      <section className="py-10 px-8 lg:px-28 xl:px-40 2xl:px-80">
        <h2 className="text-2xl font-bold uppercase mb-8 after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mt-4">
          Conditions d&apos;éligibilité
        </h2>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:items-center">
            <div className="lg:col-span-2">
              <p className="text-lg mb-6">
                L’octroi des aides financières à la rénovation repose sur le
                respect de certains critères d’éligibilité. MaPrimeRénov’ pour
                la rénovation par geste ne fait pas exception. Découvrez les
                prérequis à remplir pour en bénéficier.
              </p>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  Qui sont les acquéreurs ?
                </h3>
                <ul className="flex flex-col gap-4">
                  <li>
                    - Un logement occupé à titre de résidence principale (occupé
                    au moins 8 mois par an). L’engagement d’occupation pourra
                    être vérifié dans un délai d’un an à compter de la date de
                    la demande de solde.
                  </li>
                  <li>
                    - Un logement construit depuis au moins 15 ans en Métropole
                    et 2 ans en Outre-mer. Les propriétaires bailleurs doivent
                    s’engager sur l’honneur à louer leur bien en tant que
                    résidence principale sur une durée d’au moins 6 ans et dans
                    un délai d’un an suivant la date de demande de paiement du
                    solde de la prime (ce délai d’un an est applicable aux
                    propriétaires bailleurs aux revenus supérieurs et
                    intermédiaires et sera prochainement applicable aux
                    propriétaires bailleurs modestes et très modestes). Si un
                    propriétaire cesse de louer le logement avant cette durée de
                    6 ans, il devra rembourser une partie de l’aide perçue (1/6
                    de l’aide perçue pour chaque année non louée).
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 mt-4">
                  Les acquéreurs d&apos;un logement sont également éligibles
                </h3>
                <p className="mb-6">
                  Dans le cas où le logement fait l’objet d’une acquisition en
                  cours à la date du dépôt de la demande le compromis de vente
                  peut être joint par les demandeurs aux revenus intermédiaires
                  ou supérieurs (cette mesure sera prochainement également
                  appliquée aux demandeurs aux revenus modestes et très
                  modestes) lors de la demande de prime. Ils devront fournir
                  l’acte de vente définitif lors de la demande de solde.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1 flex flex-col gap-4">
              <div className="bg-primary text-white p-6 rounded-xl">
                <p className="text-sm mb-4">
                  Hors cas des associés de SCI occupants le logement tels que
                  décrit supra, les SCI ne sont pas éligibles à l’aide MPR’. Les
                  travaux restent néanmoins finançables au titre des autres
                  dispositifs d’aides mis en place par l’État, tel les
                  certificats d’économie d’énergie.
                </p>
              </div>
              <div className="bg-primary text-white p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-4">
                  Une exception pour remplacer une chaudière au fioul
                </h4>
                <p className="text-sm mb-4">
                  À titre exceptionnel, il est possible de bénéfi-cier de
                  MaPrimeRénov’ dans un logement de moins de 15 ans pour
                  l’installation d’un nouvel équipement de chauffage et/ou de
                  produc-tion d’eau chaude sanitaire en remplacement d’une
                  chaudière au fioul (avec dépose de cuve à fioul). Les ménages
                  concernés doivent demander simultanément une prime « dépose de
                  cuve à fioul ».
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les travaux éligibles */}
      <section className="py-16 px-8 lg:px-28 xl:px-40 2xl:px-80">
        <h2 className="text-3xl font-bold uppercase mb-12">
          Les travaux éligibles
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16">
              <Image
                src="/icon-aides/pac.svg"
                alt="Pompe à chaleur AIR/AIR"
                width={60}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 className="font-bold text-sm">Pompe à chaleur AIR/AIR</h4>
            <p className="text-sm">Pompe à chaleur AIR/EAU</p>
          </div>

          <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16">
              <Image
                src="/icon-aides/ballon.svg"
                alt="Ballon thermodynamique"
                width={60}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 className="font-bold text-sm">Ballon thermodynamique</h4>
          </div>

          <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16">
              <Image
                src="/icon-aides/menuiseries.svg"
                alt="Menuiseries"
                width={60}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 className="font-bold text-sm">Menuiseries</h4>
          </div>

          <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16">
              <Image
                src="/icon-aides/combles.svg"
                alt="Isolation des combles soufflés"
                width={60}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 className="font-bold text-sm"></h4>
          </div>

          <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16">
              <Image
                src="/icon-aides/poele.svg"
                alt="Poële à granules"
                width={60}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 className="font-bold text-sm">Poële à granules</h4>
          </div>

          <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16">
              <Image
                src="/icon-aides/chauffe-eau.svg"
                alt="Chauffe-eau solaire"
                width={60}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 className="font-bold text-sm">Chauffe-eau solaire</h4>
          </div>

          <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16">
              <Image
                src="/icon-aides/panneausol.svg"
                alt="panneaux photovoltaïques"
                width={60}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 className="font-bold text-sm">panneaux photovoltaïques</h4>
          </div>
        </div>
      </section>

      {/* Carte des zones 2025 */}
      <section className="py-16 px-8 lg:px-28 xl:px-40 2xl:px-80">
        <h2 className="text-3xl font-bold uppercase mb-12">
          Carte des zones 2025
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block">
            <Image
              src="/francemap.png"
              alt="Carte des zones climatiques France 2025"
              width={600}
              height={700}
              className=""
            />
          </div>
          <p className="text-lg mt-8 text-gray-600">
            Zones climatiques H1, H2, H3 et territoires d&apos;outre-mer -
            Consultez votre zone pour connaître vos aides spécifiques
          </p>
        </div>
      </section>

      <section className="bg-primary m-4 rounded-2xl text-white py-16 px-8 mb-10 lg:mx-28 xl:mx-40 2xl:mx-96">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <Image
                src="/women-thumb.png"
                alt=""
                width={300}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="lg:w-2/3">
              <div className="bg-black rounded-full p-2 px-4 mb-4 inline-block">
                <span className="text-sm">
                  Pompe à chaleur • 2 gestes d&apos;isolation
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-6">
                VOTRE PARCOURS GÉNIECLIM FRANCE
              </h3>
              <h4 className="text-xl mb-4 font-semibold italic">
                UN ACCOMPAGNEMENT DE A À Z
              </h4>
              <p className="text-lg mb-6">
                De la visite initiale jusqu&apos;à la demande de visite,
                GénieClim vous guide à chaque étape. Grâce à notre expertise et
                parcours expérimenté, vous bénéficiez d&apos;un montage de
                dossier rapide et complet, pour des travaux sereins et financés.
              </p>
              <Link
                href={"/eligibility"}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-black hover:text-white transition-colors text-nowrap"
              >
                ESTIMER MON INSTALLATION →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RenovationGeste;
