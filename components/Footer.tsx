export default function Footer() {
  const socials = [
    {
      icon: "fa-brands fa-square-linkedin",
      href: "https://www.linkedin.com/in/joël-simo-3a7582399",
      label: "LinkedIn",
    },
    {
      icon: "fa-brands fa-facebook",
      href: "https://facebook.com/tonpseudo",
      label: "Facebook",
    },
    {
      icon: "fa-brands fa-instagram",
      href: "https://instagram.com/tonpseudo",
      label: "Instagram",
    },
    {
      icon: "fa-brands fa-square-twitter",
      href: "https://twitter.com/tonpseudo",
      label: "Twitter",
    },
    {
      icon: "fa-brands fa-github",
      href: "https://github.com/omega202500",
      label: "GitHub",
    },
  ];

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-10 text-center">
      {/* Icônes sociales circulaires */}
      <div className="flex justify-center gap-4">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/40 text-emerald-400 text-lg transition hover:border-emerald-400 hover:bg-emerald-400 hover:text-neutral-950 hover:shadow-[0_0_15px_rgba(52,211,153,0.6)]"
          >
            <i className={social.icon} />
          </a>
        ))}
      </div>

      {/* Liens de navigation (optionnel, comme sur l'exemple) */}
      <nav className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-neutral-400">
        <a href="/about" className="hover:text-emerald-400">
          À propos
        </a>
        <a href="/projects" className="hover:text-emerald-400">
          Projets
        </a>
        <a href="/contact" className="hover:text-emerald-400">
          Contact
        </a>
      </nav>

      {/* Copyright */}
      <p className="mt-6 text-xs text-neutral-600">
        © {new Date().getFullYear()} Joël Simo — Tous droits réservés.
      </p>
    </footer>
  );
}