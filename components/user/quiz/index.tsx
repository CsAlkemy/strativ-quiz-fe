import React, { useState, useEffect } from 'react';
import { IQuestion } from '@library/types/questions';
import { CustomButton } from '@components/shared/custom/custom-button';
import { ConstOptionLetters } from '@library/constant';
import { ArrowLeft } from 'lucide-react';

interface UserAnswer {
    questionId: string;
    answer: string;
}

const QuizComponent = () => {
    const [quizData, setQuizData] = useState<IQuestion[]>([]);
    const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [scoreData, setScoreData] = useState({
        totalQuestions: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        scorePercentage: 0,
    });

    useEffect(() => {
        const storedQuizData = localStorage.getItem('quizData');
        if (storedQuizData) {
            setQuizData(JSON.parse(storedQuizData));
        } else {
            fetch('/data/questions.json')
                .then(response => response.json())
                .then(data => {
                    setQuizData(data);
                    localStorage.setItem('quizData', JSON.stringify(data)); // Store fetched data in localStorage
                });
        }
    }, []);

    useEffect(() => {
        const savedAnswers = localStorage.getItem('userQuizAnswers');
        if (savedAnswers) {
            setUserAnswers(JSON.parse(savedAnswers));
        }
    }, []);

    const handleAnswerChange = (questionId: string, selectedAnswer: string) => {
        setUserAnswers(prevAnswers => {
            const existingAnswerIndex = prevAnswers.findIndex(answer => answer.questionId === questionId);
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
        const totalQuestions = quizData.length;
        let correctAnswers = 0;
        userAnswers.forEach(userAnswer => {
            const question = quizData.find(q => q.id === userAnswer.questionId);
            if (question && userAnswer.answer === question.correctAnswer) {
                correctAnswers++;
            }
        });

        const wrongAnswers = totalQuestions - correctAnswers;
        const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
        setScoreData({
            totalQuestions,
            correctAnswers,
            wrongAnswers,
            scorePercentage,
        });

        localStorage.setItem('userQuizAnswers', JSON.stringify(userAnswers));
        setIsSubmitted(true);
    };

    // const renderResults = () => {
    //     return quizData.map(question => {
    //         const userAnswer = userAnswers.find(answer => answer.questionId === question.id);
    //         const isCorrect = userAnswer?.answer === question.correctAnswer;
    //
    //         return (
    //             <div key={question.id} className="mb-4">
    //                 <h3>{question.question}</h3>
    //                 <p>Your answer: {userAnswer?.answer || 'No answer'}</p>
    //                 <p>Correct answer: {question.correctAnswer}</p>
    //                 {isCorrect ? <p style={{ color: 'green' }}>Correct!</p> : <p style={{ color: 'red' }}>Incorrect</p>}
    //             </div>
    //         );
    //     });
    // };

    if (isSubmitted) {
        const { totalQuestions, correctAnswers, wrongAnswers, scorePercentage } = scoreData;
        return (
            <div className="p-5 bg-primary-6 bg-opacity-10 rounded-xl mb-32 flex flex-col items-center">
                <div className="text-[7rem] text-primary-6 font-bold mt-5">{scorePercentage}%</div>
                <div className="text-heading-3 text-primary font-bold mb-3">
                    {scorePercentage > 40 ? 'Congratulations !!' : 'Better Luck Next Time'}
                </div>
                <div className="text-neutral-7 font-regular tracking-wider mb-5">Thank you so much for participating.</div>
                <div className="flex gap-2 mb-3">
                    <div className="p-3 bg-white rounded-md">Total questions: {totalQuestions}</div>
                    <div className="p-3 bg-white rounded-md">Correct answers: {correctAnswers}</div>
                    <div className="p-3 bg-white rounded-md">Wrong answers: {wrongAnswers}</div>
                </div>
                <div className="mb-5">
                    <CustomButton onClick={() => setIsSubmitted(false)}>
                        <ArrowLeft /> Back to Quiz
                    </CustomButton>
                </div>
                {/*{renderResults()}*/}
            </div>
        );
    }

    return (
        <div className="p-5 bg-primary-6 bg-opacity-10 rounded-xl mb-32">
            {quizData.map(q => (
                <div key={q.id} className="shadow-sm bg-white border border-neutral-4 p-4 rounded-md mb-6">
                    <div className="text-paragraph-l font-semi-bold mb-3">{q.question}</div>
                    <div className="grid grid-cols-1 gap-2">
                        {q.options.map((option, index) => {
                            const isSelected = userAnswers.some(answer => answer.questionId === q.id && answer.answer === option);
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleAnswerChange(q.id, option)}
                                    className={`cursor-pointer p-2 rounded-xl text-paragraph-s ${
                                        isSelected ? 'bg-primary text-white font-semibold' : 'bg-neutral-2 text-black'
                                    }`}>
                                    {ConstOptionLetters[index]}
                                    {'. '}
                                    {option}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
            <div className="flex justify-end">
                <CustomButton onClick={handleSubmit}>Submit</CustomButton>
            </div>
        </div>
    );
};

export default QuizComponent;
