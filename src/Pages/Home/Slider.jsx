import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                <SwiperSlide
                    className="h-[80vh] lg:h-[90vh] bg-center bg-cover"
                    // style={{ backgroundImage: `url(${team1})` }}>
                    style={{ backgroundImage: `url(https://www.cloudways.com/blog/wp-content/uploads/Product-Recommendation.jpg)` }}>
                    <div className="max-w-md pl-10 py-64 text-left text-white">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Explore our Product</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className="h-[80vh] lg:h-[90vh] bg-center bg-cover"
                    // style={{ backgroundImage: `url(${team2})` }}>
                    style={{ backgroundImage: `url(https://www.cloudways.com/blog/wp-content/uploads/Product-Recommendation.jpg)` }}>
                    <div className="max-w-md pl-10 py-64 text-left text-white">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Explore our Product</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className="h-[80vh] lg:h-[90vh] bg-center bg-cover"
                    // style={{ backgroundImage: `url(${team3})` }}>
                    style={{ backgroundImage: `url(https://www.cloudways.com/blog/wp-content/uploads/Product-Recommendation.jpg)` }}>
                    <div className="max-w-md pl-10 py-64 text-left text-white">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Explore our Product</button>
                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Slider;