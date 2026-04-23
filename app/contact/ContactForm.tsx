"use client";

import { useState, type FormEvent } from "react";
import { ArrowIcon, CheckIcon } from "../components/Icons";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulated submit — replace with real endpoint when available.
    setTimeout(() => setStatus("success"), 800);
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-brand-200 bg-brand-50/60 p-10 text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-extrabold text-ink-900">
          تمّ استلام طلبك
        </h3>
        <p className="mt-2 text-sm leading-7 text-ink-600">
          شكراً لتواصلك. فريق برنامج المحتسب سيردّ عليك خلال 24 ساعة عمل.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 placeholder:text-ink-400";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-ink-700">
            الاسم الكامل
          </label>
          <input
            id="name"
            name="name"
            required
            className={field}
            placeholder="محمد أحمد"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-ink-700">
            اسم الشركة
          </label>
          <input
            id="company"
            name="company"
            required
            className={field}
            placeholder="شركة ..."
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-ink-700">
            البريد الإلكتروني
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
            placeholder="name@company.com"
            dir="ltr"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-ink-700">
            رقم الهاتف
          </label>
          <input
            id="phone"
            name="phone"
            className={field}
            placeholder="+20 ..."
            dir="ltr"
          />
        </div>

        <div>
          <label htmlFor="employees" className="mb-1.5 block text-xs font-semibold text-ink-700">
            عدد الموظفين
          </label>
          <select id="employees" name="employees" className={field} defaultValue="">
            <option value="" disabled>
              اختر نطاقاً
            </option>
            <option>أقل من 50</option>
            <option>50 – 200</option>
            <option>200 – 1000</option>
            <option>أكثر من 1000</option>
          </select>
        </div>

        <div>
          <label htmlFor="interest" className="mb-1.5 block text-xs font-semibold text-ink-700">
            النظام الأكثر أهمية لك
          </label>
          <select id="interest" name="interest" className={field} defaultValue="">
            <option value="" disabled>
              اختر النظام
            </option>
            <option>نظام الورديات</option>
            <option>نظام التقييمات</option>
            <option>نظام التوظيف</option>
            <option>إدارة الفروع والأقسام</option>
            <option>نظام الرواتب</option>
            <option>جميع الأنظمة</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-ink-700">
          رسالتك
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${field} resize-none`}
          placeholder="اخبرنا باختصار عن احتياج شركتك..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-700/25 transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "جاري الإرسال..." : "إرسال الطلب"}
        <ArrowIcon className="h-4 w-4 rotate-180" />
      </button>

      <p className="text-xs text-ink-400">
        بإرسالك هذا النموذج، توافق على أن يتواصل معك فريقنا حول استفسارك.
      </p>
    </form>
  );
}
