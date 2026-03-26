import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    name: "Анна К.",
    text: "Лучший кофе в городе. Атмосфера потрясающая — прихожу сюда каждое утро перед работой. Тост с авокадо — совершенство!",
    rating: 5,
  },
  {
    name: "Дмитрий С.",
    text: "Наконец-то место, где можно комфортно работать и вкусно есть. Паста с трюфелем стоит визита. Отличный Wi-Fi.",
    rating: 5,
  },
  {
    name: "Мария Л.",
    text: "Отмечали мой день рождения — было волшебно. Персонал внимательный, еда великолепная, а десерты просто невероятные.",
    rating: 5,
  },
  {
    name: "Алексей П.",
    text: "Opetit стал нашим любимым местом для рабочих встреч. Уютные уголки, отличный кофе и спокойная обстановка — идеально для дел.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="reviews" className="py-24 md:py-32 bg-cream">
    <div className="container">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">
          Отзывы
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
          Что говорят наши гости
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
                «{r.text}»
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