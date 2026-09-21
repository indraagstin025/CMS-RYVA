import React from 'react';
import {
    ShieldCheck,
    Lock,
    Cpu,
    Headphones,
    BrainCircuit,
    Network,
    ScanLine,
    RadioTower,
    BarChart3,
    Code2,
    Bot,
    Layers,
} from 'lucide-react';

export default function DisciplinesSection() {
    const trustCards = [
        {
            icon: ShieldCheck,
            title: 'Arsitektur Edge & On-Premise',
            desc: 'Komputasi lokal sedekat mungkin dengan sumber data untuk latensi rendah dan kemandirian jaringan.',
        },
        {
            icon: Lock,
            title: 'Integritas & Privasi Data',
            desc: 'Jaminan kedaulatan data operasional dengan kontrol akses dan penyimpanan aman di infrastruktur Anda.',
        },
        {
            icon: Cpu,
            title: 'Validasi Kondisi Nyata',
            desc: 'Pengujian ketat pada variasi pencahayaan, suhu, dan getaran operasional lapangan sesungguhnya.',
        },
        {
            icon: Headphones,
            title: 'Dukungan Berkelanjutan',
            desc: 'Pemantauan sistem, kalibrasi berkala, dan pemeliharaan berkesinambungan pasca-implementasi.',
        },
    ];

    const disciplines = [
        { name: 'Artificial Intelligence', icon: BrainCircuit },
        { name: 'Machine Learning', icon: Network },
        { name: 'Computer Vision', icon: ScanLine },
        { name: 'Internet of Things', icon: RadioTower },
        { name: 'Data Analytics', icon: BarChart3 },
        { name: 'Software Engineering', icon: Code2 },
        { name: 'Industrial Automation', icon: Bot },
        { name: 'Intelligent Systems', icon: Layers },
    ];

    return (
        <section className="bg-[#14110E] text-white py-20 md:py-28 border-b border-white/10">
            <div className="section-wrap">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#4ADE80] uppercase">
                        Standar Engineering
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight mt-3">
                        Dibangun untuk Keandalan di Dunia Nyata
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-[#D4CEBF] leading-relaxed">
                        Sistem dirancang untuk beroperasi andal dan konsisten pada kondisi operasional lapangan sesungguhnya.
                    </p>
                </div>

                {/* 4 Trust Cards ala Bobbin */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {trustCards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={idx}
                                className="rounded-3xl bg-[#1C1814] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-white/25 transition-all shadow-xl"
                            >
                                <div>
                                    <div className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#4ADE80]">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mt-6">
                                        {card.title}
                                    </h3>
                                    <p className="mt-3 text-xs sm:text-sm text-[#C8C2B7] leading-relaxed">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 8 Technology Disciplines Pill Cloud */}
                <div className="mt-16 pt-12 border-t border-white/10">
                    <div className="text-center mb-6">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#A8A196]">
                            Disiplin Teknologi Inti
                        </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
                        {disciplines.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs sm:text-sm font-medium transition-colors"
                                >
                                    <Icon className="w-4 h-4 text-[#4ADE80]" />
                                    <span>{item.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
