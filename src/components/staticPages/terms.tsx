import React from "react";

type TermsPayload = {
  id: string;
  type: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
};

type Props = {
  terms: TermsPayload | null;
};

export default function Terms({ terms }: Props) {
  if (!terms) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-16 px-4">
        <span className="text-red-600">No terms available</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen md:min-h-fit lg:min-h-screen bg-white flex flex-col items-center justify-start py-16 md:py-6 lg:py-10 px-4">
      <h4 className="text-center text-[var(--yellow)] font-semibold mb-2 text-xl lg:text-2xl">
        Let&apos;s Talk About Terms
      </h4>

      <h1 className="text-center text-[var(--navy)] font-bold text-3xl lg:text-5xl mb-4 md:mb-3 lg:mb-6">
        Terms and Conditions
      </h1>

      <div
        className="w-full max-w-6xl space-y-4 md:space-y-4 lg:space-y-4 text-base sm:text-lg md:text-xl mx-auto px-6 sm:px-8 md:px-4 prose prose-lg [&>p]:!text-center [&>p]:!ml-0 [&>p]:!mr-0 [&>p]:!pl-0 [&>p]:!pr-0 [&_span]:!text-center [&>p]:mb-2 md:[&>p]:mb-0.5 lg:[&>p]:mb-1 [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mb-4 md:[&>h1]:mb-4 lg:[&>h1]:mb-4 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mb-3 md:[&>h2]:mb-2 lg:[&>h2]:mb-3 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mb-2 md:[&>h3]:mb-1.5 lg:[&>h3]:mb-2 [&>ul]:list-disc md:leading-normal [&>ul]:pl-6 [&>ul]:!ml-0 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:!ml-0 [&>ul>li]:!ml-0 [&>ol>li]:!ml-0"
        dangerouslySetInnerHTML={{ __html: terms.content }}
      />
    </div>
  );
}