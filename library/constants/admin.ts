import { Box, CandlestickChart, CircleDollarSign, Component, Home, MessagesSquare, SquareDot, Ticket } from 'lucide-react';

import { INavItem } from '@library/types/admin';

export const NavItems: INavItem[] = [
    {
        title: 'Home',
        icon: Home,
        href: '/seller',
        color: '',
    },
    {
        title: 'Sales',
        icon: CircleDollarSign,
        href: '/seller/sales',
        color: '',
    },
    {
        title: 'Products',
        icon: SquareDot,
        href: '/seller/products',
        color: '',
    },
    {
        title: 'Orders',
        icon: Box,
        href: '/seller/orders',
        color: '',
    },
    {
        title: 'Coupons',
        icon: Ticket,
        href: '/seller/coupons',
        color: '',
    },
    {
        title: 'Chats',
        icon: MessagesSquare,
        href: '/seller/chats',
        color: '',
    },
    // {
    //     title: 'Components',
    //     icon: Component,
    //     href: '#',
    //     color: '',
    //     isChildren: true,
    //     children: [
    //         {
    //             title: 'Common',
    //             icon: CandlestickChart,
    //             color: '',
    //             href: '/components',
    //         },
    //     ],
    // },
];
