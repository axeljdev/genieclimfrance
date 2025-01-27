"use client";

import Script from "next/script";

export default function Axeptio() {
  const AXEPTIO_CLIENT_ID = process.env.NEXT_PUBLIC_AXEPTIO_CLIENT_ID;
  const AXEPTIO_VERSION = process.env.NEXT_PUBLIC_AXEPTIO_VERSION;

  return (
    <>
      <Script
        id="axeptio-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.axeptioSettings = {
              clientId: "${AXEPTIO_CLIENT_ID}",
              cookiesVersion: "${AXEPTIO_VERSION}",
              googleConsentMode: {
                default: {
                  analytics_storage: "denied",
                  ad_storage: "denied",
                  ad_user_data: "denied",
                  ad_personalization: "denied",
                  wait_for_update: 500
                }
              }
            };
          `,
        }}
      />
      <Script
        src="https://static.axept.io/sdk.js"
        strategy="afterInteractive"
        id="axeptio-sdk"
      />
    </>
  );
}
