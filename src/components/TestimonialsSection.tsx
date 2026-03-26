import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    name: "Anna K.",
    text: "The best coffee I've ever had in the city. The atmosphere is incredible — I come here every morning before work. The avocado toast is perfection!",
    rating: 5,
  },
  {
    name: "Dmitry S.",
    text: "Finally, a place where I can work comfortably and eat really well. The truffle pasta alone is worth the visit. Great Wi-Fi too.",
    rating: 5,
  },
  {
    name: "Maria L.",
    text: "We celebrated my birthday here and it was magical. The staff is so attentive, the food is outstanding, and the desserts are to die for.",
    rating: 5,
  },
  {
    name: "Alex P.",
    text: "Verdant became our go-to spot for team meetings. The cozy corners, excellent coffee, and quiet ambiance make it perfect for business.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="reviews" className="py-24 md:py-32 bg-cream">
    <div className="container">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">
          Testimonials
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
          What Our Guests Say
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <AnimatedSection key={r.name} delay={i * 0.1}>
            <div className="bg-background rounded-xl p-6 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-warm text-warm" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                "{r.text}"
              </p>
              <p className="font-body text-sm font-semibold text-foreground">
                {r.name}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
