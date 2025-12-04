import { cn } from "@/lib/utils/cn";

export const Skeleton = ({ className }: { className: string }) => {
  return (
    <div
      className={cn("animate-pulse bg-gray-200 rounded-lg h-32", className)}
    />
  );
};
