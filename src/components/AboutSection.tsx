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
              alt="Латте-арт от бариста"
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">
            Наша история
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Больше, чем просто
            <br />
            <span className="text-primary italic">кофейня</span>
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
            Opetit — это место, где спешиалти-кофе встречается с полноценной кухней. 
            Мы закупаем моносортовые зёрна с лучших ферм мира и сочетаем их с блюдами, 
            приготовленными нашими талантливыми шефами из свежайших локальных продуктов.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Утренний эспрессо, деловой обед или вечер с друзьями — каждый визит задуман 
            как маленький побег от повседневности. Уютный интерьер, тёплое обслуживание 
            и вкусы, которые остаются с вами.
          </p>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;