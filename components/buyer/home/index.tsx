import React from 'react';
import Header from '@components/buyer/common/header';
import HeroComponent from '@components/buyer/home/hero';
import CategoriesComponent from '@components/buyer/home/categories';
import BuyerWrapper from '@components/buyer/common/layout';
import TrendingNow from 'components/buyer/home/trending';
import Tops from '@components/buyer/home/tops';
import Bottoms from '@components/buyer/home/bottoms';
import Accessories from '@components/buyer/home/accessories';

const HomePageComponent = () => {
    return (
        <div>
            <Header />
            <HeroComponent />
            <BuyerWrapper title='Home'>
                <CategoriesComponent />
                <TrendingNow />
                <Tops />
                <Bottoms />
                <Accessories />
            </BuyerWrapper>

        </div>
    );
};

export default HomePageComponent;
