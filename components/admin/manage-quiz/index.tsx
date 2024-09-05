import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { INewQuestion, IQuestion } from '@library/types/questions';

const AdminManageQuiz = () => {
    const [quizData, setQuizData] = useState<IQuestion[]>([]); // Store quiz data
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
                .then((response) => response.json())
                .then((data: IQuestion[]) => {
                    setQuizData(data);
                    localStorage.setItem('quizData', JSON.stringify(data));
                })
                .catch((error) => console.error('Failed to load quiz data:', error));
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
        const updatedData = quizData.map((q) =>
            q.id === id ? { ...q, ...updatedQuestion } : q
        );
        saveQuizData(updatedData);
    };

    const deleteQuestion = (id: string) => {
        const updatedData = quizData.filter((q) => q.id !== id);
        saveQuizData(updatedData);
    };

    return (
        <div>
            <h2>Questions</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {quizData.map((q) => (
                    <div className='shadow-sm border border-neutral-4 p-2 rounded-md'>
                        <div className='text-heading-6 font-semi-bold mb-3'>{q.question}</div>
                        <div className='grid grid-cols-1 gap-2'>
                            {
                                q.options.map((option)=>(
                                    <div className={`${option === q.correctAnswer ? 'border-primary border-2':''} p-2 bg-neutral-3 border-2 rounded-lg text-paragraph-s`}>{option}</div>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
            {/*{quizData.map((q) => (*/}
            {/*    <div key={q.id}>*/}
            {/*        <h3>{q.question}</h3>*/}
            {/*        <p>Options: {q.options.join(', ')}</p>*/}
            {/*        <p>Correct Answer: {q.correctAnswer}</p>*/}
            {/*        <button onClick={() => deleteQuestion(q.id)}>Delete</button>*/}
            {/*        <button*/}
            {/*            onClick={() =>*/}
            {/*                editQuestion(q.id, {*/}
            {/*                    question: prompt('Edit Question:', q.question) || q.question,*/}
            {/*                    options: [*/}
            {/*                        prompt('Option 1:', q.options[0]) || q.options[0],*/}
            {/*                        prompt('Option 2:', q.options[1]) || q.options[1],*/}
            {/*                        prompt('Option 3:', q.options[2]) || q.options[2],*/}
            {/*                        prompt('Option 4:', q.options[3]) || q.options[3],*/}
            {/*                    ],*/}
            {/*                    correctAnswer: prompt('Correct Answer:', q.correctAnswer) || q.correctAnswer,*/}
            {/*                })*/}
            {/*            }*/}
            {/*        >*/}
            {/*            Edit*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    );
};

export default AdminManageQuiz;
