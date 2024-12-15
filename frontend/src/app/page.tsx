import CountryList from "@/components/country-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <h2 className="text-xl font-bold text-white mb-8 my-4 uppercase">
        Countries
      </h2>
      <CountryList />
      
    </main>
  );
}
