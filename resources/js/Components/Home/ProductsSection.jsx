import React from 'react';
import { ArrowRight, Cpu, Eye, Radio, Sparkles } from 'lucide-react';

export default function ProductsSection() {
    const products = [
        {
            name: 'VisionCore Inspection Engine',
            tag: 'READY FOR PILOT',
            isPilot: true,
            icon: Eye,
            description: 'Sistem inspeksi berbasis Computer Vision yang dirancang untuk membantu proses kendali mutu pada lini produksi tertentu.',
            specs: ['Edge AI Inference', 'Industrial Camera GigE', 'Integrasi PLC Modbus'],
            techStack: 'Computer Vision • Edge AI • Industrial Camera',
            cta: 'Ajukan Pengujian Pilot',
        },
        {
            name: 'IoT Telemetry Gateway Hub',
            tag: 'IN DEVELOPMENT',
            isPilot: false,
            icon: Radio,
            description: 'Sistem sensor dan gateway telemetri mandiri berdaya rendah untuk pemantauan parameter fisik lingkungan dan fasilitas operasional jarak jauh.',
            specs: ['LoRaWAN Sensor Mesh', 'Konsumsi Daya Rendah', 'Penyimpanan Data Lokal'],
            techStack: 'Sensor Network • LoRaWAN • Low-Power Hardware',
            cta: 'Diskusikan Kebutuhan',
        },
    ];

    return (
        <section id="products" className="bg-[#F7F4F0] text-[#1D1914] py-20 md:py-28 border-b border-[#E8E4DE]">
            <div className="section-wrap">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#70685C] uppercase">
                        Produk &amp; Modul Skalabel
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1914] font-normal tracking-tight mt-3">
                        Teknologi Siap Dikembangkan Menjadi Produk
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-[#70685C] leading-relaxed">
                        Solusi tervalidasi yang dikembangkan menjadi modul dan produk siap pakai untuk penerapan skala luas.
                    </p>
                </div>

                {/* 2 Big Product Cards ala Bobbin */}
                <div className="mt-14 grid gap-8 md:grid-cols-2">
                    {products.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="rounded-3xl bg-white border border-[#E8E4DE] p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group"
                            >
                                <div>
                                    {/* Top Status & Icon */}
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1D1914] bg-[#F7F4F0] px-3 py-1 rounded-md border border-[#E8E4DE]">
                                            {item.tag}
                                        </span>
                                        <div className="h-10 w-10 rounded-2xl bg-[#F7F4F0] border border-[#E8E4DE] flex items-center justify-center text-[#1D1914]">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#1D1914] mt-6">
                                        {item.name}
                                    </h3>

                                    <p className="mt-3 text-sm text-[#70685C] leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Specs Technical Tags */}
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {item.specs.map((s, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 rounded text-xs font-mono bg-[#F7F4F0] text-[#70685C] border border-[#E8E4DE]"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="mt-6 pt-5 border-t border-[#E8E4DE]">
                                        <span className="text-[10px] font-mono uppercase text-[#70685C] tracking-wider block">
                                            Teknologi Inti:
                                        </span>
                                        <span className="text-xs font-mono text-[#1D1914] mt-1 block">
                                            {item.techStack}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-4">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1D1914] hover:bg-black text-white font-bold text-xs transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <span>{item.cta}</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
