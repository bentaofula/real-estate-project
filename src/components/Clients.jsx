
import React from 'react';
import Client1 from '../assets/client-databiz.svg';
import Client2 from '../assets/client-audiophile.svg';
import Client3 from '../assets/client-maker.svg';
import Client4 from '../assets/client-meet.svg';

const Clients = () => {
  return (
    <div className='mx-auto container'>
      <div className='grid grid-cols-4 justify-items-center mt-12 md:mt-28 w-full '>
        <img data-aos="zoom-in" data-aos-offset="230" data-aos-easing="ease-in-out" src={Client1} alt="" className='w-20 md:w-48'/>
        <img data-aos="zoom-in" data-aos-offset="230" data-aos-easing="ease-in-out" src={Client2} alt="" className='w-12 md:w-24'/>
        <img data-aos="zoom-in" data-aos-offset="230" data-aos-easing="ease-in-out" src={Client3} alt="" className='w-20 md:w-40'/>
        <img data-aos="zoom-in" data-aos-offset="230" data-aos-easing="ease-in-out" src={Client4} alt="" className='w-16 md:w-40'/>
      </div>
    </div>
  )
}

export default Clients