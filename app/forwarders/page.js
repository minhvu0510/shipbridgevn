"use client";

import Image from "next/image";
import { useState } from "react";

export default function ForwardersPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    mainRoutes: '',
    yearsExperience: '',
    licenseNumber: '',
    website: '',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/forwarder-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          mainRoutes: '',
          yearsExperience: '',
          licenseNumber: '',
          website: '',
          notes: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.error });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Lỗi kết nối. Vui lòng thử lại hoặc liên hệ admin@shipbridge.vn' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "Tôi phải trả phí gì?",
      a: "Giai đoạn đầu (3 tháng): HOÀN TOÀN MIỄN PHÍ để thử nghiệm nền tảng. Sau đó nếu bạn thấy OK, chúng ta tính chi phí hoa hồng công bằng cho cả hai bên (dự kiến 3-5%)."
    },
    {
      q: "Nền tảng đã có bao nhiêu SME?",
      a: "Chúng tôi mới bắt đầu. Hiện có ~10 SME đã đăng ký nhận thông tin. Mục tiêu: 100 SME trong 3 tháng tới. Bạn sẽ thấy con số thật cập nhật hàng tuần."
    },
    {
      q: "Tôi phải cam kết bao lâu?",
      a: "KHÔNG có cam kết. Thử nghiệm cùng nhau. Không OK thì dừng bất kỳ lúc nào. Không phí, không ràng buộc."
    },
    {
      q: "Có bao nhiêu forwarders cạnh tranh?",
      a: "Giai đoạn đầu: 2-3 forwarders mỗi tuyến để thử nghiệm. Mục tiêu là tạo cạnh tranh lành mạnh, không gửi 1 khách hàng tiềm năng cho 10 người."
    },
    {
      q: "Tại sao tôi nên tin vào startup mới?",
      a: "Bạn không nên 'tin' - bạn nên THỬ NGHIỆM. Không mất chi phí, không rủi ro. Trường hợp xấu nhất: lãng phí 30 phút hướng dẫn. Trường hợp tốt nhất: thêm 5-10 khách hàng tiềm năng mỗi tháng không tốn tiền quảng cáo."
    },
    {
      q: "Forwarder có được lấy data khách hàng để liên hệ trực tiếp không?",
      a: "Chúng tôi sẽ lập group chat 3 bên, nhằm để hiểu rõ quy trình và tinh chỉnh, tối ưu hệ thống, và cũng để hạn chế tình trạng kết nối riêng bypass nền tảng. Tất cả vì sự hợp tác công bằng, minh bạch và bền vững."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-bold mb-6">
              🚀 MỚI RA MẮT - ĐANG TUYỂN FORWARDERS
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Bạn Muốn Thêm Khách Hàng Từ SME<br />
              <span className="text-[#9B7653]">Mà Không Cần Chạy Quảng Cáo?</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              ShipBridge.vn đang xây dựng một nền tảng kết nối forwarders với SME xuất nhập khẩu.<br />
              <strong className="text-white">Chúng tôi mới bắt đầu.</strong> Đang tìm 10-12 forwarders đầu tiên để thử nghiệm cùng.
            </p>
            <div className="bg-gray-800 border-2 border-[#9B7653] rounded-xl p-6 mb-8">
              <div className="text-sm text-gray-400 mb-2">TÌNH TRẠNG HIỆN TẠI:</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#9B7653]">~10</div>
                  <div className="text-sm text-gray-400">SME đã đăng ký</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#9B7653]">0</div>
                  <div className="text-sm text-gray-400">Forwarders (đang tuyển)</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-4">Update: Tuần 1, Tháng 4/2026</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#register" className="bg-[#9B7653] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#8B6643] shadow-lg text-center">
                Đăng Ký Ngay (2 Phút)
              </a>
              <a href="#reality-check" className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-600 text-center">
                Chúng Tôi Là Ai?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REALITY CHECK */}
      <section id="reality-check" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-[#9B7653]">Chúng Tôi Là Ai?</h2>
          
          <div className="space-y-6 text-lg text-gray-700">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <div className="font-bold mb-2">✅ CHÚNG TÔI LÀ:</div>
              <ul className="space-y-2 ml-6">
                <li>• Startup mới (ra mắt tháng 4/2026)</li>
                <li>• Đang thử nghiệm sản phẩm với ~10 SME đầu tiên</li>
                <li>• Chưa có doanh thu, chưa có vốn đầu tư</li>
                <li>• Đang xây dựng nền tảng đơn giản để kết nối hai bên</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <div className="font-bold mb-2">❌ CHÚNG TÔI KHÔNG PHẢI:</div>
              <ul className="space-y-2 ml-6">
                <li>• Nền tảng lớn với hàng ngàn người dùng</li>
                <li>• Có các nghiên cứu, đánh giá từ khách hàng, hoặc thành tích đã được chứng minh</li>
                <li>• Đảm bảo 50-100 khách hàng tiềm năng mỗi tháng ngay lập tức</li>
                <li>• Có đội ngũ công nghệ đông đảo hoặc AI phức tạp</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <div className="font-bold mb-2">💡 TẠI SAO BẠN NÊN QUAN TÂM?</div>
              <p className="mb-4">Vì chúng tôi đang giải quyết vấn đề THẬT:</p>
              <p className="mb-2"><strong>SME:</strong> Khó tìm forwarder uy tín, sợ bị chặt chém, không biết so sánh.</p>
              <p><strong>Forwarders:</strong> Khó tìm khách mới, quảng cáo đắt mà hiệu quả thấp, cạnh tranh bằng giá liên tục.</p>
              <p className="mt-4 font-semibold">Chúng tôi kết nối hai bên. Đơn giản vậy thôi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#9B7653]">Bạn Được Gì Khi Tham Gia?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-4 text-[#9B7653]">Khách Hàng Tiềm Năng Đã Xác Minh</h3>
              <p className="text-gray-700 mb-4">
                SME điền form với: tuyến đường, loại hàng, khối lượng, thời gian.<br />
                Chúng tôi xác minh email + số điện thoại trước khi gửi cho bạn.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Không phải:</strong> Số điện thoại ngẫu nhiên từ dữ liệu của người môi giới
              </div>
            </div>

            <div>
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4 text-[#9B7653]">Không Mất Chi Phí Ban Đầu</h3>
              <p className="text-gray-700 mb-4">
                3 tháng đầu: MIỄN PHÍ hoàn toàn.<br />
                Thử nghiệm nền tảng, xem chất lượng khách hàng tiềm năng, tỷ lệ thành công là bao nhiêu.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Sau đó:</strong> Tính chi phí hoa hồng công bằng cho cả hai bên (dự kiến 3-5%)
              </div>
            </div>

            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-[#9B7653]">Xây Dựng Cùng Nhau</h3>
              <p className="text-gray-700 mb-4">
                Bạn không phải "khách hàng" - bạn là đối tác.<br />
                Góp ý về sản phẩm, giá cả, quy trình - chúng tôi lắng nghe và điều chỉnh.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Người tham gia đầu tiên:</strong> Có tiếng nói trong định hướng sản phẩm
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#9B7653]">Quy Trình Hoạt Động</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-[#9B7653] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#9B7653]">SME Điền Form</h3>
                <p className="text-gray-700">Họ điền: Tuyến đường, loại hàng, khối lượng, thông tin liên hệ</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-[#9B7653] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#9B7653]">Chúng Tôi Xác Minh</h3>
                <p className="text-gray-700">Kiểm tra email + số điện thoại có thật không</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-[#9B7653] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#9B7653]">Gửi Cho Bạn</h3>
                <p className="text-gray-700">Email/SMS thông báo khách hàng tiềm năng mới (hiện tại: thủ công, sau này: bảng điều khiển)</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-[#9B7653] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#9B7653]">Bạn Báo Giá</h3>
                <p className="text-gray-700">Gửi báo giá cho SME (email hoặc qua nền tảng - đang xây dựng)</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-[#9B7653] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#9B7653]">SME Chọn</h3>
                <p className="text-gray-700">Họ xem các báo giá, chọn forwarder phù hợp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#9B7653]">Lộ Trình 3 Tháng Tới</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-green-600">THÁNG 1 (Tháng 4/2026)</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Đang làm</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Ra mắt trang web</li>
                <li>✅ Tuyển 10-12 forwarders đầu tiên</li>
                <li>✅ Thu thập 50-100 đăng ký từ SME (quảng cáo + tự nhiên)</li>
                <li>⏳ Gửi khách hàng tiềm năng đầu tiên cho forwarders (quy trình thủ công)</li>
                <li>⏳ Thu thập phản hồi, cải tiến</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-blue-600">THÁNG 2 (Tháng 5/2026)</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Kế hoạch</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Xây dựng bảng điều khiển đơn giản cho forwarders</li>
                <li>• Cải thiện quy trình xác minh khách hàng tiềm năng</li>
                <li>• Mục tiêu: 5-10 lô hàng thành công</li>
                <li>• Tinh chỉnh mô hình hoa hồng dựa trên dữ liệu</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-gray-400">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-600">THÁNG 3 (Tháng 6/2026)</h3>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">Dự kiến</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Tự động ghép nối khách hàng tiềm năng với forwarders</li>
                <li>• Bảng phân tích cơ bản</li>
                <li>• Mục tiêu: 20-30 giao dịch/tháng</li>
                <li>• Quyết định: mở rộng hoặc điều chỉnh dựa trên dữ liệu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section id="register" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#9B7653]">Đăng Ký Tham Gia</h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Điền thông tin bên dưới. Chúng tôi sẽ liên hệ trong 1-2 ngày để hướng dẫn.
          </p>

          {submitStatus && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 border-2 border-green-500 text-green-800' 
                : 'bg-red-50 border-2 border-red-500 text-red-800'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tên Công Ty *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900"
                  placeholder="VD: ABC Logistics"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tên Người Liên Hệ *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900"
                  placeholder="VD: Nguyễn Văn A"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900"
                  placeholder="contact@abclogistics.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Số Điện Thoại / Zalo *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900"
                  placeholder="0909123456"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tuyến Đường Chính *
              </label>
              <input
                type="text"
                required
                value={formData.mainRoutes}
                onChange={(e) => setFormData({...formData, mainRoutes: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900"
                placeholder="VD: VN-US, CN-VN, VN-EU"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Số Năm Kinh Nghiệm
                </label>
                <input
                  type="text"
                  value={formData.yearsExperience}
                  onChange={(e) => setFormData({...formData, yearsExperience: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900"
                  placeholder="VD: 5 năm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Số Giấy Phép
                </label>
                <input
                  type="text"
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900"
                  placeholder="VD: 0123456789"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Website (nếu có)
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({...formData, website: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900"
                placeholder="https://abclogistics.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Ghi Chú / Câu Hỏi
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#9B7653] focus:outline-none text-gray-900"
                placeholder="VD: Tôi muốn biết thêm về process onboarding..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#9B7653] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#8B6643] shadow-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {submitting ? 'Đang Gửi...' : 'Đăng Ký Miễn Phí'}
            </button>

            <p className="text-center text-sm text-gray-500">
              🔒 Thông tin của bạn được bảo mật. Chúng tôi chỉ dùng để liên hệ onboarding.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#9B7653]">Câu Hỏi Thường Gặp</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-2 border-gray-200 rounded-lg bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left font-semibold text-lg flex justify-between items-center hover:bg-gray-50 text-[#9B7653]"
                >
                  <span>{faq.q}</span>
                  <span className="text-2xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-700">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Còn Câu Hỏi?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Chat trực tiếp với founder để được giải đáp nhanh nhất.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
            <div>
              <div className="text-4xl mb-2">📧</div>
              <div className="font-semibold">Email</div>
              <a href="mailto:admin@shipbridge.vn" className="text-[#9B7653] hover:underline">admin@shipbridge.vn</a>
            </div>
            <div>
              <div className="text-4xl mb-2">📱</div>
              <div className="font-semibold">Zalo</div>
              <a href="https://zalo.me/0969856557" className="text-[#9B7653] hover:underline">0969 856 557</a>
            </div>
            <div>
              <div className="text-4xl mb-2">🌐</div>
              <div className="font-semibold">Website</div>
              <a href="/" className="text-[#9B7653] hover:underline">shipbridge.vn</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
