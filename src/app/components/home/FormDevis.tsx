import InfoContact from "./InfoContact";

function FormDevis({ isServicePage }: { isServicePage?: boolean }) {
  return (
    <section
      className={`flex flex-col lg:flex-row gap-4 p-6 bg-secondary lg:px-[10.5rem] 2xl:px-72 ${
        isServicePage
          ? "lg:bg-white"
          : "lg:bg-[url('/bg-contact.png')] lg:bg-cover lg:bg-center lg:bg-no-repeat"
      }`}
    >
      <div
        className={`lg:bg-secondary lg:rounded-3xl ${
          isServicePage ? "w-full" : "lg:w-2/3"
        } lg:p-12`}
      >
        <h3 className="text-2xl font-emOne text-tertiary text-start lg:pl-12">
          Demander un devis
        </h3>
        <form className="flex flex-col gap-4 p-6 items-center lg:px-12">
          <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:gap-8">
            <label className="form-control w-full lg:w-1/3 max-w-xs lg:max-w-none">
              <div className="label">
                <span className="label-text text-lg font-kollektif text-tertiary">
                  Nom*
                </span>
              </div>
              <input
                type="text"
                placeholder="Votre nom"
                className="input input-bordered input-md w-full max-w-xs focus:outline-primary focus:ring-primary"
                required
              />
            </label>
            <label className="form-control w-full lg:w-1/3 max-w-xs lg:max-w-none">
              <div className="label">
                <span className="label-text text-lg font-kollektif text-tertiary">
                  Prénom*
                </span>
              </div>
              <input
                type="text"
                placeholder="Votre prénom"
                className="input input-bordered input-md w-full max-w-xs focus:outline-primary focus:ring-primary"
                required
              />
            </label>
            <label className="form-control w-full lg:w-1/3 max-w-xs lg:max-w-none">
              <div className="label">
                <span className="label-text text-lg font-kollektif text-tertiary">
                  Code postal*
                </span>
              </div>
              <input
                type="text"
                placeholder="Votre code postal"
                className="input input-bordered input-md w-full max-w-xs focus:outline-primary focus:ring-primary"
                required
              />
            </label>
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:gap-8">
            <label className="form-control w-full lg:w-1/2 max-w-xs lg:max-w-none">
              <div className="label">
                <span className="label-text text-lg font-kollektif text-tertiary">
                  Email*
                </span>
              </div>
              <input
                type="text"
                placeholder="Votre email"
                className="input input-bordered input-md w-full max-w-xs focus:outline-primary focus:ring-primary"
                required
              />
            </label>
            <label className="form-control w-full lg:w-1/2 max-w-xs lg:max-w-none">
              <div className="label">
                <span className="label-text text-lg font-kollektif text-tertiary">
                  Téléphone
                </span>
              </div>
              <input
                type="text"
                placeholder="Votre téléphone"
                className="input input-bordered input-md w-full max-w-xs focus:outline-primary focus:ring-primary"
              />
            </label>
          </div>
          <label className="form-control w-full max-w-xs lg:max-w-none">
            <div className="label">
              <span className="label-text text-lg font-kollektif text-tertiary">
                Message*
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24 focus:outline-primary focus:ring-primary"
              placeholder="Votre message"
              required
            ></textarea>
            <div className="form-control mt-4 lg:max-w-[26.5rem]">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox bg-tertiary [--chkbg:theme(colors.tertiary)] [--chkfg:theme(colors.primary)] mr-2 focus:outline-primary focus:ring-primary"
                />
                <p className="label-text text-tertiary ml-2">
                  J&apos;ai lu et accepte les{" "}
                  <span className="font-bold underline">CGU</span> ainsi que les{" "}
                  <span className="font-bold underline">mentions légales</span>
                </p>
              </label>
            </div>
            <div className="form-control lg:max-w-[30.5rem]">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox bg-tertiary [--chkbg:theme(colors.tertiary)] [--chkfg:theme(colors.primary)] mr-2 focus:outline-primary focus:ring-primary"
                />
                <p className="label-text text-tertiary ml-2">
                  J&apos;accepte de recevoir les offres et promos de{" "}
                  <span className="font-bold">GENIECLIM FRANCE</span>
                </p>
              </label>
            </div>
            <button className="btn border-none text-tertiary bg-primary hover:bg-primary/80 uppercase mt-6 font-emOne focus:outline-tertiary focus:ring-tertiary">
              Soumettre ma demande
            </button>
          </label>
        </form>
      </div>
      {!isServicePage && <InfoContact />}
    </section>
  );
}

export default FormDevis;
