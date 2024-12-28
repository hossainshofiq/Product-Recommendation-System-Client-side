import React from 'react';
import footerLogo from '../../assets/quires_logo.png'
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <img src={footerLogo} alt="" />
                    <p>
                        PerfectAlt Industries Ltd.
                        <br />
                        Providing reliable tech since 2012
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a className='hover:cursor-pointer text-3xl'>
                            <FaFacebook></FaFacebook>
                        </a>
                        <a className='hover:cursor-pointer text-3xl'>
                            <FaLinkedinIn></FaLinkedinIn>
                        </a>
                        <a className='hover:cursor-pointer text-3xl'>
                            <FaGithub ></FaGithub>
                        </a>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by PerfectAlt Industries Ltd</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;