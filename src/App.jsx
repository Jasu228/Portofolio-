export default function App() {
  const skills = [
    "React",
    "HTML & CSS",
    "GitHub",
    "php",
    "Javascript",
    "Figma",
    "Flutter",
  ];

  const projects = [
    {
      title: "GluCare Apps",
      desc: "Aplikasi kesehatan mobile,bagi pengguna yang ingin mengecek apakah terkenak Diabetes atau tidak ",
      tag: "Flutter & Firebase",
      href: "",
    },
  ];

  const contactItems = [
    {
      label: "Email",
      value: "jakasuganda123@gmail.com",
      href: "mailto:jakasuganda123@gmail.com",
    },
    {
      label: "GitHub",
      value: "Jasu228",
      href: "https://github.com/Jasu228/Jaka-Suganda",
    },
    {
      label: "WhatsApp",
      value: "+62 812-3456-7890",
      href: "https://wa.me/6281234567890",
    },
    {
      label: "LinkedIn",
      value: "Jaka Suganda",
      href: "https://www.linkedin.com/in/Jaka Suganda",
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-slate-200 md:px-10">
          <span className="font-semibold tracking-[0.24em] text-cyan-400">JAKA SUGANDA</span>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">Tentang</a>
            <a href="#skills" className="transition hover:text-cyan-400">Keahlian</a>
            <a href="#projects" className="transition hover:text-cyan-400">Proyek</a>
            <a href="#contact" className="transition hover:text-cyan-400">Kontak</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="min-h-screen px-6 py-20 sm:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">Frontend Developer & UI/UX Creator</span>
              <div className="space-y-6">
                <h1 className="text-5xl font-black tracking-tight text-slate-50 sm:text-6xl">Halo, saya Jaka Suganda.</h1>
                <p className="max-w-xl text-lg leading-8 text-slate-300">Saya membuat pengalaman digital yang menarik untuk website dan aplikasi mobile dengan tampilan modern dan performa cepat.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Lihat Proyek</a>
                <a href="#contact" className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400">Hubungi Saya</a>
                <a href="/CV-Jaka-Suganda.pdf" download className="rounded-full border border-cyan-500 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20">Unduh CV</a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(56,189,248,0.75)] backdrop-blur-xl">
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="rounded-[2rem] bg-slate-900/80 p-8 text-center">
                  <img src="/profile.jpg" alt="Foto profil Jaka Suganda" className="mx-auto mb-6 h-40 w-40 rounded-full border-4 border-cyan-400 object-cover shadow-inner shadow-cyan-500/20" />
                  <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Profil</p>
                  <h2 className="mt-4 text-3xl font-bold text-slate-100">Jaka Suganda</h2>
                  <p className="mt-3 text-slate-400">Frontend Developer | UI/UX Designer | Mobile App </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-900/80 p-5 text-slate-200">
                    <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Lokasi</p>
                    <p className="mt-3 font-semibold">Medan, Indonesia</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-5 text-slate-200">
                    <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Pengalaman</p>
                    <p className="mt-3 font-semibold">-+1 tahun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 px-6 py-24 sm:px-10">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">Tentang Saya</p>
              <h2 className="mt-4 text-4xl font-bold text-slate-50">Saya membantu brand tampil menarik secara digital.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">Saya fokus mengembangkan website dan aplikasi mobile dengan desain yang modern, mudah digunakan, dan responsif. Hasil kerja saya selalu mengutamakan pengalaman pengguna dan performa cepat.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Layanan</p>
                <h3 className="mt-4 text-xl font-semibold text-slate-100">Frontend Development</h3>
                <p className="mt-3 text-slate-300">Membangun UI React yang responsif dan mudah dikembangkan.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Layanan</p>
                <h3 className="mt-4 text-xl font-semibold text-slate-100">UI/UX Design</h3>
                <p className="mt-3 text-slate-300">Desain antarmuka yang bersih, konsisten, dan mudah dinavigasi.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Layanan</p>
                <h3 className="mt-4 text-xl font-semibold text-slate-100">Mobile App</h3>
                <p className="mt-3 text-slate-300">Prototipe Flutter untuk aplikasi mobile dengan pengalaman intuitif.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-24 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">Keahlian</p>
                <h2 className="mt-4 text-4xl font-bold text-slate-50">Keahlian Utama</h2>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-center transition hover:-translate-y-1 hover:bg-slate-900/90">
                  <p className="text-lg font-semibold text-slate-100">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-white/10 px-6 py-24 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">Proyek</p>
                <h2 className="mt-4 text-4xl font-bold text-slate-50">Beberapa hasil kerja</h2>
              </div>
            </div>

            <div className="mt-10 grid gap-6 grid-cols-1 justify-items-center lg:grid-cols-3 lg:justify-items-stretch">
              {projects.map((project) => (
                <article key={project.title} className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 transition hover:-translate-y-1 hover:border-cyan-400/40">
                  <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.32em] text-cyan-300">{project.tag}</span>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-100">{project.title}</h3>
                  <p className="mt-4 text-slate-300 leading-7">{project.desc}</p>
                  <a href={project.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-200">Lihat Detail →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-24 sm:px-10">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-[0_40px_120px_-40px_rgba(14,165,233,0.65)] backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">Kontak</p>
                <h2 className="mt-4 text-4xl font-bold text-slate-50">Siap membangun proyek bersama?</h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Hubungi saya untuk mendiskusikan ide website, aplikasi mobile, atau pekerjaan desain yang ingin kamu wujudkan.</p>
              </div>

              <div className="space-y-4">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-3xl border border-white/10 bg-slate-950/70 px-6 py-5 text-slate-100 transition hover:border-cyan-400/40 hover:bg-slate-900"
                  >
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-base font-semibold">{item.value}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © 2026 Jaka Suganda.
      </footer>
    </div>
  );
}
