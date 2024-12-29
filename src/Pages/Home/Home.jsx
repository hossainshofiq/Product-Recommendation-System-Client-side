import React from 'react';
import Slider from './Slider';
import RecentQueries from './RecentQueries';
import HighlighterBrands from './HighlighterBrands';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div className=''>
            <Slider></Slider>
            <RecentQueries></RecentQueries>
            <HighlighterBrands></HighlighterBrands>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;