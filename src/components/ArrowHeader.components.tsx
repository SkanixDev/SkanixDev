import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect } from 'react';

export default function ArrowHeader() {
  useEffect(() => {
    gsap.to('#arrow1', {
      startAt: {
        y: '-5px',
      },
      y: 0,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
    gsap.to('#arrow3', {
      startAt: {
        y: '-5px',
      },
      y: 0,
      duration: 1,
      repeat: -1,
      yoyo: true,
      delay: 1,
    });
    gsap.to('#arrow2', {
      startAt: {
        y: '-5px',
      },
      y: 0,
      duration: 1,
      repeat: -1,
      yoyo: true,
      delay: 1.5,
    });
  });
  return (
    <div className="absolute bottom-10 w-14 h-14">
      <Image
        src="/svg/Arrow1.svg"
        alt="arrow1"
        width={100}
        height={100}
        className="absolute w-full h-full top-2/3 "
        id="arrow1"
      />
      <Image
        src="/svg/Arrow2.svg"
        alt="arrow1"
        width={100}
        height={100}
        className="absolute w-full h-full top-1/3"
        id="arrow2"
      />
      <Image
        src="/svg/Arrow3.svg"
        alt="arrow1"
        width={100}
        height={100}
        className="absolute w-full h-full "
        id="arrow3"
      />
    </div>
  );
}
