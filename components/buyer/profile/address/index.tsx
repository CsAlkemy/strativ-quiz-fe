import React from 'react';
import { CustomButton } from '@components/shared/custom/custom-button';
import { Badge } from '@components/shared/shadcn-ui/badge';
import { Plus } from 'lucide-react';

const AddressComponent = () => {
    const Address = [
        {
            id: 1,
            name: 'Michael Alex',
            phone: '0123456789',
            address: '4517 Washington Ave. Manchester, Kentucky 39495',
            isDefault: true,
        },
        {
            id: 2,
            name: 'Broke Ben',
            phone: '0123456789',
            address: '4517 Washington Ave. Manchester, London 39495',
            isDefault: false,
        },
    ];
    return (
        <div className="my-10 bg-white p-7 rounded-lg space-y-5">
            {Address.map(address => (
                <div key={address.id} className="p-5 border border-neutral-3 rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="space-y-2">
                            <div className="text-heading-6 text-neutral-10 font-bold">
                                {address.name}{' '}
                                {address.isDefault && <Badge className="bg-primary-3 text-primary-6 rounded-lg font-bold border-0">Default</Badge>}
                            </div>
                            <div className="text-paragraph-s text-neutral-7 font-regular">{address.phone}</div>
                            <div className="text-paragraph-s text-neutral-7 font-regular">{address.address}</div>
                        </div>
                        <div className="flex gap-2">
                            <CustomButton variant="secondary" size="sm">
                                Edit
                            </CustomButton>
                            <CustomButton variant="danger-outline" size="sm">
                                Delete
                            </CustomButton>
                        </div>
                    </div>
                </div>
            ))}
            <CustomButton variant="outline" className="w-full">
                <Plus size={20} className="mx-2" /> Add a new Address
            </CustomButton>
        </div>
    );
};

export default AddressComponent;
