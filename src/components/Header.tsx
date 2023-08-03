'use client';
import Image from 'next/image';
import header from '@/styles/Header.components.module.scss';
import { Rosmatika } from '@/fonts/fonts';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ArrowHeader from './ArrowHeader.components';
export default function Header() {
  const [setLineImage, lineImage] = useState<string>(
    '/svg/right_line_header.svg',
  );

  useEffect(() => {
    gsap.to('#hero-text', {
      startAt: {
        opacity: 0,
        y: '-1000px',
      },
      duration: 4,
      opacity: 1,
      y: '-20px',
      ease: 'power2.out',
      delay: 1,
    });
    gsap.to('#hero-description', {
      startAt: {
        opacity: 0,
      },
      opacity: 1,
      delay: 1,
      duration: 3,
    });
    gsap.to('#hero-leaves-image', {
      startAt: {
        opacity: 0,
        y: '-100%',
      },
      duration: 4,
      opacity: 1,
      y: '0',
      ease: 'power2.out',
    });
    gsap.to('#line-left', {
      startAt: {
        x: '-500%',
      },
      duration: 5,
      delay: 1,
      x: 0,
      ease: 'power2.out',
    });
    gsap.to('#line-right', {
      startAt: {
        x: '500%',
      },
      duration: 5,
      delay: 1,
      x: 0,
      ease: 'power2.out',
    });
  }, []);

  return (
    <header
      className="flex flex-col h-screen items-center justify-center overflow-hidden"
      data-scroll-section
    >
      <div
        className="absolute w-screen h-1/2 top-0  -z-50"
        id="hero-leaves-image"
      >
        <Image
          src={'/img/bg_leaves.png'}
          alt="background"
          width={1920}
          height={1080}
          className={`h-full object-cover`}
        />
        <span className="absolute w-screen h-full top-0 bg-gradient-to-b from-transparent to-[#181818] " />
      </div>
      <Image
        src={'/svg/left_line_header.svg'}
        alt="line left"
        width={100}
        height={1000}
        className="absolute lg:h-screen w-auto left-0 top-0 -z-10 object-cover h-[80vw] overflow-hidden"
        id="line-left"
      />
      <Image
        src={
          '/svg/right_line_header.svg'
          /*window.'/svg/right_line_header.svg'screen.width > 640
            ? '/svg/right_line_header_responsive.svg'
            : '/svg/right_line_header.svg'*/
        }
        alt="line right"
        width={100}
        height={1000}
        className="absolute lg:h-screen w-screen right-0 bottom-10 -z-10 h-[80vw] sm:-translate-x-0 sm:top-0 sm:w-auto"
        id="line-right"
      />
      <h1
        className={`text-[12vw] z-10 ${Rosmatika.className}`}
        id="hero-text"
        data-scroll
        data-scroll-speed="12"
      >
        Baptiste
      </h1>
      <h2
        className="z-10 w-fit h-fit -translate-y-[5vw] text-[3vw] md:text-xl"
        id="hero-description"
      >
        web french developer
      </h2>
      <ArrowHeader />
    </header>
  );
}
