'use client';
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

export default function useLocoScroll() {
  useEffect(() => {
    const scrollEl = <HTMLElement>document.querySelector('#main-container')!;
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 2,
    });
  }, []);
}
