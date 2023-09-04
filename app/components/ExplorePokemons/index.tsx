'use client';
import Link from "next/link";
import { useState } from "react";

type Props = {
  offset: string | number;
}

export default function ExplorePokemons({ offset }: Props) {
  
  const numberOffset = Number(offset) ?? '0';
  const page = numberOffset === 0 ? '1' : `${Math.floor((numberOffset / 30) + 1)}`;

  return (
    <div className="flex items-center justify-center gap-x-4 text-white my-8">
      <Link 
        href={`${numberOffset <= 30 ? '/' : `/?offset=${numberOffset - 30}`}`}
        className="bg-purple-700 px-4 py-2 rounded-sm"
      >
        {'<'}
      </Link>
      <p className="bg-custom-dark px-4 py-2 rounded-sm">{page}</p>
      <Link 
        href={`/?offset=${numberOffset + 30}`}
        className="bg-purple-700 px-4 py-2 rounded-sm"
      >
        {'>'}
      </Link>
    </div>
  )
}