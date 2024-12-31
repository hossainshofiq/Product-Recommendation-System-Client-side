import React from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {

    const handleSendMessage = () => {
        Swal.fire({
            icon: 'success',
            title: 'Message Sent',
            text: 'Your message has been successfully sent to us.',
            confirmButtonText: 'OK',
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="bg-white shadow-lg rounded-none p-6 md:p-8 w-full border">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex flex-col gap-6 lg:w-1/2">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold">Phone</h3>
                            <p>Inquiry: (+88) 01689 - 819951</p>
                            <p>Hotline: 2345 - 2375</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold">Email</h3>
                            <p>perfectAlt@gmail.com</p>
                            <p>inquiry@perfectAlt.com</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold">Location</h3>
                            <p>43/V/1, Indira Road, Pranthapath, Dhaka, 1215</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center lg:w-1/2">
                        <form className="flex flex-col gap-6 w-full">
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Name"
                                    className="input input-bordered w-full md:w-1/2 p-3 border rounded-none bg-gray-50"
                                />
                                <input
                                    type="text"
                                    name="mobileNumber"
                                    placeholder="Email"
                                    className="input input-bordered w-full md:w-1/2 p-3 border rounded-none bg-gray-50"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="input input-bordered w-full p-3 border rounded-none bg-gray-50"
                            />
                            <textarea
                                name="message"
                                placeholder="Type your message..."
                                rows="5"
                                className="textarea textarea-bordered w-full p-3 border rounded-none bg-gray-50"
                            ></textarea>
                            <div className="flex justify-center">
                                <button
                                    onClick={handleSendMessage}
                                    type="submit"
                                    className="btn bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
