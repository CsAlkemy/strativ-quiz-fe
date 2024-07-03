import React from 'react';
import LoginComponent from '@components/buyer/auth/login';
import SignUpComponent from '@components/buyer/auth/sign-up';

const BuyerAuth = () => {
    return (
        <div className="bg-primary-1 h-screen flex justify-center items-center">
            {/*<LoginComponent />*/}
            <SignUpComponent />
        </div>
    );
};

export default BuyerAuth;
