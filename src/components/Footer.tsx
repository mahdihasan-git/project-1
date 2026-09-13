import BrandLogo from "./BrandLogo";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

const LINK_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com", icon: GithubIcon },
  { label: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <BrandLogo />
            <p className="mt-3 max-w-xs text-sm text-ink-soft">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-4 flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="text-ink-soft transition-colors hover:text-ink"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-wide text-ink">{group.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-ink-soft transition-colors hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-hairline pt-6 text-xs text-ink-soft sm:flex-row">
          <p>© {year} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#privacy" className="transition-colors hover:text-ink">
              Privacy
            </a>
            <a href="#terms" className="transition-colors hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
