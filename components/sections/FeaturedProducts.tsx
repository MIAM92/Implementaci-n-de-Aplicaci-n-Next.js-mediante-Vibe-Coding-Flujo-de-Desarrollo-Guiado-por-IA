"use client";

import { motion } from "framer-motion";

// 🎯 Cada producto tiene un ID único. Así puedes agregar los que quieras sin problemas.
const products = [
  {
    id: 1,
    name: "Espresso Botánico",
    note: "Notas de cacao y naranja",
    price: "$4.50",
    image: "/espresso.jpg"
  },
  {
    id: 2,
    name: "Latte de Lavanda",
    note: "Infusión floral y leche de avena",
    price: "$5.00",
    image: "/cafe-canela.jpg"
  },
  {
    id: 3,
    name: "Cold Brew de Coco",
    note: "Suave, dulce y refrescante",
    price: "$4.80",
    image: "/cafe-naranja.jpg"
  },
  {
    id: 4,
    name: "Cold Blue de Cherry",
    note: "Suave, dulce y alcohol",
    price: "$7.80",
    image: "/cafe-sabores.jpg"
  },
  {
    id: 5,
    name: "Latte de Lavanda",
    note: "Infusión floral y leche de avena",
    price: "$5.00",
    image: "/cafe-lecheHierbaBuena.jpg"
  },
  {
    id: 6,
    name: "Cold Brew de Coco",
    note: "Suave, dulce y refrescante",
    price: "$4.80",
    image: "/cafe-lecheNaranjaCoco.jpg"
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-16"
        style={{ fontFamily: "var(--font-playfair)", color: "var(--color-pastel-1)" }}
      >
        Nuestros Favoritos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="rounded-2xl flex flex-col overflow-hidden border"
            style={{
              backgroundColor: "#2A2826",
              borderColor: "rgba(178, 194, 164, 0.2)"
            }}
          >
            <div className="relative w-full h-56 overflow-hidden bg-[#1C1B1A]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="p-8 flex flex-col items-center text-center flex-grow">
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                {product.name}
              </h3>
              
              <p
                className="mb-6 text-sm"
                style={{ color: "var(--color-pastel-2)" }}
              >
                {product.note}
              </p>
              
              <span
                className="text-lg font-bold mt-auto"
                style={{ color: "var(--color-pastel-1)" }}
              >
                {product.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}