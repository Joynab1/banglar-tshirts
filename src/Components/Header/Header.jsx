import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='no-underline font-3xl mr-5'>
                <Link className='no-underline' to='/'>Home</Link>
                <Link to='/orders'>Orders Review</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </>
    );
};

export default Header;