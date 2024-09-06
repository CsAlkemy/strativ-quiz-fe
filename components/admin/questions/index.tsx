import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { INewQuestion, IQuestion } from '@library/types/questions';
import { CustomButton } from '../../shared/custom/custom-button';
import { PencilIcon, Trash } from 'lucide-react';
import ConfirmationModal from '../../shared/common/confirmation-modal';
import EditQuestionModal from './modal/edit-question';
import AdminAddProductModal from '@components/admin/questions/modal/add-question';

const Questions = () => {
    const [modalState, setModalState] = useState({ type: '', open: false });
    const [selectedQuestion, setSelectedQuestion] = useState<IQuestion | null>(null);
    const [quizData, setQuizData] = useState<IQuestion[]>([]);

    useEffect(() => {
        const fetchQuizData = async () => {
            const savedQuizData = localStorage.getItem('quizData');
            if (savedQuizData) {
                setQuizData(JSON.parse(savedQuizData));
            } else {
                try {
                    const response = await fetch('/data/questions.json');
                    const data: IQuestion[] = await response.json();
                    setQuizData(data);
                    localStorage.setItem('quizData', JSON.stringify(data));
                } catch (error) {
                    console.error('Failed to load quiz data:', error);
                }
            }
        };
        fetchQuizData();
    }, []);

    const saveQuizData = useCallback((data: IQuestion[]) => {
        localStorage.setItem('quizData', JSON.stringify(data));
        setQuizData(data);
    }, []);

    const handleAddQuestion = useCallback(
        (newQuestions: IQuestion[]) => {
            const updatedQuizData = [...quizData, ...newQuestions];
            saveQuizData(updatedQuizData);
            setModalState({ type: '', open: false });
        },
        [quizData, saveQuizData],
    );

    const handleEditQuestion = useCallback(
        (id: string, updatedQuestion: Partial<IQuestion>) => {
            const updatedData = quizData.map(q => (q.id === id ? { ...q, ...updatedQuestion } : q));
            saveQuizData(updatedData);
            setModalState({ type: '', open: false });
        },
        [quizData, saveQuizData],
    );

    const handleDeleteQuestion = useCallback(() => {
        if (selectedQuestion) {
            const updatedData = quizData.filter(q => q.id !== selectedQuestion.id);
            saveQuizData(updatedData);
            setModalState({ type: '', open: false });
        }
    }, [quizData, selectedQuestion, saveQuizData]);

    const openModal = useCallback((type: string, question: IQuestion | null = null) => {
        setSelectedQuestion(question);
        setModalState({ type, open: true });
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mt-3 mb-5">
                <div className="text-heading-6">Questions</div>
                <CustomButton onClick={() => openModal('add')}>Add Questions</CustomButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {quizData.map(q => (
                    <div key={q.id} className="shadow-sm bg-white border border-neutral-4 p-3 rounded-md">
                        <div className="flex justify-between items-center">
                            <div className="text-paragraph-l font-semi-bold mb-3">{q.question}</div>
                            <div className="flex gap-2 mb-3">
                                <CustomButton size="icon" variant="secondary" onClick={() => openModal('edit', q)}>
                                    <PencilIcon size={14} />
                                </CustomButton>
                                <CustomButton size="icon" variant="secondary" onClick={() => openModal('delete', q)}>
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

            {modalState.type === 'delete' && (
                <ConfirmationModal
                    open={modalState.open}
                    setOpen={open => setModalState({ type: '', open })}
                    title="Do you really want to delete this question?"
                    yesButtonFunction={handleDeleteQuestion}
                />
            )}

            {modalState.type === 'edit' && selectedQuestion && (
                <EditQuestionModal
                    title="Edit Question"
                    open={modalState.open}
                    setOpen={open => setModalState({ type: '', open })}
                    question={selectedQuestion}
                    onEdit={updatedQuestion => handleEditQuestion(selectedQuestion.id, updatedQuestion)}
                />
            )}

            {modalState.type === 'add' && (
                <AdminAddProductModal
                    open={modalState.open}
                    title="Add Questions"
                    setOpen={open => setModalState({ type: '', open })}
                    onAdd={handleAddQuestion}
                />
            )}
        </div>
    );
};

export default Questions;
