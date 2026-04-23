import Image from "next/image";
import Link from "next/link";
import { systems } from "./lib/systems";
import {
  ArrowIcon,
  CheckIcon,
  FingerprintIcon,
  LightningIcon,
  ShieldIcon,
  SparklesIcon,
} from "./components/Icons";

const stats = [
  { label: "أنظمة متكاملة", value: "7" },
  { label: "أدوار صلاحيات", value: "6" },
  { label: "شركات مستهدفة", value: "متعددة الفروع" },
  { label: "تغطية الموارد البشرية", value: "100%" },
];

const pillars = [
  {
    icon: LightningIcon,
    title: "سريع ودقيق",
    desc: "حساب الرواتب ومتابعة الأداء بدون أخطاء يدوية.",
  },
  {
    icon: ShieldIcon,
    title: "آمن وموثوق",
    desc: "نظام صلاحيات متعدد الأدوار مع حذف ناعم وتدقيق كامل.",
  },
  {
    icon: SparklesIcon,
    title: "قابل للتخصيص",
    desc: "نماذج ومعايير وقوالب تعدّلها حسب سياسة شركتك.",
  },
  {
    icon: FingerprintIcon,
    title: "تكامل أجهزة البصمة",
    desc: "تسجيل حضور آلي يغذّي الرواتب والتقييمات مباشرة.",
  },
];

const faqs = [
  {
    q: "هل النظام مناسب للشركات ذات الفروع المتعددة؟",
    a: "نعم، النظام مصمم أساساً لدعم فروع متعددة مع تقسيم كل فرع إلى أقسام، ودعم رؤساء ونواب للفروع والأقسام.",
  },
  {
    q: "هل يتكامل مع أجهزة البصمة؟",
    a: "نعم، نظام الورديات يقرأ بيانات البصمة آلياً ويدمجها مع الحضور، التقييمات، والرواتب بدون تدخل يدوي.",
  },
  {
    q: "هل يمكن تخصيص نماذج التوظيف ومعايير التقييم؟",
    a: "بالكامل. تُنشأ نماذج التوظيف ومعايير الـ KPI ديناميكياً من لوحة الإدارة بدون تعديل الكود.",
  },
  {
    q: "كيف يحسب النظام الرواتب؟",
    a: "الرواتب تُحسب تلقائياً اعتماداً على بيانات الحضور الفعلي، المعاملات (سلف، مكافآت، عقوبات)، والبدلات والخصومات المعرّفة.",
  },
];

