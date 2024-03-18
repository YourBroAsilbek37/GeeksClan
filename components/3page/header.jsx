import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import Sitebar from './sitebar';


const Header = () => {
  return (
    <div>
      
        <div className='flex items-center gap-10 container'>
        <div className='flex items-center text-teal-400	'>
        <IoHomeSharp className='w-[40px] h-[20px]' />
        <p>Главная</p>
        </div>
        <div className='text-slate-600	'>
          <p>Поиск по алфавиту</p>
        </div>
        <br /><br />
        </div>
        <div className='container'>
          <h1 className='text-[40px] font-semibold	'>Лекарственные средства</h1>
        </div>
        <br /><br />
        <Sitebar />
    </div>
  )
}

export default Header