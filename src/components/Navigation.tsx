import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <ul className="flex justify-between w-80 absolute bottom-10 left-1/2 -translate-x-1/2 bg-gray-950/20 px-5 py-5 rounded-xl backdrop-blur-xl md:bg-transparent md:-rotate-90 md:-left-[80px] md:-translate-x-0 md:bottom-1/2 z-[1000]">
        <li>
          <Link
            href="#"
            className="hover:underline underline-offset-4 decoration-2"
          >
            projects
          </Link>
        </li>
        <span className="block relative w-2 h-2 bg-gray-500 rounded-full self-center" />
        <li>
          <Link
            href="#"
            className="hover:underline underline-offset-4 decoration-2"
          >
            contact
          </Link>
        </li>
        <span className="block relative w-2 h-2 bg-gray-500 rounded-full self-center" />
        <li>
          <Link
            href="#"
            className="hover:underline underline-offset-4 decoration-2"
          >
            about me
          </Link>
        </li>
      </ul>
    </>
  );
}
