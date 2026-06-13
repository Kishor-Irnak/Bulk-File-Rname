/**
 * BulkRenamerSkeleton
 * Lightweight loading skeleton that mirrors the BulkRenamer layout.
 * Used as the `loading` prop in next/dynamic to avoid layout shift
 * while the heavy BulkRenamer JS bundle is being fetched.
 */
export default function BulkRenamerSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto animate-pulse" aria-hidden="true">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        {/* Left column skeleton — Rules panel */}
        <div className="w-full lg:w-[380px] xl:w-[400px] flex-shrink-0 flex flex-col gap-6 order-2 lg:order-1">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-6">
            {/* Header */}
            <div className="h-5 w-32 bg-gray-200 rounded" />
            {/* Section rows */}
            {[80, 60, 90, 70].map((w, i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 bg-gray-200 rounded" style={{ width: `${w}%` }} />
                <div className="h-9 bg-gray-100 rounded-lg" />
              </div>
            ))}
          </div>
          {/* Download button area */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="h-10 bg-gray-200 rounded-lg" />
            <div className="mt-3 h-3 w-48 bg-gray-100 rounded mx-auto" />
          </div>
        </div>

        {/* Right column skeleton — Drop zone */}
        <div className="w-full flex-grow order-1 lg:order-2">
          <div className="min-h-[300px] lg:min-h-[500px] rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-4 p-8">
            <div className="w-16 h-16 rounded-2xl bg-gray-200" />
            <div className="h-4 w-48 bg-gray-200 rounded" />
            <div className="h-3 w-64 bg-gray-100 rounded" />
            <div className="h-9 w-36 bg-gray-200 rounded-lg mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
