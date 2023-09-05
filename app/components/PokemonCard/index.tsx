import Image from 'next/image';
import { IMAGE_URL } from '@/app/utils/API';
import Link from 'next/link';

type Props = {
  id: string;
  name?: string;
  width?: number;
  height?: number; 
}

export default function PokemonCard({ id, name, width = 225, height = 225 }: Props) {
  return(
    <Link href={`/pokemon/${id}`} hrefLang='en'>
      <article className='p-4 flex flex-col custom-shadow bg-custom-dark text-white rounded-md'>
        {!name && (
          <>
            <figure className='flex flex-col items-center justify-center rounded-md'>
              <Image 
                width={width}
                height={height}
                src={`${IMAGE_URL}/${id}.png`}
                alt={'Pokemon'}
              />
            </figure>
          </>
        )}
        {name && (
          <>
            <figure className='w-full'>
              <Image 
                width={width}
                height={height}
                src={`${IMAGE_URL}/${id}.png`}
                alt={'Pokemon'}
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
    </Link>
  )
}