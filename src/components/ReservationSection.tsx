import { MessageCircle, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ReservationSection = () => (
  <section id="reservation" className="py-24 md:py-32">
    <div className="container max-w-2xl text-center">
      <AnimatedSection>
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">
          Reservation
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
          Reserve Your Table
        </h2>
        <p className="font-body text-base text-muted-foreground leading-relaxed mb-10">
          Whether it's a morning coffee, a business lunch, or a dinner with friends —
          book ahead to secure the perfect spot. We'll make sure everything is ready for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-body text-sm font-medium hover:bg-accent transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Book via WhatsApp
          </a>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center justify-center gap-3 border-2 border-primary text-primary px-8 py-4 rounded-xl font-body text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ReservationSection;
