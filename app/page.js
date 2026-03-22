"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("vi");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shipmentType, setShipmentType] = useState("export");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    productType: "",
    volume: "",
    notes: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `${lang === "vi" ? "Yêu cầu báo giá" : "Quote Request"} ${shipmentType === "export" ? (lang === "vi" ? "xuất khẩu" : "Export") : (lang === "vi" ? "nhập khẩu" : "Import")} - ShipBridge`;
    const body = `
${lang === "vi" ? "Loại vận chuyển" : "Shipment Type"}: ${shipmentType === "export" ? (lang === "vi" ? "Xuất khẩu" : "Export") : (lang === "vi" ? "Nhập khẩu" : "Import")}
${lang === "vi" ? "Tên" : "Name"}: ${formData.name}
Email: ${formData.email}
${lang === "vi" ? "Phone" : "Phone"}: ${formData.phone}
${lang === "vi" ? "Xuất phát" : "Origin"}: ${formData.origin}
${lang === "vi" ? "Đích đến" : "Destination"}: ${formData.destination}
${lang === "vi" ? "Loại hàng" : "Product Type"}: ${formData.productType}
${lang === "vi" ? "Khối lượng" : "Volume"}: ${formData.volume}
${lang === "vi" ? "Ghi chú" : "Notes"}: ${formData.notes}
    `;
    window.location.href = `mailto:admin@shipbridge.vn?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const t = {
    vi: {
      nav: {
        home: "Trang Chủ",
        features: "Tính Năng",
        how: "Cách Hoạt Động",
        about: "Về Chúng Tôi",
        contact: "Liên Hệ",
        quote: "Nhận Báo Giá"
      },
      hero: {
        title1: "Xuất Nhập Khẩu",
        title2: "Thật Đơn Giản",
        subtitle: "So sánh giá vận chuyển từ nhiều đơn vị giao nhận uy tín trong 24 giờ. Tiết kiệm 15-30% chi phí logistics.",
        cta1: "Nhận Báo Giá Miễn Phí",
        cta2: "Tìm Hiểu Thêm",
        survey: "Khảo Sát"
      },
      features: {
        title: "Tại Sao Chọn ShipBridge?",
        subtitle: "Giải pháp toàn diện cho doanh nghiệp SME xuất nhập khẩu",
        items: [
          { title: "Tiết Kiệm Chi Phí", desc: "So sánh giá từ nhiều forwarders, chọn được option tốt nhất cho doanh nghiệp." },
          { title: "Nhanh Chóng", desc: "Nhận 3-5 báo giá trong 24-48 giờ thay vì mất 1-2 tuần." },
          { title: "Uy Tín và Minh Bạch", desc: "Forwarders được xác minh. Breakdown chi phí rõ ràng, không phí ẩn." }
        ]
      },
      how: {
        title: "Cách Hoạt Động",
        subtitle: "4 bước đơn giản để nhận báo giá tốt nhất",
        steps: [
          { title: "Điền Thông Tin", desc: "Điền form đơn giản: xuất phát, đích đến, loại hàng, khối lượng" },
          { title: "Nhận Báo Giá", desc: "3-5 forwarders uy tín cạnh tranh báo giá trong 24-48 giờ" },
          { title: "So Sánh và Chọn", desc: "Bảng so sánh rõ ràng: giá, thời gian, đánh giá, dịch vụ" },
          { title: "Đặt Hàng và Vận Chuyển", desc: "Chọn forwarder phù hợp, xác nhận booking, theo dõi vận chuyển" }
        ]
      },
      quote: {
        title: "Nhận Báo Giá Miễn Phí",
        subtitle: "Điền thông tin bên dưới, chúng tôi sẽ gửi báo giá trong 24-48 giờ",
        export: "Xuất Khẩu",
        import: "Nhập Khẩu",
        name: "Họ và tên",
        email: "Email",
        phone: "Số điện thoại",
        originExport: "Xuất phát từ",
        originImport: "Nhập từ",
        destExport: "Đích đến",
        destImport: "Nhập về",
        productType: "Loại hàng hóa",
        selectProduct: "Chọn loại hàng",
        products: {
          furniture: "Nội thất / Gỗ",
          apparel: "Thời trang / Dệt may",
          electronics: "Điện tử / Linh kiện",
          food: "Thực phẩm / Nông sản",
          handicraft: "Thủ công mỹ nghệ",
          machinery: "Máy móc / Thiết bị",
          other: "Khác"
        },
        volume: "Khối lượng / Số lượng",
        notes: "Ghi chú (tùy chọn)",
        submit: "Gửi Yêu Cầu Báo Giá",
        privacy: "🔒 Thông tin của bạn được bảo mật.",
        placeholders: {
          name: "Nguyễn Văn A",
          email: "you@company.com",
          phone: "0969856557",
          originExport: "Hồ Chí Minh",
          originImport: "Shanghai, China",
          destExport: "Los Angeles, USA",
          destImport: "Hồ Chí Minh",
          volume: "15 CBM hoặc 1x40ft container",
          notes: "Yêu cầu đặc biệt: fumigation, bảo hiểm, ngày dự kiến..."
        }
      },
      about: {
        title: "Về ShipBridge",
        p1: "ShipBridge ra đời với sứ mệnh giúp các doanh nghiệp SME Việt Nam xuất nhập khẩu dễ dàng và tiết kiệm hơn.",
        p2: "Chúng tôi kết nối bạn với mạng lưới các đơn vị giao nhận uy tín, giúp so sánh giá cả và dịch vụ một cách minh bạch.",
        p3: "Với ShipBridge, xuất nhập khẩu không còn phức tạp và tốn kém nữa."
      },
      contact: {
        title: "Liên Hệ Với Chúng Tôi",
        subtitle: "Có câu hỏi? Chúng tôi luôn sẵn sàng hỗ trợ bạn"
      },
      footer: "© 2026 ShipBridge. All rights reserved."
    },
    en: {
      nav: {
        home: "Home",
        features: "Features",
        how: "How It Works",
        about: "About Us",
        contact: "Contact",
        quote: "Get Quote"
      },
      hero: {
        title1: "International Shipping",
        title2: "Made Simple",
        subtitle: "Compare shipping quotes from trusted forwarders in 24 hours. Save 15-30% on logistics costs.",
        cta1: "Get Free Quote",
        cta2: "Learn More",
        survey: "Survey"
      },
      features: {
        title: "Why Choose ShipBridge?",
        subtitle: "Complete solution for SME import/export businesses",
        items: [
          { title: "Save Costs", desc: "Compare quotes from multiple forwarders and choose the best option for your business." },
          { title: "Fast & Efficient", desc: "Receive 3-5 quotes in 24-48 hours instead of waiting 1-2 weeks." },
          { title: "Trusted & Transparent", desc: "Verified forwarders. Clear cost breakdown with no hidden fees." }
        ]
      },
      how: {
        title: "How It Works",
        subtitle: "4 simple steps to get the best quote",
        steps: [
          { title: "Fill Information", desc: "Simple form: origin, destination, product type, volume" },
          { title: "Receive Quotes", desc: "3-5 trusted forwarders compete with quotes in 24-48 hours" },
          { title: "Compare & Choose", desc: "Clear comparison: price, transit time, ratings, services" },
          { title: "Book & Ship", desc: "Select suitable forwarder, confirm booking, track shipment" }
        ]
      },
      quote: {
        title: "Get Free Quote",
        subtitle: "Fill in the information below, we'll send you quotes within 24-48 hours",
        export: "Export",
        import: "Import",
        name: "Full Name",
        email: "Email",
        phone: "Phone Number",
        originExport: "Origin",
        originImport: "Import From",
        destExport: "Destination",
        destImport: "Import To",
        productType: "Product Type",
        selectProduct: "Select product type",
        products: {
          furniture: "Furniture / Wood",
          apparel: "Fashion / Textile",
          electronics: "Electronics / Components",
          food: "Food / Agriculture",
          handicraft: "Handicrafts",
          machinery: "Machinery / Equipment",
          other: "Other"
        },
        volume: "Volume / Quantity",
        notes: "Notes (optional)",
        submit: "Submit Quote Request",
        privacy: "🔒 Your information is confidential.",
        placeholders: {
          name: "John Doe",
          email: "you@company.com",
          phone: "+84969856557",
          originExport: "Ho Chi Minh City",
          originImport: "Shanghai, China",
          destExport: "Los Angeles, USA",
          destImport: "Ho Chi Minh City",
          volume: "15 CBM or 1x40ft container",
          notes: "Special requirements: fumigation, insurance, expected date..."
        }
      },
      about: {
        title: "About ShipBridge",
        p1: "ShipBridge was founded with the mission to help Vietnamese SMEs import and export more easily and cost-effectively.",
        p2: "We connect you with a network of trusted freight forwarders, helping you compare prices and services transparently.",
        p3: "With ShipBridge, international shipping is no longer complex and expensive."
      },
      contact: {
        title: "Contact Us",
        subtitle: "Questions? We're here to help"
      },
      footer: "© 2026 ShipBridge. All rights reserved."
    }
  };

  const content = t[lang];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="ShipBridge"
              width={400}
              height={100}
              className="h-16 sm:h-20 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <a href="#home" className="hover:text-[#9B7653]">{content.nav.home}</a>
            <a href="#features" className="hover:text-[#9B7653]">{content.nav.features}</a>
            <a href="#how-it-works" className="hover:text-[#9B7653]">{content.nav.how}</a>
            <a href="#about" className="hover:text-[#9B7653]">{content.nav.about}</a>
            <a href="#contact" className="hover:text-[#9B7653]">{content.nav.contact}</a>
            
            <button 
              onClick={() => setLang(lang === "vi" ? "en" : "vi")} 
              className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300 hover:border-[#9B7653] hover:text-[#9B7653] transition-colors"
            >
              <span className="text-xl">🌐</span>
              <span className="font-semibold">{lang === "vi" ? "EN" : "VI"}</span>
            </button>

            <a href="#quote" className="bg-[#9B7653] text-white px-6 py-2 rounded-lg hover:bg-[#8B6643]">{content.nav.quote}</a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-7 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="px-4 py-4 bg-white border-t border-gray-200 space-y-3">
            <a href="#home" onClick={closeMobileMenu} className="block py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">{content.nav.home}</a>
            <a href="#features" onClick={closeMobileMenu} className="block py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">{content.nav.features}</a>
            <a href="#how-it-works" onClick={closeMobileMenu} className="block py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">{content.nav.how}</a>
            <a href="#about" onClick={closeMobileMenu} className="block py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">{content.nav.about}</a>
            <a href="#contact" onClick={closeMobileMenu} className="block py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">{content.nav.contact}</a>
            
            <button 
              onClick={() => {
                setLang(lang === "vi" ? "en" : "vi");
                closeMobileMenu();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 border-gray-300 hover:border-[#9B7653] hover:text-[#9B7653] text-gray-700 font-medium"
            >
              <span className="text-xl">🌐</span>
              <span>{lang === "vi" ? "English" : "Tiếng Việt"}</span>
            </button>

            <a href="#quote" onClick={closeMobileMenu} className="block w-full bg-[#9B7653] text-white py-3 px-4 rounded-lg hover:bg-[#8B6643] text-center font-semibold">{content.nav.quote}</a>
          </div>
        </div>
      </header>

      <section 
        id="home" 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/main-background.jpg')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-[60vh] flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {content.hero.title1} <span className="text-[#9B7653]">{content.hero.title2}</span>
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="#quote" className="bg-[#9B7653] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#8B6643] shadow-lg">{content.hero.cta1}</a>
            <a href="#how-it-works" className="bg-white text-[#9B7653] border-2 border-[#9B7653] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F5F0EB]">{content.hero.cta2}</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqcPk7LzN5G6RVsacXVWuTKhIzjkdp0cOVxLt5G6DpaMpKIA/viewform" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 shadow-lg">{content.hero.survey}</a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.features.title}</h2>
            <p className="text-xl text-gray-600">{content.features.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {content.features.items.map((item, i) => (
              <div key={i} className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl text-center">
                <div className="w-16 h-16 bg-[#F5EBE0] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl">{["💰", "⚡", "✅"][i]}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#9B7653]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.how.title}</h2>
            <p className="text-xl text-gray-600">{content.how.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {content.how.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-[#9B7653] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">{i + 1}</div>
                <h3 className="text-xl font-bold mb-3 text-[#9B7653]">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.quote.title}</h2>
            <p className="text-xl text-gray-600">{content.quote.subtitle}</p>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-8">
            <div className="flex justify-center gap-4 mb-8">
              <button onClick={() => setShipmentType("export")} className={`px-8 py-3 rounded-lg font-semibold transition-colors ${shipmentType === "export" ? "bg-[#9B7653] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>📦 {content.quote.export}</button>
              <button onClick={() => setShipmentType("import")} className={`px-8 py-3 rounded-lg font-semibold transition-colors ${shipmentType === "import" ? "bg-[#9B7653] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>📥 {content.quote.import}</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{content.quote.name} *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900" placeholder={content.quote.placeholders.name} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{content.quote.email} *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900" placeholder={content.quote.placeholders.email} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{content.quote.phone} *</label>
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900" placeholder={content.quote.placeholders.phone} />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{shipmentType === "export" ? content.quote.originExport : content.quote.originImport} *</label>
                  <input type="text" required value={formData.origin} onChange={(e) => setFormData({...formData, origin: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900" placeholder={shipmentType === "export" ? content.quote.placeholders.originExport : content.quote.placeholders.originImport} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{shipmentType === "export" ? content.quote.destExport : content.quote.destImport} *</label>
                  <input type="text" required value={formData.destination} onChange={(e) => setFormData({...formData, destination: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900" placeholder={shipmentType === "export" ? content.quote.placeholders.destExport : content.quote.placeholders.destImport} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{content.quote.productType} *</label>
                <select required value={formData.productType} onChange={(e) => setFormData({...formData, productType: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900">
                  <option value="">{content.quote.selectProduct}</option>
                  <option value="furniture">{content.quote.products.furniture}</option>
                  <option value="apparel">{content.quote.products.apparel}</option>
                  <option value="electronics">{content.quote.products.electronics}</option>
                  <option value="food">{content.quote.products.food}</option>
                  <option value="handicraft">{content.quote.products.handicraft}</option>
                  <option value="machinery">{content.quote.products.machinery}</option>
                  <option value="other">{content.quote.products.other}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{content.quote.volume} *</label>
                <input type="text" required value={formData.volume} onChange={(e) => setFormData({...formData, volume: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900" placeholder={content.quote.placeholders.volume} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{content.quote.notes}</label>
                <textarea value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})} rows={4} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900" placeholder={content.quote.placeholders.notes} />
              </div>
              <button type="submit" className="w-full bg-[#9B7653] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#8B6643] shadow-lg transition-colors">{content.quote.submit}</button>
              <p className="text-center text-sm text-gray-500">{content.quote.privacy}</p>
            </form>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src="/about-us.jpg" alt="ShipBridge" width={500} height={400} className="w-full rounded-2xl shadow-xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{content.about.title}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{content.about.p1}</p>
            <p className="text-gray-700 mb-4 leading-relaxed">{content.about.p2}</p>
            <p className="text-gray-700 mb-6 leading-relaxed">{content.about.p3}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{content.contact.title}</h2>
          <p className="text-xl text-gray-600 mb-12">{content.contact.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5EBE0] rounded-xl p-6">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-lg mb-2 text-[#9B7653]">Email</h3>
              <a href="mailto:admin@shipbridge.vn" className="text-[#9B7653] hover:underline">admin@shipbridge.vn</a>
            </div>
            <div className="bg-[#F5EBE0] rounded-xl p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold text-lg mb-2 text-[#9B7653]">Hotline</h3>
              <a href="tel:+84969856557" className="text-[#9B7653] hover:underline">(+84) 969 856 557</a>
            </div>
            <div className="bg-[#F5EBE0] rounded-xl p-6">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-lg mb-2 text-[#9B7653]">Zalo</h3>
              <a href="https://zalo.me/0969856557" className="text-[#9B7653] hover:underline">(+84) 969 856 557</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">{content.footer}</p>
        </div>
      </footer>
    </div>
  );
}
