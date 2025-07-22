"use client";

import { useEffect, useState } from "react";

function FacebookLike() {
  const [mounted, setMounted] = useState(false);
  const appId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Éviter les erreurs d'hydratation
  if (!mounted) {
    return (
      <div className="w-[340px] h-[130px] bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
        <span className="text-gray-500 text-sm">Chargement...</span>
      </div>
    );
  }

  return (
    <iframe
      src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FGenieClim-France-61551065537391%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=${appId}`}
      width="340"
      height="130"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder="0"
      allow="encrypted-media"
      loading="lazy"
      title="GénieClim France sur Facebook"
      onError={(e) => console.error("Erreur iframe Facebook:", e)}
    />
  );
}

export default FacebookLike;
