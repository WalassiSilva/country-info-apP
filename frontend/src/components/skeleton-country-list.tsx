import Skeleton from "@/components/skeleton";

export default function CountryListSkeleton() {
  return (
    <div  className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className="h-[36px] w-full rounded-lg" />
          ))}
      </div>
    </div>
  );
}
