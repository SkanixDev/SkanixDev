import { gsap } from 'gsap';
import { useEffect, useState } from 'react';

export default function LoaderPage() {
  useEffect(() => {
    const loader = gsap.to('#loader', {
      startAt: {
        opacity: 1,
      },
      opacity: 0,
      duration: 2,
      delay: 1,
    });
  });

  return (
    <div
      className="absolute flex items-center justify-center w-screen h-screen z-[1000] bg-green-500"
      id="loader"
    >
      <h1 className="text-[15vw]">Loading...</h1>
    </div>
  );
}
