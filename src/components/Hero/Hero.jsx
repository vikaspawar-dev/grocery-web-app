import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'
function Hero() {
    return (
        <section>
            <div className='min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35'>
                {/* Hero Content  */}
                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality...</span>
                    <h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-4'>
                        Testy Organic{" "}
                        <span className='text-orange-500'>Fruits</span> &{" "}
                        <span className='text-orange-600'>Veggies</span>{" "}
                        In Your City
                    </h1>
                    <p className='text-zinc-600 md:text-lg text-md max-w-[560px] mt-5 mb-10'>
                        Fresh and organic fruits and vegetables delivered directly to your doorstep.
                        Enjoy farm-fresh quality, healthy nutrition, and the best prices in your city every single day.
                    </p>
                    <Button content="Shop Now" />
                </div>
                {/* Hero Image  
            */}
                <div className='flex-1 relative flex justify-center'>

                    <div className='absolute w-[350px] h-[350px] bg-orange-400/30 blur-3xl rounded-full'></div>

                    <img
                        src={Grocery}
                        alt="Hero Image"
                        className='w-[500px] md:w-[650px] object-contain relative z-10'
                    />

                </div>

            </div>
        </section>
    )
}

export default Hero
