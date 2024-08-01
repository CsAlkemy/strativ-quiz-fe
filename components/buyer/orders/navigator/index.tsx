import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@components/shared/shadcn-ui/breadcrumb';

type Props = {
    orderId?: string;
};

export function BreadCrumbNavigator({ orderId }: Props) {
    return (
        <Breadcrumb className="mt-10">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/buyer/orders">Orders</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {orderId && (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href={`/buyer/orders/details?${orderId}`}>{orderId}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
