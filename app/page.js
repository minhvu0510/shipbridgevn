"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
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
    const subject = `Yêu cầu báo giá ${shipmentType === "export" ? "xuất khẩu" : "nhập khẩu"} - ShipBridge`;
    const body = `
Loại vận chuyển: ${shipmentType === "export" ? "Xuất khẩu" : "Nhập khẩu"}
Tên: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Xuất phát: ${formData.origin}
Đích đến: ${formData.destination}
Loại hàng: ${formData.productType}
Khối lượng: ${formData.volume}
Ghi chú: ${formData.notes}
    `;
    window.location.href = `mailto:admin@shipbridge.vn?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="ShipBridge"
              width={200}
              height={50}
              className="h-10 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <a href="#home" className="hover:text-amber-900">Trang Chủ</a>
            <a href="#features" className="hover:text-amber-900">Tính Năng</a>
            <a href="#how-it-works" className="hover:text-amber-900">Cách Hoạt Động</a>
            <a href="#about" className="hover:text-amber-900">Về Chúng Tôi</a>
            <a href="#contact" className="hover:text-amber-900">Liên Hệ</a>
            <a href="#quote" className="bg-amber-900 text-white px-6 py-2 rounded-lg hover:bg-amber-800">Nhận Báo Giá</a>
          </div>
        </nav>
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
            Xuất Nhập Khẩu <span className="text-amber-400">Thật Đơn Giản</span>
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto">
            So sánh giá vận chuyển từ nhiều đơn vị giao nhận uy tín trong 24 giờ. Tiết kiệm 15-30% chi phí logistics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="#quote" className="bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-800 shadow-lg">Nhận Báo Giá Miễn Phí</a>
            <a href="#how-it-works" className="bg-white text-amber-900 border-2 border-amber-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50">Tìm Hiểu Thêm</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqcPk7LzN5G6RVsacXVWuTKhIzjkdp0cOVxLt5G6DpaMpKIA/viewform" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 shadow-lg">Khảo Sát</a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tại Sao Chọn ShipBridge?</h2>
            <p className="text-xl text-gray-600">Giải pháp toàn diện cho doanh nghiệp SME xuất nhập khẩu</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-900">Tiết Kiệm Chi Phí</h3>
              <p className="text-gray-600">
                So sánh giá từ nhiều forwarders, chọn được option tốt nhất cho doanh nghiệp.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-900">Nhanh Chóng</h3>
              <p className="text-gray-600">
                Nhận 3-5 báo giá trong 24-48 giờ thay vì mất 1-2 tuần.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-900">Uy Tín và Minh Bạch</h3>
              <p className="text-gray-600">
                Forwarders được xác minh. Breakdown chi phí rõ ràng, không phí ẩn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cách Hoạt Động</h2>
            <p className="text-xl text-gray-600">4 bước đơn giản để nhận báo giá tốt nhất</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-amber-900">Điền Thông Tin</h3>
              <p className="text-gray-600">Điền form đơn giản: xuất phát, đích đến, loại hàng, khối lượng</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-amber-900">Nhận Báo Giá</h3>
              <p className="text-gray-600">3-5 forwarders uy tín cạnh tranh báo giá trong 24-48 giờ</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-amber-900">So Sánh và Chọn</h3>
              <p className="text-gray-600">Bảng so sánh rõ ràng: giá, thời gian, đánh giá, dịch vụ</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-3 text-amber-900">Đặt Hàng và Vận Chuyển</h3>
              <p className="text-gray-600">Chọn forwarder phù hợp, xác nhận booking, theo dõi vận chuyển</p>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nhận Báo Giá Miễn Phí</h2>
            <p className="text-xl text-gray-600">Điền thông tin bên dưới, chúng tôi sẽ gửi báo giá trong 24-48 giờ</p>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-8">
            <div className="flex justify-center gap-4 mb-8">
              <button onClick={() => setShipmentType("export")} className={`px-8 py-3 rounded-lg font-semibold ${shipmentType === "export" ? "bg-amber-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>📦 Xuất Khẩu</button>
              <button onClick={() => setShipmentType("import")} className={`px-8 py-3 rounded-lg font-semibold ${shipmentType === "import" ? "bg-amber-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>📥 Nhập Khẩu</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Họ và tên *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-900 focus:outline-none text-gray-900" placeholder="Nguyễn Văn A" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-900 focus:outline-none text-gray-900" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Số điện thoại *</label>
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-900 focus:outline-none text-gray-900" placeholder="0969856557" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{shipmentType === "export" ? "Xuất phát từ *" : "Nhập từ *"}</label>
                  <input type="text" required value={formData.origin} onChange={(e) => setFormData({...formData, origin: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-900 focus:outline-none text-gray-900" placeholder={shipmentType === "export" ? "Hồ Chí Minh" : "Shanghai, China"} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{shipmentType === "export" ? "Đích đến *" : "Nhập về *"}</label>
                  <input type="text" required value={formData.destination} onChange={(e) => setFormData({...formData, destination: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-900 focus:outline-none text-gray-900" placeholder={shipmentType === "export" ? "Los Angeles, USA" : "Hồ Chí Minh"} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Loại hàng hóa *</label>
                <select required value={formData.productType} onChange={(e) => setFormData({...formData, productType: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-900 focus:outline-none text-gray-900">
                  <option value="">Chọn loại hàng</option>
                  <option value="furniture">Nội thất / Gỗ</option>
                  <option value="apparel">Thời trang / Dệt may</option>
                  <option value="electronics">Điện tử / Linh kiện</option>
                  <option value="food">Thực phẩm / Nông sản</option>
                  <option value="handicraft">Thủ công mỹ nghệ</option>
                  <option value="machinery">Máy móc / Thiết bị</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Khối lượng / Số lượng *</label>
                <input type="text" required value={formData.volume} onChange={(e) => setFormData({...formData, volume: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-900 focus:outline-none text-gray-900" placeholder="15 CBM hoặc 1x40ft container" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Ghi chú (tùy chọn)</label>
                <textarea value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})} rows={4} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-900 focus:outline-none text-gray-900" placeholder="Yêu cầu đặc biệt: fumigation, bảo hiểm, ngày dự kiến..." />
              </div>
              <button type="submit" className="w-full bg-amber-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-800 shadow-lg">Gửi Yêu Cầu Báo Giá</button>
              <p className="text-center text-sm text-gray-500">🔒 Thông tin của bạn được bảo mật.</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Về ShipBridge</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              ShipBridge ra đời với sứ mệnh giúp các doanh nghiệp SME Việt Nam 
              xuất nhập khẩu dễ dàng và tiết kiệm hơn.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Chúng tôi kết nối bạn với mạng lưới các đơn vị giao nhận uy tín, 
              giúp so sánh giá cả và dịch vụ một cách minh bạch.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Với ShipBridge, xuất nhập khẩu không còn phức tạp và tốn kém nữa.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-xl text-gray-600 mb-12">Có câu hỏi? Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-50 rounded-xl p-6">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-lg mb-2 text-amber-900">Email</h3>
              <a href="mailto:admin@shipbridge.vn" className="text-amber-900 hover:underline">admin@shipbridge.vn</a>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold text-lg mb-2 text-amber-900">Hotline</h3>
              <a href="tel:+84969856557" className="text-amber-900 hover:underline">(+84) 969 856 557</a>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-lg mb-2 text-amber-900">Zalo</h3>
              <a href="https://zalo.me/0969856557" className="text-amber-900 hover:underline">(+84) 969 856 557</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 ShipBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
