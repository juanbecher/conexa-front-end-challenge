import { Skeleton } from "../ui/Skeleton";

export const EpisodeListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2">
      {[...Array(6)].map((_, idx) => (
        <Skeleton key={idx} className="h-32" />
      ))}
    </div>
  );
};
