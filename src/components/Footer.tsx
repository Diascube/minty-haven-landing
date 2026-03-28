import { Instagram, MessageCircle, Navigation } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark py-16">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <h3 className="font-display text-2xl font-semibold text-dark-foreground mb-4">
            Opetit
          </h3>
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
            <p>ТРЦ Almaty Mall ​Ораза Жандосова 83</p>
            <p>Пн-Вс: 9:00 — 22:00</p>
            <p>+7 775 853 0035</p>
          </div>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold text-dark-foreground mb-4 uppercase tracking-wider">
            Мы в соцсетях
          </h4>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/opetit.coffee.wine/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-dark-foreground/20 text-dark-foreground/60 flex items-center justify-center hover:bg-dark-foreground/10 hover:text-dark-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/77758530035?text=Здравствуйте,%20хочу%20забронировать%20стол"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-dark-foreground/20 text-dark-foreground/60 flex items-center justify-center hover:bg-dark-foreground/10 hover:text-dark-foreground transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://2gis.kz/almaty/search/Opetit%2C%20%D0%BA%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D1%8F/firm/70000001089354535/76.858439%2C43.207413?m=76.893175%2C43.218413%2F11.79"
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
