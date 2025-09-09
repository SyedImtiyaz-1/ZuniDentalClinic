import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-teal-600 text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold tracking-wide">Contact</h3>
          <p className="mt-2 text-sm">Plot No. 50, Umred Rd, behind Navoday Hospital</p>
          <p className="text-sm">Bhande Plot, Bapu Nagar, Nandanvan</p>
          <p className="text-sm">Nagpur, Maharashtra 440024</p>
          <p className="mt-2 text-sm">Tel: <a href="tel:08087623040" className="hover:underline">080876 23040</a></p>
          {/* <p className="text-sm">Email: <a href="mailto:info@zunudental.com" className="hover:underline">info@zunudental.com</a></p> */}
        </div>
        <div>
          <h3 className="font-semibold tracking-wide">Hours</h3>
          <p className="mt-2 text-sm">Monday to Saturday: 11:00 AM – 10:00 PM</p>
          <p className="text-sm">Sunday: Closed</p>
        </div>
        <div>
          <h3 className="font-semibold tracking-wide">Links</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/booking" className="hover:underline">Book</Link></li>
          </ul>
        </div>
      </div>
      <div className="bg-teal-700">
        <div className="mx-auto max-w-6xl px-4 py-3 text-xs text-teal-100 flex justify-between">
          <span>© {new Date().getFullYear()} Zuni&apos;s Dental Clinic</span>
        </div>
      </div>
    </footer>
  );
}


