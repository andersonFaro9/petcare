import Image from 'next/image'
export default function Main() {
  return (
    <div className= 'justify-center'>
      <p className='ml-5  mb-4 text-orange-700'>Serviços</p>
      <p className='flex ml-5 text-sm md:justify-center font-bold md:text-3xl mb-5'>
        Como podemos ajudá-los?
      </p>

      <div className='flex flex-wrap flex-cols-3  gap-1 ml-5  md:justify-around'>
        <div className='bg-orange-200 w-64 p-5 hover:bg-orange-800 rounded-md '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6 text-orange-700 invisible md:visible mb-2'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>

          <p className='font-bold hover'>Banho e tosa</p>
          <p className=' font-normal text-sm  md:w-56 flex-cols-1'>
            Seu bichinho no charme para passear e curtir o dia dele.
          </p>
        </div>
        <div className='bg-orange-200 hover:bg-orange-800 w-64 p-5 rounded-md'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6 text-orange-700 invisible md:visible mb-2'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <p className='font-bold'>Hospital 24hs</p>
          <p className=' font-normal text-sm  md:w-56 flex-cols-1'>
            Todo cuidado é pouco e seu bichinho merece o nosso melhor! Estamos
            abertos por 24 hs, 07 dias da semana.
          </p>
        </div>
        <div className='bg-orange-200 hover:bg-orange-800 w-64 p-5 rounded-md'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6 text-orange-700 invisible md:visible mb-2'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <p className='font-bold '>Pet Shop</p>
          <p className=' font-normal text-sm  md:w-56 flex-cols-1'>
            A ração, o comedouro, os brinquedos, petiscos e medicamentos. Temos
            o que seu animal precisa.
          </p>
        </div>
      </div>

      <div className='flex flex-col mt-4 ml-5 md:flex-row  justify-between gap-20 md:m-24'>
        <div className=' md:flex flex-col justify-center '>
          <p className='md:text-3xl w-52 '>Entre em contato conosco</p>

          <div className=' flex  items-center gap-2 mt-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-6 h-6 text-orange-400'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
              />
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
              />
            </svg>

            <p className='flex md:w-96'>Rua B, Alváro Dias Silvante.</p>
          </div>

          <div className=' flex flex-cols items-center -mb-12 gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-6 h-6  text-orange-400'
            >
              <path
                stroke-linecap='round'
                d='M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25'
              />
            </svg>
            <p className=' w-max-md md:w-96  leading-6 '>
              contato@petcare.com.br
            </p>
          </div>
        </div>
        <Image
          className='  hover:bg-orange-700 md:visible'
          src='/images/contato_pet2.svg'
          alt='foto'
          width={250}
          height={250}
        />
      </div>
    </div>
  )
}
