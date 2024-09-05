import { INavItem } from './types/common';
import { CircleArrowLeftIcon, CircleHelp, TextQuote } from 'lucide-react';

export const PUBLIC_ROUTES = ['/'];

export const NavItems: INavItem[] = [
    {
        title: 'Questions',
        icon: CircleHelp,
        href: '/admin/questions',
        color: '',
    },
    {
        title: 'Response',
        icon: TextQuote,
        href: '/admin/response',
        color: '',
    },
    {
        title: 'Logout',
        icon: CircleArrowLeftIcon,
        href: '#',
        color: '',
    },
];
