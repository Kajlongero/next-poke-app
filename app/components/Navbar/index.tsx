import Logo from '/public/pokeball.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="w-full flex justify-center bg-custom-dark py-4">
        <Link href="/" className='flex gap-x-2 items-center text-white'>
          <p className='text-3xl italic'>Poke</p>
            <figure className='w-16 h-16'>
            <Image 
              src={Logo}
              alt="Navbar Logo"
              width={64}
              height={64}
              className='w-full h-full'
            />
          </figure>
          <p className='text-3xl italic'>App</p>
        </Link>
      </nav>  
    </header>
  )
}