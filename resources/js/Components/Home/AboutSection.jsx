import React from 'react';
import { Target, Search, ShieldCheck, TrendingUp, Layers, ArrowRight } from 'lucide-react';

export default function AboutSection() {
    const principles = [
        {
            num: '01',
            icon: Target,
            title: 'Problem First',
            desc: 'Solusi dirancang berakar dari masalah riil di lapangan, bukan memaksakan tren teknologi.',
        },
        {
            num: '02',
            icon: Search,
            title: 'Research Driven',
            desc: 'Formulasi teknis berbasis bukti empiris, eksplorasi mendalam, dan data pengujian valid.',
        },
        {
            num: '03',
            icon: ShieldCheck,
            title: 'Real-World Validation',
            desc: 'Purwarupa diuji ketat langsung pada kondisi operasional nyata sebelum penerapan penuh.',
        },
        {
            num: '04',
            icon: TrendingUp,
            title: 'Practical Impact',
            desc: 'Keberhasilan diukur dari peningkatan efisiensi dan nilai tambah terukur bagi pengguna.',
        },
        {
            num: '05',
            icon: Layers,
            title: 'Build for Scale',
            desc: 'Arsitektur sistem dirancang modular dan siap dikembangkan menjadi produk berskala luas.',
        },
    ];

    return (
        <section id="about" className="bg-[#F7F4F0] text-[#1D1914] py-20 md:py-28 border-b border-[#E8E4DE]">
            <div className="section-wrap">
                {/* Section Header: Minimalist & Direct */}
                <div className="max-w-3xl">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#70685C] uppercase">
                        Tentang RYVA
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1914] font-normal tracking-tight mt-3">
                        Membawa Riset Menjadi Solusi Nyata
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-[#70685C] leading-relaxed">
                        Kami menjembatani eksplorasi riset teknologi dengan kebutuhan operasional di industri, UMKM, dan masyarakat. Research bukan tujuan akhir, melainkan fondasi untuk membangun solusi yang bekerja andal.
                    </p>
                </div>

                {/* 5 Core Principles: Clean Minimalist Grid */}
                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {principles.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="rounded-3xl bg-white border border-[#E8E4DE] p-7 shadow-xs hover:shadow-md hover:border-[#D4CEBF] transition-all flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between">
                                        <div className="h-10 w-10 rounded-2xl bg-[#F7F4F0] border border-[#E8E4DE] flex items-center justify-center text-[#22C55E]">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-mono text-xs font-bold text-[#A8A196]">
                                            {item.num}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-[#1D1914] mt-6 tracking-tight group-hover:text-black transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-xs sm:text-sm text-[#70685C] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                    {/* 6th Card: Research to Reality Formula Badge Card */}
                    <div className="rounded-3xl bg-[#161310] text-white p-7 border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#22C55E]/10 rounded-full blur-2xl pointer-events-none" />
                        <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#4ADE80] font-semibold block">
                                Pendekatan Kami
                            </span>
                            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mt-3 leading-snug">
                                Research to Reality
                            </h3>
                            <div className="mt-4 space-y-1.5 text-xs font-mono text-[#D4CEBF]">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#4ADE80] font-bold">&bull;</span>
                                    <span>Research + Technology</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#4ADE80] font-bold">&bull;</span>
                                    <span>Implementation + Business</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                            <span className="text-[11px] text-[#A8A196] font-mono">5 Kriteria Nilai Teruji</span>
                            <a
                                href="#contact"
                                className="text-xs font-bold text-[#4ADE80] hover:underline inline-flex items-center gap-1"
                            >
                                <span>Kolaborasi</span>
                                <ArrowRight className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Minimalist Target Sector Ribbon */}
                <div className="mt-10 rounded-2xl bg-white/70 border border-[#E8E4DE] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#70685C]">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#22C55E]"></span>
                        <span className="font-semibold text-[#1D1914]">Fokus Penerapan:</span>
                        <span>Manufaktur &bull; Agrikultur &bull; Logistik &bull; UMKM &bull; Layanan Publik</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#A8A196]">
                        Solusi tepat guna berbasis kebutuhan nyata
                    </span>
                </div>
            </div>
        </section>
    );
}
