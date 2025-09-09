import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="text-center md:text-left order-2 md:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">About Us</h1>
        <p className="mt-6 text-gray-700 leading-7 text-sm sm:text-base">
          We provide comprehensive dental care focused on prevention, comfort, and long-term oral health. Our team helps you set goals, build confidence, and maintain bright, healthy smiles.
        </p>
        <p className="mt-4 text-gray-700 leading-7 text-sm sm:text-base">
          Success is a personal standard, reaching for the highest that is in us, becoming all that we can be. If we do our best, we are a success.
        </p>
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors w-full sm:w-auto cursor-pointer">
          Read More
        </button>
      </div>
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] order-1 md:order-2">
        <Image 
          src="/dr.jpeg" 
          alt="Dr. Shabana Anjum" 
          fill 
          className="object-contain object-center rounded-lg shadow-lg bg-white border border-gray-200" 
          priority
        />
      </div>
    </div>
  );
}


