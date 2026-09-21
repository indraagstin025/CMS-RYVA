import React from 'react';
import {
    Factory,
    ScanSearch,
    Sprout,
    Activity,
    TrendingUp,
    Settings2,
    Store,
    Users,
} from 'lucide-react';

export default function ContextsSection() {
    const contexts = [
        {
            title: 'Manufaktur Presisi',
            icon: Factory,
            desc: 'Otomatisasi proses, inspeksi, monitoring, dan sistem pendukung operasi manufaktur.',
        },
        {
            title: 'Kendali Mutu (QC)',
            icon: ScanSearch,
            desc: 'Computer Vision dan analitik untuk membantu inspeksi, klasifikasi, dan pemantauan kualitas.',
        },
        {
            title: 'Agrikultur Cerdas',
            icon: Sprout,
            desc: 'Sensor, IoT, dan analitik untuk pemantauan kondisi lingkungan serta pengambilan keputusan berbasis data.',
        },
        {
            title: 'Pemantauan & Telemetri',
            icon: Activity,
            desc: 'Sistem sensor dan komunikasi untuk mengirimkan data operasional dari lokasi yang membutuhkan pemantauan berkelanjutan.',
        },
        {
            title: 'Prediksi Kerusakan Mesin',
            icon: TrendingUp,
            desc: 'Analisis data sensor untuk membantu mendeteksi pola anomali dan mendukung pemeliharaan preventif.',
        },
        {
            title: 'Sistem Operasi Industri',
            icon: Settings2,
            desc: 'Integrasi data, dashboard operasional, dan sistem antarmuka untuk membantu visibilitas proses kerja.',
        },
        {
            title: 'Digitalisasi UMKM',
            icon: Store,
            desc: 'Teknologi yang membantu mengubah proses manual menjadi alur kerja yang lebih terukur dan mudah dioperasikan.',
        },
        {
            title: 'Layanan Publik & Komunitas',
            icon: Users,
            desc: 'Solusi teknologi tepat guna untuk kebutuhan pemantauan, informasi, dan pengelolaan fasilitas masyarakat.',
        },
    ];

    return (
        <section className="bg-[#F7F4F0] text-[#1D1914] py-20 md:py-28 border-b border-[#E8E4DE]">
            <div className="section-wrap">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#70685C] uppercase">
                        Sektor &amp; Domain
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1914] font-normal tracking-tight mt-3">
                        Penerapan di Sektor Nyata
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-[#70685C] leading-relaxed">
                        Penerapan solusi berbasis teknologi untuk kebutuhan operasional di berbagai sektor industri.
                    </p>
                </div>

                {/* 8 Context Cards in Warm Cream Grid */}
                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {contexts.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="rounded-2xl bg-white border border-[#E8E4DE] p-6 shadow-sm hover:shadow-md hover:border-[#D4CEBF] transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="h-10 w-10 rounded-xl bg-[#F7F4F0] border border-[#E8E4DE] flex items-center justify-center text-[#1D1914]">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#1D1914] mt-5">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2.5 text-xs sm:text-sm text-[#70685C] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
