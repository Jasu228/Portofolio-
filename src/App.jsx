import {
  FaReact,
  FaHtml5,
  FaGithub,
  FaPhp,
  FaFigma,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import {
  SiJavascript,
  SiFlutter,
} from "react-icons/si";

export default function App() {
  const skills = [
  {
    name: "React",
    icon: <FaReact size={40} className="text-cyan-400" />,
  },
  {
    name: "HTML & CSS",
    icon: <FaHtml5 size={40} className="text-orange-500" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub size={40} className="text-white" />,
  },
  {
    name: "PHP",
    icon: <FaPhp size={40} className="text-indigo-400" />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript size={40} className="text-yellow-400" />,
  },
  {
    name: "Figma",
    icon: <FaFigma size={40} className="text-pink-400" />,
  },
  {
    name: "Flutter",
    icon: <SiFlutter size={40} className="text-cyan-400" />,
  },
];

  const projects = [
    {
      title: "GluCare Apps",
      desc: "Aplikasi mobile kesehatan yang membantu pengguna memantau kondisi kesehatan, mengelola data pemeriksaan, dan memperoleh informasi terkait diabetes dengan antarmuka yang modern dan mudah digunakan.",
      tag: "Flutter & Firebase",
      href: "https://github.com/Fadlan-Anwar/glucare_app",
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
      value: "+62 812-6098-4950",
      href: "https://wa.me/6281260984950",
    },
    {
      label: "LinkedIn",
      value: "Jaka Suganda",
      href: "https://www.linkedin.com/in/jaka-suganda-603b3a3a6/",
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
            <a href="#about">Tentang</a>
            <a href="#skills">Keahlian</a>
            <a href="#projects">Proyek</a>
            <a href="#case-study">Case Study</a>
            <a href="#contact">Kontak</a>
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
                <p className="max-w-xl text-lg leading-8 text-slate-300">Saya seorang mahasiswa Universitas Islam Sumatera Utara.
                  Saya bisa membantu ada membuat website, aplikasi mobile, dan desain UI/UX yang menarik dan mudah digunakan,
                </p>
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
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">Saya Bisa membantu Anda</p>
              <h2 className="mt-4 text-4xl font-bold text-slate-50">Saya bisa membantu brand anda memiliki tampil menarik secara digital.</h2>
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
              <div
                key={skill.name}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-center transition hover:-translate-y-2 hover:border-cyan-400"
              >
                <div className="flex justify-center mb-4">
                  {skill.icon}
                </div>

                <p className="text-lg font-semibold text-slate-100">
                  {skill.name}
                </p>
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

              <section
          id="case-study"
            className="border-t border-white/10 px-6 py-24 sm:px-10"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">
                Massive Challenge
              </p>
              <h2 className="mt-4 text-4xl font-bold text-slate-50">
                GluCare Apps Case Study
              </h2>
            </div>
          </div>
            <div className="grid gap-6">

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
                <h3 className="mb-4 text-2xl font-semibold">
                  📱 Project Overview
                </h3>
                <p className="text-slate-300 leading-7">
                  GluCare Apps adalah aplikasi kesehatan berbasis mobile
                  yang membantu pengguna memonitor kondisi kesehatan,
                  mencatat aktivitas, dan memperoleh informasi terkait
                  diabetes secara lebih mudah.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
                <h3 className="mb-4 text-2xl font-semibold">
                  🎯 Problem Statement
                </h3>
                <p className="text-slate-300 leading-7">
                  Banyak pengguna kesulitan melakukan monitoring kesehatan
                  secara konsisten karena aplikasi yang kompleks dan kurang
                  memberikan visualisasi data yang mudah dipahami.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
                <h3 className="mb-4 text-2xl font-semibold">
                  🚀 Project Goals
                </h3>

                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li>Membuat aplikasi yang mudah digunakan.</li>
                  <li>Menampilkan progres kesehatan secara visual.</li>
                  <li>Meningkatkan pengalaman pengguna.</li>
                  <li>Menghadirkan antarmuka modern dan responsif.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
                <h3 className="mb-4 text-2xl font-semibold">
                  👨‍💻 My Contribution
                </h3>

                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li>Mengembangkan tampilan aplikasi menggunakan Flutter.</li>
                  <li>Membantu membuat desain antarmuka menggunakan Figma.</li>
                  <li>Mengembangkan dan mengimplementasikan tampilan frontend aplikasi.</li>
                  <li>Mengintegrasikan Firebase.</li>
                  <li>Berkolaborasi dengan tim UI/UX.</li>
                </ul>
              </div>

                    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                ⚙️ Technology Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {["Flutter","Dart","Firebase","Figma","GitHub"].map((item)=>(
                  <span
                    key={item}
                    className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

        
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                🔄 Design Process
              </h3>

              <p className="text-slate-300 leading-7">
                Research → Wireframe → UI Design → Frontend Development →
                Testing → Deployment
              </p>
            </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
            <h3 className="mb-6 text-2xl font-semibold">
              📸 Development Evidence
            </h3>

            <p className="mb-6 text-slate-300">
              Berikut beberapa kontribusi saya sebagai
              hacker mobile
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {/* Firebase */}
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <img
                    src="/evidence/firebase-1.png"
                    alt="Firebase Setup"
                    className="w-full rounded-xl border border-white/10"
                  />

                  <h4 className="mt-4 text-xl font-semibold text-white">
                    Firebase Integration
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Mengintegrasikan Firebase Authentication dan Firestore Database
                    untuk kebutuhan penyimpanan data pengguna.
                  </p>
                </div>

                {/* GitHub */}
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <img
                    src="/evidence/github-1.png"
                    alt="GitHub Collaboration"
                    className="w-full rounded-xl border border-white/10"
                  />

                  <h4 className="mt-4 text-xl font-semibold text-white">
                    GitHub Collaboration
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Mengelola source code bersama tim menggunakan GitHub,
                    pull request, dan version control workflow.
                  </p>
                </div>

                {/* UI Design */}
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <img
                    src="/evidence/figma-1.png"
                    alt="UI Design"
                    className="w-full rounded-xl border border-white/10"
                  />

                  <h4 className="mt-4 text-xl font-semibold text-white">
                    UI/UX Design
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Mendesain wireframe dan user interface menggunakan Figma
                    sebelum tahap pengembangan aplikasi.
                  </p>
                </div>

                {/* Frontend */}
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <img
                    src="/evidence/frontend-1.png"
                    alt="Frontend Development"
                    className="w-full rounded-xl border border-white/10"
                  />

                  <h4 className="mt-4 text-xl font-semibold text-white">
                    Frontend Development
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Mengembangkan tampilan aplikasi Flutter yang responsif,
                    modern, dan mudah digunakan pengguna.
                  </p>
                </div>

              </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                📈 Results & Impact
              </h3>
                        <ul className="list-disc pl-5 space-y-2 text-slate-300">
                          <li>Berhasil mengembangkan prototype aplikasi.</li>
                          <li>UI modern dan responsif.</li>
                          <li>Navigasi lebih mudah digunakan.</li>
                          <li>Kolaborasi tim berjalan efektif.</li>
                        </ul>
                      </div>

                      <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
                        <h3 className="mb-4 text-2xl font-semibold">
                          📚 Pelajaran yang Dipetik
                        </h3>

                        <ul className="list-disc pl-5 space-y-2 text-slate-300">
                          <li>Kolaborasi tim.</li>
                          <li>Alur kerja pengembangan Flutter.</li>
                          <li>Implementasi UI/UX.</li>
                          <li>Kolaborasi Git & GitHub.</li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </section>

                  <section
                    id="contact"
                    className="border-t border-white/10 px-6 py-20 sm:px-10"
                  >
                    <div className="mx-auto max-w-6xl">

                      <div className="grid gap-10 md:grid-cols-4">

                        {/* Profile */}
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            Jaka Suganda
                          </h3>

                          <p className="mt-4 text-slate-400 leading-7">
                            Frontend Developer & Mobile Developer
                            yang fokus membangun website dan aplikasi
                            modern dengan pengalaman pengguna yang baik.
                          </p>

                          <div className="mt-6 flex gap-3">
                            <a
                              href="https://github.com/Jasu228"
                              target="_blank"
                              className="rounded-xl border border-white/10 p-3 hover:border-cyan-400"
                            >
                                <FaGithub size={25} className="text-white" />,
                            </a>

                            <a
                              href="https://www.linkedin.com/in/jaka-suganda-603b3a3a6/"
                              target="_blank"
                              className="rounded-xl border border-white/10 p-3 hover:border-cyan-400"
                            >
                              <FaLinkedin size={25} className="text-white" />
                            </a>

                            <a
                              href="mailto:jakasuganda123@gmail.com"
                              className="rounded-xl border border-white/10 p-3 hover:border-cyan-400"
                            >
                              <FaEnvelope size={25} className="text-white" />
                            </a>
                          </div>
                        </div>

                        {/* Navigation */}
                        <div>
                          <h4 className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-400">
                            Navigation
                          </h4>

                          <ul className="space-y-3 text-slate-300">
                            <li><a href="#about">Tentang</a></li>
                            <li><a href="#skills">Keahlian</a></li>
                            <li><a href="#projects">Project</a></li>
                            <li><a href="#case-study">Case Study</a></li>
                          </ul>
                        </div>

                        {/* Project */}
                        <div>
                          <h4 className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-400">
                            Project
                          </h4>

                          <ul className="space-y-3 text-slate-300">
                            <li>GluCare Apps</li>
                            <li>UI/UX Design</li>
                            <li>Frontend Development</li>
                            <li>Firebase Integration</li>
                          </ul>
                        </div>

                        {/* Contact */}
                        <div>
                          <h4 className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-400">
                            Contact
                          </h4>

                          <ul className="space-y-3 text-slate-300">
                            <li><FaEnvelope size={25} className="text-white" /> jakasuganda123@gmail.com</li>
                            <li><FaWhatsapp size={25} className="text-white" /> +62 812-6098-4950</li>
                            <li><FaLinkedin size={25} className="text-white" /> Jaka Suganda</li>
                          </ul>
                        </div>

                      </div>

                      <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-4 md:flex-row md:justify-between">
                        <p className="text-slate-500">
                          © 2026 Jaka Suganda. All Rights Reserved.
                        </p>

                        <p className="text-slate-500">
                          Frontend Developer & Mobile Developer
                        </p>
                      </div>

                    </div>
                  </section>
      </main>

    </div>
  );
}
