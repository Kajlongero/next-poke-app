import Image from 'next/image';
import { IMAGE_URL } from '@/app/utils/API';

type Props = {
  name?: string;
  id: string;
}

export default function PokemonCard({ name, id }: Props) {
  return(
    <article className='w-60 p-4 flex flex-col custom-shadow bg-custom-dark text-white rounded-md'>
      {!name && (
        <>
          <figure className='w-full flex flex-col items-center justify-center rounded-md'>
            <Image 
              width={192}
              height={192}
              src={`${IMAGE_URL}/${id}.png`}
              alt={'Pokemon'}
              className='w-full'
            />
          </figure>
        </>
      )}
      {name && (
        <>
          <figure className='w-full'>
            <Image 
              width={192}
              height={192}
              src={`${IMAGE_URL}/${id}.png`}
              alt={'Pokemon'}
              className='w-full'
            />
          </figure>
          <h2 
            className='mt-2'
          >
            {name.charAt(0).toUpperCase()}{name.substring(1, name.length)}
          </h2>
        </>
      )
      }
    </article>
  )
}