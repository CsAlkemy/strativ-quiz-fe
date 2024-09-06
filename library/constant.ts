import { INavItem } from './types/common';
import { CircleArrowLeftIcon, CircleHelp, TextQuote } from 'lucide-react';

export const PUBLIC_ROUTES = ['/'];
export const ConstOptionLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

export const NavItems: INavItem[] = [
    {
        title: 'Questions',
        icon: CircleHelp,
        href: '/admin/questions',
        color: '',
    },
    // {
    //     title: 'Response',
    //     icon: TextQuote,
    //     href: '/admin/response',
    //     color: '',
    // },
    {
        title: 'Logout',
        icon: CircleArrowLeftIcon,
        href: '#',
        color: '',
    },
];
