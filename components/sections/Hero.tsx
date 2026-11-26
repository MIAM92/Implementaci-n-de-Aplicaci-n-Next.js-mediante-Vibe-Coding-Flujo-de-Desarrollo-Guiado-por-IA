"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      
      {/* Imagen de fondo a la derecha */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <img
          src="/espresso.jpg"
          alt="Café botánico"
          className="h-full w-auto object-cover opacity-90"
          style={{ 
            maxWidth: "55%",
            maskImage: "linear-gradient(to right, transparent 0%, black 30%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%)"
          }}
        />
      </div>

      {/* Contenido de texto */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold leading-tight"
          style={{ 
            fontFamily: "var(--font-playfair)",
            color: "var(--color-pastel-1, #f5ebe0)"
          }}
        >
          El Arte del <span style={{ color: "var(--color-accent, #d4a574)" }}>Café</span> Natural
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 max-w-xl mx-auto text-lg"
          style={{ color: "var(--color-pastel-2, #a8a8a8)" }}
        >
          Bebidas botánicas de especialidad, elaboradas con granos de origen único y ingredientes 100% naturales.
        </motion.p>

        {/* Botón principal */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-4 font-semibold rounded-full text-lg transition-colors cursor-pointer"
          style={{ 
            backgroundColor: "var(--color-accent, #d4a574)", 
            color: "#1a1a1a"
          }}
        >
          Explora la Colección
        </motion.button>
      </div>
    </section>
  );
}