export default function SkeletonLoader() {
    return (
      <div className="border rounded-lg p-4 animate-pulse">
        <div className="w-full h-32 bg-gray-200 rounded"></div>
        <div className="mt-2 h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="mt-2 h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    );
  }