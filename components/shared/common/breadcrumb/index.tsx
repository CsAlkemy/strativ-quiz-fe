import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@components/shared/shadcn-ui/breadcrumb';
import React from 'react';

type Props = {
    orderId?: string;
};

type Crumb = {
    href: string;
    label: string;
};

export function BreadCrumbNavigator({ orderId }: Props) {
    const crumbs: Crumb[] = [
        { href: '#', label: 'Home' },
        { href: '#', label: 'Decoration' },
        { href: '#', label: 'Furniture' },
        { href: '#', label: 'Storage' },
    ];

    return (
        <Breadcrumb className="bg-[#EDF0F8] rounded-md p-1 w-fit">
            <BreadcrumbList>
                {crumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href={crumb.href}>{crumb.label}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        {index < crumbs.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                ))}
                <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link className="text-primary-Main" href={`/product/details?${orderId}`}>
                                Sideboard
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </>
            </BreadcrumbList>
        </Breadcrumb>
    );
}
