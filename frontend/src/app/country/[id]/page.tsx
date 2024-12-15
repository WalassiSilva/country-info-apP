import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import CountryChart from "@/components/country-chart";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Loading from "./loading";

export default async function CountryPage({ params }: any) {
  const id = params.id;
  const res = await fetch(`http://localhost:3333/api/countries/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch country");
  }
  const country = await res.json();
  const countryName = country.countryInfo.commonName;
  const populationData = country.populationData.find(
    (data: { country: string }) => data.country === countryName
  );
  const flagUrl =
    country.flagUrl.find(
      (flag: { iso2: string }) => flag.iso2 === id.toUpperCase()
    )?.flag || undefined;

  return (
    <main className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-semibold my-4">
        {country.countryInfo.commonName}
      </h2>
     
        {flagUrl ? (
          <Image
            priority
            src={flagUrl}
            alt="country image"
            width={192}
            height={192}
          />
        ) : (
          <Globe size={192} />
        )}
        <div className="w-full px-4 md:w-1/2">
          <CountryChart data={populationData?.populationCounts} />
        </div>
        <div className="w-1/2 md:p-4">
          <section className="flex gap-4 flex-col justify-center bg-[#53A2BE]/20 p-4 rounded-md">
            <h3 className="text-2xl text-center">Border Countries</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {country.borderCountries.map((borderCountry: any) => (
                <Button key={borderCountry.countryCode} asChild>
                  <Link href={`/country/${borderCountry.countryCode}`}>
                    <h2>{borderCountry.commonName}</h2>
                  </Link>
                </Button>
              ))}
            </div>
          </section>
        </div>
    </main>
  );
}
