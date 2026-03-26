import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    name: "Aiya Ruslanqyzy",
    text: "Еда просто потрясающая! Особенно круассан хлеб очень мягкий вкусный не сухой ! Такой вкус давно не встречала. Хочу отметить еще вкус кофе такое необычное😋 безупречный сервис!Отдельная благодарность персоналу за внимание к деталям. Рекомендую всем🫶🏻",
    rating: 5,
  },
  {
    name: "Меруерт Сулейменова",
    text: "Сижу здесь пока ребенок в саду. С ноутом. Всегда спокойно и вежливо. Даже зарядку дали. В общем обожаю это место. Спасибо больше Диане. Очень вежливая. И цены здесь адекватные",
    rating: 5,
  },
  {
    name: "Resti 228",
    text: "Сегодня с друзьями и нашими детьми были в парке на третьем этаже, на обратном пути зашли в кафе, уже не впервые заходим, любимое место племяшки) заказываем постоянно тут! Нам нравится все!",
    rating: 5,
  },
  {
    name: "tom’a 🤍",
    text: "Только что была здесь,решила позавтракать. Место уютное, чистое, очень приятная атмосфера.Персонал вежливый, внимательный, всё принесли быстро, с улыбкой - обслуживание действительно на уровне.Заказала завтрак из предложенных вариантов - было вкусно! Всё свежее, сытное, красиво подано. Осталась довольна.",
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
