import React from 'react';
import { MdOutlineSupportAgent } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";

const HighlighterBrands = () => {

    const brands = [
        { name: "NOTHING", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPs6LOKDlJ9g8IeE2kwB2kl0nkbwV76jiDA&s" },
        { name: "HUAWEI", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6V9Q5KCv2x-L1YrxnVDUwoEOykp35L4MTQ&s" },
        { name: "Apple", logo: "https://www.freepnglogos.com/uploads/apple-iphone-logo-png-1.png" },
        { name: "Samsung", logo: "https://freelogopng.com/images/all_img/1691604371samsung-logo-png-black.png" },
        { name: "Xiaomi", logo: "https://logolook.net/wp-content/uploads/2022/10/Xiaomi-Logo.png" },
        { name: "Nokia", logo: "https://www.pngplay.com/wp-content/uploads/13/Nokia-Transparent-Free-PNG.png" },
        { name: "Motorola", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Motorola-logo-black-and-white.png" },
        { name: "Vivo", logo: "https://logolook.net/wp-content/uploads/2023/03/Vivo-Symbol.png" },
    ];

    const features = [
        { icon: <MdOutlineSupportAgent></MdOutlineSupportAgent>, title: "Online Support" },
        { icon: <AiFillProduct></AiFillProduct>, title: "Official Product" },
        { icon: <TbTruckDelivery></TbTruckDelivery>, title: "Fastest Delivery" },
        { icon: <RiSecurePaymentFill></RiSecurePaymentFill>, title: "Secure Payment" },
    ];

    return (
        <div className="bg-[#111926] py-12">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white mb-10">
                    Unleash Innovation with our Diverse Brand Selection!
                </h2>

                {/* all brands */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="max-h-16 object-contain"
                            />
                        </div>
                    ))}
                </div>

                <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-600 transition">
                    Discover Our All Brands
                </button>

                {/* all services */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6"
                        >
                            <div className="text-teal-500 text-5xl">{feature.icon}</div>
                            <p className="mt-4 text-gray-800 font-semibold">{feature.title}</p>
                        </div>
                    ))}
                </div>

                <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-600 transition">
                    Discover Our All Services
                </button>

            </div>
        </div>
    );
};

export default HighlighterBrands;