import React from 'react';

interface CommonLayoutProps {
    children: React.ReactNode;
}

const BuyerWrapper: React.FC<CommonLayoutProps> = ({ children }) => {
    return (
        <>
            <div className="w-11/12 mx-auto max-w-screen-2xl">{children}</div>
        </>
    );
};

export default React.memo(BuyerWrapper);
