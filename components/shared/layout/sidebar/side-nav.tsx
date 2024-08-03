import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';
import { useDeepCompareEffect } from 'ahooks';

import { Accordion, AccordionContent } from '@radix-ui/react-accordion';

import { buttonVariants } from '@components/shared/shadcn-ui/button';

import { useSidebar } from '@library/hooks/useSidebar';
import { cvaCnMerge } from '@library/shadcn-utils';
import { INavItem } from '@library/types/admin';
import { ChevronDown } from 'lucide-react';
import { AccordionItem, AccordionTrigger } from '@components/shared/shadcn-ui/accordion';

interface SideNavProps {
    items: INavItem[];
    setOpen?: (open: boolean) => void;
    className?: string;
}

export function SideNav({ items, setOpen, className }: SideNavProps) {
    const path = usePathname();
    const { isOpen } = useSidebar();
    const [openItem, setOpenItem] = React.useState('');
    const [lastOpenItem, setLastOpenItem] = React.useState('');

    useDeepCompareEffect(() => {
        if (isOpen) {
            setOpenItem(lastOpenItem);
        } else {
            setLastOpenItem(openItem);
            setOpenItem('');
        }
    }, [isOpen]);

    const dropdownClick = (value: string) => {
        if (!value) return setOpenItem('false');
        setOpenItem(value);
    };

    return (
        <nav className="space-y-3 admin-sidebar-nav">
            {items.map(item => {
                return item.isChildren ? (
                    <Accordion type="single" collapsible className="space-y-2" key={item.title} value={openItem} onValueChange={dropdownClick}>
                        <AccordionItem value={item.title} className="border-none ">
                            <AccordionTrigger
                                className={cvaCnMerge(
                                    buttonVariants({ variant: 'ghost' }),
                                    `group relative flex h-10 mx-3 pl-2 pr-2 py-2 text-base duration-200 hover:bg-muted hover:no-underline ${isOpen ? 'justify-between' : 'justify-center'}`,
                                )}>
                                <div>
                                    <item.icon className={cvaCnMerge('h-5 w-5 text-neutral-7', item.color)} />
                                </div>
                                <div className={cvaCnMerge('absolute left-10 text-paragraph-m text-neutral-7 duration-200 ', !isOpen && className)}>
                                    {item.title}
                                </div>
                                {isOpen && <ChevronDown className=" w-4 h-4 transition-transform duration-200 shrink-0 text-muted-foreground" />}
                            </AccordionTrigger>
                            <AccordionContent className="pb-1 mt-2 ml-6 space-y-2">
                                {(item.children || []).map(child => {
                                    if (path === child.href && !openItem) setOpenItem(item.title);
                                    return (
                                        <Link
                                            key={child.title}
                                            href={child.href}
                                            onClick={() => {
                                                if (setOpen) setOpen(false);
                                            }}
                                            className={cvaCnMerge(
                                                buttonVariants({ variant: 'ghost' }),
                                                'group relative flex h-10 justify-start gap-x-3',
                                                path === child.href && 'bg-muted font-bold hover:bg-primary-1',
                                            )}>
                                            <child.icon className={cvaCnMerge('h-5 w-5 text-neutral-7', child.color)} />
                                            <div
                                                className={cvaCnMerge(
                                                    'absolute left-14 text-paragraph-m text-neutral-7 duration-200',
                                                    !isOpen && className,
                                                )}>
                                                {child.title}
                                            </div>
                                        </Link>
                                    );
                                })}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ) : (
                    <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => {
                            if (setOpen) setOpen(false);
                        }}
                        className={cvaCnMerge(
                            buttonVariants({ variant: 'ghost' }),
                            'group pl-2 pr-2 nav-item relative flex h-10 mx-3 ',
                            isOpen ? 'justify-start' : 'justify-center',
                            {
                                'font-bold text-primary-6 active bg-primary-1': path === item.href,
                            },
                        )}>
                        <item.icon
                            className={cvaCnMerge('h-5 w-5 text-neutral-7', item.color, {
                                'font-bold text-primary-6': path === item.href,
                            })}
                        />
                        <span
                            className={cvaCnMerge('absolute left-10 text-paragraph-m text-neutral-7 duration-200', !isOpen && className, {
                                'text-primary-6': path === item.href,
                            })}>
                            {item.title}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}
