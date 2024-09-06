import React from 'react';
import { CustomButton } from '@components/shared/custom/custom-button';
import { ArrowRight } from 'lucide-react';
type Props = {
    onScreen?: string;
    setOnScreen: (value: 'banner' | 'quiz' | 'result') => void;
};
const Banner = ({ setOnScreen }: Props) => {
    return (
        <div className="bg-primary-6 bg-opacity-10 min-h-60 p-5 rounded-xl space-y-3">
            <div className="text-heading-1 font-regular text-neutral-7">
                Welcome to <span className="text-primary font-bold">Strativ Quiz</span>
            </div>
            <div className="text-neutral-7 font-regular tracking-wider mb-5">Discover How Much You Know with Our Quiz!</div>
            <CustomButton onClick={() => setOnScreen('quiz')}>
                Get Started <ArrowRight />
            </CustomButton>
        </div>
    );
};

export default React.memo(Banner);
