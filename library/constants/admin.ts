import { Box, CandlestickChart, CircleDollarSign, Component, Home, MessagesSquare, SquareDot, Ticket } from 'lucide-react';

import { INavItem } from '@library/types/admin';

export const NavItems: INavItem[] = [
    {
        title: 'Home',
        icon: Home,
        href: '/',
        color: '',
    },
    {
        title: 'Sales',
        icon: CircleDollarSign,
        href: '/sales',
        color: '',
    },
    {
        title: 'Products',
        icon: SquareDot,
        href: '/products',
        color: '',
    },
    {
        title: 'Orders',
        icon: Box,
        href: '/orders',
        color: '',
    },
    {
        title: 'Coupons',
        icon: Ticket,
        href: '/coupons',
        color: '',
    },
    {
        title: 'Chats',
        icon: MessagesSquare,
        href: '/chats',
        color: '',
    },
    {
        title: 'Components',
        icon: Component,
        href: '#',
        color: '',
        isChildren: true,
        children: [
            {
                title: 'Common',
                icon: CandlestickChart,
                color: '',
                href: '/components',
            },
        ],
    },
];
