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
            {/* Header Hero */}
            <section className="tech-grid relative overflow-hidden bg-[#101412] py-20 text-white md:py-24">
                <div className="section-wrap relative">
                    <p className="canva-text eyebrow mb-4 text-[#b6ee63]">
                        01 / IDENTITY &amp; CORE VALUES
                    </p>
                    <h1 className="canva-text max-w-3xl text-4xl font-bold tracking-[-.055em] text-white md:text-5xl">
                        Membawa Riset Melampaui Hasil Laboratorium
                    </h1>
                    <p className="canva-text mt-5 max-w-2xl text-base leading-7 text-[#b8c3ba] md:text-lg">
                        RYVA.ID adalah perusahaan teknologi yang berfokus pada applied research, pengembangan teknologi, dan penerapan solusi untuk menyelesaikan permasalahan nyata di dunia industri, UMKM, dan masyarakat.
                    </p>
                </div>
            </section>

            {/* Why We Exist */}
            <section className="bg-white py-20 md:py-28 border-b border-[#d7ddd6]">
                <div className="section-wrap">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-5 space-y-4">
                            <p className="canva-text eyebrow text-[#577b25]">
                                LATAR BELAKANG
                            </p>
                            <h2 className="canva-text text-3xl font-bold tracking-[-.04em] text-[#101412]">
                                Mengapa RYVA Hadir?
                            </h2>
                            <p className="text-base text-[#59645b] leading-relaxed">
                                Perkembangan teknologi seperti AI, IoT, software engineering, dan data analytics membuka peluang luar biasa di luar bidang IT konvensional.
                            </p>
                            <p className="text-base text-[#59645b] leading-relaxed">
                                Namun, keberhasilan sebuah teknologi tidak hanya ditentukan oleh performa teknis atau hasil eksperimen. Bagi RYVA, riset baru memiliki arti ketika mampu bertransformasi menjadi implementasi yang berdampak nyata.
                            </p>
                        </div>

                        <div className="lg:col-span-7 bg-[#fbfcf9] border border-[#d7ddd6] p-8">
                            <h3 className="text-lg font-bold text-[#101412] mb-5">
                                Tolok Ukur Nilai Inovasi bagi RYVA:
                            </h3>
                            <ul className="space-y-4 text-sm text-[#59645b]">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#6c9f24] shrink-0 mt-0.5" />
                                    <span>Menyelesaikan akar permasalahan nyata di lapangan secara tuntas.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#6c9f24] shrink-0 mt-0.5" />
                                    <span>Memberikan nilai tambah yang terukur bagi operasional pengguna.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#6c9f24] shrink-0 mt-0.5" />
                                    <span>Dapat divalidasi langsung di lingkungan dan alur kerja dunia nyata.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#6c9f24] shrink-0 mt-0.5" />
                                    <span>Dapat diterapkan secara praktis tanpa friksi berlebihan.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#6c9f24] shrink-0 mt-0.5" />
                                    <span>Memiliki potensi untuk dikembangkan menjadi produk berstandar luas.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Missions */}
            <section className="bg-[#f3f5f1] py-20 md:py-28 border-b border-[#d7ddd6]">
                <div className="section-wrap">
                    {/* Vision Banner */}
                    <div className="border border-[#d7ddd6] bg-[#101412] text-white p-8 md:p-12 text-center max-w-4xl mx-auto">
                        <span className="mono text-xs text-[#b6ee63] font-bold uppercase tracking-widest">
                            VISI PERUSAHAAN
                        </span>
                        <blockquote className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-[-.03em] leading-snug">
                            "Menjadi perusahaan teknologi yang mengembangkan dan menerapkan inovasi berbasis research untuk menyelesaikan permasalahan nyata dan memberikan dampak yang dapat digunakan secara luas."
                        </blockquote>
                    </div>

                    {/* Missions Grid */}
                    <div className="mt-16">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <p className="canva-text eyebrow text-[#577b25]">
                                KOMITMEN OPERASIONAL
                            </p>
                            <h2 className="canva-text mt-2 text-3xl font-bold tracking-[-.04em] text-[#101412]">
                                6 Pilar Misi RYVA.ID
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {missions.map((mission) => {
                                const Icon = mission.icon;
                                return (
                                    <div
                                        key={mission.title}
                                        className="p-7 border border-[#d7ddd6] bg-white flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-10 h-10 bg-[#f3f5f1] border border-[#d7ddd6] flex items-center justify-center text-[#101412]">
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <span className="mono text-xs font-bold text-[#6c9f24]">
                                                    {mission.number}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-[#101412] mb-2">
                                                {mission.title}
                                            </h3>
                                            <p className="text-sm text-[#59645b] leading-relaxed">
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
            <section className="bg-white py-20 md:py-28 border-b border-[#d7ddd6]">
                <div className="section-wrap">
                    <div className="max-w-2xl mb-12">
                        <p className="canva-text eyebrow text-[#577b25]">
                            PRINSIP FUNDAMENTAL
                        </p>
                        <h2 className="canva-text mt-2 text-3xl font-bold tracking-[-.04em] text-[#101412]">
                            Pedoman dalam Merancang Setiap Solusi
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {principles.map((p, idx) => (
                            <div
                                key={p.title}
                                className="p-7 border border-[#d7ddd6] bg-[#fbfcf9]"
                            >
                                <span className="mono text-xs text-[#6c9f24] font-bold mb-2 block">
                                    PRINCIPLE 0{idx + 1}
                                </span>
                                <h3 className="text-lg font-bold text-[#101412] mb-2">{p.title}</h3>
                                <p className="text-sm text-[#59645b] leading-relaxed">
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Positioning Banner */}
            <section className="bg-[#101412] py-20 text-white">
                <div className="section-wrap text-center space-y-6 max-w-3xl">
                    <p className="canva-text eyebrow text-[#b6ee63]">
                        FORMULA POSISI KAMI
                    </p>
                    <h2 className="canva-text text-2xl sm:text-4xl font-bold tracking-[-.04em]">
                        Research + Technology + Implementation + Business
                    </h2>
                    <p className="text-base text-[#a9b3ab] leading-relaxed">
                        Kami menyatukan keempat elemen ini untuk mengawal setiap ide inovatif dari bangku penelitian hingga menjadi sistem yang andal di dunia nyata.
                    </p>
                    <div className="pt-4">
                        <Link
                            href="/contact"
                            className="button-primary"
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
