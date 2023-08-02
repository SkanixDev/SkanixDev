'use client';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import TestSection from '@/components/TestSection';
import useLocoScroll from '@/hooks/useLocomotive';
import LoaderPage from '@/components/LoaderPage';

export default function Home() {
  useLocoScroll();

  return (
    <div
      id="main-container"
      className="overflow-x-hidden "
      data-scroll-container
    >
      <LoaderPage />
      <Navigation />
      <Header />
      <TestSection />
    </div>
  );
}
