import React from 'react';
import Banner from './Banner';
import FeaturesSection from './FeaturesSection';
import StatsSection from './StatsSection';
import ProductShowcase from './ProductShowcase';
import PricingSection from './PricingSection';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-blue-50 via-white-500 to-pink-green'>
            <Banner></Banner>
            <FeaturesSection></FeaturesSection>
            <StatsSection></StatsSection>
            <ProductShowcase></ProductShowcase>
            <PricingSection></PricingSection>
            
        </div>
    );
};

export default Home;