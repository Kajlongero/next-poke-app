import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="w-full flex justify-center items-center bg-custom-dark py-4">
        <figure className='w-16 h-16'>
          <Image 
            src={`https://placehold.co/64x64`}
            alt="Navbar Logo"
            width={64}
            height={64}
            className='w-full h-full'
          />
        </figure>
      </nav>  
    </header>
  )
}