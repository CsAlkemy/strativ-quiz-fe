import { cvaCnMerge } from '@library/shadcn-utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cvaCnMerge('animate-pulse rounded-md bg-gray-400', className)} {...props} />;
}

export { Skeleton };
