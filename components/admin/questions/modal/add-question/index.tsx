import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomInput from '@components/shared/custom/custom-input';
import { CircleDollarSign, CircleX } from 'lucide-react';
import { CustomButton } from '@components/shared/custom/custom-button';
import { ProductSchema, TProductSchema } from '@library/schemas/questions';

const SellerManageProductsComponent = () => {
    const hookForm = useForm<TProductSchema>({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
            category: '',
            price: 0,
            productName: '',
            description: '',
            variables: [{ name: 'Color', options: [{ optionName: '', quantity: 0 }] }],
            files: [],
        },
    });

    const {
        fields: variableFields,
        append: appendVariable,
        remove: removeVariable,
    } = useFieldArray({
        control: hookForm.control,
        name: 'variables',
    });

    const addVariable = () => {
        appendVariable({ name: '', options: [{ optionName: '', quantity: 0 }] });
    };

    const onSubmit = (data: TProductSchema) => {
        console.log('Form data:', data);
    };

    return (
        <div className="bg-neutral-2 w-full">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <form className="bg-white p-3 rounded-lg space-y-3 col-span-1 md:col-span-2" onSubmit={hookForm.handleSubmit(onSubmit)}>
                    <CustomInput name="productName" label="Product Name" placeholder="Product Name" hookForm={hookForm} />
                    <CustomInput type="textarea" name="description" label="Description" placeholder="Type here" hookForm={hookForm} />

                    <div className="space-y-3">
                        {variableFields.map((variable, index) => (
                            <div key={variable.id} className="space-y-3 bg-neutral-4 py-5 px-3  rounded-[8px]">
                                <div className="flex items-center">
                                    <CustomInput
                                        name={`variables.${index}.name`}
                                        label={`Variable Name ${index + 1}`}
                                        placeholder="Variable Name"
                                        hookForm={hookForm}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeVariable(index)}
                                        className="ml-2  mt-6 rounded-[8px] hover:bg-neutral-2 text-red-600 bg-white p-2">
                                        <CircleX className="w-5 h-5" />
                                    </button>
                                </div>

                                <OptionsFieldArray
                                    variableIndex={index}
                                    hookForm={hookForm}
                                    variableName={hookForm.watch(`variables.${index}.name`)}
                                />
                            </div>
                        ))}
                        <CustomButton variant="outline" className="w-full" type="button" onClick={addVariable}>
                            Add Variable
                        </CustomButton>
                    </div>

                    <CustomInput
                        name="price"
                        label="Set a Price"
                        placeholder="Product price"
                        startIcon={CircleDollarSign}
                        type="number"
                        hookForm={hookForm}
                    />
                    <CustomButton type="submit">Submit</CustomButton>
                </form>
            </div>
        </div>
    );
};

const OptionsFieldArray = ({
    variableName,
    variableIndex,
    hookForm,
}: {
    variableName: string;
    variableIndex: number;
    hookForm: ReturnType<typeof useForm<TProductSchema>>;
}) => {
    const {
        fields: optionFields,
        append: appendOption,
        remove: removeOption,
    } = useFieldArray({
        control: hookForm.control,
        name: `variables.${variableIndex}.options`,
    });

    const addOption = () => {
        appendOption({ optionName: '', quantity: 0 });
    };

    return (
        <div className="space-y-3 bg-white p-3 rounded-md border border-neutral-3">
            {optionFields.map((option, optionIndex) => (
                <div key={option.id} className="grid grid-cols-1 gap-3 sm:grid-cols-4">
                    <div className="col-span-1 sm:col-span-3">
                        <CustomInput
                            name={`variables.${variableIndex}.options.${optionIndex}.optionName`}
                            label={`${variableName} ${optionIndex + 1}`}
                            placeholder="Option Name"
                            hookForm={hookForm}
                        />
                    </div>
                    <div className="col-span-1 flex items-center">
                        <CustomInput
                            name={`variables.${variableIndex}.options.${optionIndex}.quantity`}
                            label="Quantity"
                            placeholder="Quantity"
                            type="number"
                            hookForm={hookForm}
                        />
                        <button
                            type="button"
                            onClick={() => removeOption(optionIndex)}
                            className="ml-2  mt-6 rounded-[8px] hover:bg-neutral-2 text-red-600 bg-white p-2">
                            <CircleX className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            ))}
            <CustomButton variant="outline" className="w-full" type="button" onClick={addOption}>
                Add Option
            </CustomButton>
        </div>
    );
};

export default SellerManageProductsComponent;
