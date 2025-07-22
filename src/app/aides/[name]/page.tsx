import { notFound } from "next/navigation";
import RenovationAmpleur from "./components/RenovationAmpleur";
import RenovationGeste from "./components/RenovationGeste";

interface PageProps {
  params: Promise<{
    name: string;
  }>;
}

export default async function AidePage({ params }: PageProps) {
  const { name } = await params;

  if (name === "renovation-ampleur") {
    return <RenovationAmpleur />;
  }

  if (name === "renovation-geste") {
    return <RenovationGeste />;
  }

  return notFound();
}
