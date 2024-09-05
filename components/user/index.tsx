import React, { useState, useEffect } from 'react';
import { IQuestion } from '@library/types/questions';

interface UserAnswer {
    questionId: string;
    answer: string;
}

const QuizComponent = () => {
    const [quizData, setQuizData] = useState<IQuestion[]>([]);
    const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        fetch('/data/questions.json')
            .then((response) => response.json())
            .then((data) => setQuizData(data));
    }, []);

    const handleAnswerChange = (questionId: string, selectedAnswer: string) => {
        setUserAnswers((prevAnswers) => {
            const existingAnswerIndex = prevAnswers.findIndex(
                (answer) => answer.questionId === questionId
            );

            if (existingAnswerIndex > -1) {
                const updatedAnswers = [...prevAnswers];
                updatedAnswers[existingAnswerIndex].answer = selectedAnswer;
                return updatedAnswers;
            } else {
                return [...prevAnswers, { questionId, answer: selectedAnswer }];
            }
        });
    };

    const handleSubmit = () => {
        localStorage.setItem('userQuizAnswers', JSON.stringify(userAnswers));
        setIsSubmitted(true);
    };

    const renderResults = () => {
        return quizData.map((question) => {
            const userAnswer = userAnswers.find((answer) => answer.questionId === question.id);
            const isCorrect = userAnswer?.answer === question.correctAnswer;

            return (
                <div key={question.id} className="mb-4">
                    <h3>{question.question}</h3>
                    <p>Your answer: {userAnswer?.answer}</p>
                    <p>Correct answer: {question.correctAnswer}</p>
                    {isCorrect ? <p style={{ color: 'green' }}>Correct!</p> : <p style={{ color: 'red' }}>Incorrect</p>}
                </div>
            );
        });
    };

    if (isSubmitted) {
        return (
            <div>
                <h2>Results</h2>
                {renderResults()}
            </div>
        );
    }

    return (
        <div className='w-11/12 mx-auto max-w-screen-2xl'>
            <h1>Quiz</h1>
            {quizData.map((question) => (
                <div key={question.id} className="mb-6">
                    <h3>{question.question}</h3>
                    {question.options.map((option, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="radio"
                                id={`${question.id}-${index}`}
                                name={question.id}
                                value={option}
                                checked={userAnswers.some((answer) => answer.questionId === question.id && answer.answer === option)}
                                onChange={() => handleAnswerChange(question.id, option)}
                            />
                            <label htmlFor={`${question.id}-${index}`} className="ml-2">
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            ))}

            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Submit
            </button>
        </div>
    );
};

export default QuizComponent;
