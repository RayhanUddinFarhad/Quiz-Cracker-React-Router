import React from 'react';
import { Link } from 'react-router-dom';

const Skills = ({ data }) => {



    return (
        <div>




            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='w-full' src={data.logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='font-bold'>Total Quiz : {data.total}</p>
                    <h2 className="card-title">{data.name}</h2>
                    <p>Programming is a skill best acquired by practice and example rather than from books. Fix the cause, not the symptom. Make it work, make it right, make it fast.

</p>
                    <div className="card-actions justify-end">

                        <Link to={`/Quiz/${data.id}`}> <button className="btn btn-primary ">Start Now</button>
                        </Link>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Skills;