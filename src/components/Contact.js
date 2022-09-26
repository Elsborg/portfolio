import React from 'react'


const Contact = () => {
  return (
    <div name='kontakt' className='w-full h-[80vh] bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/ff1149c0-ab54-42e5-89fa-11f60439941d' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Navn' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type='email' name='name' placeholder='Email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4'/>
                    <textarea name='message'placeholder='Besked' rows='10' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'> </textarea>

                    <button className='text-white font-bold bg-gradient-to-b from-amber-500 to-yellow-700 px-6 py-3 my-8 mx-auto flex items-center rounded hover:scale-110 duration-300'>Lad os snakke</button>
                </form>
            </div>
        </div>
    </div>
    
  );
  
}

export default Contact