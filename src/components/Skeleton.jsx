export default function Skeleton({ count = 3, columns = 'md:grid-cols-2 lg:grid-cols-3' }) {
  return (
    <div className={`grid grid-cols-1 ${columns} gap-8`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse"
        >
          <div className="w-full h-52 bg-navy/10" />
          <div className="p-6 space-y-3">
            <div className="h-5 bg-navy/10 rounded w-3/4" />
            <div className="h-4 bg-navy/10 rounded w-1/2" />
            <div className="h-4 bg-navy/10 rounded w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
