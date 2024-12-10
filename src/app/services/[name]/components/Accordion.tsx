interface AccordionSection {
  title: string;
  content: string[];
}

interface AccordionProps {
  sections: AccordionSection[];
}

function Accordion({ sections }: AccordionProps) {
  return (
    <section className="flex flex-col lg:mx-32 lg:gap-4 lg:mb-12 2xl:mx-56">
      {sections.map((section, index) => (
        <div
          key={section.title}
          className="collapse relative group lg:bg-[#f5f5f5] lg:border-[1px] lg:border-primary lg:rounded-xl lg:p-4 lg:shadow-xl"
        >
          <div className="absolute left-0 lg:left-2 top-2 bottom-2 w-4 lg:w-3 rounded-full bg-gray-400 [&:has(+input:checked)]:bg-primary"></div>
          <input
            type="radio"
            name="my-accordion-1"
            defaultChecked={index === 0}
          />
          <div className="collapse-title text-xl font-medium">
            <span className="ml-4 font-bold text-primary">{section.title}</span>
          </div>
          <div className="collapse-content">
            {section.content.map((text, i) => (
              <p key={i} className="ml-4 mr-4">
                {text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Accordion;
