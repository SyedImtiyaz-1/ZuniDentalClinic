import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide mb-6">Book Your Appointment</h1>
        <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto">
          Schedule your dental appointment with Dr. Shabana Anjum. Choose a convenient time that works for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Online Booking</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-700">
              Book your appointment instantly using our Calendly booking system. 
              Available 24/7 for your convenience.
            </p>
            <div className="space-y-3">
              <a 
                href="https://calendly.com/zunidentalclinic/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-6 cursor-pointer">
                  Book Now on Calendly
                </Button>
              </a>
              <p className="text-sm text-gray-500">
                Opens in a new window
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Call to Book</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-700">
              Prefer to speak with us directly? Call us during our business hours 
              and we&apos;ll help you schedule your appointment.
            </p>
            <div className="space-y-3">
              <a href="tel:08087623040" className="block">
                <Button variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 text-lg py-6 cursor-pointer">
                  Call: 080876 23040
                </Button>
              </a>
              <div className="text-sm text-gray-600">
                <p>Monday to Saturday</p>
                <p>11:00 AM – 10:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <Link href="/">
          <Button variant="ghost" className="text-gray-600 hover:text-teal-600 cursor-pointer">
            ← Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}


