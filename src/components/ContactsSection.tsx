import {
  MapPin,
  Clock,
  Instagram,
  MessageCircle,
  Navigation,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactsSection = () => (
  <section id="contacts" className="py-24 md:py-32 bg-cream">
    <div className="container">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">
          Контакты
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
          Как нас найти
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-10">
        <AnimatedSection>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Адрес
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  ТРЦ Almaty Mall​Ораза Жандосова улица, 83​1 этаж; на главном
                  входе <br></br>
                  Ауэзовский район, Алматы, 050052
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Часы работы
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Пн — Вс: 9:00 — 22:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Связаться
                </h3>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://www.instagram.com/opetit.coffee.wine/?__pwa=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/77758530035?text=Здравствуйте,%20хочу%20забронировать%20стол"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors duration-300"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a
                    href="https://2gis.kz/almaty/search/Opetit%2C%20%D0%BA%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D1%8F/firm/70000001089354535/76.858439%2C43.207413?m=76.893175%2C43.218413%2F11.79"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors duration-300"
                    aria-label="2GIS"
                  >
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="rounded-xl overflow-hidden h-[350px] md:h-full min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.096575563332!2d76.85549947673692!3d43.20746368114491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883690068281487%3A0x7c9e420b4c39663c!2sOPETIT!5e0!3m2!1sru!2skz!4v1774550943432!5m2!1sru!2skz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта расположения Opetit"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ContactsSection;
