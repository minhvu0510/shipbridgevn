"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Lang = "en" | "vi";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [visible, setVisible] = useState(false);

  const [form, setForm] = useState({
    origin: "",
    destination: "",
    weight: "",
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("https://script.google.com/macros/s/AKfycbwrXQY0KTMaKiLu9PPxu5nFHqO1UtMy3QQs6You1EG_coWG9C_1uDpdE91kA6H2_qbh/exec", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Request sent!");
    setForm({ origin: "", destination: "", weight: "" });
  };

  const text = {
    en: {
      headline: "Freight Forwarding Made Simple",
      sub: "Compare quotes & ship smarter",
      getQuote: "Get Quote",
    },
    vi: {
      headline: "Đơn giản hóa vận chuyển",
      sub: "So sánh giá & tối ưu chi phí",
      getQuote: "Nhận báo giá",
    },
  };

  const t = text[lang];

  return (
    <div className="min-h-screen">

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 bg-white z-50 flex justify-between items-center px-8 py-4 shadow">

        <div className="flex items-center gap-3">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <span className="text-2xl font-bold text-[#5A3E2B]">ShipBridge</span>
        </div>

        <div className="flex items-center gap-6">
          <a className="font-bold text-[#5A3E2B]" href="#about">About</a>
          <a className="font-bold text-[#5A3E2B]" href="#why">Why Us</a>

          <button
            onClick={() => setLang(lang === "en" ? "vi" : "en")}
            className="border px-3 py-1 rounded"
          >
            {lang === "en" ? "VI" : "EN"}
          </button>

          <button className="bg-[#5A3E2B] text-white px-4 py-2 rounded">
            {t.getQuote}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        className={`h-screen flex flex-col justify-center items-center text-white text-center transition-all duration-1000 ${
          visible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage: "url('/main-background.jpg')",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">{t.headline}</h1>
        <p className="mb-8">{t.sub}</p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black p-6 rounded-xl flex gap-4 shadow-lg"
        >
          <input
            placeholder="Origin"
            className="border p-2 rounded"
            value={form.origin}
            onChange={(e) => setForm({ ...form, origin: e.target.value })}
          />

          <input
            placeholder="Destination"
            className="border p-2 rounded"
            value={form.destination}
            onChange={(e) => setForm({ ...form, destination: e.target.value })}
          />

          <input
            placeholder="Weight (kg)"
            className="border p-2 rounded"
            value={form.weight}
            onChange={(e) => setForm({ ...form, weight: e.target.value })}
          />

          <button className="bg-[#5A3E2B] text-white px-4 rounded">
            {t.getQuote}
          </button>
        </form>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className={`py-20 px-8 transition-all duration-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <Image src="/about-us.jpg" width={500} height={300} alt="about" />

          <div>
            <h2 className="text-3xl font-bold text-[#5A3E2B] mb-4">
              About ShipBridge
            </h2>
            <p>Marketplace kết nối SME với forwarder uy tín.</p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="bg-gray-100 py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#5A3E2B] mb-10">
            Why Choose ShipBridge?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Transparent Pricing",
              "Verified Forwarders",
              "Fast Quotes",
              "Save Cost",
              "Centralized",
              "China-Vietnam Focus",
            ].map((item, i) => (
              <div key={i} className="bg-[#F3E9E2] p-6 rounded-xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#5A3E2B] text-white py-10 text-center">
        © 2026 ShipBridge
      </footer>
    </div>
  );
}