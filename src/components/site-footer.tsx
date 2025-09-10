import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-teal-600 text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold tracking-wide flex items-center gap-2 mb-4">
            <i className="fas fa-map-marker-alt"></i>
            Contact
          </h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-start gap-2">
              <i className="fas fa-building mt-1 text-teal-200"></i>
              Plot No. 50, Umred Rd, behind Navoday Hospital
              Bhande Plot, Bapu Nagar, Nandanvan
              Nagpur, Maharashtra 440024
            </p>
            <p className="flex items-center gap-2 mt-3">
              <i className="fas fa-phone text-teal-200"></i>
              <a href="tel:9399406230" className="hover:underline">+919399406230</a>
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold tracking-wide flex items-center gap-2 mb-4">
            <i className="fas fa-clock"></i>
            Hours
          </h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <i className="fas fa-calendar-week text-teal-200"></i>
              <span>Monday to Saturday: 11:00 AM – 10:00 PM</span>
            </p>
            <p className="flex items-center gap-2">
              <i className="fas fa-calendar-times text-teal-200"></i>
              <span>Sunday: Closed</span>
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold tracking-wide flex items-center gap-2 mb-4">
            <i className="fas fa-link"></i>
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="flex items-center gap-2 hover:underline">
                <i className="fas fa-user-md text-teal-200"></i>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="flex items-center gap-2 hover:underline">
                <i className="fas fa-tooth text-teal-200"></i>
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center gap-2 hover:underline">
                <i className="fas fa-envelope text-teal-200"></i>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/booking" className="flex items-center gap-2 hover:underline">
                <i className="fas fa-calendar-check text-teal-200"></i>
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-teal-700">
        <div className="mx-auto max-w-6xl px-4 py-3 text-xs text-teal-100 flex justify-center items-center">
          <span>© {new Date().getFullYear()} Zuni&apos;s Dental Care</span>
          <div className="flex items-center gap-2"></div>
        </div>
      </div>
    </footer>
  );
}


