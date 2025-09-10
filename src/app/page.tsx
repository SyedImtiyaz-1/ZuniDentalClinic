import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <section className="relative">
        <Image src="/hero.png" alt="Zuni's Dental Care" width={1920} height={900} className="w-full h-[60vh] object-cover" />
        <div className="absolute inset-0 bg-teal-900/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <p className="tracking-widest text-xs sm:text-sm">Plot No. 50, Bhande Plot, Nagpur, Maharashtra, 440024</p>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-[0.1em] sm:tracking-[0.2em] mt-3 leading-tight whitespace-nowrap">Zuni&apos;s Dental Clinic</h1>
            <p className="mt-4 text-base sm:text-lg">Now Available for Online Booking</p>
            <Link href="/booking">
              <Button size="lg" className="mt-6 bg-black hover:bg-gray-800 w-full sm:w-auto cursor-pointer">Book Appointment</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide mb-6 underline">Our Services</h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive dental care with modern facilities and affordable pricing
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative h-32 w-full">
              <Image
                src="/digitalxray.jpeg"
                alt="Digital X-Ray"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Digital X-Ray</h3>
              <p className="text-gray-600 text-sm">Advanced digital imaging for accurate diagnosis</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative h-32 w-full">
              <Image
                src="/root-canal-treatment.jpg"
                alt="Root Canal Treatment"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Root Canal Treatment</h3>
              <p className="text-gray-600 text-sm">Complete treatment for all teeth including wisdom teeth</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative h-32 w-full">
              <Image
                src="/painless-extraction.jpg"
                alt="Painless Extraction"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Painless Extraction</h3>
              <p className="text-gray-600 text-sm">Comfortable and pain-free tooth removal</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative h-32 w-full">
              <Image
                src="/dental-implant.jpg"
                alt="Dental Implants"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Dental Implants</h3>
              <p className="text-gray-600 text-sm">Replacement of missing teeth with durable implants</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative h-32 w-full">
              <Image
                src="/orthodontic-treatment.jpg"
                alt="Orthodontic Treatment"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Orthodontic Treatment</h3>
              <p className="text-gray-600 text-sm">Fixed treatment for mal-aligned teeth</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative h-32 w-full">
              <Image
                src="/teeth-whitening.jpg"
                alt="Teeth Whitening"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Teeth Whitening</h3>
              <p className="text-gray-600 text-sm">Professional cleaning and whitening treatments</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/services">
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 cursor-pointer">
              View All Services
            </Button>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-center md:text-left hidden md:block">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide underline">About Us</h2>
          <p className="mt-6 text-gray-700 leading-7 text-sm sm:text-base">
            We provide comprehensive dental care focused on prevention, comfort, and long-term oral health. Our team helps you set goals, build confidence, and maintain bright, healthy smiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <Link href="/about">
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white w-full sm:w-auto cursor-pointer">Read More</Button>
            </Link>
            <Link href="/booking">
              <Button className="bg-black hover:bg-gray-800 w-full sm:w-auto cursor-pointer">Book Appointment</Button>
            </Link>
          </div>
        </div>
        {/* Mobile-only About Us heading */}
        <div className="md:hidden text-center mb-6">
          <h2 className="text-3xl font-extrabold tracking-wide">About Us</h2>
        </div>
        
        <div className="relative w-full h-[400px]">
          <Image 
            src="/dr.jpeg" 
            alt="Dr. Shabana Anjum" 
            fill 
            className="object-contain object-center rounded-lg shadow-lg bg-white border border-gray-200" 
          />
        </div>
        
        {/* Mobile-only text and buttons section */}
        <div className="md:hidden mt-8 text-center">
          <p className="text-gray-700 leading-7 text-sm mb-6">
            We provide comprehensive dental care focused on prevention, comfort, and long-term oral health. Our team helps you set goals, build confidence, and maintain bright, healthy smiles.
          </p>
          <div className="flex flex-col gap-4">
            <Link href="/about">
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white w-full cursor-pointer">Read More</Button>
            </Link>
            <Link href="/booking">
              <Button className="bg-black hover:bg-gray-800 w-full cursor-pointer">Book Appointment</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
