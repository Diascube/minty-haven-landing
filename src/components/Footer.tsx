import { Instagram, MessageCircle, Navigation } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark py-16">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <h3 className="font-display text-2xl font-semibold text-dark-foreground mb-4">Opetit</h3>
          <p className="font-body text-sm text-dark-foreground/60 leading-relaxed">
            Кофе, еда и атмосфера —
            <br />
            всё в одном месте.
          </p>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold text-dark-foreground mb-4 uppercase tracking-wider">
            Контакты
          </h4>
          <div className="font-body text-sm text-dark-foreground/60 space-y-2">
            <p>123 Green Avenue, Downtown</p>
            <p>Пн–Пт: 7:30 — 22:00</p>
            <p>Сб–Вс: 9:00 — 23:00</p>
            <p>+1 (234) 567-890</p>
          </div>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold text-dark-foreground mb-4 uppercase tracking-wider">
            Мы в соцсетях
          </h4>
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-dark-foreground/20 text-dark-foreground/60 flex items-center justify-center hover:bg-dark-foreground/10 hover:text-dark-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-dark-foreground/20 text-dark-foreground/60 flex items-center justify-center hover:bg-dark-foreground/10 hover:text-dark-foreground transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://2gis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-dark-foreground/20 text-dark-foreground/60 flex items-center justify-center hover:bg-dark-foreground/10 hover:text-dark-foreground transition-all duration-300"
              aria-label="2GIS"
            >
              <Navigation className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-foreground/10 pt-8 text-center">
        <p className="font-body text-xs text-dark-foreground/40">
          © {new Date().getFullYear()} Opetit. Все права защищены.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;