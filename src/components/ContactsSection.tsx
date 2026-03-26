import { MapPin, Clock, Instagram, MessageCircle, Navigation } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactsSection = () => (
  <section id="contacts" className="py-24 md:py-32 bg-cream">
    <div className="container">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">
          Find Us
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
          Get in Touch
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
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Address</h3>
                <p className="font-body text-sm text-muted-foreground">
                  123 Green Avenue, Downtown District
                  <br />
                  City Center, 10001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Working Hours</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Mon — Fri: 7:30 AM — 10:00 PM
                  <br />
                  Sat — Sun: 9:00 AM — 11:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Connect</h3>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors duration-300"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a
                    href="https://2gis.com"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837360866272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1635000000000!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Verdant location map"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ContactsSection;
