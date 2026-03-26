import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const categories = ["Кофе", "Напитки", "Завтраки", "Основные блюда", "Десерты"] as const;

type Category = typeof categories[number];

interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

const menuData: Record<Category, MenuItem[]> = {
  "Кофе": [
    { name: "Эспрессо", desc: "Насыщенный шот из эфиопских зёрен", price: "$3.50" },
    { name: "Флэт Уайт", desc: "Эспрессо, разбавленный горячей водой — мягкий и бодрящий", price: "$5.00" },
    { name: "Пуровер", desc: "Ручная заварка моносорта, сезонная подборка", price: "$5.50" },
    { name: "Колд Брю", desc: "20-часовой холодный настой, мягкий и освежающий", price: "$4.50" },
    { name: "Матча Латте", desc: "Церемониальный матча на овсяном молоке", price: "$5.50" },
    { name: "Капучино", desc: "Классический итальянский стиль с шелковистой пенкой", price: "$4.50" },
  ],
  "Напитки": [
    { name: "Свежевыжатый апельсин", desc: "Отжат при вас, чистый цитрус", price: "$4.00" },
    { name: "Ягодный смузи", desc: "Микс ягод, банан, йогурт", price: "$6.00" },
    { name: "Комбуча", desc: "Домашняя варка, сезонные вкусы", price: "$5.00" },
    { name: "Чай Латте", desc: "Пряный чёрный чай со взбитым молоком", price: "$5.00" },
    { name: "Лимонад", desc: "Домашний, с мятой и имбирём", price: "$4.50" },
  ],
  "Завтраки": [
    { name: "Тост с авокадо", desc: "На закваске, яйцо пашот, микрозелень, чили", price: "$12.00" },
    { name: "Боул с гранолой", desc: "Домашняя гранола, греческий йогурт, сезонные ягоды", price: "$9.00" },
    { name: "Яйца Бенедикт", desc: "Копчёный лосось, голландез, английский маффин", price: "$14.00" },
    { name: "Тарелка с круассаном", desc: "Масляный круассан, джем, мягкий сыр, фрукты", price: "$8.00" },
    { name: "Панкейки", desc: "Пышные панкейки, кленовый сироп, свежие ягоды", price: "$11.00" },
  ],
  "Основные блюда": [
    { name: "Лосось на гриле", desc: "Атлантический лосось, киноа, печёные овощи", price: "$18.00" },
    { name: "Паста с трюфелем", desc: "Свежие феттучини, чёрный трюфель, пармезан", price: "$16.00" },
    { name: "Будда-боул", desc: "Запечённый нут, авокадо, тахини", price: "$14.00" },
    { name: "Бургер Вагю", desc: "Булочка бриошь, выдержанный чеддер, карамелизированный лук", price: "$17.00" },
    { name: "Салат Цезарь", desc: "Романо, крутоны, пармезан, домашний соус", price: "$12.00" },
  ],
  "Десерты": [
    { name: "Шоколадный фондан", desc: "Тёплая жидкая начинка, ванильное мороженое", price: "$10.00" },
    { name: "Тирамису", desc: "Классический итальянский, маскарпоне, эспрессо", price: "$9.00" },
    { name: "Крем-брюле", desc: "Мадагаскарская ваниль, карамельная корочка", price: "$8.00" },
    { name: "Чизкейк", desc: "Нью-Йорк стайл, ягодный компот", price: "$9.00" },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState<Category>("Кофе");

  return (
    <section id="menu" className="py-24 md:py-32 bg-cream">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">
            Наше меню
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Создано с душой
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuData[active].map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.05}>
              <div className="bg-background rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-body text-sm font-semibold text-warm shrink-0 ml-4">
                    {item.price}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;