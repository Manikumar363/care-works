"use client";

import { RecentPage } from "./RecentPage";
import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import HeroSectionProtected from "@/components/common/HeroSectionProtected";

function ProfilePageContent() {
  const [selectedOption, setSelectedOption] = useState("Manage Profile");
  const searchParams = useSearchParams();

  // Handle tab parameter from URL
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "saved-caregivers") {
      setSelectedOption("Saved Caregivers");
    }
  }, [searchParams]);

  const title = selectedOption === "Manage Profile" ? "Manage Profile" : selectedOption;

  return (
    <>
      <HeroSectionProtected title={title} />
      <RecentPage
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <>
          <HeroSectionProtected title="Manage Profile" />
          <div className="max-w-7xl mx-auto p-4">Loading profile...</div>
        </>
      }
    >
      <ProfilePageContent />
    </Suspense>
  );
}
