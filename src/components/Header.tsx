import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
    const path = window.location.pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="container mx-auto py-5 px-4 flex justify-between items-center">
            <div>
                <Link to="/"><p className="font-extrabold text-black">THE 06 LEGACY</p></Link>
            </div>

            {/* Hamburger menu button (visible on mobile) */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-black">
                    {/* Icon for hamburger menu */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Links container for large screens */}
            <div className="hidden lg:flex gap-3">
                <Link className={`${path === '/' && 'bg-black text-white hover:text-white'} button text-black hover:text-black`} to="/">ENDORSED</Link>
                <Link className={`${path === '/not-endorsed' && 'bg-black text-white hover:text-white'} button text-black hover:text-black`} to="/not-endorsed">NOT ENDORSED</Link>
                <Link className={`${path === '/e-emailletter' && 'bg-black text-white hover:text-white'} button text-black hover:text-black`} to="/e-emailletter">ENDORSED EMAIL LETTER</Link>
                <Link className={`${path === '/ne-emailletter' && 'bg-black text-white hover:text-white'} button text-black hover:text-black`} to="/ne-emailletter">NOT ENDORSED EMAIL LETTER</Link>
            </div>

            {/* Sliding menu for mobile devices */}
            <div
                className={`fixed top-0 left-0 w-3/4 h-full bg-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out lg:hidden shadow-lg z-50`}
            >
                {/* Close button */}
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-black">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                {/* Menu Links */}
                <div className="flex flex-col gap-6 py-6 px-4">
                    <Link className={`${path === '/' && 'bg-black text-white hover:text-white'} button text-black hover:text-black`} onClick={toggleMenu} to="/">ENDORSED</Link>
                    <Link className={`${path === '/not-endorsed' && 'bg-black text-white hover:text-white'} button text-black hover:text-black`} onClick={toggleMenu} to="/not-endorsed">NOT ENDORSED</Link>
                    <Link className={`${path === '/e-emailletter' && 'bg-black text-white hover:text-white'} button text-black hover:text-black`} onClick={toggleMenu} to="/e-emailletter">ENDORSED EMAIL LETTER</Link>
                    <Link className={`${path === '/ne-emailletter' && 'bg-black text-white hover:text-white'} button text-black hover:text-black`} onClick={toggleMenu} to="/ne-emailletter">NOT ENDORSED EMAIL LETTER</Link>
                </div>
            </div>
        </div>
    );
};
