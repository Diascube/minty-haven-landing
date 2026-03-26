import AnimatedSection from "./AnimatedSection";
import heroImg from "@/assets/hero-coffee.jpg";
import food1 from "@/assets/food-1.jpg";
import coffeeArt from "@/assets/coffee-art.jpg";
import interior1 from "@/assets/interior-1.jpg";
import dessert1 from "@/assets/dessert-1.jpg";
import barista from "@/assets/barista.jpg";

const images = [
  { src: interior1, alt: "Cozy interior corner", span: "md:col-span-1 md:row-span-2" },
  { src: food1, alt: "Avocado toast", span: "md:col-span-1" },
  { src: coffeeArt, alt: "Latte art", span: "md:col-span-1" },
  { src: heroImg, alt: "Coffee shop interior", span: "md:col-span-2" },
  { src: dessert1, alt: "Chocolate dessert", span: "md:col-span-1" },
  { src: barista, alt: "Barista at work", span: "md:col-span-1 md:row-span-2" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 md:py-32">
    <div className="container">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">
          Gallery
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
          A Glimpse Inside
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
        {images.map((img, i) => (
          <AnimatedSection
            key={i}
            delay={i * 0.08}
            className={`overflow-hidden rounded-xl group cursor-pointer ${img.span}`}
          >
            <div className="relative w-full h-full">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors duration-500" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
