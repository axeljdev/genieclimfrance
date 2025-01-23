"use client";

import { useEffect } from "react";

function Video() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="flex flex-col p-6 pt-16 xl:px-20 2xl:px-52">
      <h4 className="text-xl font-emOne uppercase text-nowrap after:content-[''] after:mt-2 after:block after:w-10 after:h-[0.35rem] after:bg-primary lg:text-2xl lg:px-[8.5rem]">
        Ils nous ont fait confiance !
      </h4>
      <div
        className="elfsight-app-0224fa09-b6f7-4029-99e3-083308edb8e8 lg:pl-24 xl:pl-0"
        data-elfsight-app-lazy="false"
      />
    </section>
  );
}

export default Video;
