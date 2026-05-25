import React from 'react'
import Button from "../Button/Button";
import FreshFruits from "../../assets/fresh-fruits.png"

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-no-repeat bg-right bg-contain' style={{backgroundImage: `url(${FreshFruits})`}}>
        <div className='md:bg-transparent bg-orange-100 flex md:flex-row flex-col max-w-7xl mx-auto px-10 py-10 '>
        
        <span className="md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center">
  20%
</span>
        <div className='max-w-2xl'>
            <h3 className="  md:text-7xl text-4xl font-bold text-zinc-800 leading-tight mt-2">
  First Order Discount
</h3>
            <p className="text-zinc-600  my-6">
  Enjoy fresh groceries at amazing prices. Get an exclusive discount on your very first order and start shopping today.
</p>
<Button content="Get a Discount"/>
        </div>
        </div>
    </section>
  )
}

export default Discount
