import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

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
                {/* slider 1 */}
                <SwiperSlide
                    className="h-[80vh] lg:h-[90vh] bg-center bg-cover"
                    style={{ backgroundImage: `url("https://d61s2hjse0ytn.cloudfront.net/images/web/slider/honor-200-slider.webp")` }}>
                    <div className="max-w-md pl-10 py-64 text-left text-white">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <Link to='/queries'>
                            <button className="btn btn-primary">Explore our Product Queries</button>
                        </Link>
                    </div>
                </SwiperSlide>
                {/* slider 2 */}
                <SwiperSlide
                    className="h-[80vh] lg:h-[90vh] bg-center bg-cover"
                    style={{ backgroundImage: `url(https://d61s2hjse0ytn.cloudfront.net/images/web/slider/iPhone_16_Pro_and_iPhone_16_Pro_Max.webp)` }}>
                    <div className="max-w-md pl-10 py-64 text-left text-white">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <Link to='/queries'>
                            <button className="btn btn-primary">Explore our Product Queries</button>
                        </Link>
                    </div>
                </SwiperSlide>
                {/* slider 3 */}
                <SwiperSlide
                    className="h-[80vh] lg:h-[90vh] bg-center bg-cover"
                    style={{ backgroundImage: `url(https://d61s2hjse0ytn.cloudfront.net/images/web/slider/Acer_Nitro_V15.webp)` }}>
                    <div className="max-w-md pl-10 py-64 text-left text-white">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <Link to='/queries'>
                            <button className="btn btn-primary">Explore our Product Queries</button>
                        </Link>
                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Slider;