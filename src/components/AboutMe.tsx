import Image from 'next/image';

export default function TestSection() {
  return (
    <div data-scroll-section>
      <h2 className="text-5xl text-center mx-10 my-10">
        Come into my{' '}
        <span className="underline underline-offset-4">UNIVERSE</span>
      </h2>
      <Image
        src="/img/myuniverse.png"
        alt="Me in my universe"
        width={500}
        height={500}
        className="mx-auto my-20"
      />
    </div>
  );
}
