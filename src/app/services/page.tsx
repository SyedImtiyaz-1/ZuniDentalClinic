import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  { title: "Digital X-Ray", desc: "Advanced digital imaging for accurate diagnosis and treatment planning." },
  { title: "Root Canal Treatment", desc: "Complete root canal treatment for all teeth including wisdom teeth." },
  { title: "Painless Tooth Extraction", desc: "Comfortable and pain-free removal of teeth with modern techniques." },
  { title: "Surgical Tooth Removal", desc: "Expert surgical removal of impacted teeth and complex extractions." },
  { title: "Dental Implants", desc: "Replacement of missing teeth with durable dental implants and porcelain bridges." },
  { title: "Orthodontic Treatment", desc: "Fixed orthodontic treatment for correction of mal-aligned teeth." },
  { title: "Teeth Cleaning & Whitening", desc: "Professional tooth scaling, polishing, and whitening treatments." },
  { title: "Pediatric Dentistry", desc: "Specialized dental care for children and kids dental treatment." },
  { title: "Tooth Color Treatment", desc: "Cosmetic treatments to improve tooth color and appearance." },
  { title: "Gum Surgery", desc: "Advanced periodontal treatments and gum surgery procedures." },
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
          <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </CardTitle>
              </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Zuni&apos;s Dental Clinic?</h2>
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
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
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
          <a href="https://calendly.com/zunidentalclinic/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-3 cursor-pointer">
              Book Appointment
            </Button>
          </a>
          <a href="tel:08087623040">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 cursor-pointer">
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}


