import { DESKTOP_LINK, PWA_LINK } from "../constants";

export default function HeroSection() {
  return (
    <header className="mx-auto px-4 max-w-4xl pt-40 pb-16 text-center space-y-6 md:space-y-10 mb-16">
      <h1 className="text-2xl md:text-5xl text-white leading-tight font-bold drop-shadow-[0_0_2px_rgba(255,255,255,0.4)]">
        ویجت‌های هوشمند و کاربردی برای وب و دسکتاپ شما با قدرت هوش مصنوعی
      </h1>
      <p className="text-sm md:text-lg text-neutral-700">
        ویجت‌های متنوع از ارز تا هواشناسی، تقویم و ساعت جهانی <br />
        با قابلیت شخصی‌سازی و دسترسی سریع و آسان
      </p>

      <div className="md:flex justify-center space-y-2 md:space-y-0 md:space-x-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={DESKTOP_LINK}
          className="block rounded-full px-6 py-2 leading-normal transition hover:opacity-75 font-light bg-black text-white select-none"
        >
          نصب نسخه دسکتاپ
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={PWA_LINK}
          className="block bg-white rounded-full px-6 py-2 leading-normal font-light select-none transition hover:opacity-75"
        >
          مشاهده نسخه وب
        </a>
      </div>
    </header>
  );
}
