import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Qus = ({ data }) => {


    const [currentRadioValue, setCurrentRadioValue] = useState("");



    const handleRadioChange = (e) => {
        setCurrentRadioValue(e.target.value)

        if (e.target.value === data.correctAnswer) {
            toast.success('Correct!');
          } else {
            toast.error('Incorrect. Please try again.');
          }


      
    };






    









    return (
        <div>


            <div className='card shadow-lg h-full space-y-5'>


                <h1><span className='text-blue-500 text-3xl'>QUESTION:</span> {data.question.replace("<p>", "").replace("</p>", "")
                } </h1>

                <div>

                    {


                        data.options.map(Option => <div className="form-control">
                            <label className=" space-x-5 cursor-pointer">
                                <input onChange={handleRadioChange}
                                value={Option}

                                    type="radio" name="radio-10" className=" radio radio-info " />
                                <span className="">{Option}</span>

                            </label>
                        </div>)
                    }




                </div>





            </div>

        </div>
    );

    

};

export default Qus;