export default function HomePage() {
  const topFour = systems.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint opacity-70" aria-hidden />
        <div className="absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-brand-200/60 to-transparent blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -left-16 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-brand-100/60 to-transparent blur-3xl" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="flex flex-col justify-center animate-rise">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-700">
              <span className="h-2 w-2 rounded-full bg-brand-600" />
              نظام إدارة الموارد البشرية المتكامل
            </span>

            <h1 className="mt-6 font-display text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              إدارة موظفيك بذكاء،
              <br />
              من <span className="text-brand-gradient">البصمة</span> إلى{" "}
              <span className="text-brand-gradient">الراتب</span>.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-ink-500 sm:text-lg">
              برنامج المحتسب هو نظام HR متكامل يجمع الورديات، التقييمات،
              التوظيف، وإدارة الفروع والأقسام في منصة واحدة — مصمّم للشركات التي
              لا تتحمّل الأخطاء اليدوية.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-700/25 transition hover:bg-brand-800"
              >
                اطلب عرضاً تجريبياً مجاناً
                <ArrowIcon className="h-4 w-4 rotate-180" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink-800 transition hover:border-brand-300 hover:text-brand-700"
              >
                استكشف المميزات
              </Link>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-3 text-sm text-ink-600 sm:grid-cols-2">
              {[
                "ورديات متقدمة مع دمج البصمة",
                "تقييم أداء قابل للتخصيص",
                "نظام توظيف متكامل",
                "إدارة فروع وأقسام مرنة",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex items-center justify-center">
            <div
              className="absolute inset-0 -z-10 flex items-center justify-center"
              aria-hidden
            >
              <div className="h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-brand-200/50 via-white to-brand-50 blur-3xl" />
            </div>

            <div className="relative w-full max-w-md rounded-[2.5rem] bg-white p-10 ring-1 ring-black/5 shadow-[0_40px_90px_-40px_rgba(139,26,31,0.35)] sm:p-12">
              <span
                className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand-100/70 blur-2xl"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute -bottom-8 -left-6 h-28 w-28 rounded-full bg-brand-200/60 blur-2xl"
                aria-hidden
              />

              <div className="relative mx-auto h-80 w-80 sm:h-96 sm:w-96">
                <Image
                  src="/logo.png"
                  alt="شعار برنامج المحتسب"
                  fill
                  className="object-contain drop-shadow-[0_20px_30px_rgba(139,26,31,0.18)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-ink-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-ink-100 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center bg-white px-4 py-8 text-center"
            >
              <span className="font-display text-3xl font-extrabold text-brand-700 sm:text-4xl">
                {s.value}
              </span>
              <span className="mt-1 text-xs font-medium text-ink-500 sm:text-sm">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            لماذا المحتسب
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            مبني حول ما يهمّ فريقك فعلاً
          </h2>
          <p className="mt-4 text-base leading-8 text-ink-500">
            أربعة ركائز تجعل إدارة الموارد البشرية أبسط، أسرع، وأكثر موثوقية.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="card p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core systems */}
      <section className="relative bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                الأنظمة الأربعة الأساسية
              </span>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
                منصة واحدة، أربعة أنظمة تعمل بانسجام
              </h2>
              <p className="mt-4 text-base leading-8 text-ink-500">
                كل نظام يتكامل مع الآخر — بيانات البصمة تغذّي التقييم والراتب،
                والتوظيف يرتبط بالفروع والأقسام بلا خطوات يدوية.
              </p>
            </div>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              جميع الأنظمة والمميزات
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {topFour.map((s) => (
              <Link
                key={s.id}
                href={`/features#${s.id}`}
                className="card group relative overflow-hidden p-6"
              >
                {s.highlight && (
                  <span className="absolute start-6 top-6 rounded-full bg-brand-700 px-2.5 py-1 text-[10px] font-bold text-white">
                    الأهم
                  </span>
                )}
                <div className="mb-5 flex items-start justify-end">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-brand-900/20">
                    <s.icon className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-brand-700">
                  {s.tagline}
                </p>
                <p className="mt-3 text-sm leading-7 text-ink-500">
                  {s.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand-700 transition-transform group-hover:-translate-x-1">
                  اعرف المزيد
                  <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integration visual */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-14 text-white shadow-2xl shadow-brand-900/30 lg:px-16 lg:py-20">
          <div className="absolute inset-0 bg-grid-faint opacity-20" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-200">
                التكامل الكامل
              </span>
              <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                البيانات تتدفق بينهم تلقائياً
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-brand-100">
                البصمة تسجّل الحضور، الحضور يغذّي التقييم اليومي، التقييم
                والحضور يصنعان الراتب، والموافقات تسير عبر هيكل الفروع والأقسام
                — بدون تصدير أو استيراد يدوي.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { a: "أجهزة البصمة", b: "تسجيل الحضور" },
                { a: "الحضور", b: "تقييم يومي" },
                { a: "المعاملات", b: "حساب الراتب" },
                { a: "الفروع", b: "سير الموافقات" },
              ].map((item) => (
                <div
                  key={item.a}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="text-xs text-brand-200">من</p>
                  <p className="font-display text-base font-bold">{item.a}</p>
                  <div className="my-2 h-px w-full bg-white/20" />
                  <p className="text-xs text-brand-200">إلى</p>
                  <p className="font-display text-base font-bold">{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            الأسئلة الشائعة
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            إجابات سريعة على ما يخطر ببالك
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="card group p-5 open:shadow-[0_20px_40px_-20px_rgba(139,26,31,0.18)]"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-base font-bold text-ink-900">
                  {f.q}
                </span>
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-ink-500">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="flex flex-col items-center rounded-3xl border border-ink-100 bg-white px-8 py-14 text-center shadow-[0_30px_80px_-50px_rgba(139,26,31,0.25)]">
          <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            جاهز لإدارة فريقك بذكاء؟
          </h2>
          <p className="mt-3 max-w-xl text-base leading-8 text-ink-500">
            احجز عرضاً تجريبياً مجانياً وسنرشدك خطوة بخطوة لتفعيل النظام الأنسب
            لشركتك.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-700/25 transition hover:bg-brand-800"
            >
              اطلب عرضاً تجريبياً
              <ArrowIcon className="h-4 w-4 rotate-180" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink-800 transition hover:border-brand-300 hover:text-brand-700"
            >
              تعرّف على النظام
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
