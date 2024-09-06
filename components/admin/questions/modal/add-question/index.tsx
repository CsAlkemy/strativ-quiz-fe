import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomInput from '@components/shared/custom/custom-input';
import { CircleX, Trash2, X } from 'lucide-react';
import { CustomButton } from '@components/shared/custom/custom-button';
import { MultipleQuestionsSchema, TMultipleQuestionsSchema } from '@library/schemas/questions';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Dialog, DialogContent } from '@components/shared/shadcn-ui/dialog';
import { IQuestion } from '@library/types/questions';
import { v4 as uuidv4 } from 'uuid';

type Props = {
    title: string;
    open: boolean;
    setOpen: (value: boolean) => void;
    onAdd: (newQuestions: IQuestion[]) => void;
};

const AdminAddProductModal = ({ title, open, setOpen, onAdd }: Props) => {
    const hookForm = useForm<TMultipleQuestionsSchema>({
        resolver: zodResolver(MultipleQuestionsSchema),
        defaultValues: {
            questions: [
                {
                    question: '',
                    options: ['', '', '', ''],
                    correctAnswer: '',
                },
            ],
        },
    });

    const {
        fields: questionFields,
        append: appendQuestion,
        remove: removeQuestion,
    } = useFieldArray({
        control: hookForm.control,
        name: 'questions',
    });

    const addQuestion = () => {
        appendQuestion({
            question: '',
            options: ['', '', '', ''],
            correctAnswer: '',
        });
    };

    const onSubmit = (data: TMultipleQuestionsSchema) => {
        const newQuestions: IQuestion[] = data.questions.map(q => ({
            id: uuidv4(),
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            answers: [],
        }));

        onAdd(newQuestions);
        hookForm.reset('' as any);
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
                <div className="bg-neutral-2 w-full">
                    <div className="">
                        <form className="bg-white p-3 rounded-lg space-y-3 col-span-1 md:col-span-2" onSubmit={hookForm.handleSubmit(onSubmit)}>
                            <div className="space-y-3">
                                {questionFields.map((question, questionIndex) => (
                                    <div key={question.id} className="space-y-3 bg-neutral-3 py-5 px-3 rounded-[8px]">
                                        <div className="flex items-center">
                                            <CustomInput
                                                name={`questions.${questionIndex}.question`}
                                                label={`Question ${questionIndex + 1}`}
                                                placeholder="Enter question"
                                                hookForm={hookForm}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeQuestion(questionIndex)}
                                                className="ml-2 mt-6 rounded-[8px] hover:bg-neutral-2 text-red-600 bg-white p-2">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <OptionsFieldArray questionIndex={questionIndex} hookForm={hookForm} />

                                        <CustomInput
                                            name={`questions.${questionIndex}.correctAnswer`}
                                            label="Correct Answer"
                                            placeholder="Enter correct answer"
                                            hookForm={hookForm}
                                        />
                                    </div>
                                ))}
                                <CustomButton variant="outline" className="w-full" type="button" onClick={addQuestion}>
                                    Add More Question
                                </CustomButton>
                            </div>
                            <CustomButton type="submit" className="w-full">
                                Submit
                            </CustomButton>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

const OptionsFieldArray = ({
    questionIndex,
    hookForm,
}: {
    questionIndex: number;
    hookForm: ReturnType<typeof useForm<TMultipleQuestionsSchema>>;
}) => {
    const {
        fields: optionFields,
        append: appendOption,
        remove: removeOption,
    } = useFieldArray({
        control: hookForm.control,
        //@ts-ignore
        name: `questions.${questionIndex}.options`,
    });

    const addOption = () => {
        appendOption('' as any);
    };

    return (
        <div className="space-y-3 bg-white p-3 rounded-md border border-neutral-3">
            {optionFields.map((option, optionIndex) => (
                <div key={option.id} className="flex gap-2">
                    <CustomInput
                        name={`questions.${questionIndex}.options.${optionIndex}`}
                        label={`Option ${optionIndex + 1}`}
                        placeholder="Enter option"
                        hookForm={hookForm}
                    />
                    <button
                        type="button"
                        onClick={() => removeOption(optionIndex)}
                        className="ml-2 mt-6 rounded-[8px] hover:bg-neutral-2 text-red-600 bg-white p-2">
                        <CircleX className="w-5 h-5" />
                    </button>
                </div>
            ))}
            <CustomButton variant="outline" className="w-full" type="button" onClick={addOption}>
                Add More Option
            </CustomButton>
        </div>
    );
};

export default AdminAddProductModal;
