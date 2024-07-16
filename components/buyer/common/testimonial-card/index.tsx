import React from 'react';

interface TestimonialCardProps {
    title: string;
    text: string;
    author: string;
    location: string;
    rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ title, text, author, location, rating }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4">
            <div className='flex justify-between items-center w-full'>
                <h3 className="text-paragraph-l text-neutral-10 font-semibold mb-2">{title}</h3>
                <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-5 h-5 ${i < rating ? 'text-primary-6' : 'text-primary-2'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M9.049 2.927C9.43 1.851 10.57 1.851 10.951 2.927l1.286 3.955h4.205c1.012 0 1.428 1.257.58 1.815l-3.402 2.474 1.287 3.955c.38 1.076-.997 1.98-1.902 1.314l-3.402-2.474-3.402 2.474c-.905.666-2.282-.238-1.902-1.314l1.287-3.955-3.402-2.474c-.847-.558-.432-1.815.58-1.815h4.205L9.049 2.927z" />
                        </svg>
                    ))}
                </div>
            </div>

            <p className="text-paragraph-m text-neutral-8 font-regular mb-4">{text}</p>
            <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="ml-3">
                    <p className=" text-paragraph-s text-neutral-10 font-semibold">{author}</p>
                    <p className="text-paragraph-xs text-neutral-7 font-regular">{location}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
