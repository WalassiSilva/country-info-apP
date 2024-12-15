import { cn } from "@/lib/utils";
import React from "react";

type SkeletonProps = {
  className?: string;
};
export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn("h-5 w-72 animate-pulse bg-white/10 rounded-lg", className)}
    ></div>
  );
}
