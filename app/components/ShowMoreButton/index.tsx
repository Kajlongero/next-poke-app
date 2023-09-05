'use client';
import Link from "next/link";
import { useState } from "react";

export default function ShowMoreButton ({ id }: { id: string }) {
  
  const [state, setState] = useState<boolean>(true);
  
  return (
    <Link 
      href={state ? `/pokemon/${id}/advanced` : `/pokemon/${id}`}
      className="px-4 py-2 bg-custom-purple text-white font-bold uppercase rounded-md shadow-custom-purple"
      onClick={() => setState(!state)}
    >
      {state ? 'Show more details' : 'Hide details'}
    </Link>
  )
}