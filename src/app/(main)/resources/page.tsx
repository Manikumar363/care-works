import ResourcesPage from "@/components/staticPages/resources";

export const metadata = {
  title: "Resources",
};

type ResourceCard = {
  id: string;
  title: string;
  badges: string[];
  description: string;
  redirectUrl: string;
};

type ResourcesPayload = {
  id: string;
  title: string;
  description: string;
  resourceCards: ResourceCard[];
};

async function getResources(): Promise<ResourcesPayload | null> {
  try {
    const API_BASE =
      process.env.NEXT_PUBLIC_API_URL ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "";

    const endpoint = `${API_BASE.replace(/\/$/, "")}/api/v1/resources`;

    const res = await fetch(endpoint, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json = await res.json();
    return json?.data?.resources ?? null;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return null;
  }
}

export default async function Resources() {
  const data = await getResources();

  return <ResourcesPage initialData={data} />;
}