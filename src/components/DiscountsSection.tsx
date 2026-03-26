import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Percent, Gift, CreditCard, Calendar, CakeSlice, Wine } from "lucide-react";

const discounts = [
  {
    icon: Percent,
    badge: "Ежедневно",
    title: "Скидка -20% на кофе с 11:00 до 13:00",
    description: "Любой кофейный напиток со скидкой в обеденные часы. Идеальный повод сделать перерыв!",
    condition: "Действует ежедневно, кроме праздничных дней",
  },
  {
    icon: Gift,
    badge: "Постоянная",
    title: "Каждый третий десерт в подарок",
    description: "Закажите два десерта — третий мы дарим. Попробуйте всё самое вкусное!",
    condition: "При заказе в одном чеке",
  },
  {
    icon: CreditCard,
    badge: "Программа лояльности",
    title: "Бонусная карта: 10 кофе = 1 в подарок",
    description: "Собирайте штампы с каждой покупкой кофе и получите бесплатный напиток.",
    condition: "Спрашивайте карту у бариста",
  },
  {
    icon: Calendar,
    badge: "Суббота и воскресенье",
    title: "Специальное меню выходного дня",
    description: "Уникальные блюда и напитки, которые доступны только по выходным. Каждую неделю — новинки!",
    condition: "Сб-Вс, весь день",
  },
  {
    icon: CakeSlice,
    badge: "Хит",
    title: "Скидка 30% на выпечку на витрине",
    description: "Свежая выпечка с витрины со скидкой 30%. Круассаны, маффины, булочки — налетай!",
    condition: "Ежедневно, пока есть в наличии",
  },
  {
    icon: Wine,
    badge: "Премиум",
    title: "Безлимитное вино при оплате от 9 000 ₸",
    description: "При счёте от 9 000 ₸ на персону — бокалы вина наливаются без ограничений. Идеально для ужина с друзьями.",
    condition: "Ежедневно с 18:00, на человека",
  },
];

const DiscountsSection = () => (
  <section id="discounts" className="py-24 md:py-32 bg-secondary/40">
    <div className="container">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">
          Акции и скидки
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
          Текущие акции и предложения
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {discounts.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <Card className="h-full border-none bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/60 backdrop-blur-sm hover:shadow-lg transition-shadow duration-500 group">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className="bg-accent text-accent-foreground text-xs">
                    {item.badge}
                  </Badge>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                  {item.description}
                </p>
                <div className="pt-3 border-t border-border">
                  <p className="font-body text-xs text-accent font-medium">
                    {item.condition}
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default DiscountsSection;
