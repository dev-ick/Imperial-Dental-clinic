// app/services/[slug]/page.tsx

import DentalCheckups, { DentalCheckupsHero } from "../components/services/dental-checkups";
import WhiteFillings,{ WhiteFillingsHero } from "../components/services/white-fillings";
import RootCanalTherapy,{ RootCanalTherapyHero } from "../components/services/root-canal-therapy";
import ToothExtraction,{ ToothExtractionHero } from "../components/services/tooth-extraction";
import TeethWhitening,{ TeethWhiteningHero } from "../components/services/teeth-whitening";
import DentalBonding,{ DentalBondingHero } from "../components/services/dental-bonding";
import PorcelainVeneers,{ PorcelainVeneersHero } from "../components/services/porcelain-veneers";
import CrownsBridges,{ CrownsBridgesHero } from "../components/services/crowns-bridges";
import Dentures, { DenturesHero } from "../components/services/dentures";
import Braces,{ BracesHero } from "../components/services/braces";
import Retainers,{ RetainersHero } from "../components/services/retainers";
import OrthodonticEmergencies,{ OrthodonticEmergenciesHero } from "../components/services/orthodontic-emergencies";

const servicesRegistry: Record<
  string,
  {
    Content: React.ComponentType;
    Hero?: React.ComponentType;
  }
> = {
  "dental-checkups": {
    Hero: DentalCheckupsHero,
    Content: DentalCheckups, 
    },
  "white-fillings": {
    Hero: WhiteFillingsHero,
    Content: WhiteFillings,
  },
  "root-canal-therapy": { 
    Hero:RootCanalTherapyHero,
    Content: RootCanalTherapy,
   },
  "tooth-extraction": { 
    Hero:ToothExtractionHero,
    Content: ToothExtraction, 
  },
  "teeth-whitening": { 
    Hero: TeethWhiteningHero,
    Content: TeethWhitening,
  },
  "dental-bonding": {
    Hero: DentalBondingHero,
    Content: DentalBonding, 
  },
  "porcelain-veneers": {
    Hero: PorcelainVeneersHero,
    Content: PorcelainVeneers,
   },
  "crowns-bridges": { 
    Hero: CrownsBridgesHero,
    Content: CrownsBridges,
   },
  "dentures": {
    Content: Dentures,
    Hero: DenturesHero,
  },
  "braces": { 
    Hero: BracesHero,
    Content: Braces,
   },
  "retainers": {
    Hero: RetainersHero,
    Content: Retainers,
  },
  "orthodontic-emergencies": {
    Hero: OrthodonticEmergenciesHero,
    Content: OrthodonticEmergencies,
  },
};

interface PageProps {
  params: { slug: string };
}

export default async function ServiceSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesRegistry[slug.toLowerCase()];

  if (!service) return <div>Service not found</div>;

  const { Content, Hero } = service;

  return (
    <>
      {/* FULL-WIDTH HERO */}
      {Hero && <Hero />}

      {/* PAGE CONTENT */}
      <Content />
    </>
  );
}
