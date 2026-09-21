import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SelectedWorkSection() {
    const stages = [
        {
            num: '01',
            title: 'Masalah Lapangan',
            desc: 'Inspeksi manual berkecepatan tinggi meloloskan cacat mikro ke tahap pengepakan.',
        },
        {
            num: '02',
            title: 'Formulasi Riset',
            desc: 'Optimasi arsitektur neural network untuk deteksi anomali permukaan presisi <0.5mm.',
        },
        {
            num: '03',
            title: 'Purwarupa Edge',
            desc: 'Modul komputasi mandiri terintegrasi kamera industri 120 FPS di lini produksi.',
        },
        {
            num: '04',
            title: 'Validasi Lapangan',
            desc: 'Uji coba pilot 30 hari pada kondisi pencahayaan dinamis pabrik tanpa interupsi lini.',
        },
        {
            num: '05',
            title: 'Solusi Siap Skala',
            desc: 'Sistem inspeksi terintegrasi sortir otomatis dengan konsistensi deteksi tinggi.',
        },
    ];

    return (
        <section id="selected-work" className="bg-[#F7F4F0] text-[#1D1914] py-20 md:py-28 border-b border-[#E8E4DE]">
            <div className="section-wrap">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#70685C] uppercase">
                        Studi Kasus
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1914] font-normal tracking-tight mt-3">
                        Pembuktian Nyata di Lapangan
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-[#70685C] leading-relaxed">
                        Dokumentasi perjalanan teknologi dari masalah operasional, formulasi riset, hingga solusi tervalidasi.
                    </p>
                </div>

                {/* Main Split Case Study Container */}
                <div className="mt-14 rounded-[36px] overflow-hidden bg-[#161310] text-white border border-white/10 shadow-2xl grid lg:grid-cols-[1.1fr_0.9fr]">
                    {/* Left Panel: Hero of the Case Study */}
                    <div className="p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
                        {/* Ambient glow */}
                        <div className="absolute top-0 left-0 w-80 h-80 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-xs font-mono text-[#D4CEBF]">
                                <span className="text-[#4ADE80] font-semibold uppercase tracking-wider">Studi Kasus 01</span>
                                <span className="text-white/30">/</span>
                                <span>Manufaktur &amp; QC</span>
                            </div>

                            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white mt-6 leading-tight">
                                Computer Vision untuk Kendali Mutu Manufaktur Presisi
                            </h3>

                            <p className="mt-4 text-sm sm:text-base text-[#D4CEBF] leading-relaxed">
                                Sistem inspeksi otomatis berkecepatan tinggi yang menggabungkan optik kamera industri dan komputasi inferensi edge untuk mendeteksi cacat permukaan secara seketika sebelum tahap pengemasan.
                            </p>

                            {/* Stat Chips with Evidence & Context (Section 14) */}
                            <div className="mt-8 grid sm:grid-cols-3 gap-4 border-y border-white/10 py-5">
                                <div>
                                    <span className="text-[10px] font-mono text-[#A8A196] uppercase block">Akurasi Model</span>
                                    <span className="text-xl sm:text-2xl font-bold text-white mt-0.5 block">94.8%</span>
                                    <span className="text-[11px] text-[#A8A196] leading-tight block mt-1">1.200 sampel validasi internal</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-[#A8A196] uppercase block">Latensi Edge</span>
                                    <span className="text-xl sm:text-2xl font-bold text-[#4ADE80] mt-0.5 block">&lt;25 ms</span>
                                    <span className="text-[11px] text-[#A8A196] leading-tight block mt-1">Komputasi inferensi lokal</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-[#A8A196] uppercase block">Status Validasi</span>
                                    <span className="text-xl sm:text-2xl font-bold text-emerald-400 mt-0.5 block">Tervalidasi</span>
                                    <span className="text-[11px] text-[#A8A196] leading-tight block mt-1">Kondisi operasional terstandar</span>
                                </div>
                            </div>
                            <p className="mt-3 text-[11px] font-mono text-[#A8A196] italic">
                                *Metodologi dan batasan pengujian tersedia pada dokumentasi studi kasus teknis.
                            </p>
                        </div>

                        <div className="relative z-10 mt-10">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95"
                            >
                                <span>Diskusikan Masalah Serupa</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right Panel: 5 Structured Methodology Stages */}
                    <div className="bg-[#1D1914] p-8 sm:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center space-y-6">
                        <div className="text-xs font-mono uppercase tracking-wider text-[#4ADE80] font-semibold">
                            Metodologi Rekayasa RYVA
                        </div>

                        {stages.map((stage, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white font-mono text-xs font-bold border border-white/15">
                                    {stage.num}
                                </span>
                                <div>
                                    <h4 className="text-sm font-bold text-white">
                                        {stage.title}
                                    </h4>
                                    <p className="text-xs text-[#C8C2B7] mt-1 leading-relaxed">
                                        {stage.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-[#A8A196] leading-relaxed">
                            &bull; Model alur yang sama diterapkan untuk menyelesaikan permasalahan di Agrikultur, Logistik, UMKM, dan Layanan Publik.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
