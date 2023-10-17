import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1250px] mx-auto p-4'> 
    {/* //check width */}
        <div className='max-h-[500px] relative'>
            {/* overlay */}
            <div className='rounded-xl absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Foods</span> Delivered</h1>
            </div>
            <img className='rounded-xl  w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
    </div>
  )
}

export default Hero