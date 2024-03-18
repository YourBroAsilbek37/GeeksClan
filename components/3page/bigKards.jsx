import { Famion } from '@/public/images'
import Image from 'next/image'
import React from 'react'
import Raiting from './raiting'
import { SlBasket } from "react-icons/sl";

const BigKards = () => {
    return (
        <div>
            <div className="card w-[300px] bg-base-100 shadow-xl">
                <figure><Image src={Famion} alt='Famion' /></figure>
                <div className="card-body">
                    <div className='flex items-center justify-center gap-10'>
                        <h2 className="text-cyan-400">Есть в наличии</h2>
                        <Raiting />
                    </div>
                    <h2 className='text-lg font-bold text-[#525A68]'>Велсон таблетки покрыт. плен.
                        об. 3 мг, 30 шт.</h2>

                    <ul className='font-normal text-sm'>
                        <li>Бренд:	Lirina</li>
                        <li>Количество в упаковке:	10 шт</li>
                        <li>Код товара:	153249</li>
                    </ul>
                    <div className="card-actions mr-[50px]  flex justify-start items-center justify-st gap-[90px] w-[300px]">
                        <div className=''>
                        <h1 className='text-xl'>41 108 руб.</h1>
                        <h2 className='text-[red] text-sm'>49 999 руб.</h2>
                        </div>
                       <button className='text-4xl bg-cyan-400 rounded-3xl text-white w-[50px] h-[50px]'> <SlBasket /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigKards