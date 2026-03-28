import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Меню", href: "#menu" },
  { label: "Галерея", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#"
          className="font-display text-2xl font-semibold tracking-tight text-primary"
        >
          OPETIT
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleNavClick}
              className="font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={handleNavClick}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors duration-300"
          >
            Забронировать
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Открыть меню"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={handleNavClick}
                className="font-body text-base text-foreground/80 hover:text-primary py-2 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={handleNavClick}
              className="bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-medium text-center mt-2"
            >
              Забронировать
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
