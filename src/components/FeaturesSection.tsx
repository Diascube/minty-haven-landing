import { Clock, Leaf, Sofa, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Clock,
    title: "Fast Service",
    desc: "Your coffee is ready in under 3 minutes. Our kitchen serves dishes fresh and on time.",
  },
  {
    icon: Leaf,
    title: "Quality Ingredients",
    desc: "We source organic, locally-grown produce and single-origin specialty coffee beans.",
  },
  {
    icon: Sofa,
    title: "Cozy Atmosphere",
    desc: "Carefully designed interiors with warm lighting, comfortable seating, and ambient music.",
  },
  {
    icon: Briefcase,
    title: "Work & Meet",
    desc: "High-speed Wi-Fi, power outlets at every table, and quiet zones for productive sessions.",
  },
];

const FeaturesSection = () => (
  <section className="py-24 md:py-32 bg-primary">
    <div className="container">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">
          Why Verdant
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground">
          What Makes Us Special
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.1}>
            <div className="text-center p-6 rounded-xl bg-accent/20 hover:bg-accent/30 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 mb-5">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                {f.title}
              </h3>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                {f.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
