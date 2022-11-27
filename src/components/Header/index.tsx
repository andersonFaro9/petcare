import { useState } from "react"
import clsx from 'clsx'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItemClassName = clsx (
    'flex  md:block md:text-sm text-4lg hover:underline visited:font-bold',
    {visible: mobileMenuOpen, hidden:!mobileMenuOpen}
  )
  
    return (
      <ul
        className={clsx(
          'bg-orange-800 text-white  p-5 flex flex-col  md:flex-row md:items-center  sm:justify-around',
          {
            'h-screen': mobileMenuOpen,
          }
        )}
      >
        {' '}
        <a className='flex font-bold text-lg'>PetCare</a>
        <a href='#' className={menuItemClassName}>
          Sobre
        </a>
        <a href='#' className={menuItemClassName}>
          Serviços
        </a>
        <a href='#' className={menuItemClassName}>
          Depoimentos
        </a>
        <button
          className='md:hidden absolute right-4 top-6'
          onClick={() => setMobileMenuOpen((currentValue) => !currentValue)}
        >
          <li
            className={clsx(
              'w-10 h-1 bg-black mb-1 transition-all duration-500  ease-in-out',
              {
                'rotate-45 translate-y-2': mobileMenuOpen,
              }
            )}
          ></li>
          <li
            className={clsx('w-10 h-1 bg-black mb-1', {
              hidden: mobileMenuOpen,
            })}
          ></li>
          <li
            className={clsx(
              'w-10 h-1 bg-black mb-1 transition-all duration-500 ease-in-out',
              {
                '-rotate-45': mobileMenuOpen,
              }
            )}
          ></li>
        </button>
        <li>
          <button
            className='text-white  max-[600px]:w-32  max-[600px]:text-xs max-[600px]:h-8 max-[400]:text-xs sm:gap-2
            bg-transparent hover:underline  w-52 h-10 sm:w-17  border border-1 border-white-500  rounded-full'
          >
            AGENDAR CONSULTA
          </button>
        </li>
      </ul>
    )
 }
