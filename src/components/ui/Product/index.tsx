"use client";

import Image from "next/image";
import { MoveLeft, MoveRight, ShoppingCart } from "lucide-react";
import { product } from "@/constants/product";
import Button from "@/components/dump/button";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";



export default function ProductCategories() {
  const { scrollRef, scrollState, scroll } = useHorizontalScroll()

  return (
    <section className="bg-[#0E2437] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {product.heading}
            </h2>
            <p className="mt-2 text-gray-300 text-sm md:text-base max-w-lg">
              {product.subHeading}
            </p>
          </div>
          <Button className="!py-2 w-fit max-md:mt-6" label={product.btnLabel} variant={"primary"} rightIcon={<ShoppingCart size={18} className="text-white" />} />
        </div>
        <div className="relative mt-10">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {product.categories.map((cat, i) => (
              <div
                key={i}
                className="relative min-w-[200px] md:min-w-[220px] rounded-xl overflow-hidden group"
              >
                <Image
                  src={cat.img}
                  alt={cat.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-56 md:h-[300px] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="product-category-bg absolute inset-0 flex items-end justify-center">
                  <p className="text-white font-semibold text-sm md:text-base p-3">
                    {cat.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        <div className="mt-10 flex items-center justify-end gap-4">
          {[
            { dir: -1, show: scrollState.left, icon: MoveLeft },
            { dir: 1, show: scrollState.right, icon: MoveRight },
          ].map(
            ({ dir, show, icon: Icon }, i) =>
              (
                <button
                  key={i}
                  disabled={!show}
                  onClick={() => scroll(dir)}
                  className={`flex border border-white px-6 py-1.5 rounded-full ${!show ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                >
                  <Icon className="w-4 h-6 text-white" />
                </button>
              )
          )}  
        </div>
      </div>
    </section>
  );
}
