import React from 'react';
import Slider from './Slider';
import RecentQueries from './RecentQueries';

const Home = () => {
    return (
        <div className='my-10'>
            <Slider></Slider>
            <RecentQueries></RecentQueries>
        </div>
    );
};

export default Home;