import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Summary = () => {
    const params = useParams();
    const id = params.id;
    const [open, setOpen] = useState(false)
    const [data1, setData1] = useState();

    const getInfo = async () => {
        const data = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setData1(data.data);

    }
    useEffect(() => {
        getInfo();
    }, [])
    console.log(data1);


    return (
        <div>
            <div className="px-5 py-3 bg-slate-300">
                <p className="font-mono font-bold text-2xl">QuadB</p>
            </div>
            <div className='md:flex md:flex-col gap-8 mx-10 my-5 sm:flex sm:flex-col lg:grid lg:grid-cols-2'>
                <div className='rounded-lg shadow-xl md:w-[38rem] lg:w-[38rem] sm:mb-5 sm:w-[20rem]'>
                    <img src={data1.image.original} alt='' className='md:h-[35rem] md:w-[35rem] lg:h-[35rem] lg:w-[35rem] p-5 mx-auto sm:w-[20rem]' />
                </div>
                <div className='flex flex-col shadow-lg px-5 pt-5 items-center rounded-lg '>
                    {data1.summary}
                    <button className='bg-blue-500 w-40 p-4 rounded-xl mb-5'
                        onClick={() => setOpen(!open)}
                    >
                        Book Tickets
                    </button>
                    {open &&
                        <div className='mt-5'>
                            <h6 className='text-3xl font-bold'>Book Tickets</h6>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">Email</label>
                                <input
                                    className="border-2 rounded-lg w-80 p-3 flex border-gray-300"
                                    type="email"
                                    name="email"
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">Email</label>
                                <input
                                    className="border-2 rounded-lg w-80 p-3 flex border-gray-300"
                                    type="strinf"
                                    name="movie"
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">Email</label>
                                <input
                                    className="border-2 rounded-lg w-80 p-3 flex border-gray-300"
                                    type="date"
                                    name="date"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center py-2">
                                <button className='bg-blue-500 w-28 p-1 rounded-xl'
                                    onClick={() => setOpen(!open)}
                                >
                                    Close
                                </button>

                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Summary;
