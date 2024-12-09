import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (

        <footer className="bg-white flex flex-col items-center py-10 px-4 text-black">
            <div className="w-full max-w-7xl flex justify-between items-center mt-4">
                {/* Left Side: Heading */}
                <h3 className="text-xl font-bold">
                    Bandage
                </h3>

                {/* Right Side: Icons */}
                <div className="flex space-x-4">
                    <Link href="#" aria-label="Facebook">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-blue-500 text-2xl hover:scale-110 transition-transform"
                        />
                    </Link>
                    <Link href="#" aria-label="Instagram">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-blue-500 text-2xl hover:scale-110 transition-transform"
                        />
                    </Link>
                    <Link href="#" aria-label="Twitter">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-blue-500 text-2xl hover:scale-110 transition-transform"
                        />
                    </Link>
                </div>
            </div>
            <br /> <br />
            <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-9">
                {/* Company Info */}
                <div>
                    <h1 className="font-bold text-sm mb-4">Company Info</h1>
                    <ul>
                        <li className="pt-2 cursor-pointer">About Us</li>
                        <li className="pt-2 cursor-pointer">Carrier</li>
                        <li className="pt-2 cursor-pointer">We are hiring</li>
                        <li className="pt-2 cursor-pointer">Blog</li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h1 className="font-bold text-sm mb-4">Legal</h1>
                    <ul>
                        <li className="pt-2 cursor-pointer">About Us</li>
                        <li className="pt-2 cursor-pointer">Carrier</li>
                        <li className="pt-2 cursor-pointer">We are hiring</li>
                        <li className="pt-2 cursor-pointer">Blog</li>
                    </ul>
                </div>

                {/* Features */}
                <div>
                    <h1 className="font-bold text-sm mb-4">Features</h1>
                    <ul>
                        <li className="pt-2 cursor-pointer">Business Marketing</li>
                        <li className="pt-2 cursor-pointer">User Analytic</li>
                        <li className="pt-2 cursor-pointer">Live Chat</li>
                        <li className="pt-2 cursor-pointer">Unlimited Support</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h1 className="font-bold text-sm mb-4">Resources</h1>
                    <ul>
                        <li className="pt-2 cursor-pointer">iOS & Android</li>
                        <li className="pt-2 cursor-pointer">Watch a Demo</li>
                        <li className="pt-2 cursor-pointer">Customers</li>
                        <li className="pt-2 cursor-pointer">API</li>
                    </ul>
                </div>

                {/* Get In Touch */}
                <div>
                    <h1 className="font-bold text-sm mb-4">Get In Touch</h1>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-gray-800 border-none text-white py-2 px-4 w-full"
                        />
                        <button className="bg-blue-500 text-white py-2 px-4 mt-2 w-full">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-500">
                Made With Love By Finland All Rights Reserved
            </div>
        </footer>)
}