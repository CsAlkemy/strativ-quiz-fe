import React from 'react';
import HeroComponent from '@components/buyer/home/hero';
import CategoriesComponent from '@components/buyer/home/categories';
import BuyerWrapper from '@components/buyer/common/layout/width-wrapper';
import TrendingNow from 'components/buyer/home/trending';
import Tops from '@components/buyer/home/tops';
import Bottoms from '@components/buyer/home/bottoms';
import Accessories from '@components/buyer/home/accessories';
import PopularShops from '@components/buyer/home/popular-shops';
import Testimonials from '@components/buyer/home/testimonials';
import Cta from '@components/buyer/home/cta';
import BuyerLayout from '@components/buyer/common/layout';

const HomePageComponent = () => {
    return (
        <BuyerLayout title="Homepage">
            <HeroComponent />
            <BuyerWrapper>
                <CategoriesComponent />
                <TrendingNow />
                <PopularShops />
                <Tops />
                <Cta />
                <Bottoms />
            </BuyerWrapper>
            <Testimonials />
            <BuyerWrapper>
                <Accessories />
            </BuyerWrapper>
        </BuyerLayout>
    );
};

export default HomePageComponent;
