import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.png'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.png'
import Customer5 from '../../assets/customer5.jpg'
import { FaStar } from "react-icons/fa";

const Testimonials = () => {



  return (
    <section>
      <div className="max-w-7xl mx-auto px-10 py-20">
        <Heading highlight="Customers" heading="Saying" />

        <div className='  flex justify-end mt-5 py-5 gap-3 mb-10'>
          <button className='custom-prev text-2xl text-zinc-800 rounded-lg flex justify-center items-center w-11 h-11 bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
            <IoIosArrowBack />
          </button>

          <button className='custom-next text-2xl text-zinc-800 rounded-lg flex justify-center items-center w-11 h-11 bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
            <IoIosArrowForward />
          </button>

        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {
            review.map(item => {
              return (
                <SwiperSlide
                  key={item.id}
                  className="bg-zinc-100 rounded-xl p-8">

                  <div className="flex gap-5 items-center">

                    <div className="w-16 h-16 rounded-full overflow-hidden outline-2 outline-orange-500 outline-offset-4 outline shadow-[0_8px_20px_rgba(249,115,22,0.25)]">
                      <img src={item.image} className="w-full h-full object-cover" />
                    </div>

                    <div>
                      <h5 className="text-xl font-bold text-zinc-800">
                        {item.name}
                      </h5>

                      <p className="text-zinc-600 mt-1">
                        {item.profession}
                      </p>
                      <span className='flex text-amber-400 mt-3 text-xl gap-1'>
                        {Array.from({ length: item.rating }, (_, index) => (
                          <FaStar />
                        ))}
                      </span>
                    </div>
                  </div>
                  <div className='mt-10 min-h-[15px]'>
                    <p className='text-zinc-600'>{item.para}</p>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials

const review = [
  {
    id: 1,
    name: "Emma Johnson ",
    profession: "Fitness Trainer",
    rating: "5",
    para:
      "Fresh products and super fast delivery. Everything arrived perfectly packed and high quality.",
    image: Customer1,
  },

  {
    id: 2,
    name: " Michael Wilson",
    profession: "Food Blogger",
    rating: "4",
    para:
      "I love the freshness of the fruits and vegetables. The service is smooth and reliable.",
    image: Customer2,
  },

  {
    id: 3,
    name: "Sophia Brown",
    profession: "Chef",
    rating: "5",
    para:
      "Excellent quality ingredients for cooking. Their organic collection is really impressive.",
    image: Customer3,
  },

  {
    id: 4,
    name: "John Smith",
    profession: "Model",
    rating: "4",
    para:
      "Healthy products, affordable prices, and quick delivery. My shopping experience was amazing.",
    image: Customer4,
  },
  {
    id: 5,
    name: "Ava Smith",
    profession: "Nutritionist",
    rating: "5",
    para:
      "Very fresh and healthy grocery options. I highly recommend this store for daily essentials.",
    image: Customer5,
  },
];