import React, { useState } from "react";
import logo from "./../assets/image/disneylogo.png";
import profil from "./../assets/image/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import NavbarItem from "./NavbarItem";
function Navbar() {
  const [toggle,setToggle]=useState(false)
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINAL",
      icon: HiStar,
    },
    {
      name: "MOVIE",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex item-center gap-8">
        <img
          src={logo}
          alt="disneylogo.png"
          className="object-cover w-[80px] md:w[115px]"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <NavbarItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map((item, index) => index < 3 &&(
          <NavbarItem name={''} Icon={item.icon} />
          ))}
           <div className="mt-7 md:hidden" onClick={()=>setToggle(!toggle)}>
          <NavbarItem name={''} Icon={HiDotsVertical}/>
         {toggle? <div className="absolute p-5 px-6 py-4 border bg-[#121212] border-gray-700">
          {menu.map((item,index)=>index > 2&&(
            <NavbarItem name={item.name} Icon={item.icon} />
          ))}
          </div>:null}
          </div> 
      </div> 
      </div>
      <img src={profil} className="w-[40px] rounded-full" />
    </div>
  );
}

export default Navbar;
