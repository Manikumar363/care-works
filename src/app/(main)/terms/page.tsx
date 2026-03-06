import Terms from "@/components/staticPages/terms";
import { Description } from "@radix-ui/react-dialog";
import { describe } from "node:test";

export const metadata = {
  title: "Terms and Conditions",
};

type TermsPayload = {
  id: string;
  type: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
};

async function getTerms(): Promise<TermsPayload | null> {
  try {
    const API_BASE =
      process.env.NEXT_PUBLIC_API_URL ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "";

    const endpoint = `${API_BASE.replace(/\/$/, "")}/api/v1/policy/getPolicyByType/terms`;

    const res = await fetch(endpoint, {
      cache: "no-store", // ensures fresh data
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const json = await res.json();

    const policy = json?.data?.policy ?? json?.data?.terms ?? null;

    if (!policy || policy.type !== "terms") {
      return null;
    }

    return policy;
  } catch (error) {
    console.error("Failed to fetch terms:", error);
    return null;
  }
}

export default async function TermsPage() {
  const terms = await getTerms();

  return <Terms terms={terms} />;
}