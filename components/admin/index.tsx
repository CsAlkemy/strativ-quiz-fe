import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { INewQuestion, IQuestion } from '@library/types/questions';

const AdminQuizManager: React.FC = () => {
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
            <h1>Admin Quiz Manager</h1>

            <h2>Add a new question</h2>
            <input
                type="text"
                value={newQuestion.question}
                placeholder="Question"
                onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
            />
            {newQuestion.options.map((option, index) => (
                <input
                    key={index}
                    type="text"
                    value={option}
                    placeholder={`Option ${index + 1}`}
                    onChange={(e) => {
                        const updatedOptions = [...newQuestion.options];
                        updatedOptions[index] = e.target.value;
                        setNewQuestion({ ...newQuestion, options: updatedOptions });
                    }}
                />
            ))}
            <input
                type="text"
                value={newQuestion.correctAnswer}
                placeholder="Correct Answer"
                onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
            />
            <button onClick={addQuestion}>Add Question</button>

            <h2>Existing Questions</h2>
            {quizData.map((q) => (
                <div key={q.id}>
                    <h3>{q.question}</h3>
                    <p>Options: {q.options.join(', ')}</p>
                    <p>Correct Answer: {q.correctAnswer}</p>
                    <button onClick={() => deleteQuestion(q.id)}>Delete</button>
                    <button
                        onClick={() =>
                            editQuestion(q.id, {
                                question: prompt('Edit Question:', q.question) || q.question,
                                options: [
                                    prompt('Option 1:', q.options[0]) || q.options[0],
                                    prompt('Option 2:', q.options[1]) || q.options[1],
                                    prompt('Option 3:', q.options[2]) || q.options[2],
                                    prompt('Option 4:', q.options[3]) || q.options[3],
                                ],
                                correctAnswer: prompt('Correct Answer:', q.correctAnswer) || q.correctAnswer,
                            })
                        }
                    >
                        Edit
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AdminQuizManager;
