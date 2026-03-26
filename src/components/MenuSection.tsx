import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const categories = ["Coffee", "Drinks", "Breakfast", "Main Dishes", "Desserts"] as const;

type Category = typeof categories[number];

interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

const menuData: Record<Category, MenuItem[]> = {
  Coffee: [
    { name: "Espresso", desc: "Rich, bold single shot from Ethiopian beans", price: "$3.50" },
    { name: "Flat White", desc: "Velvety microfoam with double ristretto", price: "$5.00" },
    { name: "Pour Over", desc: "Hand-brewed single origin, rotating selection", price: "$5.50" },
    { name: "Cold Brew", desc: "20-hour steeped, smooth and refreshing", price: "$4.50" },
    { name: "Matcha Latte", desc: "Ceremonial grade matcha with oat milk", price: "$5.50" },
    { name: "Cappuccino", desc: "Classic Italian style with silky foam", price: "$4.50" },
  ],
  Drinks: [
    { name: "Fresh Orange Juice", desc: "Squeezed to order, pure citrus", price: "$4.00" },
    { name: "Berry Smoothie", desc: "Mixed berries, banana, yogurt", price: "$6.00" },
    { name: "Kombucha", desc: "House-brewed, seasonal flavors", price: "$5.00" },
    { name: "Chai Latte", desc: "Spiced black tea with steamed milk", price: "$5.00" },
    { name: "Lemonade", desc: "Homemade with fresh mint and ginger", price: "$4.50" },
  ],
  Breakfast: [
    { name: "Avocado Toast", desc: "Sourdough, poached egg, microgreens, chili flakes", price: "$12.00" },
    { name: "Granola Bowl", desc: "House granola, Greek yogurt, seasonal berries", price: "$9.00" },
    { name: "Eggs Benedict", desc: "Smoked salmon, hollandaise, English muffin", price: "$14.00" },
    { name: "Croissant Plate", desc: "Butter croissant, jam, soft cheese, fruit", price: "$8.00" },
    { name: "Pancake Stack", desc: "Fluffy pancakes, maple syrup, fresh berries", price: "$11.00" },
  ],
  "Main Dishes": [
    { name: "Grilled Salmon", desc: "Atlantic salmon, quinoa, roasted vegetables", price: "$18.00" },
    { name: "Truffle Pasta", desc: "Fresh fettuccine, black truffle, parmesan", price: "$16.00" },
    { name: "Buddha Bowl", desc: "Roasted chickpeas, avocado, tahini dressing", price: "$14.00" },
    { name: "Wagyu Burger", desc: "Brioche bun, aged cheddar, caramelized onions", price: "$17.00" },
    { name: "Caesar Salad", desc: "Romaine, croutons, parmesan, house dressing", price: "$12.00" },
  ],
  Desserts: [
    { name: "Chocolate Fondant", desc: "Warm molten center, vanilla ice cream", price: "$10.00" },
    { name: "Tiramisu", desc: "Classic Italian, mascarpone, espresso-soaked", price: "$9.00" },
    { name: "Crème Brûlée", desc: "Madagascar vanilla, caramelized sugar crust", price: "$8.00" },
    { name: "Cheesecake", desc: "New York style, berry compote", price: "$9.00" },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState<Category>("Coffee");

  return (
    <section id="menu" className="py-24 md:py-32 bg-cream">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">
            Our Menu
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Crafted with Passion
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
