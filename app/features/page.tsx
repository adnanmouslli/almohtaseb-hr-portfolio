import Link from "next/link";
import type { Metadata } from "next";
import { systems } from "../lib/systems";
import { ArrowIcon, CheckIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "المميزات",
  description:
    "تعرّف على جميع أنظمة ومميزات برنامج المحتسب: الورديات، التقييمات، التوظيف، الفروع والأقسام، المعاملات، الرواتب، والإشعارات.",
};

export default function FeaturesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-white">
        <div className="absolute inset-0 bg-grid-faint opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-5 py-16 text-center lg:px-8 lg:py-24">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            الأنظمة والمميزات
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-ink-900 sm:text-5xl">
            كل ما يحتاجه قسم الموارد البشرية
            <br />
            <span className="text-brand-gradient">في منصة واحدة</span>
          </h1>
          <p className="mt-5 text-base leading-8 text-ink-500 sm:text-lg">
            سبعة أنظمة متكاملة تبدأ من تسجيل البصمة وتنتهي بكشف الراتب — مبنية
            بحيث تتدفق البيانات بينهم تلقائياً دون تدخل يدوي.
          </p>
        </div>
      </section>

      {/* Jump nav */}
      <section className="sticky top-[70px] z-30 border-b border-ink-100 bg-surface/90 backdrop-blur">
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 lg:px-8">
          <ul className="flex min-w-max gap-2 py-3">
            {systems.map((s) => (
              <li key={s.id}>
                <Link
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-4 py-1.5 text-xs font-semibold text-ink-600 transition hover:border-brand-200 hover:text-brand-700"
                >
                  <s.icon className="h-3.5 w-3.5" />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Systems detailed */}
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="space-y-20 lg:space-y-28">
          {systems.map((s, idx) => {
            const flipped = idx % 2 === 1;
            return (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-40"
              >
                <div
                  className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${
                    flipped ? "" : ""
                  }`}
                >
                  {/* Visual */}
                  <div className={flipped ? "lg:order-2" : ""}>
                    <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-8 shadow-[0_25px_60px_-30px_rgba(139,26,31,0.2)]">
                      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-brand-100/50 blur-3xl" aria-hidden />
                      <div className="relative flex items-start justify-between">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-xl shadow-brand-900/20">
                          <s.icon className="h-8 w-8" />
                        </div>
                        {s.highlight && (
                          <span className="rounded-full bg-brand-700 px-3 py-1 text-[10px] font-bold text-white">
                            النظام الأهم
                          </span>
                        )}
                      </div>

                      <div className="relative mt-8 grid grid-cols-2 gap-3">
                        {s.value.map((v) => (
                          <div
                            key={v}
                            className="rounded-xl border border-ink-100 bg-surface-alt/40 p-4"
                          >
                            <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                              <CheckIcon className="h-3.5 w-3.5" />
                            </span>
                            <p className="text-xs leading-6 text-ink-700">{v}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={flipped ? "lg:order-1" : ""}>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                      النظام رقم {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
                      {s.title}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-brand-700">
                      {s.tagline}
                    </p>
                    <p className="mt-4 text-base leading-8 text-ink-500">
                      {s.description}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-sm leading-7 text-ink-700"
                        >
                          <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-700">
                            <CheckIcon className="h-3 w-3" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Tech capabilities */}
      {/* <section className="border-y border-ink-100 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              البنية التقنية
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              مبني على أساس تقني قوي
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Backend",
                desc: "Python Flask + SQLAlchemy يوفر بنية مرنة ومستقرة.",
              },
              {
                title: "قاعدة البيانات",
                desc: "SQL Server مع إدارة بيانات مؤسسية قوية.",
              },
              {
                title: "RESTful API",
                desc: "تصميم API منظم لسهولة التكامل مع أي واجهة.",
              },
              {
                title: "نظام الأدوار",
                desc: "6 أدوار: super_admin، رؤساء ونواب فروع وأقسام، موظف.",
              },
              {
                title: "الحذف الناعم",
                desc: "Soft delete يحفظ السجلات للتدقيق ويمنع فقدان البيانات.",
              },
              {
                title: "نماذج ديناميكية",
                desc: "نماذج توظيف وتقييم قابلة للتخصيص بدون تعديل الكود.",
              },
            ].map((t) => (
              <div key={t.title} className="card p-6">
                <h3 className="font-display text-base font-bold text-ink-900">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-ink-500">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-brand-gradient p-10 text-center text-white shadow-2xl shadow-brand-900/30 lg:p-16">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            شاهد الأنظمة تعمل على بيانات شركتك
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-brand-100">
            نجهّز لك عرضاً تجريبياً مخصصاً يعكس الهيكل الحقيقي لفروعك وأقسامك
            ومعايير تقييمك.
          </p>
          <div className="mt-7 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              اطلب عرضاً تجريبياً
              <ArrowIcon className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
