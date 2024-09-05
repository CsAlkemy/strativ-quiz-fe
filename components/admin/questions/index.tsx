import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { INewQuestion, IQuestion } from '@library/types/questions';
import { CustomButton } from '../../shared/custom/custom-button';
import { PencilIcon, Trash } from 'lucide-react';
import ConfirmationModal from '../../shared/common/confirmation-modal';
import EditQuestionModal from './modal/edit-question';

const Questions = () => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [questionToDelete, setQuestionToDelete] = useState<string | null>(null);
    const [questionToEdit, setQuestionToEdit] = useState<IQuestion | null>(null);
    const [quizData, setQuizData] = useState<IQuestion[]>([]);
    const [newQuestion, setNewQuestion] = useState<INewQuestion>({
        question: '',
        options: ['', '', '', ''],
        correctAnswer: '',
    });

    useEffect(() => {
        const savedQuizData = localStorage.getItem('quizData');
        if (savedQuizData) {
            setQuizData(JSON.parse(savedQuizData));
        } else {
            fetch('/data/questions.json')
                .then(response => response.json())
                .then((data: IQuestion[]) => {
                    setQuizData(data);
                    localStorage.setItem('quizData', JSON.stringify(data));
                })
                .catch(error => console.error('Failed to load quiz data:', error));
        }
    }, []);

    const saveQuizData = (data: IQuestion[]) => {
        localStorage.setItem('quizData', JSON.stringify(data));
        setQuizData(data);
    };

    const addQuestion = () => {
        const questionToAdd: IQuestion = {
            id: uuidv4(),
            question: newQuestion.question,
            options: newQuestion.options,
            correctAnswer: newQuestion.correctAnswer,
            answers: [],
        };

        const updatedQuizData = [...quizData, questionToAdd];
        saveQuizData(updatedQuizData);

        setNewQuestion({ question: '', options: ['', '', '', ''], correctAnswer: '' });
    };

    const editQuestion = (id: string, updatedQuestion: Partial<IQuestion>) => {
        const updatedData = quizData.map(q => (q.id === id ? { ...q, ...updatedQuestion } : q));
        saveQuizData(updatedData);
    };

    const deleteQuestion = (id: string) => {
        const updatedData = quizData.filter(q => q.id !== id);
        saveQuizData(updatedData);
        setDeleteOpen(false); // Close the modal after deletion
    };

    const handleEditClick = (question: IQuestion) => {
        setQuestionToEdit(question);
        setEditOpen(true);
    };

    const handleDeleteClick = (id: string) => {
        setQuestionToDelete(id);
        setDeleteOpen(true);
    };

    return (
        <div>
            <div className="flex justify-between items-center mt-3 mb-5">
                <div className="text-heading-6">Questions</div>
                <CustomButton onClick={addQuestion}>Add Questions</CustomButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {quizData.map(q => (
                    <div key={q.id} className="shadow-sm bg-white border border-neutral-4 p-3 rounded-md">
                        <div className="flex justify-between items-center">
                            <div className="text-paragraph-l font-semi-bold mb-3">{q.question}</div>
                            <div className="flex gap-2 mb-3">
                                <CustomButton size="icon" variant="secondary" onClick={() => handleEditClick(q)}>
                                    <PencilIcon size={14} />
                                </CustomButton>
                                <CustomButton size="icon" variant="secondary" onClick={() => handleDeleteClick(q.id)}>
                                    <Trash size={14} className="text-danger-7" />
                                </CustomButton>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            {q.options.map(option => (
                                <div
                                    key={option}
                                    className={`${option === q.correctAnswer ? 'text-white bg-primary font-semibold' : 'text-black bg-neutral-2'} p-2 rounded-xl text-paragraph-s`}>
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <ConfirmationModal
                open={deleteOpen}
                setOpen={setDeleteOpen}
                title="Do you really want to delete this question?"
                yesButtonFunction={() => questionToDelete && deleteQuestion(questionToDelete)}
            />
            {questionToEdit && (
                <EditQuestionModal
                    title='Edit Question'
                    open={editOpen}
                    setOpen={setEditOpen}
                    question={questionToEdit}
                    onEdit={(updatedQuestion) => {
                        editQuestion(questionToEdit.id, updatedQuestion);
                        setEditOpen(false);
                    }}
                />
            )}
        </div>
    );
};

export default Questions;
