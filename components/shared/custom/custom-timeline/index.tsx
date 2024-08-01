import React from 'react';

interface TimelineItemProps {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

const Timeline: React.FC<{ items: TimelineItemProps[] }> = ({ items }) => {
    return (
        <ol className={`border-l border-success-7 md:flex md:justify-start md:border-l-0 md:border-t-4  w-fit`}>
            {items.map(({ id, title, description, completed }) => (
                <li key={id} className={` md:border-l-0 pr-10 ${completed ? 'border-success-7 ' : 'border-neutral-5 md:border-t-4 -mt-1 pr-5'}`}>
                    <div className="flex-start flex items-center md:block ">
                        {!completed ? (
                            <div className="-ml-[10px] mr-3 h-[20px] w-[20px] rounded-full flex justify-center items-center bg-neutral-300 dark:bg-neutral-500 md:-mt-[12px] md:ml-0 md:mr-0">
                                <div className="h-[12px] w-[12px] bg-white rounded-full"></div>
                            </div>
                        ) : (
                            <div className="-ml-[10px] mr-3 h-[20px] mx-3 w-[20px] rounded-full bg-green-500 md:-mt-[12px] md:ml-0 md:mr-0 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16 text-white p-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        )}
                    </div>
                    <div className="ml-4 -mt-5 sm:mt-2  pb-5 md:ml-0">
                        <h4 className="mb-1.5 text-base text-primary text-opacity-50 font-semibold">{title}</h4>
                        <h4 className="mb-1.5 text-xs font-normal">{description}</h4>
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default Timeline;
