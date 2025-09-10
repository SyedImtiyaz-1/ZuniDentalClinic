"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide text-teal-700 text-lg flex items-center gap-2">
          <img src="/tooth.png" alt="Tooth Logo" style={{ height: 32 }} />
          Zuni&apos;s Dental Care
        </Link>
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={`px-3 py-2 rounded-md text-sm transition-colors ${pathname === item.href ? "bg-teal-50 text-teal-700" : "text-gray-700 hover:text-teal-700"}`}>
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="hidden md:block">
          <Link href="/booking">
            <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">Book Appointment</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="hover:bg-teal-50 cursor-pointer">
                <Menu className="h-6 w-6 text-teal-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] p-0 [&>button]:block [&>button]:absolute [&>button]:top-4 [&>button]:right-4 [&>button]:z-10">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="px-6 py-5 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
                </div>
                
                {/* Navigation Items */}
                <div className="flex-1 px-6 py-6">
                  <nav className="space-y-1">
                    {navItems.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href} 
                        className={`block px-4 py-4 rounded-lg text-base font-medium transition-all duration-200 ${
                          pathname === item.href 
                            ? "bg-teal-50 text-teal-700 border-l-4 border-teal-700 font-semibold" 
                            : "text-gray-800 hover:bg-gray-50 hover:text-teal-700"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
                
                {/* Book Appointment Button */}
                <div className="px-6 py-6 border-t border-gray-200 bg-gray-50">
                  <Link href="/booking">
                    <Button className="bg-teal-600 hover:bg-teal-700 w-full text-base py-4 font-semibold rounded-lg cursor-pointer">
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}



