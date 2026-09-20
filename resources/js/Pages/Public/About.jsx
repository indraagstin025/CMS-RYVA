import React from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import {
    CheckCircle2,
    Search,
    Lightbulb,
    ShieldCheck,
    Wrench,
    Package,
    RotateCcw,
    ArrowRight,
} from 'lucide-react';

export default function About() {
    const missions = [
        {
            number: '01',
            icon: Search,
            title: 'Research',
            desc: 'Melakukan research terapan terhadap teknologi mutakhir yang dapat digunakan untuk menyelesaikan permasalahan nyata.',
        },
        {
            number: '02',
            icon: Lightbulb,
            title: 'Innovate',
            desc: 'Mengembangkan pendekatan dan teknologi baru berdasarkan research, eksperimen, dan kebutuhan spesifik pengguna.',
        },
        {
            number: '03',
            icon: ShieldCheck,
            title: 'Validate',
            desc: 'Menguji solusi melalui purwarupa fungsional dan penerapan langsung pada lingkungan kerja operasional sebenarnya.',
        },
        {
            number: '04',
            icon: Wrench,
            title: 'Solve',
            desc: 'Menghasilkan solusi teknologi yang benar-benar membantu produktivitas dan efisiensi perusahaan, UMKM, dan masyarakat.',
        },
        {
            number: '05',
            icon: Package,
            title: 'Productize',
            desc: 'Mengembangkan solusi yang telah tervalidasi menjadi produk atau layanan terstandar yang dapat digunakan lebih luas.',
        },
        {
            number: '06',
            icon: RotateCcw,
            title: 'Continuously Improve',
            desc: 'Mengembangkan dan menyempurnakan solusi secara berkesinambungan berdasarkan data, umpan balik pengguna, dan riset lanjutan.',
        },
    ];

    const principles = [
        {
            title: 'Problem First',
            desc: 'Teknologi dipilih dan dikembangkan berdasarkan masalah yang ada, bukan memaksakan teknologi pada situasi yang tidak membutuhkannya.',
        },
        {
            title: 'Research Driven',
            desc: 'Keputusan teknis dan inovasi didasarkan pada riset yang teruji, eksperimen terukur, dan bukti empiris di lapangan.',
        },
        {
            title: 'Real-World Validation',
            desc: 'Purwarupa (prototype) tidak dianggap selesai sebelum diuji dan terbukti efektif dalam konteks penggunaan nyata di lapangan.',
        },
        {
            title: 'Practical Impact',
            desc: 'Keberhasilan tidak hanya diukur dari angka performa teknis di atas kertas, tetapi dari manfaat nyata yang dinikmati pengguna.',
        },
        {
            title: 'Build for Scale',
            desc: 'Solusi yang telah tervalidasi dirancang dengan arsitektur yang kokoh agar siap dikembangkan menjadi produk berskala luas.',
        },
    ];

    return (
        <PublicLayout
            title="Tentang Kami"
            description="Pelajari visi, misi, filosofi Research to Reality, dan prinsip kerja teknologi di RYVA.ID."
        >
            {/* Page Header */}
            <section className="py-16 lg:py-24 border-b border-slate-800/60 bg-[#0C101A]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                            Identitas & Nilai Inti
                        </span>
                        <h1 className="mt-3 text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                            Membawa Riset Melampaui Hasil Laboratorium
                        </h1>
                        <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                            RYVA.ID adalah perusahaan teknologi yang berfokus pada applied research, pengembangan teknologi, dan penerapan solusi untuk menyelesaikan permasalahan nyata di dunia industri, UMKM, dan masyarakat.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why We Exist */}
            <section className="py-20 lg:py-28 border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-5 space-y-4">
                            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                                Latar Belakang
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                Mengapa RYVA Hadir?
                            </h2>
                            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                                Perkembangan teknologi seperti AI, IoT, software engineering, dan data analytics membuka peluang luar biasa di luar bidang IT konvensional.
                            </p>
                            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                                Namun, keberhasilan sebuah teknologi tidak hanya ditentukan oleh performa teknis atau hasil eksperimen. Bagi RYVA, riset baru memiliki arti ketika mampu bertransformasi menjadi implementasi yang berdampak nyata.
                            </p>
                        </div>

                        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
                            <h3 className="text-base font-bold text-white mb-4">
                                Tolok Ukur Nilai Inovasi bagi RYVA:
                            </h3>
                            <ul className="space-y-4 text-sm text-slate-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Menyelesaikan akar permasalahan nyata di lapangan secara tuntas.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Memberikan nilai tambah yang terukur bagi operasional pengguna.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Dapat divalidasi langsung di lingkungan dan alur kerja dunia nyata.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Dapat diterapkan secara praktis tanpa friksi berlebihan.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Memiliki potensi untuk dikembangkan menjadi produk berstandar luas.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Missions */}
            <section className="py-20 lg:py-28 bg-[#0C101A] border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Vision Banner */}
                    <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-emerald-950/30 via-slate-900/70 to-slate-900 border border-emerald-500/20 text-center max-w-4xl mx-auto">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                            Visi Perusahaan
                        </span>
                        <blockquote className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                            "Menjadi perusahaan teknologi yang mengembangkan dan menerapkan inovasi berbasis research untuk menyelesaikan permasalahan nyata dan memberikan dampak yang dapat digunakan secara luas."
                        </blockquote>
                    </div>

                    {/* Missions Grid */}
                    <div className="mt-16">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                                Komitmen Operasional
                            </span>
                            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                6 Pilar Misi RYVA.ID
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {missions.map((mission) => {
                                const Icon = mission.icon;
                                return (
                                    <div
                                        key={mission.title}
                                        className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <span className="text-xs font-mono text-slate-500">
                                                    {mission.number}
                                                </span>
                                            </div>
                                            <h3 className="text-base font-bold text-white mb-2">
                                                {mission.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                                                {mission.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Principles */}
            <section className="py-20 lg:py-28 border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mb-12">
                        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                            Prinsip Fundamental
                        </span>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                            Pedoman dalam Merancang Setiap Solusi
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {principles.map((p, idx) => (
                            <div
                                key={p.title}
                                className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80"
                            >
                                <span className="text-xs font-mono text-emerald-400 mb-2 block">
                                    Principle 0{idx + 1}
                                </span>
                                <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Positioning Banner */}
            <section className="py-16 lg:py-20 bg-[#070A0F]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                        Formula Posisi Kami
                    </span>
                    <h2 className="text-xl sm:text-3xl font-bold text-white">
                        Research + Technology + Implementation + Business
                    </h2>
                    <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Kami menyatukan keempat elemen ini untuk mengawal setiap ide inovatif dari bangku penelitian hingga menjadi sistem yang andal di dunia nyata.
                    </p>
                    <div className="pt-2">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-colors"
                        >
                            Hubungi Kami untuk Kolaborasi
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
