import React from 'react';
import { Target, Cpu, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function MethodSection() {
    const pillars = [
        {
            title: 'Research Project',
            sub: 'Problem-First & Evidence',
            badge: 'Fase 01',
            badgeDesc: 'Identifikasi masalah & eksplorasi',
            desc: 'Identifikasi akar masalah dan studi kelayakan pendekatan teknologi berbasis bukti data empiris.',
            gradient: 'from-[#1A1612]/90 via-[#1A1612]/60 to-[#1A1612]/95',
            icon: Target,
        },
        {
            title: 'Prototype / PoC',
            sub: 'Uji Validasi Lapangan',
            badge: 'Fase 02',
            badgeDesc: 'Pembuktian kelayakan teknis',
            desc: 'Pengembangan purwarupa fungsional untuk membuktikan kelayakan teknis langsung di lapangan.',
            gradient: 'from-[#17130F]/90 via-[#17130F]/60 to-[#17130F]/95',
            icon: Cpu,
        },
        {
            title: 'Solution & Product',
            sub: 'Implementasi & Skala',
            badge: 'Fase 03',
            badgeDesc: 'Solusi siap operasional',
            desc: 'Penerapan solusi operasional mitra dan standarisasi sistem menjadi produk berskala luas.',
            gradient: 'from-[#14110E]/90 via-[#14110E]/60 to-[#14110E]/95',
            icon: TrendingUp,
        },
    ];

    const pipelineSteps = [
        { step: '01', name: 'Problem', desc: 'Identifikasi masalah nyata' },
        { step: '02', name: 'Research', desc: 'Riset terapan & evidence' },
        { step: '03', name: 'Prototype', desc: 'Purwarupa fungsional awal' },
        { step: '04', name: 'Validation', desc: 'Uji di lingkungan nyata' },
        { step: '05', name: 'Solution', desc: 'Implementasi solusi mitra' },
        { step: '06', name: 'Product', desc: 'Produk berskala luas' },
    ];

    return (
        <section id="solutions" className="bg-[#F7F4F0] text-[#1D1914] py-20 md:py-28 border-b border-[#E8E4DE]">
            <div className="section-wrap">
                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#70685C] uppercase">
                        Model Proses
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1914] font-normal tracking-tight mt-3">
                        Dari Riset Menuju Realita
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-[#70685C] leading-relaxed">
                        Tiga fase terstruktur membawa eksplorasi teknologi menuju implementasi andal di lingkungan nyata.
                    </p>
                </div>

                {/* 3 Photo-Style Feature Cards ala Bobbin ("Find your flow") */}
                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {pillars.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="relative rounded-[32px] overflow-hidden bg-[#161310] text-white p-7 sm:p-8 flex flex-col justify-between min-h-[420px] shadow-xl border border-white/10 group hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Atmospheric Background with Warm Lighting */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
                                    aria-hidden="true"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient}`} aria-hidden="true" />

                                {/* Card Header */}
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 text-xs text-[#D4CEBF] font-medium">
                                        <Icon className="w-4 h-4 text-[#4ADE80]" />
                                        <span>{item.sub}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mt-3">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-xs sm:text-sm text-[#C8C2B7] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Metric Typography */}
                                <div className="relative z-10 pt-6 border-t border-white/10">
                                    <div className="font-mono text-2xl font-bold text-[#4ADE80] tracking-tight">
                                        {item.badge}
                                    </div>
                                    <div className="text-xs text-[#C8C2B7] mt-1">
                                        {item.badgeDesc}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 6-Stage Connected Pipeline Process Steps */}
                <div className="mt-20 pt-16 border-t border-[#E8E4DE]">
                    <div className="text-center max-w-xl mx-auto mb-10">
                        <h3 className="text-xl font-bold text-[#1D1914]">
                            Alur Pengerjaan 6 Tahap
                        </h3>
                        <p className="text-xs sm:text-sm text-[#70685C] mt-1">
                            Disiplin tahapan ketat untuk menjamin kepastian kualitas dan hasil.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {pipelineSteps.map((step, idx) => (
                            <div
                                key={idx}
                                className="rounded-2xl bg-white p-5 border border-[#E8E4DE] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                            >
                                <span className="text-xs font-mono font-bold text-[#70685C]">
                                    {step.step}
                                </span>
                                <div className="mt-4">
                                    <h4 className="text-base font-bold text-[#1D1914]">
                                        {step.name}
                                    </h4>
                                    <p className="text-xs text-[#70685C] mt-1">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
