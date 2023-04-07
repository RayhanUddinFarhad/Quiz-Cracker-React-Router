import React from 'react';
import { Link } from 'react-router-dom';

const Skills = ({ data }) => {



    return (
        <div>




            <div className="card p-0  bg-base-100 shadow-xl">
                <figure><img className='w-full' src={data.logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='font-bold'>Total Quiz : {data.total}</p>
                    <h2 className="card-title">{data.name}</h2>
                    <p>Programming is a skill best acquired by practice and example rather than from books. Fix the cause, not the symptom. Make it work, make it right, make it fast.

</p>
                    <div className="card-actions justify-end">

                        <Link to={`/Quiz/${data.id}`}> <button className="btn btn-primary btn-outline w-52  ">Start Now
                        <span className='ml-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</span></button>
                        </Link>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Skills;