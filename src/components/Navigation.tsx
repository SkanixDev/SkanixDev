import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      {/*flex justify-between w-80 absolute md:-rotate-90 overflow-hidden md:top-1/2 md:-left-[100px] md:bottom-0 lg:-left-[80px] rotate-0 bottom-10 */}
      <ul className="flex justify-between w-80 absolute bottom-10 left-1/2 -translate-x-1/2 bg-gray-950/20 px-5 py-5 rounded-xl backdrop-blur-xl md:bg-transparent md:-rotate-90 md:-left-[80px] md:-translate-x-0 md:bottom-1/2 z-50">
        <li>
          <Link href="#">projects</Link>
        </li>
        <span className="block relative w-2 h-2 bg-gray-500 rounded-full self-center" />
        <li>
          <Link href="#">contact</Link>
        </li>
        <span className="block relative w-2 h-2 bg-gray-500 rounded-full self-center" />
        <li>
          <Link href="#">about me</Link>
        </li>
      </ul>
    </>
  );
}
