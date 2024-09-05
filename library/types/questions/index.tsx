
export interface IQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    answers: { userId: string; answer: string }[];
}

export interface INewQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
}