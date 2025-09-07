"use client";
import AboutUs from "@/components/ui/About";
import MobileApp from "@/components/ui/App";
import ContactUs from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import Growth from "@/components/ui/Growth";
import Header from "@/components/ui/header";
import HeroSection from "@/components/ui/Hero";
import Journey from "@/components/ui/Journey";
import Navbar from "@/components/ui/Navbar";
import MenuBar from "@/components/ui/Navbar/menu-bar";
import TopBar from "@/components/ui/Navbar/top-bar";
import News from "@/components/ui/News";
import Partners from "@/components/ui/Partner";
import ProductCategories from "@/components/ui/Product";
import BusinessSectors from "@/components/ui/Sector";
import Service from "@/components/ui/Service";
import Services from "@/components/ui/services";
import StockPrice from "@/components/ui/Stock";
import Trade from "@/components/ui/Trade";
import React from "react";

export default function Home() {
  return (
    <main className="w-full h-full">
      {/* 🔹 Marquee Header */}
      <Header />
      
      {/* 🔹 Hero Section with Video */}
      <HeroSection />
      <Services />
      <Partners />
      <AboutUs />
      <Growth />
      <Journey />
      <ProductCategories />
      <BusinessSectors />
      <Service />
      <ContactUs />
      <Trade />
      <StockPrice />
      <MobileApp />
      <News />
      <Footer />
    </main>
  );
}
