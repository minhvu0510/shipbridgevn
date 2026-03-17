"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type Lang = "en" | "vi";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [visible, setVisible] = useState(false);

  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const text = {
    en: {
      nav: { about: "About", why: "Why Us", contact: "Contact" },
      headline: "Freight Forwarding Made Simple",
      sub: "Connect with trusted forwarders. Get quotes. Ship smarter.",
      getQuote: "Get Quote",

      aboutTitle: "About ShipBridge",
      aboutDesc:
        "ShipBridge is a logistics marketplace connecting SMEs with verified forwarders.\n\nWe help businesses reduce cost, increase transparency, and simplify the shipping process.\n\nOur mission is to empower SMEs with access to world-class logistics.\n\nOur vision is to become Southeast Asia’s leading logistics platform, starting with China - Vietnam.",

      whyTitle: "Why Choose ShipBridge",
      why: [
        "Transparent Pricing",
        "Verified Forwarders",
        "Fast Quotes",
        "Save Cost",
        "Centralized Platform",
        "China-Vietnam Focus",
      ],
    },

    vi: {
      nav: { about: "Giới thiệu", why: "Lý do chọn", contact: "Liên hệ" },
      headline: "Đơn giản hóa vận chuyển quốc tế",
      sub: "Kết nối forwarder uy tín. Nhận báo giá nhanh. Tối ưu chi phí.",
      getQuote: "Nhận báo giá",

      aboutTitle: "Về ShipBridge",
      aboutDesc:
        "ShipBridge là nền tảng kết nối SME với các forwarder uy tín.\n\nChúng tôi giúp giảm chi phí, minh bạch giá và đơn giản hóa quy trình vận chuyển.\n\nSứ mệnh: giúp doanh nghiệp nhỏ tiếp cận logistics chuyên nghiệp.\n\nTầm nhìn: trở thành nền tảng logistics hàng đầu Đông Nam Á, bắt đầu từ tuyến Trung - Việt.",

      whyTitle: "Tại sao chọn ShipBridge",
      why: [
        "Giá minh bạch",
        "Forwarder đã xác minh",
        "Báo giá nhanh",
        "Tiết kiệm chi phí",
        "Quản lý tập trung",
        "Tuyến Trung - Việt",
      ],
    },
  };

  const t = text[lang];

  return (
    <div className="min-h-screen bg-white text-black">
      
      {/* NAVBAR */}
      <div className="flex justify-between items-center px-10 py-6 sticky top-0 bg-white z-50 shadow-sm">
        <Image
          src="/logo.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[240px] h-auto"
        />

        <div className="flex items-center gap-6 font-semibold text-[#4b2e2e]">
          <span>{t.nav.about}</span>
          <span>{t.nav.why}</span>
          <span>{t.nav.contact}</span>

          <button
            onClick={() => setLang(lang === "en" ? "vi" : "en")}
            className="ml-4 text-black"
          >
            {lang === "en" ? "VI" : "EN"}
          </button>

          <button className="bg-[#4b2e2e] text-white px-4 py-2 rounded-xl">
            {t.getQuote}
          </button>
        </div>
      </div>

      {/* HERO */}
      <div
        className="h-[100vh] flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: "url('/main-background.jpg')",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-5xl font-bold mb-6">{t.headline}</h1>
        <p className="text-lg mb-8">{t.sub}</p>

        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-4">
          <input placeholder="Origin" className="border p-3 rounded-lg" />
          <input placeholder="Destination" className="border p-3 rounded-lg" />
          <input placeholder="Weight (kg)" className="border p-3 rounded-lg" />

          <button className="bg-[#4b2e2e] text-white px-6 py-3 rounded-lg">
            {t.getQuote}
          </button>
        </div>
      </div>

      {/* ABOUT */}
      <div
        ref={aboutRef}
        className="px-10 py-20 bg-[#faf6f2] flex items-center justify-center min-h-[120vh]"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE */}
          <div
            className={`flex justify-center transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            <Image
              src="/about-us.jpg"
              alt="about"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full max-w-[500px] rounded-2xl shadow-lg"
            />
          </div>

          {/* TEXT */}
          <div
            className={`text-left transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6">{t.aboutTitle}</h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {t.aboutDesc}
            </p>
          </div>
        </div>
      </div>

      {/* WHY */}
      <div className="px-10 py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">{t.whyTitle}</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {t.why.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#f5f0eb] text-center font-semibold text-[#4b2e2e] hover:scale-105 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center py-10 text-gray-500">
        © 2026 ShipBridge. All rights reserved.
      </div>
    </div>
  );
}