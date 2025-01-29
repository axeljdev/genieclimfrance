"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function Form() {
  const currentYear = new Date().getFullYear();
  const [isEligible, setIsEligible] = useState(false);
  const [year, setYear] = useState<string>("");
  const [isOwner, setIsOwner] = useState<string>("proprietaire");
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isOwnerOpen, setIsOwnerOpen] = useState(false);
  const [isEnergyOpen, setIsEnergyOpen] = useState(false);
  const [isIsolationOpen, setIsIsolationOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedEnergy, setSelectedEnergy] = useState("");
  const [selectedIsolation, setSelectedIsolation] = useState("");

  const isHouseFifteenYearsOld = (constructionYear: number): boolean => {
    return currentYear - constructionYear >= 15;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEligible(true);
  };

  const handleReset = () => {
    setIsEligible(false);
  };

  const smoothScroll = (targetId: string) => {
    const element = document.querySelector(targetId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScroll("#contact-form");
  };

  const handleProductChange = (product: string) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdowns = document.querySelectorAll("[data-dropdown]");
      const buttons = document.querySelectorAll("[data-dropdown-button]");

      dropdowns.forEach((dropdown, index) => {
        if (
          !dropdown.contains(event.target as Node) &&
          !buttons[index]?.contains(event.target as Node)
        ) {
          setIsProductsOpen(false);
          setIsTypeOpen(false);
          setIsOwnerOpen(false);
          setIsEnergyOpen(false);
          setIsIsolationOpen(false);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isEligible) {
    if (isOwner === "proprietaire" && isHouseFifteenYearsOld(parseInt(year))) {
      return (
        <div className="flex flex-col items-center w-screen justify-center gap-8 bg-white p-4 pt-10 rounded-xl lg:w-1/2 lg:rounded-none lg:max-h-full">
          <h2 className="text-3xl lg:text-4xl font-kollektif font-bold text-secondary text-center after:content-[''] after:block after:h-1 after:bg-primary after:mt-10 after:rounded-full">
            Vous êtes éligible !
          </h2>
          <p className="text-center uppercase text-xl mt-4">
            Alors n&apos;attendez plus
          </p>
          <Link
            href="#contact-form"
            onClick={scrollToContact}
            className="btn btn-lg rounded-full bg-primary text-white hover:bg-primary/80 uppercase px-8"
          >
            Contactez-nous
          </Link>
          <p className="text-center uppercase text-lg">OU</p>
          <button
            onClick={handleReset}
            className="btn rounded-full bg-white text-primary border-primary hover:bg-primary hover:text-white uppercase px-6 mb-8"
          >
            Recommencer
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center w-screen justify-center gap-8 bg-white p-4 pt-10 rounded-xl lg:w-1/2 lg:rounded-none lg:max-h-full">
          <h2 className="text-3xl lg:text-4xl font-kollektif font-bold text-secondary text-center after:content-[''] after:block after:h-1 after:bg-primary after:mt-10 after:rounded-full">
            Désolé, vous n&apos;êtes pas éligible
          </h2>
          <p className="text-center text-xl mt-4">
            {!isHouseFifteenYearsOld(parseInt(year))
              ? "Votre logement doit avoir plus de 15 ans"
              : "Vous devez être propriétaire du logement"}
          </p>
          <button
            onClick={handleReset}
            className="btn rounded-full bg-white text-primary border-primary hover:bg-primary hover:text-white uppercase px-6 mb-8"
          >
            Recommencer
          </button>
        </div>
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-nowrap gap-4 bg-white p-4 rounded-xl lg:w-1/2 lg:rounded-none"
    >
      <h1 className="text-4xl font-kollektif font-bold lg:text-2xl lg:pl-4 lg:pt-4 text-secondary uppercase mb-8 lg:mb-10 after:content-[''] after:block after:w-10 after:h-1 after:bg-primary after:mt-4">
        Formulaire de demande
      </h1>
      <div className="flex flex-col gap-4 lg:flex-row lg:w-full lg:px-4">
        <label
          htmlFor="type"
          className="label-text flex flex-col gap-2 lg:w-1/2"
        >
          Type de logement*
          <div className="relative">
            <button
              type="button"
              data-dropdown-button
              onClick={() => setIsTypeOpen(!isTypeOpen)}
              className="select select-bordered w-full text-left flex justify-between items-center focus:outline-primary focus:border-primary"
            >
              {selectedType || (
                <span className="text-gray-500">Sélectionner un type</span>
              )}
            </button>

            {isTypeOpen && (
              <div
                data-dropdown
                className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg"
              >
                <div className="p-2 space-y-2">
                  <div
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => {
                      setSelectedType("Maison");
                      setIsTypeOpen(false);
                    }}
                  >
                    Maison
                  </div>
                  <div
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => {
                      setSelectedType("Appartement");
                      setIsTypeOpen(false);
                    }}
                  >
                    Appartement
                  </div>
                </div>
              </div>
            )}
          </div>
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
            value={year}
            onChange={(e) => setYear(e.target.value)}
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
          <div className="relative">
            <button
              type="button"
              data-dropdown-button
              onClick={() => setIsOwnerOpen(!isOwnerOpen)}
              className="select select-bordered w-full text-left flex justify-between items-center focus:outline-primary focus:border-primary"
            >
              {isOwner === "proprietaire" ? (
                "Propriétaire"
              ) : isOwner === "locataire" ? (
                "Locataire"
              ) : (
                <span className="text-gray-500">Je suis...</span>
              )}
            </button>

            {isOwnerOpen && (
              <div
                data-dropdown
                className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg"
              >
                <div className="p-2 space-y-2">
                  <div
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => {
                      setIsOwner("proprietaire");
                      setIsOwnerOpen(false);
                    }}
                  >
                    Propriétaire
                  </div>
                  <div
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => {
                      setIsOwner("locataire");
                      setIsOwnerOpen(false);
                    }}
                  >
                    Locataire
                  </div>
                </div>
              </div>
            )}
          </div>
        </label>
      </div>
      <div className="flex flex-col gap-4 lg:w-full lg:px-4 lg:flex-row">
        <label
          htmlFor="energy"
          className="label-text flex flex-col gap-2 lg:w-1/2"
        >
          Pour me chauffer, j&apos;utilise...*
          <div className="relative">
            <button
              type="button"
              data-dropdown-button
              onClick={() => setIsEnergyOpen(!isEnergyOpen)}
              className="select select-bordered w-full text-left flex justify-between items-center focus:outline-primary focus:border-primary"
            >
              {selectedEnergy || (
                <span className="text-gray-500">Sélectionner une énergie</span>
              )}
            </button>

            {isEnergyOpen && (
              <div
                data-dropdown
                className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg"
              >
                <div className="p-2 space-y-2">
                  <div
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => {
                      setSelectedEnergy("Gaz");
                      setIsEnergyOpen(false);
                    }}
                  >
                    Gaz
                  </div>
                  <div
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => {
                      setSelectedEnergy("Electricité");
                      setIsEnergyOpen(false);
                    }}
                  >
                    Electricité
                  </div>
                  <div
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => {
                      setSelectedEnergy("Bois");
                      setIsEnergyOpen(false);
                    }}
                  >
                    Bois
                  </div>
                </div>
              </div>
            )}
          </div>
        </label>
        <div className="label-text flex flex-col gap-2 lg:w-1/2">
          <label className="flex items-center">
            Produits souhaités*
            <span className="text-xs ml-1">(en plus de la PAC)</span>
          </label>
          <div className="relative">
            <button
              type="button"
              data-dropdown-button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="select select-bordered w-full text-left flex justify-between items-center focus:outline-primary focus:border-primary"
            >
              {selectedProducts.length === 0 ? (
                <span className="text-gray-500">Sélectionner des produits</span>
              ) : (
                <span>{selectedProducts.length} produit(s) sélectionné(s)</span>
              )}
            </button>

            {isProductsOpen && (
              <div
                data-dropdown
                className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg"
              >
                <div className="p-2 space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100">
                    <input
                      type="checkbox"
                      value="isolation combles"
                      checked={selectedProducts.includes("isolation combles")}
                      onChange={(e) => handleProductChange(e.target.value)}
                      className="checkbox bg-tertiary [--chkbg:theme(colors.tertiary)] [--chkfg:theme(colors.primary)] mr-2 focus:outline-primary focus:ring-primary"
                    />
                    <span>Isolation combles</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100">
                    <input
                      type="checkbox"
                      value="isolation plancher bas"
                      checked={selectedProducts.includes(
                        "isolation plancher bas"
                      )}
                      onChange={(e) => handleProductChange(e.target.value)}
                      className="checkbox bg-tertiary [--chkbg:theme(colors.tertiary)] [--chkfg:theme(colors.primary)] mr-2 focus:outline-primary focus:ring-primary"
                    />
                    <span>Isolation plancher bas</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100">
                    <input
                      type="checkbox"
                      value="isolation mur exterieur"
                      checked={selectedProducts.includes(
                        "isolation mur exterieur"
                      )}
                      onChange={(e) => handleProductChange(e.target.value)}
                      className="checkbox bg-tertiary [--chkbg:theme(colors.tertiary)] [--chkfg:theme(colors.primary)] mr-2 focus:outline-primary focus:ring-primary"
                    />
                    <span>Isolation mur extérieur</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100">
                    <input
                      type="checkbox"
                      value="ballon thermodynamique"
                      checked={selectedProducts.includes(
                        "ballon thermodynamique"
                      )}
                      onChange={(e) => handleProductChange(e.target.value)}
                      className="checkbox bg-tertiary [--chkbg:theme(colors.tertiary)] [--chkfg:theme(colors.primary)] mr-2 focus:outline-primary focus:ring-primary"
                    />
                    <span>Ballon thermodynamique</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100">
                    <input
                      type="checkbox"
                      value="menuiseries"
                      checked={selectedProducts.includes("menuiseries")}
                      onChange={(e) => handleProductChange(e.target.value)}
                      className="checkbox bg-tertiary [--chkbg:theme(colors.tertiary)] [--chkfg:theme(colors.primary)] mr-2 focus:outline-primary focus:ring-primary"
                    />
                    <span>Menuiseries</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100">
                    <input
                      type="checkbox"
                      value="poele"
                      checked={selectedProducts.includes("poele")}
                      onChange={(e) => handleProductChange(e.target.value)}
                      className="checkbox bg-tertiary [--chkbg:theme(colors.tertiary)] [--chkfg:theme(colors.primary)] mr-2 focus:outline-primary focus:ring-primary"
                    />
                    <span>Poêle</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <label
        htmlFor="isolation"
        className="label-text flex flex-col gap-2 lg:px-4"
      >
        Avez-vous déjà bénéfcié de l&apos;isolation à 1€ ?
        <div className="relative">
          <button
            type="button"
            data-dropdown-button
            onClick={() => setIsIsolationOpen(!isIsolationOpen)}
            className="select select-bordered w-full text-left flex justify-between items-center focus:outline-primary focus:border-primary"
          >
            {selectedIsolation || (
              <span className="text-gray-500">Sélectionner une réponse</span>
            )}
          </button>

          {isIsolationOpen && (
            <div
              data-dropdown
              className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg"
            >
              <div className="p-2 space-y-2">
                <div
                  className="cursor-pointer p-2 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedIsolation("Oui");
                    setIsIsolationOpen(false);
                  }}
                >
                  Oui
                </div>
                <div
                  className="cursor-pointer p-2 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedIsolation("Non");
                    setIsIsolationOpen(false);
                  }}
                >
                  Non
                </div>
              </div>
            </div>
          )}
        </div>
      </label>
      <button className="btn rounded-full bg-primary text-white hover:bg-primary/80 mx-4">
        TESTER MON ELIGIBILITE
      </button>
    </form>
  );
}

export default Form;
