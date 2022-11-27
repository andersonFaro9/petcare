import Image from 'next/image';
export default function Footer () {

    return (
      <div
        className='flex overflow-y-auto flex-col md:flex-row justify-between
      text-white bg-orange-700
      h-48  mt-2  md:leading-loose   md:gap-23 md:m-24'
      >
        <div className='flex flex-col  ml-5  justify-center  md:ml-2'>
          <p className=' '>2022 - PetCare </p>
          <p className=''> Todos os direitos reservados </p>
        </div>
        <div className='flex flex-col ml-5 mb-16 md:flex-row gap-2 md:mr-2'>
          <Image
            className='text-white'
            src='/images/face.svg'
            alt='foto'
            width={30}
            height={30}
          />

          <Image
            className='text-white'
            src='/images/instagram.svg'
            alt='foto'
            width={30}
            height={30}
          />
        </div>
      </div>
    )
}