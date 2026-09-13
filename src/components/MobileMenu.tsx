interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  id: string;
  isOpen: boolean;
  links: NavLink[];
  onClose: () => void;
}

export default function MobileMenu({ id, isOpen, links, onClose }: MobileMenuProps) {
  return (
    <nav
      id={id}
      aria-label="Mobile"
      className={`grid overflow-hidden border-t border-hairline bg-white transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="min-h-0">
        <ul className="flex flex-col gap-1 px-4 py-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                  link.label === "Home"
                    ? "bg-pink-50 text-pink-600"
                    : "text-ink-soft hover:bg-slate-50 hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
