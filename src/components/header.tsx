"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import LoginButtons from './loginButton';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger
} from "@/components/ui/select"

import Link from "next/link";
import { useState } from 'react';

function Header() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <main className='border-b-2 bg-neutral-100'>
            <div className='w-full flex items-center justify-center bg-white h-[70px]'>
                {/* all content */}
                <div className='sm:w-full md:w-[80%] flex items-center justify-between h-[50px]'>

                    <div>
                        {/* logo */}
                        <h1 className='sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold ml-4'>Bandage</h1>
                    </div>

                    {/* links - animated sliding nav */}
                    <div
                        className={`${open ? "translate-x-0" : "-translate-x-full"
                            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-100 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out text-gray-700 md:text-center`}
                    >
                        <ul className='flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-gray-400 md:text-black font-bold'>
                            {/* Select Dropdown */}
                            <Select>
                                <SelectTrigger className="w-[180px] cursor-pointer">
                                    <span className="text-lg font-medium">Menu</span>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="home">
                                            <Link href="/Hero">Home</Link>
                                        </SelectItem>
                                        <SelectItem value="shop">
                                            <Link href="/shop">Shop</Link>
                                        </SelectItem>
                                        <SelectItem value="blog">
                                            <Link href="/blog">Blog</Link>
                                        </SelectItem>
                                        <SelectItem value="team">
                                            <Link href="/HeroTeam">Team</Link>
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* Static Links */}
                            <li className='p-4 hover:underline underline-offset-2'>
                                <Link href="/about">About</Link>
                            </li>

                            <li className='p-4 hover:underline underline-offset-2'>
                                <Link href="/contact">Contact</Link>
                            </li>

                            <li className='p-4 hover:underline underline-offset-2'>
                                <Link href="/pricing">Pricing</Link>
                            </li>

                        </ul>
                    </div>

                    <div className='flex gap-x-4 items-center'>
                        {/* Search bar - visible on small screens and hidden on md and lg screens */}
                        <div className='flex w-full bg-gray-200 rounded-md items-center lg:hidden md:hidden'>
                            <FontAwesomeIcon
                                icon={faSearch}
                                className="text-xl ml-2"
                            />
                        </div>

                        <div className='block'>
                            <FontAwesomeIcon icon={faShoppingCart} className='text-gray-700 mr-1 text-2xl'></FontAwesomeIcon>
                        </div>
                        <div className='block'>
                            <FontAwesomeIcon icon={faHeart} className='text-2xl'></FontAwesomeIcon>
                        </div>

                        {/* Toggle Button for mobile */}
                        <button
                            className="text-black block md:hidden text-3xl z-50"
                            onClick={toggle}
                        >
                            ☰
                        </button>

                        {/* Show Login Buttons on md and larger screens */}
                        <div className='hidden md:flex'>
                            <LoginButtons />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Header;