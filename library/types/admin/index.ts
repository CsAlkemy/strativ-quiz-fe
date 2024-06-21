import type { LucideIcon } from 'lucide-react';

export * from './ad-management';
export * from './user-management';
export interface INavItem {
    title: string;
    href: string;
    icon: LucideIcon;
    color?: string;
    isChildren?: boolean;
    children?: INavItem[];
}
