import { motion } from "framer-motion";
import heroImg from "@/assets/hero-coffee.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Verdant coffee shop interior"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-dark/60" />
    </div>

    <div className="relative z-10 container text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-dark-foreground/70 mb-4"
      >
        Coffee · Kitchen · Atmosphere
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-dark-foreground mb-6"
      >
        Verdant
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="font-body text-lg md:text-xl text-dark-foreground/80 max-w-md mx-auto mb-10"
      >
        Where every cup tells a story and every dish is crafted with care
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#menu"
          className="bg-primary-foreground/90 text-dark px-8 py-3.5 rounded-lg font-body text-sm font-medium hover:bg-primary-foreground transition-all duration-300 hover:scale-105"
        >
          View Menu
        </a>
        <a
          href="#reservation"
          className="border border-primary-foreground/40 text-dark-foreground px-8 py-3.5 rounded-lg font-body text-sm font-medium hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105"
        >
          Book a Table
        </a>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-5 h-9 border-2 border-dark-foreground/40 rounded-full flex justify-center pt-2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-2 bg-dark-foreground/60 rounded-full"
        />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
