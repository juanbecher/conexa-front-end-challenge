export const CharacterListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 max-h-[300px] overflow-y-auto pr-2">
      {[...Array(6)].map((_, idx) => (
        <div key={idx} className="animate-pulse bg-gray-200 rounded-lg h-32" />
      ))}
    </div>
  );
};
