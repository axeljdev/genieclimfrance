function Form() {
  return (
    <form className="flex flex-col lg:flex-nowrap gap-4 bg-white p-4 rounded-xl lg:w-1/2 lg:rounded-none">
      <h1 className="text-4xl font-emOne uppercase text-primary mb-8 lg:mb-10">
        Formulaire de demande
      </h1>
      <label htmlFor="type" className="label-text">
        Type de logement*
      </label>
      <select
        name="type"
        id="type"
        required
        className="select select-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary lg:w-[49%]"
      >
        <option value="maison">Maison</option>
        <option value="appartement">Appartement</option>
      </select>
      <label htmlFor="annee" className="label-text">
        Année de construction*
      </label>
      <input
        type="text"
        name="annee"
        id="annee"
        placeholder="1990"
        required
        className="input input-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary focus:placeholder:text-primary lg:w-[49%]"
      />
      <label htmlFor="surface" className="label-text">
        Surface*
      </label>
      <input
        type="text"
        name="surface"
        id="surface"
        placeholder="Surface habitable"
        required
        className="input input-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary focus:placeholder:text-primary"
      />
      <label htmlFor="owner" className="label-text">
        Je suis*
      </label>
      <select
        name="owner"
        id="owner"
        required
        className="select select-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary"
      >
        <option value="proprietaire">Propriétaire</option>
        <option value="locataire">Locataire</option>
      </select>
      <label htmlFor="energy" className="label-text">
        Pour me chauffer, j&apos;utilise...*
      </label>
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
      <label htmlFor="products">
        Produits souhaités*{" "}
        <span className="text-xs ml-1">(en plus de la PAC)</span>
      </label>
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
      <label htmlFor="isolation">
        Avez-vous déjà bénéfcié de l&apos;isolation à 1€ ?
      </label>
      <select
        name="isolation"
        id="isolation"
        required
        className="select select-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary"
      >
        <option value="oui">Oui</option>
        <option value="non">Non</option>
      </select>
      <button className="btn rounded-full bg-primary text-white hover:bg-primary/80">
        TESTER MON ELIGIBILITE
      </button>
    </form>
  );
}

export default Form;
