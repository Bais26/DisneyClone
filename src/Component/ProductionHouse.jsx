import React from 'react'
import disney from "./../assets/image/Disn.png";
import marvel from "./../assets/image/marvel.png"
import pixar from "./../assets/image/pixar.png";
import nationalG from "./../assets/image/nationalG.png";
import starwar from "./../assets/image/starwar.png";

import starwarV from './../assets/Vidios/star-wars.mp4'
import disneyV from './../assets/Vidios/disney.mp4'
import marvelV from './../assets/Vidios/marvel.mp4'
import nationalGeographicV from './../assets/Vidios/national-geographic.mp4'
import pixarV from './../assets/Vidios/pixar.mp4'

export default function ProductionHouse() {
  const list=[
    {
      id:1,
      image:disney,
      video:disneyV
  },
  {
      id:2,
      image:pixar,
      video:pixarV
  },
  {
      id:3,
      image:marvel,
      video:marvelV
  },
  {
      id:4,
      image:starwar,
      video:starwarV
  },
  {
      id:5,
      image:nationalG,
      video:nationalGeographicV
  },

  ]  

  return (
    <div className='flex gap-5 md:gap-5 px-5 md:px-16'>
        {list.map((item)=>(
            <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-md shadow-gray-800'>
                <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 rounded opacity-0 hover:opacity-70' ></video>
                <img src={item.image} className='w-full  bg-gray-800 bg-opacity-50'/>
            </div>
        ))}
    </div>

  )
}
