import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import {
    ArrowRight,
    Cpu,
    Eye,
    Radio,
    Workflow,
    Layers,
    CheckCircle2,
    Calendar,
    User,
    ArrowUpRight,
} from 'lucide-react';

export default function Home({ featuredArticles = [] }) {
    const [activeStage, setActiveStage] = useState(0);

    const pipelineStages = [
        {
            title: 'Problem',
            desc: 'Mengidentifikasi permasalahan mendasar dan friksi nyata di sektor industri, manufaktur, UMKM, atau operasional publik.',
        },
        {
            title: 'Research',
            desc: 'Melakukan riset terapan mendalam, mengeksplorasi literatur mutakhir, dan memetakan pendekatan teknologi yang paling tepat guna.',
        },
        {
            title: 'Innovation',
            desc: 'Merancang arsitektur baru dan metodologi terapan berbasis bukti untuk menjawab akar permasalahan secara presisi.',
        },
        {
            title: 'Prototype',
            desc: 'Membangun purwarupa fungsional (Proof of Concept) untuk menguji kelayakan teknis dan mengukur potensi efisiensi.',
        },
        {
            title: 'Validation',
            desc: 'Menguji performa prototipe langsung di lingkungan kerja nyata bersama mitra kerja dan pengguna sebenarnya.',
        },
        {
            title: 'Implementation',
            desc: 'Menerapkan solusi terintegrasi ke dalam alur kerja produksi dan infrastruktur operasional secara stabil.',
        },
        {
            title: 'Product / Service',
            desc: 'Mengembangkan solusi yang tervalidasi menjadi platform atau produk terstandar yang dapat diskalakan secara lebih luas.',
        },
    ];

    const focusAreas = [
        {
            icon: Eye,
            title: 'Computer Vision & Inspection',
            desc: 'Sistem deteksi visual berkecepatan tinggi untuk kendali mutu (QC) manufaktur, identifikasi anomali, dan pemantauan objek presisi.',
            tags: ['AI Vision', 'Defect Detection', 'Edge Cameras'],
        },
        {
            icon: Cpu,
            title: 'Artificial Intelligence & ML',
            desc: 'Pengembangan model machine learning terapan untuk pemodelan prediktif, analisis pola kompleks, dan otomasi keputusan bisnis.',
            tags: ['Deep Learning', 'Predictive Modeling', 'Inference'],
        },
        {
            icon: Radio,
            title: 'Internet of Things (IoT) & Edge',
            desc: 'Sensor telemetri dan integrasi embedded hardware untuk monitoring kondisi mesin, agrikultur presisi, dan otomasi rantai pasok.',
            tags: ['Telemetry', 'Embedded Systems', 'Smart Sensors'],
        },
        {
            icon: Workflow,
            title: 'Automation & Intelligent Systems',
            desc: 'Rancang bangun perangkat lunak cerdas dan integrasi sistem terpusat yang menghubungkan hardware, cloud, dan antarmuka analitik.',
            tags: ['Industrial Systems', 'Workflow Engines', 'Realtime API'],
        },
    ];

    // Default mock articles if not provided by backend
    const sampleArticles =
        featuredArticles && featuredArticles.length > 0
            ? featuredArticles
            : [
                  {
                      slug: 'penerapan-computer-vision-quality-control-manufaktur',
                      title: 'Penerapan Computer Vision untuk Otomasi Quality Control pada Lini Manufaktur',
                      excerpt:
                          'Bagaimana riset terapan kamera industri dan edge computing mampu memangkas tingkat cacat produk hingga ke level mikron.',
                      category: 'Computer Vision',
                      author: 'Tim Riset RYVA',
                      date: '20 September 2026',
                  },
                  {
                      slug: 'arsitektur-iot-telemetri-agrikultur-presisi',
                      title: 'Arsitektur Sensor IoT Berdaya Rendah untuk Pemantauan Lahan Agrikultur Presisi',
                      excerpt:
                          'Eksplorasi integrasi mikrokontroler dan telemetri LoRa dalam menyajikan data kelembaban dan nutrisi tanah secara berkala.',
                      category: 'Internet of Things',
                      author: 'Lab Hardware RYVA',
                      date: '15 September 2026',
                  },
                  {
                      slug: 'metodologi-research-to-reality-dalam-pengembangan-ai',
                      title: 'Metodologi Research to Reality: Menjembatani Eksperimen Lab ke Dunia Nyata',
                      excerpt:
                          'Mengapa akurasi model di laboratorium sering kali gagal di lapangan, dan bagaimana siklus validasi RYVA mengatasinya.',
                      category: 'Applied Research',
                      author: 'Divisi Inovasi',
                      date: '08 September 2026',
                  },
              ];

    return (
        <PublicLayout>
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-slate-800/60">
                {/* Subtle Radial Ambient Backing (Restrained, not full screen) */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        {/* Domain Tag */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Applied Research & Technology Solutions
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                            Research to Reality:{' '}
                            <span className="text-emerald-400">
                                Inovasi Riset untuk Solusi Nyata.
                            </span>
                        </h1>

                        {/* Subtitle based directly on about.md */}
                        <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
                            RYVA.ID adalah perusahaan teknologi yang berfokus pada applied research, pengembangan teknologi, dan penerapan solusi nyata untuk menyelesaikan permasalahan di dunia industri, UMKM, dan masyarakat.
                        </p>

                        {/* CTA Actions */}
                        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                            >
                                Diskusikan Kebutuhan Riset
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                            >
                                Pelajari Filosofi Kami
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pipeline Section: The Core Philosophy from about.md */}
            <section className="py-20 lg:py-28 bg-[#0C101A] border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                            Metodologi Kami
                        </h2>
                        <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                            Alur Inovasi: Dari Masalah Menuju Produk Skala Luas
                        </h3>
                        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                            Kami memandang riset bukan sebagai garis akhir, melainkan titik awal pengembangan solusi terapan. Klik setiap tahapan untuk melihat peran kami:
                        </p>
                    </div>

                    {/* Interactive Pipeline Flow */}
                    <div className="mt-12">
                        {/* Pipeline Stage Buttons */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pb-4">
                            {pipelineStages.map((stage, idx) => (
                                <button
                                    key={stage.title}
                                    type="button"
                                    onClick={() => setActiveStage(idx)}
                                    className={`text-left p-3.5 min-h-[44px] rounded-lg border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                                        activeStage === idx
                                            ? 'bg-emerald-500/10 border-emerald-500/60 text-white shadow-md'
                                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                                    }`}
                                >
                                    <div className="text-[10px] font-mono text-emerald-400/80 mb-1">
                                        Phase 0{idx + 1}
                                    </div>
                                    <div className="text-sm font-semibold truncate">
                                        {stage.title}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Active Stage Highlight Box */}
                        <div className="mt-4 p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                                        Tahap {activeStage + 1}: {pipelineStages[activeStage].title}
                                    </span>
                                </div>
                                <h4 className="text-xl font-bold text-white">
                                    {pipelineStages[activeStage].title}
                                </h4>
                                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                                    {pipelineStages[activeStage].desc}
                                </p>
                            </div>
                            <Link
                                href="/portfolio"
                                className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                            >
                                Lihat Implementasi Terkait
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Focus Areas Section */}
            <section className="py-20 lg:py-28 border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                            Kapabilitas Teknis
                        </h2>
                        <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                            Fokus Riset & Bidang Teknologi
                        </h3>
                        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                            Kami mengembangkan inovasi pada bidang teknologi mutakhir yang memiliki potensi terbesar dalam memecahkan friksi operasional nyata.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {focusAreas.map((area) => {
                            const Icon = area.icon;
                            return (
                                <div
                                    key={area.title}
                                    className="p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-colors flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">
                                            {area.title}
                                        </h4>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            {area.desc}
                                        </p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap gap-2">
                                        {area.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Case Study Example Section (From docs/about.md) */}
            <section className="py-20 lg:py-28 bg-[#090D15] border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 sm:p-12">
                        <div className="max-w-2xl">
                            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                                Studi Kasus Nyata
                            </span>
                            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                Manufacturing Quality Control: Dari Masalah Menjadi Solusi
                            </h3>
                            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                                Contoh bagaimana RYVA.ID mengonversi permasalahan inspeksi manual di pabrik menjadi platform deteksi otomatis yang siap skala:
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-5 rounded-lg bg-slate-950/60 border border-slate-800">
                                <div className="text-xs font-mono text-rose-400 mb-1">01. Problem</div>
                                <div className="text-sm font-semibold text-white mb-1.5">Inspeksi Manual</div>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Pemeriksaan visual manual rawan lelah, tidak konsisten antar shift kerja, dan rentan meloloskan cacat mikro.
                                </p>
                            </div>

                            <div className="p-5 rounded-lg bg-slate-950/60 border border-slate-800">
                                <div className="text-xs font-mono text-cyan-400 mb-1">02. Research & PoC</div>
                                <div className="text-sm font-semibold text-white mb-1.5">AI Computer Vision</div>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Eksperimen model deep learning untuk segmentasi cacat permukaan berbasis edge camera beresolusi tinggi.
                                </p>
                            </div>

                            <div className="p-5 rounded-lg bg-slate-950/60 border border-slate-800">
                                <div className="text-xs font-mono text-amber-400 mb-1">03. Validation</div>
                                <div className="text-sm font-semibold text-white mb-1.5">Pilot Testing</div>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Pengujian langsung di lingkungan konveyor nyata dengan variasi pencahayaan dan kecepatan tinggi.
                                </p>
                            </div>

                            <div className="p-5 rounded-lg bg-slate-950/60 border border-slate-800">
                                <div className="text-xs font-mono text-emerald-400 mb-1">04. Solution & Product</div>
                                <div className="text-sm font-semibold text-white mb-1.5">QC Inspection Platform</div>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Sistem mandiri terpasang permanen di lini produksi dengan dashboard analisis statistik real-time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles & Insights Preview */}
            <section className="py-20 lg:py-28 border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                        <div>
                            <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                                Publikasi & Wawasan
                            </h2>
                            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                Artikel Riset Terkini
                            </h3>
                        </div>
                        <Link
                            href="/articles"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                            Lihat Semua Publikasi
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {sampleArticles.map((article) => (
                            <Link
                                key={article.slug}
                                href={`/articles/${article.slug}`}
                                className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-colors flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                                        <span className="px-2.5 py-1 rounded bg-slate-800 text-emerald-400 font-medium">
                                            {article.category}
                                        </span>
                                        <span className="flex items-center gap-1 font-mono text-[11px]">
                                            <Calendar className="w-3 h-3" />
                                            {article.date}
                                        </span>
                                    </div>
                                    <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                                        {article.title}
                                    </h4>
                                    <p className="mt-2.5 text-xs text-slate-400 leading-relaxed line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                </div>
                                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                                    <span className="flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5" />
                                        {article.author}
                                    </span>
                                    <span className="font-semibold text-emerald-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                                        Baca
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Collaboration Call to Action */}
            <section className="py-20 lg:py-24 bg-[#0A0E17]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                        Punya Masalah Industri yang Ingin Diselesaikan Melalui Riset Teknologi?
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Kami terbuka untuk kerja sama riset terapan, pembangunan purwarupa, dan implementasi teknologi khusus bagi perusahaan, pabrik, maupun UMKM.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shadow-lg shadow-emerald-500/20"
                        >
                            Mulai Konsultasi Riset Bersama RYVA
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
