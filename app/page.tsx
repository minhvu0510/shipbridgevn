import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">

      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-4 border-b">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="ShipBridge Logo" width={40} height={40} />
          <span className="text-xl font-bold text-[#5A3E2B]">ShipBridge</span>
        </div>

        <nav className="hidden md:flex gap-6 text-gray-600">
          <a href="#about">About</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="bg-[#5A3E2B] text-white px-5 py-2 rounded-lg">
          Get Quote
        </button>
      </header>

      {/* HERO */}
      <section
        className="relative flex items-center justify-center text-center text-white h-[90vh]"
        style={{
          backgroundImage: "url('/main-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50 absolute inset-0"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-6">
            Freight Forwarding Made Simple
          </h1>
          <p className="text-lg mb-8">
            Connect with verified forwarders, compare quotes, and ship smarter
            across China - Vietnam.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="bg-[#5A3E2B] px-6 py-3 rounded-lg text-white font-semibold">
              Get Instant Quote
            </button>

            <button className="bg-white text-[#5A3E2B] px-6 py-3 rounded-lg font-semibold">
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/about-us.jpg"
          alt="About ShipBridge"
          width={600}
          height={400}
          className="rounded-xl"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#5A3E2B]">
            About ShipBridge
          </h2>
          <p className="text-gray-600 mb-4">
            ShipBridge is a logistics marketplace connecting SMEs with trusted freight forwarders.
            We simplify cross-border shipping by bringing transparency, speed, and reliability.
          </p>
          <p className="text-gray-600">
            No more endless WhatsApp quotes. Just one platform, multiple offers, and smarter decisions.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="bg-gray-100 py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#5A3E2B]">
            Why Choose ShipBridge?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">
                Compare multiple quotes instantly. No hidden fees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Verified Forwarders</h3>
              <p className="text-gray-600">
                Work only with trusted and vetted logistics partners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Faster Booking</h3>
              <p className="text-gray-600">
                Get quotes within hours instead of days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Cost Optimization</h3>
              <p className="text-gray-600">
                Save up to 20% on shipping costs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Centralized Platform</h3>
              <p className="text-gray-600">
                Manage all shipments in one dashboard.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">China - Vietnam Focus</h3>
              <p className="text-gray-600">
                Specialized in the most demanded trade route.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#5A3E2B]">
          Start Shipping Smarter Today
        </h2>

        <button className="bg-[#5A3E2B] text-white px-8 py-4 rounded-lg text-lg font-semibold">
          Request a Quote
        </button>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#5A3E2B] text-white py-10 text-center">
        <p>© 2026 ShipBridge.vn</p>
        <p className="text-sm mt-2">Connecting SMEs with trusted forwarders</p>
      </footer>

    </div>
  );
}