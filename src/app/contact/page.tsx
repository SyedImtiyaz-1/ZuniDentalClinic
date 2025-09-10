import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide mb-6 text-gray-900">Contact Us</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Get in touch with us for appointments, consultations, or any questions about our dental services.
        </p>
        <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-teal-50 rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-teal-800 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Visit Our Care
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3 text-gray-700">
                <p className="font-medium">Plot No. 50, Umred Rd, behind Navoday Hospital, Bhande Plot, Bapu Nagar, Nandanvan, Nagpur, Maharashtra, 440024</p>
                <p></p>
                <p className="font-semibold"></p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-teal-50 rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-teal-800 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <a href="tel:07415212274" className="block text-2xl font-bold text-teal-600 hover:text-teal-700 transition-colors">
                  +917415212274
                </a>
                <p className="text-gray-600">Available during business hours</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-teal-50 rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-teal-800 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Saturday ➜ 11:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday ➜ <span style={{ color: 'red' }}>Closed</span></span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="space-y-6">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-teal-50">
              <CardTitle className="text-2xl font-bold text-teal-800 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Find Us
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                title="Zuni's Dental Care Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7225243940043!2d79.1199516!3d21.1236258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b93d6cab41e7%3A0xe5a7b55e5b4c5585!2sZuni&#39;s%20Dental%20Care!5e0!3m2!1sen!2sin!4v1757440259901!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Appointment?</h2>
        <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
          Choose your preferred way to get in touch with us
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://calendly.com/zunidentalclinic/appointment" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-3 cursor-pointer">
              Book Online
            </Button>
          </a>
          <a href="https://wa.me/917415212274?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Shabana%20Anjum" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-3 cursor-pointer">
              WhatsApp
            </Button>
          </a>
          <a href="tel:7415212274">
            <Button variant="outline" size="lg" className="bg-white text-black text-teal-600 hover:bg-gray-100 text-lg px-8 py-3 cursor-pointer">
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}


