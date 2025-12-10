import React, { useState } from 'react';
import { X, Menu } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            <nav className="bg-transparent p-4 md:p-5 md:px-10 z-50 absolute w-full top-0 left-0 backdrop-blur-md border-b border-ivory/20 font-playfair">
                <div className="hidden lg:flex items-center justify-between w-full">
                    <ul className={`flex gap-6 lg:gap-8 text-goldd  flex-1 justify-end pr-8 lg:pr-12`}>
                        <Link to='/'>
                            <li className={`transition-colors duration-300 cursor-pointer font-light tracking-wide md:text-xl ${isActive('/') ? 'border-b-2 border-goldd' : ''
                                }`}>
                                Home
                            </li>
                        </Link>
                        <Link to='/menu'>
                            <li className={`transition-colors duration-300 cursor-pointer font-light tracking-wide md:text-xl ${isActive('/menu') ? 'border-b-2 border-goldd' : ''
                                }`}>
                                Menu
                            </li>
                        </Link>
                        <Link to='/privateDining'>
                            <li className={`transition-colors duration-300 cursor-pointer font-light tracking-wide md:text-xl ${isActive('/privateDining') ? 'border-b-2 border-goldd' : ''
                                }`}>
                                Private-Dining
                            </li>
                        </Link>
                    </ul>

                    <Link to='/'><div className="flex items-center flex-col flex-shrink-0 cursor-pointer">
                        <img src="./logo.svg" alt="BrandLogo" className="h-[100px] lg:h-[120px]" />
                        <span className="text-rosso font-great-vibes font-bold text-3xl lg:text-3xl whitespace-nowrap">La Corte Rosso</span>
                    </div></Link>

                    <div className="flex items-center gap-6 lg:gap-8 flex-1 pl-8 lg:pl-12">
                        <ul className={`flex gap-6 items-center lg:gap-8 text-goldd`}>
                            <Link to='/gallery'>
                                <li className={`transition-colors duration-300 cursor-pointer font-light tracking-wide md:text-xl ${isActive('/gallery') ? 'border-b-2 border-goldd' : ''
                                    }`}>
                                    Gallery
                                </li>
                            </Link>
                            <Link to='/story'>
                                <li className={`transition-colors duration-300 cursor-pointer font-light tracking-wide md:text-xl ${isActive('/story') ? 'border-b-2 border-goldd' : ''
                                    }`}>
                                    Story
                                </li>
                            </Link>
                            <Link to='/contacts'>
                                <li className={`transition-colors duration-300 cursor-pointer font-light tracking-wide md:text-xl ${isActive('/contacts') ? 'border-b-2 border-goldd' : ''
                                    }`}>
                                    Contacts
                                </li>
                            </Link>
                            <Link to='/reserve'><button className="rounded cursor-pointer group relative px-10 py-4 bg-goldd border border-charcoal  text-charcoal hover:bg-wine hover:text-ivory transition-all duration-500 tracking-widest text-sm uppercase font-light overflow-hidden">
                                <span className="relative z-10">Reserve</span>
                                <div className="absolute inset-0 bg-wine transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-0" />
                            </button></Link>
                        </ul>
                    </div>
                </div>

                <div className="lg:hidden flex justify-between items-center w-full">
                    <div className="flex items-center flex-col">
                        <img src="./logo.svg" alt="BrandLogo" className="h-[60px]" />
                        <span className="text-rosso font-great-vibes font-bold text-xl">La Corte Rosso</span>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="text-rosso p-2 hover:bg-rosso/10 rounded-lg transition-colors duration-300 cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </nav>

            <div
                className={`font-playfair lg:hidden absolute inset-0 bg-charcoal/95 backdrop-blur-lg z-40 transition-all duration-500 ${isMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                    }`}
                style={{ top: '140px' }}
            >
                <div className="flex flex-col items-center justify-center h-full px-8 font-manrope text-goldd">
                    <ul className="flex flex-col items-center gap-8 mb-12">
                        <Link to='/' onClick={toggleMenu}>
                            <li
                                className={`text-2xl font-light tracking-wider transition-all duration-300 cursor-pointer ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                                    } ${isActive('/') ? 'border-b-2 border-goldd' : ''}`}
                                style={{ transitionDelay: '100ms' }}
                            >
                                Home
                            </li>
                        </Link>
                        <Link to='/menu' onClick={toggleMenu}>
                            <li
                                className={`text-2xl font-light tracking-wider transition-all duration-300 cursor-pointer ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                                    } ${isActive('/menu') ? 'border-b-2 border-goldd' : ''}`}
                                style={{ transitionDelay: '200ms' }}
                            >
                                Menu
                            </li>
                        </Link>
                        <Link to='/privateDining' onClick={toggleMenu}>
                            <li
                                className={`text-2xl font-light tracking-wider transition-all duration-300 cursor-pointer ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                                    } ${isActive('/privateDining') ? 'border-b-2 border-goldd' : ''}`}
                                style={{ transitionDelay: '300ms' }}
                            >
                                Private-Dining
                            </li>
                        </Link>
                        <Link to='/gallery' onClick={toggleMenu}>
                            <li
                                className={`text-2xl font-light tracking-wider transition-all duration-300 cursor-pointer ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                                    } ${isActive('/gallery') ? 'border-b-2 border-goldd' : ''}`}
                                style={{ transitionDelay: '300ms' }}
                            >
                                Gallery
                            </li>
                        </Link>
                        <Link to='/story' onClick={toggleMenu}>
                            <li
                                className={`text-2xl font-light tracking-wider transition-all duration-300 cursor-pointer ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                                    } ${isActive('/story') ? 'border-b-2 border-goldd' : ''}`}
                                style={{ transitionDelay: '400ms' }}
                            >
                                Story
                            </li>
                        </Link>
                        <Link to='/contacts' onClick={toggleMenu}>
                            <li
                                className={`text-2xl font-light tracking-wider transition-all duration-300 cursor-pointer ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                                    } ${isActive('/contacts') ? 'border-b-2 border-goldd' : ''}`}
                                style={{ transitionDelay: '500ms' }}
                            >
                                Contacts
                            </li>
                        </Link>
                        <Link to='/reserve' onClick={toggleMenu}>
                            <li
                                className={`text-2xl font-light tracking-wider transition-all duration-300 cursor-pointer ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                                    } ${isActive('/reserve') ? 'border-b-2 border-goldd' : ''}`}
                                style={{ transitionDelay: '600ms' }}
                            >
                                Reserve
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    );
}