
import Image from 'next/image';


export default function Presentation () {

  // sm -> 640 px md-> 768 lg -> 1024
    return (
      <div className='flex m-2 md:justify-around gap-36'>
        <div className=' grid cols mt-5'>
          <p className='flex text-xs mb-3 sm:text-sm md:text-base font-normal  lg:text-base'>
            Bem-vindos a cliníca PetCare!!
          </p>
          <h1 className='flex text-xs  text-left sm:text-sm md:text-md w-72 lg:text-4xl'>
            Toda assistência médica para seu pet.
          </h1>
          <p className='flex font-light text-sm max-w-prose text-left md:w-96 pt-3'>
            Todo nosso empenho é para a saúde do seu bichinho. Vamos além dos
            sintomas para proporcionar uma cura a longo prazo.
          </p>
          <button
            className='flex gap-2 text-white invisible md:visible text-white-700 text-xs mt-5 md:bg-orange-700
             hover:underline  md:w-52 h-10  md:justify-center md:items-center sm:w-17 border-white-500  rounded-full'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              color='#fefffe'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z'
              />
            </svg>
            AGENDAR CONSULTA
          </button>
        </div>
        <div className='flex invisible md:visible md:ml-14 hover:bg-orange-700'>
          <Image src='/images/pet_dog.svg' alt='foto' width={350} height={280} />
        </div>
      </div>
    )
}