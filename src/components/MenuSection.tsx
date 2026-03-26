import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const categories = ["Завтраки", "Салаты", "Основные блюда", "Супы", "Пасты", "Сэндвичи"] as const;

type Category = typeof categories[number];

interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

const menuData: Record<Category, MenuItem[]> = {
  "Завтраки": [
    { name: "Английский завтрак", desc: "Классика с глазуньей, колбасками и тостом", price: "" },
    { name: "Деревенский завтрак", desc: "Сытный завтрак с яйцами, колбасками и картофелем", price: "" },
    { name: "Завтрак OPETIT", desc: "Лёгкий завтрак с авокадо и соусом дзадзики", price: "" },
    { name: "Скандинавский завтрак", desc: "Сёмга, авокадо и семена на хрустящем тосте", price: "" },
    { name: "Французский завтрак", desc: "Круассан с яйцами и сыром фета", price: "" },
    { name: "Завтрак с креветками", desc: "Креветки со скрэмблом и свежей зеленью", price: "" },
    { name: "Завтрак с сыром и ветчиной", desc: "Яйца с ветчиной и чеддером", price: "" },
    { name: "Брускетта с семгой", desc: "Тост с сёмгой, авокадо и яйцом", price: "" },
    { name: "Омлет с брускеттой", desc: "Воздушный омлет с рукколой и авокадо", price: "" },
    { name: "Фитнес завтрак", desc: "Полезный завтрак с хлебцами, сёмгой и авокадо", price: "" },
    { name: "Омлет с ветчиной", desc: "Пышный омлет с ветчиной и грибами", price: "" },
    { name: "Блины с семгой", desc: "Тонкие блины с сёмгой и муссом из авокадо", price: "" },
    { name: "Тост с индейкой", desc: "Копчёная индейка с авокадо на тосте", price: "" },
  ],
  "Салаты": [
    { name: "Азиатский салат с телятиной", desc: "Тёплый салат с говядиной в азиатском стиле", price: "" },
    { name: "Боул с креветками", desc: "Питательный боул с креветками и рисом", price: "" },
    { name: "Боул с курицей", desc: "Сбалансированный боул с курицей и овощами", price: "" },
    { name: "Боул с семгой", desc: "Свежий боул с сёмгой, авокадо и рисом", price: "" },
    { name: "Зеленый салат", desc: "Микс зелени с авокадо и брокколи", price: "" },
    { name: "Руккола с креветками", desc: "Руккола с креветками и пармезаном", price: "" },
    { name: "Салат греческий", desc: "Классический греческий с фетой и маслинами", price: "" },
    { name: "Салат с апельсинами и фетой", desc: "Свежий салат с цитрусовой ноткой и кедровыми орехами", price: "" },
    { name: "Салат с баклажанами и грибами", desc: "Тёплый салат с баклажанами и шампиньонами", price: "" },
    { name: "Салат с курицей гриль", desc: "Микс зелени с курицей-гриль и терияки", price: "" },
    { name: "Салат с хрустящим баклажаном", desc: "Хрустящий баклажан с помидорами и кинзой", price: "" },
  ],
  "Основные блюда": [
    { name: "Говядина по-тайски", desc: "Говядина с овощами в азиатском соусе и рисом", price: "" },
    { name: "Жареный рис с креветками", desc: "Рис вок с креветками темпура и овощами", price: "" },
    { name: "Жареный рис с курицей", desc: "Рис вок с курицей и свежими овощами", price: "" },
    { name: "Жареный рис с телятиной", desc: "Рис вок с телятиной и овощами", price: "" },
    { name: "Картофель с говядиной", desc: "Домашний картофель с говядиной и грибами", price: "" },
    { name: "Колбаски с картофелем", desc: "Колбаски гриль с картофельными дольками", price: "" },
    { name: "Курица Милонезе", desc: "Куриная грудка в хрустящей панировке с пармезаном", price: "" },
    { name: "Курица в кисло-сладком соусе", desc: "Нежная курица в соусе свит чили с рисом", price: "" },
    { name: "Медальоны из телятины", desc: "Сочные медальоны с соусом барбекю и рисом", price: "" },
    { name: "Стейк из семги", desc: "Сёмга на гриле со шпинатом и лаймом", price: "" },
    { name: "Стейк Нью-Йорк", desc: "Классический стейк со шпинатом и барбекю", price: "" },
    { name: "Стейк Рибай", desc: "Мраморный стейк с розмарином и тимьяном", price: "" },
  ],
  "Супы": [
    { name: "Рамен с курицей", desc: "Наваристый японский суп с лапшой и курицей", price: "" },
    { name: "Рамен с телятиной", desc: "Пряный рамен с телятиной и вакаме", price: "" },
    { name: "Суп чечевичный", desc: "Густой крем-суп из красной чечевицы", price: "" },
    { name: "Том ям с креветками", desc: "Острый тайский суп с креветками и кокосом", price: "" },
    { name: "Суп лапша", desc: "Домашний куриный суп с яичной лапшой", price: "" },
  ],
  "Пасты": [
    { name: "Спагетти в томатном соусе", desc: "Спагетти с черри, чили и свежим базиликом", price: "" },
    { name: "Спагетти с креветками песто", desc: "Креветки с соусом песто и кедровыми орехами", price: "" },
    { name: "Спагетти с курицей песто", desc: "Курица с соусом песто и пармезаном", price: "" },
    { name: "Фетучини Альфредо", desc: "Сливочная паста с курицей и грибами", price: "" },
    { name: "Фетучини с семгой", desc: "Паста с сёмгой в сливочно-шпинатном соусе", price: "" },
  ],
  "Сэндвичи": [
    { name: "Круассан с индейкой", desc: "Хрустящий круассан с копчёной индейкой", price: "" },
    { name: "Круассан с семгой", desc: "Масляный круассан с нежной сёмгой", price: "" },
    { name: "Круассан с курицей-гриль", desc: "Тёплый круассан с курицей на гриле", price: "" },
    { name: "Клаб-сэндвич с индейкой", desc: "Трёхслойный сэндвич с копчёной индейкой", price: "" },
    { name: "Клаб-сэндвич с курицей", desc: "Классический клаб с сочной курицей", price: "" },
    { name: "Клаб-сэндвич с семгой", desc: "Клаб-сэндвич с нежной сёмгой", price: "" },
    { name: "Блинчики с грибами и курицей", desc: "Тонкие блинчики с грибной начинкой и курицей", price: "" },
    { name: "Блинчики с говядиной", desc: "Блинчики с сочной говяжьей начинкой", price: "" },
    { name: "Хот-дог BBQ", desc: "Хот-дог с соусом барбекю", price: "" },
    { name: "Хот-дог классик", desc: "Классический хот-дог с горчицей и кетчупом", price: "" },
    { name: "Хот-дог свит чили", desc: "Хот-дог с пикантным соусом свит чили", price: "" },
    { name: "Хот-дог сырный", desc: "Хот-дог с расплавленным сыром", price: "" },
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