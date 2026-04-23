import Image from "next/image";
import Link from "next/link";

const footerNav = [
  {
    title: "المنتج",
    items: [
      { href: "/features", label: "المميزات" },
      { href: "/features#shifts", label: "نظام الورديات" },
      { href: "/features#kpi", label: "نظام التقييمات" },
      { href: "/features#recruitment", label: "نظام التوظيف" },
    ],
  },
  {
    title: "الشركة",
    items: [
      { href: "/about", label: "عن النظام" },
      { href: "/contact", label: "تواصل معنا" },
      { href: "/contact#demo", label: "طلب عرض تجريبي" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-100 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl ring-1 ring-black/5 bg-white">
                <Image
                  src="/logo.png"
                  alt="شعار برنامج المحتسب"
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-extrabold text-ink-900">
                  برنامج المحتسب
                </span>
                <span className="text-xs text-ink-500">
                  إدارة شؤون الموظفين
                </span>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-ink-500">
              نظام HR شامل يجمع بين إدارة الورديات، تقييم الأداء، التوظيف،
              وإدارة الفروع والأقسام في منصة واحدة مصمّمة للشركات التي تبحث عن
              الدقة والكفاءة.
            </p>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold text-ink-900 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-500 hover:text-brand-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-ink-100 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} شركة المحتسب. جميع الحقوق محفوظة.
          </p>
         
        </div>
      </div>
    </footer>
  );
}
