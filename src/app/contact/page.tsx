import FormDevis from "../components/home/FormDevis";
import CardAgency from "../notre-mission/components/CardAgency";
import OurTeam from "../notre-mission/components/OurTeam";

const cards = [
  {
    name: "Siege - GenieClim France",
    address: "20 rue Jean Mermoz",
    zip: "33185",
    city: "Le Haillan",
    phone: "+33 09 72 12 14 01",
    link: "https://g.co/kgs/669N5m5",
  },
  {
    name: "GenieClim OCCITANIE",
    address: "4 rue Pierre Magnol",
    zip: "66600",
    city: "Rivesaltes",
    phone: "+33 09 72 12 14 01",
    link: "https://g.co/kgs/669N5m5",
  },
  {
    name: "GenieClim Bretagne",
    address: "33 BIS Passage d'Avenel",
    zip: "35400",
    city: "Fougères",
    phone: "+33 09 72 12 14 01",
    link: "https://share.google/UzeNObyPQfj8TrlW4",
  },
];

function ContactPage() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row min-h-[calc(100vh-80px)]">
        <div className="flex  md:w-1/2 md:flex-col bg-primary">
          <div className="flex flex-wrap p-4 md:p-8 xl:p-12 gap-4">
            <h3 className="text-2xl font-emOne uppercase text-tertiary text-start after:content-[''] after:block after:w-10 after:h-1 after:bg-tertiary after:mt-2 after:mb-4">
              Nos agences
            </h3>
            <div className="flex flex-wrap gap-6 xl:gap-6">
              {cards.map((card) => (
                <div key={card.name} className="w-full">
                  <CardAgency {...card} isContactPage={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col min-h-[calc(100vh-80px)]">
          <FormDevis isServicePage={true} isContactPage={true} />
        </div>
      </div>
      <div className="px-8 pb-12 pt-4 lg:px-28 2xl:px-56">
        <OurTeam />
      </div>
    </>
  );
}

export default ContactPage;
