'use client';

/**
 * BulkRenamerLoader — Client Component wrapper for dynamic import.
 *
 * `ssr: false` is only permitted inside Client Components. This thin wrapper
 * keeps page.tsx as a Server Component while still deferring the heavy
 * BulkRenamer bundle (jszip, motion, etc.) until after first paint.
 */
import dynamic from 'next/dynamic';
import BulkRenamerSkeleton from './BulkRenamerSkeleton';

const BulkRenamer = dynamic(
  () => import('@/components/BulkRenamer'),
  {
    ssr: false,
    loading: () => <BulkRenamerSkeleton />,
  }
);

export default function BulkRenamerLoader() {
  return <BulkRenamer />;
}
