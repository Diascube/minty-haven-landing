import AnimatedSection from "./AnimatedSection";
import coffeeArt from "@/assets/coffee-art.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <AnimatedSection>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={coffeeArt}
              alt="Artisan latte art"
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">
            Our Story
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            More Than Just
            <br />
            <span className="text-primary italic">a Coffee Shop</span>
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
            Verdant is a place where specialty coffee meets a full kitchen experience. 
            We source single-origin beans from the world's best farms and pair them with 
            dishes crafted by our talented chefs using only the freshest local ingredients.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Whether you're here for a morning espresso, a business lunch, or an evening 
            with friends — every visit is designed to feel like a small escape from the 
            everyday. Cozy interiors, warm service, and flavors that stay with you.
          </p>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
