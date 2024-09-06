import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@components/shared/shadcn-ui/dialog';
import { CustomButton } from '@components/shared/custom/custom-button';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import CustomInput from '@components/shared/custom/custom-input';
import { IQuestion } from '@library/types/questions';
import { DialogTitle } from '@radix-ui/react-dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { QuestionSchema, TQuestionSchema } from '@library/schemas/questions';

type Props = {
    title: string;
    open: boolean;
    question?: IQuestion;
    setOpen: (value: boolean) => void;
    onEdit: (updatedQuestion: Partial<IQuestion>) => void;
};

const EditQuestionModal = ({ title, open, setOpen, question, onEdit }: Props) => {
    const hookForm = useForm<TQuestionSchema>({
        resolver: zodResolver(QuestionSchema),
        defaultValues: {
            question: '',
            options: ['', '', '', ''],
            correctAnswer: '',
        },
    });

    const { handleSubmit, reset, control } = hookForm;

    const { fields } = useFieldArray({
        control,
        //@ts-ignore
        name: 'options',
    });

    useEffect(() => {
        if (question) {
            reset(question);
        }
    }, [question, reset]);

    const onSubmit: SubmitHandler<TQuestionSchema> = data => {
        onEdit(data);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-screen-sm max-h-[90vh] overflow-y-auto">
                <DialogTitle>
                    <div className="flex justify-between text-xl not-italic font-bold leading-[139.8%] tracking-[-0.6px]">
                        {title}
                        <X className="hover:cursor-pointer" onClick={() => setOpen(false)} />
                    </div>
                </DialogTitle>
                <form className="bg-white px-3 pb-3 rounded-lg space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <CustomInput name="question" label="Question" placeholder="Question" hookForm={hookForm} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {fields.map((item, index) => (
                            <CustomInput
                                key={item.id}
                                name={`options[${index}]`}
                                label={`Option ${index + 1}`}
                                placeholder={`Option ${index + 1}`}
                                hookForm={hookForm}
                                helperText={hookForm.formState.errors?.options?.[index]?.message}
                            />
                        ))}
                    </div>

                    <CustomInput name="correctAnswer" label="Correct Answer" placeholder="Correct Answer" hookForm={hookForm} />
                    <div className="flex justify-end gap-2 mt-5">
                        <CustomButton type="button" onClick={() => setOpen(false)} variant="outline">
                            Cancel
                        </CustomButton>
                        <CustomButton type="submit" variant="default">
                            Update Question
                        </CustomButton>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditQuestionModal;
