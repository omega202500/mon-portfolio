export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
      <p>© {new Date().getFullYear()} Joël Simo — Tous droits réservés.</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="https://github.com/omega202500" className="hover:text-emerald-400">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/joël-simo-3a7582399" className="hover:text-emerald-400">
          LinkedIn
        </a>
        <a href="mailto:jsimo8388@gmail.com" className="hover:text-emerald-400">
          Email
        </a>
      </div>
    </footer>
  );
}