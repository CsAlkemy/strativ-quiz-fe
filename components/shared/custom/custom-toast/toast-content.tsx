import { usePathname } from 'next/navigation';

export default function CustomToastContent({ title, description }: { title?: string; description?: string }) {
    const pathname = usePathname();
    return pathname.split('/')[1] === 'admin' ? (
        <>
            {title && <div className="mb-1 mr-3 font-bold text-md">{title}</div>}
            {description && <span>{description}</span>}
        </>
    ) : (
        <>
            {title && <div className="mb-1 mr-3 font-bold text-md">{title}</div>}
            {description && <span>{description}</span>}
        </>
    );
}
