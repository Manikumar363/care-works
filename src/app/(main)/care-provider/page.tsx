import FAQ from "@/components/careProvider/FAQ";
import IntroductionWithCTA from "@/components/careProvider/IntroductionWithCTA";
import PerkOfCareProvider from "@/components/careProvider/PerkOfCareProvider";
import RegisterAsCareProviderDialog from "../../../components/careProvider/RegisterAsCareProviderDialog";
import TestimonialCareProvider from "@/components/careProvider/TestimonialCareProvider";
import HeroSectionProtected from "@/components/common/HeroSectionProtected";
import React from "react";

export const metadata = {
  title: "Become A Caregiver",
};

const page = () => {
  return (
    <>
      <RegisterAsCareProviderDialog />
      <HeroSectionProtected title="Become A Caregiver" />
      <IntroductionWithCTA />
      <PerkOfCareProvider />
      <TestimonialCareProvider />
      <FAQ />
      {/* <RegisterAsCareProvider /> */}
    </>
  );
};

export default page;
