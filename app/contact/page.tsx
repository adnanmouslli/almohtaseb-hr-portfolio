import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع فريق برنامج المحتسب لطلب عرض تجريبي أو للحصول على استشارة حول احتياجات نظام HR في شركتك.",
};

const contactChannels = [
  {
    title: "الموقع الإلكتروني",
    value: "almohtaseb-hr.com",
    href: "http://almohtaseb-hr.com/",
  },
  {
    title: "البريد الإلكتروني",
    value: "info@almohtaseb-hr.com",
    href: "mailto:info@almohtaseb-hr.com",
  },
  {
    title: "ساعات العمل",
    value: "الأحد – الخميس · 9ص – 6م",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-white">
        <div className="absolute inset-0 bg-grid-faint opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-5 py-16 text-center lg:px-8 lg:py-20">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            تواصل معنا
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-ink-900 sm:text-5xl">
            تحدّث مع <span className="text-brand-gradient">فريقنا</span> اليوم
          </h1>
          <p className="mt-5 text-base leading-8 text-ink-500 sm:text-lg">
            سواء أردت عرضاً تجريبياً أو كان لديك سؤال تقني — نحن هنا للإجابة
            ومساعدتك في اختيار الأنسب لشركتك.
          </p>
        </div>
      </section>

      {/* Form & channels */}
      <section
        id="demo"
        className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
              اطلب عرضاً تجريبياً مجانياً
            </h2>
            <p className="mt-2 text-sm leading-7 text-ink-500">
              املأ النموذج وسنتواصل معك خلال 24 ساعة لترتيب عرض مناسب لفريقك.
            </p>

            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl bg-brand-gradient p-8 text-white shadow-2xl shadow-brand-900/30">
                <h3 className="font-display text-xl font-extrabold">
                  تفضّل التواصل المباشر؟
                </h3>
                <p className="mt-2 text-sm leading-7 text-brand-100">
                  تواصل معنا عبر القنوات التالية، نرد عادةً في أوقات العمل
                  الرسمية.
                </p>

                <ul className="mt-6 space-y-5">
                  {contactChannels.map((c) => (
                    <li key={c.title}>
                      <p className="text-[11px] uppercase tracking-widest text-brand-200">
                        {c.title}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="mt-1 block font-display text-base font-bold hover:underline"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-display text-base font-bold">
                          {c.value}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-ink-100 bg-white p-8">
                <h3 className="font-display text-lg font-bold text-ink-900">
                  ماذا ستحصل في العرض التجريبي؟
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm leading-7 text-ink-600">
                  <li>· جولة مباشرة في الأنظمة الأربعة الأساسية</li>
                  <li>· مثال على تكامل البصمة مع الرواتب</li>
                  <li>· تخصيص نموذج توظيف أو معيار تقييم حسب شركتك</li>
                  <li>· جلسة أسئلة مفتوحة مع فريق المنتج</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
