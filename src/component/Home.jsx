import React from 'react';
import Banner from './Banner';
import FeaturesSection from './FeaturesSection';
import StatsSection from './StatsSection';
import ProductShowcase from './ProductShowcase';
import PricingSection from './PricingSection';
import TeamSection from './TeamSection';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs ';
import Faq from './Faq';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-blue-50 via-white-500 to-pink-green'>
            <Banner></Banner>
            <FeaturesSection></FeaturesSection>
            <StatsSection></StatsSection>
            <ProductShowcase></ProductShowcase>
            <PricingSection></PricingSection>
            <TeamSection></TeamSection>
            <AboutUs></AboutUs>
            
            <Faq ></Faq>
            
        </div>
    );
};

export default Home;