import { Arbidol } from '@/public/images'
import Image from 'next/image'
import React from 'react'
import Raiting from './raiting'

const Cards = ({ title, text }) => {
    return (
        <div className='cards'>
            <div className="card card-side w-[300px] h-[150px] bg-base-100 shadow-xl">
                <figure><Image className='w-[100px] items-center mt-2 ml-2' src={Arbidol} alt='Arbidol' /></figure>
                <div className="card-body">
                    <p>{text}</p>
                  <div className='flex items-center gap-4'>
                  <h2 className="card-title bold">{title}</h2>
                  <Raiting />
                </div>
                  </div>
            </div>
        </div>
    )
}

export default Cards