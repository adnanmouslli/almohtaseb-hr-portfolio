import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://almohtaseb-hr.com"),
  title: {
    default: "برنامج المحتسب | نظام إدارة الموارد البشرية المتكامل",
    template: "%s | برنامج المحتسب",
  },
  description:
    "نظام إدارة موارد بشرية شامل من شركة المحتسب. يدير الورديات، التقييمات، التوظيف، والفروع والأقسام في منصة واحدة متكاملة مصمّمة للشركات التي تبحث عن الدقة والكفاءة.",
  keywords: [
    "نظام HR",
    "إدارة الموارد البشرية",
    "نظام الورديات",
    "تقييم الأداء",
    "نظام التوظيف",
    "برنامج المحتسب",
    "HR system",
    "shift management",
  ],
  authors: [{ name: "شركة المحتسب" }],
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://almohtaseb-hr.com",
    siteName: "برنامج المحتسب",
    title: "برنامج المحتسب | نظام إدارة الموارد البشرية المتكامل",
    description:
      "نظام HR شامل يدير الورديات، التقييمات، التوظيف، والفروع والأقسام في منصة واحدة متكاملة.",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "برنامج المحتسب" }],
  },
  icons: {
    icon: "/logo-app-bar.png",
    shortcut: "/logo-app-bar.png",
    apple: "/logo-app-bar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
