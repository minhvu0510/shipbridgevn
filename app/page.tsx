"use client";

import Image from "next/image";
import { useState } from "react";

type Lang = "en" | "vi";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  const text = {
    en: {
      headline: "Freight Forwarding Made Simple",
      sub: "Connect with trusted forwarders. Get quotes. Ship smarter.",
      getQuote: "Get Quote",

      aboutTitle: "About ShipBridge",
      aboutDesc:
        "ShipBridge is a logistics marketplace connecting SMEs with verified forwarders, helping businesses find the most efficient and cost-effective shipping solutions.\n\nOur mission is to empower small businesses with access to professional logistics services.\n\nOur vision is to become the leading logistics marketplace in Southeast Asia, starting with the China - Vietnam corridor.",

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
      headline: "Đơn giản hóa vận chuyển quốc tế",
      sub: "Kết nối forwarder uy tín. Nhận báo giá nhanh. Tối ưu chi phí.",
      getQuote: "Nhận báo giá",

      aboutTitle: "Về ShipBridge",
      aboutDesc:
        "ShipBridge là nền tảng kết nối SME với các forwarder uy tín, giúp tối ưu chi phí vận chuyển và minh bạch báo giá.\n\nSứ mệnh của chúng tôi là giúp doanh nghiệp nhỏ tiếp cận dịch vụ logistics chuyên nghiệp.\n\nTầm nhìn của ShipBridge là trở thành nền tảng logistics marketplace hàng đầu Đông Nam Á, bắt đầu từ tuyến Trung Quốc - Việt Nam.",

      whyTitle: "Tại sao chọn ShipBridge",
      why: [
        "Giá minh bạch",
        "Forwarder đã xác minh",
        "Báo giá nhanh",
        "Tiết kiệm chi phí",
        "Quản lý tập trung",
        "Tập trung tuyến Trung - Việt",
      ],
    },
  };

  const t = text[lang];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <div className="flex justify-between items-center px-10 py-6 sticky top-0 bg-white z-50 shadow-sm">
        {/* LOGO */}
        <Image
          src="/logo.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[220px] h-auto"
        />

        {/* MENU */}
        <div className="flex items-center gap-6 font-semibold text-[#4b2e2e]">
          <span>About</span>
          <span>Why Us</span>
          <span>Contact</span>

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
        className="h-[80vh] flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: "url('/main-background.jpg')",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-5xl font-bold mb-6">{t.headline}</h1>
        <p className="text-lg mb-8">{t.sub}</p>

        {/* FORM */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-4">
          <input
            placeholder="Origin"
            className="border p-3 rounded-lg"
          />
          <input
            placeholder="Destination"
            className="border p-3 rounded-lg"
          />
          <input
            placeholder="Weight (kg)"
            className="border p-3 rounded-lg"
          />

          <button className="bg-[#4b2e2e] text-white px-6 py-3 rounded-lg">
            {t.getQuote}
          </button>
        </div>
      </div>

      {/* ABOUT */}
      <div className="px-10 py-20 bg-[#faf6f2]">
        <h2 className="text-3xl font-bold mb-6">{t.aboutTitle}</h2>
        <p className="text-gray-700 whitespace-pre-line max-w-3xl">
          {t.aboutDesc}
        </p>
      </div>

      {/* WHY */}
      <div className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-10">{t.whyTitle}</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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