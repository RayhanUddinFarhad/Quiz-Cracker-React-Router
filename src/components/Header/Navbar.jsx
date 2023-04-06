import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-around items-center py-10'>

            <Link to= "/">


                <h1 className='text-5xl font-bold'>Quizo</h1>
            </Link>

            <div className='flex space-x-5 font-bold text-xl items-center'>



                <Link to= "/">Home</Link>
                <Link to= "Statics">Statics</Link>
                <Link to = "Blog">Blogs</Link>
                <Link to = "About">About Us</Link>
            </div>
            
        </div>
    );
};

export default Navbar;