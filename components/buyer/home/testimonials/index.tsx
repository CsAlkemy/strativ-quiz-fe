import React from 'react';
import TestimonialCard from '@components/buyer/common/testimonial-card';
import TitleHeaderComponent from '@components/buyer/common/title-header';

const testimonials = [
    {
        id: 1,
        title: 'Impressive Service!',
        text: "I'm thoroughly impressed with this site! Quick shipping, accurate descriptions, and great customer service.",
        author: 'Sarah Johnson',
        location: 'Bukit Batok',
        rating: 5,
    },
    {
        id: 2,
        title: 'Easy Selling Process!',
        text: "Selling my clothes was a breeze. Fast sales, easy process. I'll definitely be back for selling opportunities on this user-friendly platform!",
        author: 'Alexia Rodriguez',
        location: 'Jurong',
        rating: 5,
    },
    {
        id: 3,
        title: 'Great Quality Finds!',
        text: 'Quality items, great prices, wide selection. Already recommended to friends. My go-to for trendy fashion at unbeatable prices and quality!',
        author: 'Emily Patel',
        location: 'Tampines',
        rating: 4,
    },
    {
        id: 4,
        title: 'Easy Selling Process!',
        text: "Beautiful accessories, speedy delivery. Can't wait to shop again for more stylish treasures to add to my collection of fabulous fashion finds!",
        author: 'Olivia Thompson',
        location: 'Kampong Glam',
        rating: 5,
    },
    {
        id: 5,
        title: 'Love This Platform!',
        text: "Love this platform! Hassle-free returns, amazing finds. It's my fashion paradise, always delivering the latest styles at great prices with quality.",
        author: 'Jacklyn Nguyen',
        location: 'Bukit Batok',
        rating: 5,
    },
    {
        id: 6,
        title: 'Effortless Experience!',
        text: 'From start to finish, shopping here was a breeze. Great selection, fast shipping, and superb customer service. Highly recommend!',
        author: 'Isabella Martinez',
        location: 'Yishun',
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <div className="bg-neutral-3 pt-10 pb-20">
            <div className='w-11/12 mx-auto'>
                <TitleHeaderComponent title='Trusted by Women all around the World' />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {testimonials.map(testimonial => (
                        <TestimonialCard
                            key={testimonial.id}
                            title={testimonial.title}
                            text={testimonial.text}
                            author={testimonial.author}
                            location={testimonial.location}
                            rating={testimonial.rating}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Testimonials;
