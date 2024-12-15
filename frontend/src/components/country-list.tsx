import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
type Country = {
  countryCode: string;
  name: string;  
}

export default async function CountryList() {
  const res = await fetch("http://localhost:3333/api/countries");
  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }
  const countries = await res.json(); 

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {countries.map((country: Country) => (
        <Button key={country.countryCode} asChild>
          <Link
            href={`/country/${country.countryCode}`}
            className="flex justify-between"
          >
            <p> {country.name}: </p>
            <p>{country.countryCode}</p>
          </Link>
        </Button>
      ))}
    </main>
  );
}
