import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET() {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const businessProfiles = google.mybusinessqanda({
      version: "v1",
      auth: oauth2Client,
    });

    const response = await businessProfiles.locations.questions.list({
      parent: `locations/${process.env.GOOGLE_LOCATION_ID}`,
    });

    return NextResponse.json({ reviews: response.data.questions || [] });
  } catch (error) {
    console.error("Erreur détaillée:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des avis" },
      { status: 500 }
    );
  }
}
