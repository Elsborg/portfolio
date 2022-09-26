import React from 'react'
import tech from '../assets/tech.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: tech,

            
        },
        {
            id:2,
            src: tech,

        },
        {
            id:3,
            src: tech,

        },
        {
            id:4,
            src: tech,

        },
        {
            id:5,
            src: tech,

        },
        {
            id:6,
            src: tech
            
        }
    ]
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Se hvilke projekter jeg har lavet</p>
            </div>

            
             <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
             {portfolios.map(({id, src}) => (
                <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                <img src={src} alt="portfolio" className="rounded-md duration-200 hover:scale-105" />
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Kode</button>
                </div>
            </div>
                ))}
                
            </div>

        </div>

    </div>
  )
}

export default Portfolio