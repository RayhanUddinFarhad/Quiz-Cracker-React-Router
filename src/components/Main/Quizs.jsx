import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qus from './Qus';

const Quizs = () => {

    const data = useLoaderData()



    return (
        <div>

            <div className='flex justify-around items-center'>

                <div>

                   <img className='w-24' src={data.data.logo} alt="" />



                </div>
                <div>

                    <h1 className='text-3xl font-bold'>Topic : <span className='text-blue-400'>{data.data.name}</span></h1>
                </div>
                <div>

                <h1 className='text-3xl font-bold'>Total Quiz = <span className='text-blue-400'>{data.data.total}</span></h1>

                </div>




            </div>

            <div>

                {


data.data.questions.map (data => <Qus data = {data}></Qus>)
                }







            </div>
            
        </div>
    );
};

export default Quizs;