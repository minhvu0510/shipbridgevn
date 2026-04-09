"use client";

import Image from "next/image";
import { useState } from "react";

export default function ForwardersPage() {
  const [lang, setLang] = useState("vi");
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
        message: lang === 'vi' ? 'Lỗi kết nối. Vui lòng thử lại hoặc liên hệ admin@shipbridge.vn' : 'Connection error. Please try again or contact admin@shipbridge.vn'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const t = {
    vi: {
      nav: { home: "Trang Chủ" },
      badge: "TÌM FORWARDERS CÙNG HỢP TÁC",
      hero: {
        title: "Bạn Muốn Thêm Khách Hàng Từ SME",
        titleHighlight: "Mà Không Cần Chạy Quảng Cáo?",
        subtitle1: "ShipBridge.vn đang xây dựng một nền tảng kết nối forwarders với SME xuất nhập khẩu.",
        subtitle2: "Chúng tôi đang tìm 10-15 forwarders đầu tiên để cùng thử nghiệm nền tảng trong 3 tháng.",
        statusTitle: "TÌNH TRẠNG HIỆN TẠI:",
        smeCount: "SME đã đăng ký",
        forwarderCount: "Forwarders (đang tuyển)",
        updateText: "Update: Tuần 1, Tháng 4/2026",
        ctaRegister: "Đăng Ký",
        ctaHome: "Quay Về Trang Chủ"
      },
      about: {
        title: "Về ShipBridge",
        intro: "ShipBridge.vn được thành lập với mục tiêu giải quyết vấn đề đang tồn tại:",
        smePain: "Khó tìm forwarder uy tín, sợ bị chặt chém, các lựa chọn khó so sánh.",
        forwarderPain: "Khó tìm khách mới, quảng cáo đắt mà hiệu quả thấp, cạnh tranh bằng giá liên tục.",
        solution: "Chúng tôi là người kết nối hai bên."
      },
      valueProp: {
        title: "Bạn Được Gì Khi Tham Gia?",
        verified: {
          title: "Khách Hàng Tiềm Năng Đã Xác Minh",
          desc: "SME điền form với: tuyến đường, loại hàng, khối lượng, thời gian. Chúng tôi xác minh email + số điện thoại trước khi gửi cho bạn.",
          note: "Số điện thoại ngẫu nhiên từ dữ liệu của người môi giới"
        },
        noCost: {
          title: "Không Mất Chi Phí Ban Đầu",
          desc: "3 tháng đầu: MIỄN PHÍ hoàn toàn. Thử nghiệm nền tảng, xem chất lượng khách hàng tiềm năng, tỷ lệ thành công là bao nhiêu.",
          note: "Tính chi phí hoa hồng công bằng cho cả hai bên (dự kiến 3-5%)"
        },
        partnership: {
          title: "Xây Dựng Cùng Nhau",
          desc: "Bạn không phải \"khách hàng\" - bạn là đối tác. Góp ý về sản phẩm, giá cả, quy trình - chúng tôi lắng nghe và điều chỉnh.",
          note: "Có tiếng nói trong định hướng sản phẩm"
        }
      },
      howItWorks: {
        title: "Quy Trình Hoạt Động",
        steps: [
          { title: "SME Điền Form", desc: "Họ điền: Tuyến đường, loại hàng, khối lượng, thông tin liên hệ" },
          { title: "Chúng Tôi Xác Minh", desc: "Kiểm tra email + số điện thoại có thật không" },
          { title: "Gửi Cho Bạn", desc: "Email/SMS thông báo khách hàng tiềm năng mới (hiện tại: thủ công, sau này: bảng điều khiển)" },
          { title: "Bạn Báo Giá", desc: "Gửi báo giá cho SME (email hoặc qua nền tảng - đang xây dựng)" },
          { title: "SME Chọn", desc: "Họ xem các báo giá, chọn forwarder phù hợp" }
        ]
      },
      roadmap: {
        title: "Lộ Trình 3 Tháng Tới",
        months: [
          { title: "THÁNG 1 (Tháng 4/2026)", status: "Đang làm", items: ["✅ Ra mắt trang web", "✅ Tuyển 10-12 forwarders đầu tiên", "✅ Thu thập 50-100 đăng ký từ SME (quảng cáo + tự nhiên)", "⏳ Gửi khách hàng tiềm năng đầu tiên cho forwarders (quy trình thủ công)", "⏳ Thu thập phản hồi, cải tiến"] },
          { title: "THÁNG 2 (Tháng 5/2026)", status: "Kế hoạch", items: ["• Xây dựng bảng điều khiển đơn giản cho forwarders", "• Cải thiện quy trình xác minh khách hàng tiềm năng", "• Mục tiêu: 5-10 lô hàng thành công", "• Tinh chỉnh mô hình hoa hồng dựa trên dữ liệu"] },
          { title: "THÁNG 3 (Tháng 6/2026)", status: "Dự kiến", items: ["• Tự động ghép nối khách hàng tiềm năng với forwarders", "• Bảng phân tích cơ bản", "• Mục tiêu: 20-30 giao dịch/tháng", "• Quyết định: mở rộng hoặc điều chỉnh dựa trên dữ liệu"] }
        ]
      },
      register: {
        title: "Đăng Ký Tham Gia",
        subtitle: "Điền thông tin bên dưới. Chúng tôi sẽ liên hệ trong 1-2 ngày để hướng dẫn.",
        fields: {
          companyName: "Tên công ty",
          contactName: "Tên người liên hệ",
          email: "Email",
          phone: "Số điện thoại",
          mainRoutes: "Tuyến đường chính (VD: HCM → US, Hà Nội → EU)",
          yearsExp: "Số năm kinh nghiệm (tùy chọn)",
          license: "Số giấy phép kinh doanh (tùy chọn)",
          website: "Website (tùy chọn)",
          notes: "Ghi chú thêm (tùy chọn)"
        },
        submit: "Gửi Đăng Ký",
        submitting: "Đang gửi..."
      },
      faq: {
        title: "Câu Hỏi Thường Gặp",
        items: [
          { q: "Tôi phải trả phí gì?", a: "Giai đoạn đầu (3 tháng): HOÀN TOÀN MIỄN PHÍ để thử nghiệm nền tảng. Sau đó nếu bạn thấy OK, chúng ta tính chi phí hoa hồng công bằng cho cả hai bên (dự kiến 3-5%)." },
          { q: "Nền tảng đã có bao nhiêu SME?", a: "Chúng tôi mới bắt đầu. Hiện có ~10 SME đã đăng ký nhận thông tin. Mục tiêu: 100 SME trong 3 tháng tới. Bạn sẽ thấy con số thật cập nhật hàng tuần." },
          { q: "Tôi phải cam kết bao lâu?", a: "KHÔNG có cam kết. Thử nghiệm cùng nhau. Không OK thì dừng bất kỳ lúc nào. Không phí, không ràng buộc." },
          { q: "Có bao nhiêu forwarders cạnh tranh?", a: "Giai đoạn đầu: 2-3 forwarders mỗi tuyến để thử nghiệm. Mục tiêu là tạo cạnh tranh lành mạnh, không gửi 1 khách hàng tiềm năng cho 10 người." },
          { q: "Tại sao tôi nên tin vào startup mới?", a: "Bạn không nên 'tin' - bạn nên THỬ NGHIỆM. Không mất chi phí, không rủi ro. Trường hợp xấu nhất: lãng phí 30 phút hướng dẫn. Trường hợp tốt nhất: thêm 5-10 khách hàng tiềm năng mỗi tháng không tốn tiền quảng cáo." },
          { q: "Forwarder có được lấy data khách hàng để liên hệ trực tiếp không?", a: "Chúng tôi sẽ lập group chat 3 bên, nhằm để hiểu rõ quy trình và tinh chỉnh, tối ưu hệ thống, và cũng để hạn chế tình trạng kết nối riêng bypass nền tảng. Tất cả vì sự hợp tác công bằng, minh bạch và bền vững." }
        ]
      },
      footer: { contact: "Liên Hệ", email: "Email", zalo: "Zalo", website: "Website" }
    },
    en: {
      nav: { home: "Home" },
      badge: "LOOKING FOR FORWARDER PARTNERS",
      hero: {
        title: "Want More SME Customers",
        titleHighlight: "Without Running Ads?",
        subtitle1: "ShipBridge.vn is building a platform connecting forwarders with import/export SMEs.",
        subtitle2: "We're looking for 10-15 first forwarders to test the platform together for 3 months.",
        statusTitle: "CURRENT STATUS:",
        smeCount: "SMEs registered",
        forwarderCount: "Forwarders (recruiting)",
        updateText: "Update: Week 1, April 2026",
        ctaRegister: "Register",
        ctaHome: "Back to Home"
      },
      about: {
        title: "About ShipBridge",
        intro: "ShipBridge.vn was founded to solve existing problems:",
        smePain: "Hard to find reliable forwarders, fear of overcharging, difficult to compare options.",
        forwarderPain: "Hard to find new customers, expensive advertising with low ROI, constant price competition.",
        solution: "We connect both sides."
      },
      valueProp: {
        title: "What Do You Get?",
        verified: {
          title: "Verified Leads",
          desc: "SMEs fill out forms with: route, cargo type, volume, timeline. We verify email + phone before sending to you.",
          note: "Random phone numbers from data brokers"
        },
        noCost: {
          title: "No Upfront Cost",
          desc: "First 3 months: COMPLETELY FREE. Test the platform, see lead quality and success rate.",
          note: "Fair commission for both sides (estimated 3-5%)"
        },
        partnership: {
          title: "Build Together",
          desc: "You're not a \"customer\" - you're a partner. Give feedback on product, pricing, process - we listen and adapt.",
          note: "Voice in product direction"
        }
      },
      howItWorks: {
        title: "How It Works",
        steps: [
          { title: "SME Fills Form", desc: "They fill: Route, cargo type, volume, contact info" },
          { title: "We Verify", desc: "Check if email + phone are real" },
          { title: "Send to You", desc: "Email/SMS notification of new lead (currently: manual, later: dashboard)" },
          { title: "You Quote", desc: "Send quote to SME (email or via platform - under development)" },
          { title: "SME Chooses", desc: "They review quotes, choose suitable forwarder" }
        ]
      },
      roadmap: {
        title: "3-Month Roadmap",
        months: [
          { title: "MONTH 1 (April 2026)", status: "In Progress", items: ["✅ Launch website", "✅ Recruit 10-12 first forwarders", "✅ Collect 50-100 SME signups (ads + organic)", "⏳ Send first leads to forwarders (manual process)", "⏳ Collect feedback, iterate"] },
          { title: "MONTH 2 (May 2026)", status: "Planned", items: ["• Build simple dashboard for forwarders", "• Improve lead verification process", "• Target: 5-10 successful shipments", "• Refine commission model based on data"] },
          { title: "MONTH 3 (June 2026)", status: "Projected", items: ["• Auto-match leads to forwarders", "• Basic analytics dashboard", "• Target: 20-30 deals/month", "• Decide: scale or pivot based on data"] }
        ]
      },
      register: {
        title: "Register to Join",
        subtitle: "Fill in the information below. We'll contact you within 1-2 days for onboarding.",
        fields: {
          companyName: "Company Name",
          contactName: "Contact Name",
          email: "Email",
          phone: "Phone Number",
          mainRoutes: "Main Routes (e.g., HCM → US, Hanoi → EU)",
          yearsExp: "Years of Experience (optional)",
          license: "Business License Number (optional)",
          website: "Website (optional)",
          notes: "Additional Notes (optional)"
        },
        submit: "Submit Registration",
        submitting: "Submitting..."
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "What fees do I pay?", a: "First phase (3 months): COMPLETELY FREE to test the platform. After that, if you're satisfied, we'll calculate fair commission for both sides (estimated 3-5%)." },
          { q: "How many SMEs are on the platform?", a: "We're just starting. Currently ~10 SMEs registered. Goal: 100 SMEs in the next 3 months. You'll see real numbers updated weekly." },
          { q: "How long is the commitment?", a: "NO commitment. Test together. Not satisfied? Stop anytime. No fees, no obligations." },
          { q: "How many competing forwarders?", a: "Early phase: 2-3 forwarders per route for testing. Goal is healthy competition, not sending 1 lead to 10 people." },
          { q: "Why should I trust a new startup?", a: "You shouldn't 'trust' - you should TEST. No cost, no risk. Worst case: waste 30 minutes onboarding. Best case: 5-10 leads/month without ad costs." },
          { q: "Can forwarders get customer data to contact directly?", a: "We'll create 3-way group chats to understand the process, refine and optimize the system, and also limit direct connection bypassing the platform. All for fair, transparent, and sustainable cooperation." }
        ]
      },
      footer: { contact: "Contact", email: "Email", zalo: "Zalo", website: "Website" }
    }
  };

  const content = t[lang];

  return (
    <div className="min-h-screen bg-white">
      
      {/* NAVIGATION */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="ShipBridge"
                width={300}
                height={75}
                className="h-12 w-auto"
              />
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="/" className="text-gray-700 hover:text-[#9B7653] font-medium">
              {content.nav.home}
            </a>
            
            <button 
              onClick={() => setLang(lang === "vi" ? "en" : "vi")} 
              className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#9B7653] text-[#9B7653] hover:bg-[#9B7653] hover:text-white transition-colors"
            >
              <span className="text-xl">🌐</span>
              <span className="font-bold">{lang === "vi" ? "EN" : "VI"}</span>
            </button>
          </div>
        </nav>
      </header>
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#9B7653] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              {content.badge}
            </div>
            <h1 className="text-5xl font-bold mb-6">
              {content.hero.title}<br />
              <span className="text-[#9B7653]">{content.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              {content.hero.subtitle1}<br />
              <strong className="text-white">{content.hero.subtitle2}</strong>
            </p>
            <div className="bg-gray-800 border-2 border-[#9B7653] rounded-xl p-6 mb-8">
              <div className="text-sm text-gray-400 mb-2">{content.hero.statusTitle}</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#9B7653]">~10</div>
                  <div className="text-sm text-gray-400">{content.hero.smeCount}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#9B7653]">0</div>
                  <div className="text-sm text-gray-400">{content.hero.forwarderCount}</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-4">{content.hero.updateText}</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#register" className="bg-[#9B7653] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#8B6643] shadow-lg text-center">
                {content.hero.ctaRegister}
              </a>
              <a href="/" className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-600 text-center">
                {content.hero.ctaHome}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-[#9B7653]">{content.about.title}</h2>
          
          <div className="text-lg text-gray-700 space-y-4">
            <p>{content.about.intro}</p>
            <p><strong>SME:</strong> {content.about.smePain}</p>
            <p><strong>Forwarders:</strong> {content.about.forwarderPain}</p>
            <p className="font-semibold text-xl mt-6">{content.about.solution}</p>
          </div>
        </div>
      </section>

      {/* VALUE PROP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#9B7653]">{content.valueProp.title}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#9B7653]">{content.valueProp.verified.title}</h3>
              <p className="text-gray-700 mb-4">{content.valueProp.verified.desc}</p>
              <div className="text-sm text-gray-600">
                <strong>{lang === 'vi' ? 'Không phải:' : 'Not:'}</strong> {content.valueProp.verified.note}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#9B7653]">{content.valueProp.noCost.title}</h3>
              <p className="text-gray-700 mb-4">{content.valueProp.noCost.desc}</p>
              <div className="text-sm text-gray-600">
                <strong>{lang === 'vi' ? 'Sau đó:' : 'After that:'}</strong> {content.valueProp.noCost.note}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#9B7653]">{content.valueProp.partnership.title}</h3>
              <p className="text-gray-700 mb-4">{content.valueProp.partnership.desc}</p>
              <div className="text-sm text-gray-600">
                <strong>{lang === 'vi' ? 'Người tham gia đầu tiên:' : 'Early adopters:'}</strong> {content.valueProp.partnership.note}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#9B7653]">{content.howItWorks.title}</h2>
          <div className="space-y-8">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-[#9B7653] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">{i + 1}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#9B7653]">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#9B7653]">{content.roadmap.title}</h2>
          
          <div className="space-y-6">
            {content.roadmap.months.map((month, i) => (
              <div key={i} className={`bg-white rounded-xl p-6 border-l-4 ${i === 0 ? 'border-green-500' : i === 1 ? 'border-blue-500' : 'border-gray-400'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-xl font-bold ${i === 0 ? 'text-green-600' : i === 1 ? 'text-blue-600' : 'text-gray-600'}`}>{month.title}</h3>
                  <span className={`${i === 0 ? 'bg-green-100 text-green-800' : i === 1 ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'} px-3 py-1 rounded-full text-sm font-semibold`}>{month.status}</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {month.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section id="register" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#9B7653]">{content.register.title}</h2>
          <p className="text-center text-xl text-gray-600 mb-12">{content.register.subtitle}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{content.register.fields.companyName} *</label>
              <input type="text" required value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B7653] focus:border-transparent"/>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{content.register.fields.contactName} *</label>
                <input type="text" required value={formData.contactName} onChange={(e) => setFormData({...formData, contactName: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B7653] focus:border-transparent"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{content.register.fields.email} *</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B7653] focus:border-transparent"/>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{content.register.fields.phone} *</label>
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B7653] focus:border-transparent"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{content.register.fields.mainRoutes} *</label>
                <input type="text" required value={formData.mainRoutes} onChange={(e) => setFormData({...formData, mainRoutes: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B7653] focus:border-transparent"/>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{content.register.fields.yearsExp}</label>
                <input type="number" value={formData.yearsExperience} onChange={(e) => setFormData({...formData, yearsExperience: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B7653] focus:border-transparent"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{content.register.fields.license}</label>
                <input type="text" value={formData.licenseNumber} onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B7653] focus:border-transparent"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{content.register.fields.website}</label>
                <input type="url" value={formData.website} onChange={(e) => setFormData({...formData, website: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B7653] focus:border-transparent"/>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{content.register.fields.notes}</label>
              <textarea rows="4" value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B7653] focus:border-transparent"></textarea>
            </div>

            {submitStatus && (
              <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {submitStatus.message}
              </div>
            )}

            <button type="submit" disabled={submitting} className="w-full bg-[#9B7653] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#8B6643] disabled:opacity-50 disabled:cursor-not-allowed">
              {submitting ? content.register.submitting : content.register.submit}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#9B7653]">{content.faq.title}</h2>

          <div className="space-y-4">
            {content.faq.items.map((faq, i) => (
              <div key={i} className="border-2 border-gray-200 rounded-lg bg-white">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-6 text-left font-semibold text-lg flex justify-between items-center hover:bg-gray-50 text-[#9B7653]">
                  <span>{faq.q}</span>
                  <span className="text-2xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <div className="px-6 pb-6 text-gray-700">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">{content.footer.contact}</h3>
            <div className="space-y-2 text-gray-400">
              <p><strong>{content.footer.email}:</strong> admin@shipbridge.vn</p>
              <p><strong>{content.footer.zalo}:</strong> 0969 856 557</p>
              <p><strong>{content.footer.website}:</strong> shipbridge.vn</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
