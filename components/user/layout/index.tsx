import React from 'react';
interface CommonLayoutProps {
    children: React.ReactNode;
    title?: string;
}

const UserLayout = ({ children, title }: CommonLayoutProps) => {
    return (
        <>
            <div className="max-w-screen-md mx-auto px-5 sm:px-0">
                {title && <h1 className="text-heading-4 font-semibold mb-3">{title}</h1>}
                {children}
            </div>
        </>
    );
};

export default React.memo(UserLayout);
