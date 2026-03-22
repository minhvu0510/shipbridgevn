import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

export const metadata = {
  title: 'ShipBridge - Nền tảng vận chuyển quốc tế',
  description: 'So sánh giá vận chuyển xuất nhập khẩu từ nhiều forwarders uy tín. Tiết kiệm 15-30% chi phí logistics.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
