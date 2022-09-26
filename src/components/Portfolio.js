import React from 'react'
import berta from '../assets/berta.png'
import candy from '../assets/candy.png'
import solbiler from '../assets/solbiler.png'
import amo from '../assets/amo.png'
import windmill from '../assets/windmill.png'
import ricks from '../assets/ricks.png'

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: berta,
            demo: "https://berta.martinelsborg.dk",
            github: "https://github.com/Elsborg/Berta"

            
        },
        {
            id:2,
            src: candy,
            demo: "https://candy.martinelsborg.dk/",
            github: "https://github.com/Elsborg/Museumcandy"

        },
        {
            id:3,
            src: solbiler,
            demo: "https://solbiler.martinelsborg.dk/",
            github: "https://github.com/Elsborg/solbiler"

        },
        {
            id:4,
            src: amo,
            demo: "https://amo.martinelsborg.dk/",
            github: "https://github.com/Elsborg/Eksamensprojekt2021"

        },
        {
            id:5,
            src: windmill,
            demo: "https://windmill.martinelsborg.dk/",
            github: "https://github.com/Elsborg/Windmill"

        },
        {
            id:6,
            src: ricks,
            demo: "https://ricks.martinelsborg.dk/",
            github: "https://github.com/Elsborg/ricks_guitar"
            
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
             {portfolios.map(({id, src, demo, github}) => (
                <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                <img src={src} alt="portfolio" className="rounded-md duration-200 hover:scale-105" />
                <div className='flex items-center justify-center'>
                    <button onClick={(e) => { e.preventDefault(); window.open(demo, "_blank")}} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button onClick={(e) => { e.preventDefault(); window.open(github, "_blank")}} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Kode</button>
                </div>
            </div>
                ))}
                
            </div>

        </div>

    </div>
  )
}

export default Portfolio