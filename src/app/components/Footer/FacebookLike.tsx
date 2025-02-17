"use client";
import React from "react";

declare global {
  interface Window {
    FB: {
      init(options: {
        appId: string;
        cookie: boolean;
        xfbml: boolean;
        version: string;
      }): void;
      AppEvents: {
        logPageView(): void;
      };
      XFBML: {
        parse(): void;
      };
      getLoginStatus(
        callback: (response: {
          status: "connected" | "not_authorized" | "unknown";
          authResponse?: {
            accessToken: string;
            expiresIn: string;
            signedRequest: string;
            userID: string;
          };
        }) => void
      ): void;
    };
    fbAsyncInit: () => void;
  }
}

function FacebookLike() {
  React.useEffect(() => {
    const loadFacebookSDK = () => {
      const facebookAppId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
      if (!facebookAppId) {
        console.error("L'ID de l'application Facebook n'est pas défini");
        return;
      }

      window.fbAsyncInit = function () {
        window.FB.init({
          appId: facebookAppId,
          cookie: true,
          xfbml: true,
          version: "v18.0",
        });

        window.FB.AppEvents.logPageView();
      };

      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src = `https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v18.0&appId=${facebookAppId}`;
      document.body.appendChild(script);
    };

    loadFacebookSDK();

    return () => {
      const script = document.getElementById("facebook-jssdk");
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-bold text-tertiary mb-2 mt-2">
        Rejoignez-nous sur Facebook
      </h3>
      <div
        className="fb-like"
        data-href="https://www.facebook.com/p/GenieClim-France-61551065537391/"
        data-width=""
        data-layout="button_count"
        data-action="like"
        data-size="large"
        data-share="true"
        data-lazy="true"
      />
    </div>
  );
}

export default FacebookLike;
