import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "FennTech | About",
  description: "Powered by Data Centers...",
};

type RootLayoutProps = {
  children: ReactNode;
};

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--accent-color)] text-[20px]">
      {/* Logo section */}
      <div className="flex justify-center py-3">
        <Link href="/" className="relative w-[220px] h-[70px] block mb-6">
          <Image
            src="/images/brand.png"
            alt="FennTech Logo"
            fill
            priority
            className="object-contain"
          />
        </Link>
      </div>

      {/* Nav section */}
      <nav className="bg-[var(--primary-color)]">
        <ul className="flex justify-center list-none m-0 p-0">
          <li>
            <Link href="/" className="block px-6 py-3 hover:opacity-80">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="block px-6 py-3 hover:opacity-80">
              About
            </Link>
          </li>

          <li>
            <Link href="/contact" className="block px-6 py-3 hover:opacity-80">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
