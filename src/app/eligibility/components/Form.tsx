function Form() {
  return (
    <form className="flex flex-col lg:flex-nowrap gap-4 bg-white p-4 rounded-xl lg:w-1/2 lg:rounded-none">
      <h1 className="text-4xl font-kollektif font-bold lg:text-2xl lg:pl-4 lg:pt-4 text-secondary uppercase mb-8 lg:mb-10 after:content-[''] after:block after:w-10 after:h-1 after:bg-primary after:mt-4">
        Formulaire de demande
      </h1>
      <div className="flex flex-col gap-4 lg:flex-row lg:w-full lg:px-4">
        <label
          htmlFor="type"
          className="label-text flex flex-col gap-2 lg:w-1/2"
        >
          Type de logement*
          <select
            name="type"
            id="type"
            required
            className="select select-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary"
          >
            <option value="maison">Maison</option>
            <option value="appartement">Appartement</option>
          </select>
        </label>
        <label
          htmlFor="annee"
          className="label-text flex flex-col gap-2 lg:w-1/2"
        >
          Année de construction*
          <input
            type="text"
            name="annee"
            id="annee"
            placeholder="1990"
            required
            className="input input-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary focus:placeholder:text-primary"
          />
        </label>
      </div>
      <div className="flex flex-col gap-4 lg:w-full lg:px-4 lg:flex-row">
        <label
          htmlFor="surface"
          className="label-text flex flex-col gap-2 lg:w-1/2"
        >
          Surface*
          <input
            type="text"
            name="surface"
            id="surface"
            placeholder="Surface habitable"
            required
            className="input input-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary focus:placeholder:text-primary"
          />
        </label>
        <label
          htmlFor="owner"
          className="label-text flex flex-col gap-2 lg:w-1/2"
        >
          Je suis*
          <select
            name="owner"
            id="owner"
            required
            className="select select-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary"
          >
            <option value="proprietaire">Propriétaire</option>
            <option value="locataire">Locataire</option>
          </select>
        </label>
      </div>
      <div className="flex flex-col gap-4 lg:w-full lg:px-4 lg:flex-row">
        <label
          htmlFor="energy"
          className="label-text flex flex-col gap-2 lg:w-1/2"
        >
          Pour me chauffer, j&apos;utilise...*
          <select
            name="energy"
            id="energy"
            required
            className="select select-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary"
          >
            <option value="gaz">Gaz</option>
            <option value="electricite">Electricité</option>
            <option value="bois">Bois</option>
          </select>
        </label>
        <label
          htmlFor="products"
          className="label-text flex flex-col gap-2 lg:w-1/2"
        >
          <div className="flex items-center">
            Produits souhaités*
            <span className="text-xs ml-1">(en plus de la PAC)</span>
          </div>
          <select
            name="products"
            id="products"
            required
            className="select select-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary"
          >
            <option value="isolation">Isolation combles</option>
            <option value="vmc">VMC</option>
            <option value="menuiseries">Menuiseries</option>
          </select>
        </label>
      </div>
      <label
        htmlFor="isolation"
        className="label-text flex flex-col gap-2 lg:px-4"
      >
        Avez-vous déjà bénéfcié de l&apos;isolation à 1€ ?
        <select
          name="isolation"
          id="isolation"
          required
          className="select select-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary"
        >
          <option value="oui">Oui</option>
          <option value="non">Non</option>
        </select>
      </label>
      <button className="btn rounded-full bg-primary text-white hover:bg-primary/80">
        TESTER MON ELIGIBILITE
      </button>
    </form>
  );
}

export default Form;
