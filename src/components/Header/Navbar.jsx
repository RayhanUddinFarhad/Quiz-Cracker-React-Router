import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <div className='lg:flex justify-around items-center py-10 space-y-5'>

            <Link to= "/">


                <h1 className='text-5xl font-bold'>Quizo</h1>
            </Link>


            <div className='lg:hidden mx-auto' onClick={() => setToggle(!toggle)}>

                {

                    toggle ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg> :
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                
                  



                }






            </div>




            <div className = {`flex lg:block flex-col lg:flex-wrap lg:flex-row static space-y-2 lg:space-y-0 lg:space-x-5 font-bold text-xl items-center  ${toggle ? 'block p-3 bg-white lg:bg-transparent w-full card-bordered lg:max-w-max ' : 'hidden'}`}>



                <Link to= "/">Home</Link>
                <Link to= "Statics">Statics</Link>
                <Link to = "Blog">Blogs</Link>
                <Link to = "About">About Us</Link>
            </div>
            
        </div>
    );
};

export default Navbar;