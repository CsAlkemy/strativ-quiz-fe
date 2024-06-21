import React from 'react';

import { Loader2 } from 'lucide-react';

type CustomBackdropProps = {
    status: boolean;
};

const CustomBackdrop = ({ status }: CustomBackdropProps) => {
    return status ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-gray-50">
            <Loader2 className="bg-transparent animate-spin text-primary" size={40} />
        </div>
    ) : null;
};

export default CustomBackdrop;
