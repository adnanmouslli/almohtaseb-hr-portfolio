import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowIcon, CheckIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "عن النظام",
  description:
    "تعرّف على قصة برنامج المحتسب، الجمهور المستهدف، والقيمة التنافسية التي يقدّمها النظام للشركات.",
};

const industries = [
  "المصانع والشركات الصناعية",
  "سلاسل المطاعم والمقاهي",
  "شركات الخدمات",
  "شركات التجزئة",
  "الشركات اللوجستية",
];

const advantages = [
  {
    title: "تكامل شامل",
    desc: "4 أنظمة أساسية و3 أنظمة مساندة تعمل بانسجام كامل.",
  },
  {
    title: "تركيز على الورديات",
    desc: "نظام ورديات متقدم يشكّل العمود الفقري للعملية.",
  },
  {
    title: "مرونة عالية",
    desc: "نماذج ومعايير قابلة للتخصيص الكامل بدون تعديل الكود.",
  },
  {
    title: "سهولة الاستخدام",
    desc: "واجهة بسيطة وسهلة التعلم لفرق HR والمديرين والموظفين.",
  },
  {
    title: "دقة وتقليل أخطاء",
    desc: "أتمتة تزيل احتمالات الخطأ اليدوي في الرواتب والحضور.",
  },
  {
    title: "شفافية وتدقيق",
    desc: "سجلات كاملة لكل معاملة وموافقة مع حذف ناعم للسجلات.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-white">
        <div className="absolute inset-0 bg-grid-faint opacity-60" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              عن النظام
            </span>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-ink-900 sm:text-5xl">
              نظام HR <span className="text-brand-gradient">وُلد</span> من
              احتياج حقيقي
            </h1>
            <p className="mt-5 text-base leading-8 text-ink-500 sm:text-lg">
              برنامج المحتسب مبني على سنوات من الخبرة في حلول الموارد البشرية،
              ومصمّم خصيصاً للشركات ذات الفروع المتعددة التي تعتمد على نظام
              الورديات، وتحتاج إلى تتبع دقيق للأداء وإدارة مرنة للهيكل
              التنظيمي.
            </p>
          </div>

          <div className="relative mx-auto">
            <div className="relative rounded-[2rem] bg-white p-8 ring-1 ring-black/5 shadow-2xl shadow-brand-900/10">
              <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72">
                <Image
                  src="/logo.png"
                  alt="شعار برنامج المحتسب"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              title: "رسالتنا",
              body: "تمكين أقسام الموارد البشرية من إدارة موظفيها بدقة وشفافية، بنظام يعمل بانسجام بدل أدوات متفرقة.",
            },
            {
              title: "رؤيتنا",
              body: "أن نكون المنصة الأولى للشركات العربية التي تحتاج إلى إدارة موارد بشرية متكاملة ومرنة وآمنة.",
            },
            {
              title: "قيمنا",
              body: "الدقة، الشفافية، والمرونة — نبني أنظمة تخدم الإنسان قبل أن تخدم الرقم.",
            },
          ].map((m) => (
            <div key={m.title} className="card p-8">
              <h3 className="font-display text-xl font-extrabold text-ink-900">
                {m.title}
              </h3>
              <p className="mt-3 text-sm leading-8 text-ink-500">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who is it for */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                الجمهور المستهدف
              </span>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
                مصمّم للشركات التي لا تتحمّل الأخطاء
              </h2>
              <p className="mt-4 text-base leading-8 text-ink-500">
                النظام يعمل بأفضل صورة في بيئات متوسطة إلى كبيرة الحجم، بفروع
                متعددة وأقسام متخصصة، وخاصةً حين يعتمد الدوام على الورديات.
              </p>

              <ul className="mt-6 space-y-2.5">
                {[
                  "شركات متوسطة إلى كبيرة",
                  "شركات ذات فروع متعددة",
                  "شركات تعتمد على نظام الورديات",
                  "شركات تحتاج تتبع دقيق للأداء",
                  "هياكل تنظيمية معقدة",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-ink-700"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-700">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-ink-900">
                الصناعات المناسبة
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {industries.map((ind) => (
                  <div
                    key={ind}
                    className="rounded-xl border border-ink-100 bg-surface-alt/40 px-4 py-3 text-sm font-medium text-ink-700"
                  >
                    {ind}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive edge */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            القيمة التنافسية
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            ما الذي يميّز برنامج المحتسب
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a) => (
            <div key={a.title} className="card p-6">
              <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-l from-brand-500 to-brand-800" />
              <h3 className="font-display text-base font-bold text-ink-900">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink-500">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="rounded-3xl border border-ink-100 bg-white p-10 text-center shadow-[0_30px_80px_-50px_rgba(139,26,31,0.25)] lg:p-14">
          <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            هل شركتك تناسب نظامنا؟
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-8 text-ink-500">
            تواصل معنا لمناقشة احتياج فريقك والحصول على عرض تجريبي مخصص.
          </p>
          <div className="mt-7 flex justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-700/25 transition hover:bg-brand-800"
            >
              تواصل معنا
              <ArrowIcon className="h-4 w-4 rotate-180" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink-800 transition hover:border-brand-300 hover:text-brand-700"
            >
              استكشف المميزات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
