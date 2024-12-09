function Accordion() {
  return (
    <>
      <div className="collapse relative group">
        <div className="absolute left-0 top-2 bottom-2 w-4 rounded-full bg-gray-400 [&:has(+input:checked)]:bg-primary"></div>
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          <span className="ml-4 font-bold text-primary">PAC AIR / EAU</span>
        </div>
        <div className="collapse-content">
          <p className="ml-4 mr-4">
            La pompe à chaleur (PAC) air-eau est un système de chauffage, qui
            assure le chauffage et la production d&apos;eau chaude de votre
            logement.
          </p>
          <p className="ml-4 mr-4">
            Le fonctionnement d&apos;une pompe à chaleur air-eau est simple :
          </p>
          <p className="ml-4 mr-4">
            Une unité extérieure puise les calories de chaleur présentes dans
            l&apos;air extérieur, ces calories sont transportées via un fluide
            frigorigène qui se comprime et se condense, vers l&apos;unité
            intérieure, créant ainsi de la chaleur. Cette chaleur est acheminée
            vers vos émetteurs de chauffage (radiateurs, planchers,
            chauffants...) et vos points d&apos;eau.
          </p>
        </div>
      </div>
      <div className="collapse relative group">
        <div className="absolute left-0 top-2 bottom-2 w-4 rounded-full bg-gray-400 [&:has(+input:checked)]:bg-primary"></div>
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          <span className="ml-4 font-bold text-primary">PAC AIR / AIR</span>
        </div>
        <div className="collapse-content">
          <p className="ml-4 mr-4">
            La pompe à chaleur (PAC) air-air est un système de chauffage, qui
            assure le chauffage et la production d&apos;eau chaude de votre
            logement.
          </p>
        </div>
      </div>
      <div className="collapse relative group">
        <div className="absolute left-0 top-2 bottom-2 w-4 rounded-full bg-gray-400 [&:has(+input:checked)]:bg-primary"></div>
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          <span className="ml-4 font-bold text-primary">
            BIEN CHOISIR SA PAC
          </span>
        </div>
        <div className="collapse-content">
          <p className="ml-4 mr-4">
            La pompe à chaleur (PAC) eau-eau est un système de chauffage, qui
            assure le chauffage et la production d&apos;eau chaude de votre
            logement.
          </p>
        </div>
      </div>
    </>
  );
}

export default Accordion;
