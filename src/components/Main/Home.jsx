import React from 'react';
import Banner from '../Header/Banner';
import Skills from './Skills';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const data = useLoaderData()




    return (
        <div>

            <Banner></Banner>


            <div className='text-center space-y-3 my-5'>


                <h1 className='font-bold text-4xl'>Practice Your Skill
                </h1>
                <p>Best practices are those practices that generally produce the best results or minimize risk.

                </p>
            </div>

            <div className='lg:grid grid-cols-4 gap-3'>

                {


                    data.data.map(datas => <Skills data={datas}></Skills>
                    )
                }


            </div>



        </div>
    );
};

export default Home;