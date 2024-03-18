import { Arbidol, Narx } from '@/public/images';
import Image from 'next/image';
import React from 'react'
import { FaSearch } from "react-icons/fa";
import Cards from './cards';
import BigKards from './bigKards';
import Texts from '../texts';


const Sitebar = () => {
  return (
    <div>
      <div className='container flex gap-5'>
        <div>
          <ul className="menu bg-base-200 w-[300px] rounded-box sticky shadow-xl ">
            <h3 className='text-[20px] mb-[15px]'>Категории</h3>
            <li>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                </ul>
              </details>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                </ul>
              </details>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                </ul>
              </details>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                </ul>
              </details>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                </ul>
              </details>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                </ul>
              </details>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                </ul>
              </details>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                </ul>
              </details>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                </ul>
              </details>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                </ul>
              </details>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                </ul>
              </details>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                </ul>
              </details>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                </ul>

              </details>
              <br />
              <button className="btn btn-wide w-[277px] bg-teal-400	text-white items-center">показать Все категории</button>

            </li>
          </ul>
          <br />
          <ul className="menu bg-base-200 w-[300px] rounded-box sticky shadow-xl">
            <h3 className='font-semibold	text-2xl' >Фильтр</h3>
            <br />
            <hr />
            <h4 className='text-[#828282] text-lg'>Цена</h4>
            <br />
            <div className='flex gap-3'>
              <input type="text" placeholder="от 2365" className="input input-bordered w-[105px] h-[30px]" />
              <input type="text" placeholder="до 86587" className="input input-bordered w-[105px] h-[30px]" />
            </div>
            <br />
            <Image src={Narx} alt='Narx' />
            <li><a href="#" className='text-[#828282] text-lg'>Страна</a></li>
            <br />
            <li><a href="#"><input type="checkbox" defaultChecked className="checkbox" />Беларусь</a></li>
            <li><a href="#"><input type="checkbox" defaultChecked className="checkbox" />Германия</a></li>
            <li><a href="#"><input type="checkbox" defaultChecked className="checkbox" />Греция</a></li>
            <li><a href="#"><input type="checkbox" defaultChecked className="checkbox" />Ирландия</a></li>
            <li><a href="#"><input type="checkbox" defaultChecked className="checkbox" />Испания</a></li>
            <li><a href="#"><input type="checkbox" defaultChecked className="checkbox" />Италия</a></li>
            <li><a href="#"><input type="checkbox" defaultChecked className="checkbox" />Китай</a></li>
            <div className="form-control">
              <input type="text" placeholder="Поиск..." className="input input-bordered w-24 md:w-auto" />
              <FaSearch className='absolute	mt-[17px] ml-[190px]' />

            </div>
            <br />
            <hr />

            <h4 className='text-[#828282] text-lg'>Воздействие</h4>
            <br />
            <li><a href="#"><input type="checkbox" defaultChecked className="checkbox" />Для бронхов</a></li>
            <li><a href="#"><input type="checkbox" defaultChecked className="checkbox" />Для волос</a></li>
            <li><a href="#"><input type="checkbox" defaultChecked className="checkbox" />Для глаз</a></li>
            <li><a href="#"><input type="checkbox" defaultChecked className="checkbox" />Для горла</a></li>
            <li><a href="#"><input type="checkbox" defaultChecked className="checkbox" />Для губ</a></li>
            <li><a href="#"><input type="checkbox" defaultChecked className="checkbox" />Для дыхательных путей</a></li>
            <li><a href="#"><input type="checkbox" defaultChecked className="checkbox" />Для желудка</a></li>

            <h3 className='text-[#828282] text-lg'>Наличие</h3>
            <br />
            <div className=''>
              <div className='flex gap-4'>
                <input type="radio" name="radio-4" className="radio radio-accent" checked />
                <p>В наличии</p>
              </div>
              <br />
              <div className='flex gap-4'>
                <input type="radio" name="radio-4" className="radio radio-accent" />
                <p>Под заказ</p>
              </div>
            </div>
            <br />
            <div className='flex gap-5'>
              <button className="btn btn-accent text-white">Показать</button>
              <button className="btn btn-outline btn-accent">Сбросить</button>
            </div>
          </ul>
          <br />
          <div className='Time flex flex-col	gap-5'>
            <Cards title={'245 руб'} text={'Арбидол® - препарат от ОРВИ и гриппа, 10 таблеток'} />
            <Cards title={'145 руб'} text={'Desmoxan - лечение, при бросании курения, 100 таблеток'} />
            <Cards title={'444 руб'} text={'Нэйчес Баунти Кожа, волосы, ногти, капсулы 60 шт'} />
          </div>
        </div>

        <div>
          <h5 className='bold text-black text-[20px]'>Каталог</h5>

          <div>
            <div className='flex  gap-10'>

              <div className='piece flex w-[270px] border-2 items-center h-14 '>
                <Image src={Arbidol} alt='arbidol' />
                <h6>Наружные средства</h6>
              </div>
              <div className='piece flex w-[220px] border-2 items-center h-14 '>
                <Image src={Arbidol} alt='arbidol' />
                <h6>Сиропы, капли, суспензии</h6>
              </div>
              <div className='piece flex w-[300px] border-2 items-center h-14 '>
                <Image src={Arbidol} alt='arbidol' />
                <h6>Таблетки и капсулы</h6>
              </div>
              <div className='piece flex w-[220px] border-2 items-center h-14 '>
                <Image src={Arbidol} alt='arbidol' />
                <h6>Наружные средства</h6>
              </div>
            </div>
            <br />
            <div className='flex gap-10'>
              <div className='piece flex w-[270px] border-2 items-center h-14 '>
                <Image src={Arbidol} alt='arbidol' />
                <h6>Наружные средства</h6>
              </div>
              <div className='piece flex w-[220px] border-2 items-center h-14 '>
                <Image src={Arbidol} alt='arbidol' />
                <h6>Сиропы, капли, суспензии</h6>
              </div>
              <div className='piece flex w-[300px] border-2 items-center h-14 '>
                <Image src={Arbidol} alt='arbidol' />
                <h6>Сиропы, капли, суспензии</h6>
              </div>
              <div className='piece flex w-[220px] border-2 items-center h-14 '>
                <Image src={Arbidol} alt='arbidol' />
                <h6>Сиропы, капли, суспензии</h6>
              </div>
            </div>
          </div>
          <br />

          <div>
            <h5 className='bold text-black text-[20px]'>Популярные бренды</h5>
            <br />
            <div className='flex gap-[148px]'>
              <ul className='flex flex-col'>
                <li><a>Smeg</a></li>
                <li><a>Гродторгмаш</a></li>
                <li><a>Mach Easy</a></li>
                <li><a>Krupps</a></li>
              </ul>
              <ul className='flex flex-col'>
                <li><a>Smeg</a></li>
                <li><a>Match</a></li>
                <li><a>Krupps</a></li>
                <li><a>Gродторгмаш</a></li>
              </ul>
              <ul className='flex flex-col'>
                <li><a>Krupps</a></li>
                <li><a>Гродторгмаш</a></li>
                <li><a>Krupps</a></li>
                <li><a>Smeg</a></li>
              </ul>
              <ul className='flex flex-col'>
                <li><a>Smeg</a></li>
                <li><a>Krupps</a></li>
                <li><a>Гродторгмаш</a></li>
                <li><a>Mach Easy</a></li>
              </ul>
              <ul className='flex flex-col'>
                <li><a>Krupps</a></li>
                <li><a>Smeg</a></li>
                <li><a>Гродторгмаш</a></li>
                <li><a>Mach Easy</a></li>
              </ul>
            </div>


          </div>
          <br /><br />
          <div className='flex gap-[100px]'>
            <BigKards />
            <BigKards />
            <BigKards />
          </div>
          <br />
          <div className='flex gap-[100px]'>
            <BigKards />
            <BigKards />
            <BigKards />
          </div>
          <br />
          <div className='flex gap-[100px]'>
            <BigKards />
            <BigKards />
            <BigKards />
          </div>
          <br />
          <div className='flex gap-[100px]'>
            <BigKards />
            <BigKards />
            <BigKards />
          </div>
          <br />
          <div className='flex gap-[100px]'>
            <BigKards />
            <BigKards />
            <BigKards />
          </div>
          <br />
          <div className='flex gap-[100px]'>
            <BigKards />
            <BigKards />
            <BigKards />
          </div>
          <br />
          <div className='flex gap-[100px]'>
            <BigKards />
            <BigKards />
            <BigKards />
          </div>
        </div>
        
      </div>
      <Texts />
    </div>
  )
}

export default Sitebar