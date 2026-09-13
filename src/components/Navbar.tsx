import { Menu, X } from "lucide-react";
import { useState } from "react";
import BrandLogo from "./BrandLogo";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div className="hidden md:block">
          <BrandLogo />
        </div>

        <div className="md:hidden">
          <BrandLogo size="sm" />
        </div>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-pink-600 ${
                link.label === "Home" ? "text-pink-600" : "text-ink-soft"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          
            href="#sign-in"
            className="text-xs font-medium text-ink-soft transition-colors hover:text-ink sm:text-sm"
          >
            Sign In
          </a>
          
            href="#sign-up"
            className="brand-gradient-bg rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:px-5 sm:py-2 sm:text-sm"
          >
            Sign Up
          </a>
        </div>
      </div>

      <MobileMenu
        id="mobile-menu"
        isOpen={isMenuOpen}
        links={NAV_LINKS}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
}
