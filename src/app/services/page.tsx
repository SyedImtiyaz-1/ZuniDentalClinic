import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  { title: "Digital X-Ray", desc: "Advanced digital imaging for accurate diagnosis and treatment planning.", image: "/digitalxray.jpeg" },
  { title: "Root Canal Treatment", desc: "Complete root canal treatment for all teeth including wisdom teeth.", image: "/root-canal-treatment.jpg" },
  { title: "Painless Tooth Extraction", desc: "Comfortable and pain-free removal of teeth with modern techniques.", image: "/painless-extraction.jpg" },
  { title: "Surgical Tooth Removal", desc: "Expert surgical removal of impacted teeth and complex extractions.", image: "/painless-extraction.jpg" },
  { title: "Dental Implants", desc: "Replacement of missing teeth with durable dental implants and porcelain bridges.", image: "/dental-implant.jpg" },
  { title: "Orthodontic Treatment", desc: "Fixed orthodontic treatment for correction of mal-aligned teeth.", image: "/orthodontic-treatment.jpg" },
  { title: "Teeth Cleaning & Whitening", desc: "Professional tooth scaling, polishing, and whitening treatments.", image: "/teeth-whitening.jpg" },
  { title: "Pediatric Dentistry", desc: "Specialized dental care for children and kids dental treatment.", image: "/pediatric-dentistry.jpg" },
  { title: "Tooth Color Treatment", desc: "Cosmetic treatments to improve tooth color and appearance.", image: "/tooth-color-treatment.jpg" },
  { title: "Gum Surgery", desc: "Advanced periodontal treatments and gum surgery procedures.", image: "/gum-surgery.jpg" },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide mb-6 text-gray-900">Our Services</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Comprehensive dental care with modern facilities and affordable pricing. 
          We provide complete treatment solutions for all your oral health needs.
        </p>
        <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {services.map((service, index) => (
          <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 overflow-hidden">
            {service.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-teal-700 transition-colors">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Zuni&apos;s Dental Care?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our comprehensive approach to dental care
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Equipment</h3>
            <p className="text-gray-600">State-of-the-art digital technology for accurate diagnosis and treatment</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12.9494914,6 C13.4853936,6.52514205 13.8531598,7.2212202 13.9645556,8 L17.5,8 C17.7761424,8 18,8.22385763 18,8.5 C18,8.77614237 17.7761424,9 17.5,9 L13.9645556,9 C13.7219407,10.6961471 12.263236,12 10.5,12 L7.70710678,12 L13.8535534,18.1464466 C14.0488155,18.3417088 14.0488155,18.6582912 13.8535534,18.8535534 C13.6582912,19.0488155 13.3417088,19.0488155 13.1464466,18.8535534 L6.14644661,11.8535534 C5.83146418,11.538571 6.05454757,11 6.5,11 L10.5,11 C11.709479,11 12.7183558,10.1411202 12.9499909,9 L6.5,9 C6.22385763,9 6,8.77614237 6,8.5 C6,8.22385763 6.22385763,8 6.5,8 L12.9499909,8 C12.7183558,6.85887984 11.709479,6 10.5,6 L6.5,6 C6.22385763,6 6,5.77614237 6,5.5 C6,5.22385763 6.22385763,5 6.5,5 L10.5,5 L17.5,5 C17.7761424,5 18,5.22385763 18,5.5 C18,5.77614237 17.7761424,6 17.5,6 L12.9494914,6 L12.9494914,6 Z"></path>
                  </g>
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">Quality dental care at competitive prices with flexible payment options</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Compassionate Care</h3>
            <p className="text-gray-600">Personalized treatment with a focus on patient comfort and satisfaction</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Smile?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Book your consultation today and experience world-class dental care in Nagpur
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://calendly.com/zunidentalclinic/appointment" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-3 cursor-pointer">
              Book Appointment
            </Button>
          </a>
          <a href="tel:09399406230">
            <Button variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-gray-900 text-lg px-8 py-3 cursor-pointer">
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}


