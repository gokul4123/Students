import React, { useState, useEffect } from 'react';
import './NavBar.css';

function NavBar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`bar ${sticky ? 'sticky' : ''}`}>
            <button className='bbtn' onClick={scrollToTop}>
                <div className="text">
                    S T U D E N T S
                </div>
            </button>
        </div>
    );
}

export default NavBar;
