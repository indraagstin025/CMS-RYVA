import React from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import {
    Eye,
    Cpu,
    Radio,
    LineChart,
    Code2,
    Cog,
    Factory,
    Sprout,
    Truck,
    Building2,
    ArrowRight,
} from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: Eye,
            title: 'Computer Vision & Inspection Systems',
            subtitle: 'Deteksi Visual Berkecepatan Tinggi',
            desc: 'Pengembangan sistem computer vision presisi tinggi untuk inspeksi kendali mutu (quality control) produk, deteksi cacat mikron pada lini konveyor, dan pengenalan objek di lingkungan industri.',
            capabilities: [
                'Automated Defect Segmentation',
                'High-Speed Conveyor Tracking',
                'Thermal & Optical Dimension Inspection',
                'Edge Camera Hardware Integration',
            ],
        },
        {
            icon: Cpu,
            title: 'Applied AI & Machine Learning',
            subtitle: 'Model Cerdas Berorientasi Bukti',
            desc: 'Rancang bangun arsitektur machine learning untuk klasifikasi prediktif, pemodelan probabilitas kerusakan alat (predictive maintenance), dan optimasi keputusan alur operasional.',
            capabilities: [
                'Predictive Equipment Maintenance',
                'Deep Learning Custom Topologies',
                'Lightweight Edge AI Inference',
                'Continuous Data Drift Monitoring',
            ],
        },
        {
            icon: Radio,
            title: 'Industrial IoT & Telemetry Networks',
            subtitle: 'Konektivitas Sensorika & Lingkungan',
            desc: 'Penyusunan sistem telemetri sensor mandiri untuk pemantauan parameter fisik (suhu, getaran, kelembaban, tekanan) pada fasilitas pabrik, lahan agrikultur, dan armada logistik.',
            capabilities: [
                'Low-Power LoRa & Cellular Telemetry',
                'Microcontroller Hardware Firmware',
                'Edge-to-Cloud Synchronous Broker',
                'Sensor Calibration & Filtering',
            ],
        },
        {
            icon: LineChart,
            title: 'Data Analytics & Operational Intelligence',
            subtitle: 'Ekstraksi Wawasan dari Aliran Data',
            desc: 'Transformasi tumpukan data telemetri dan produksi menjadi dasbor interaktif, metriks efisiensi kerja (OEE), dan laporan analitik untuk pengambilan keputusan manajemen.',
            capabilities: [
                'Real-Time Telemetry Dashboards',
                'Anomaly Detection Pipelines',
                'Overall Equipment Effectiveness (OEE)',
                'Automated Operational Auditing',
            ],
        },
        {
            icon: Code2,
            title: 'Enterprise Software Engineering',
            subtitle: 'Fondasi Digital Handal & Modular',
            desc: 'Pengembangan platform perangkat lunak web dan sistem backend tangguh yang menjadi pusat integrasi antara sistem kecerdasan buatan, perangkat keras, dan antarmuka operasional pengguna.',
            capabilities: [
                'High-Throughput API Gateways',
                'Modular CMS & Enterprise Portals',
                'Role-Based Security & Audit Trails',
                'Cloud & On-Premise Deployments',
            ],
        },
        {
            icon: Cog,
            title: 'Automation & Intelligent Systems',
            subtitle: 'Otomasi Alur Kerja Terpadu',
            desc: 'Integrasi otomasi perangkat keras dan kontrol logika cerdas untuk memangkas pekerjaan repetitif, meningkatkan akurasi data produksi, dan mempercepat alur logistik.',
            capabilities: [
                'Automated Testing Rigs',
                'Industrial Protocol Interfacing (Modbus/OPC)',
                'Intelligent Sorting & Routing',
                'Human-in-the-Loop Safeguards',
            ],
        },
    ];

    const sectors = [
        {
            icon: Factory,
            title: 'Manufacturing',
            desc: 'Inspeksi mutu komponen, pemantauan kesehatan mesin, dan reduksi scrap produksi.',
        },
        {
            icon: Sprout,
            title: 'Agriculture',
            desc: 'Pemantauan iklim mikro lahan, kadar hara tanah otomatis, dan manajemen irigasi presisi.',
        },
        {
            icon: Truck,
            title: 'Logistics & Supply Chain',
            desc: 'Pelacakan aset berharga, telemetri kondisi muatan, dan estimasi waktu ketibaan pintar.',
        },
        {
            icon: Building2,
            title: 'MSME & Public Services',
            desc: 'Digitalisasi alur inventaris, otomasi layanan masyarakat, dan sistem pemantauan fasilitas umum.',
        },
    ];

    return (
        <PublicLayout
            title="Fokus & Layanan Riset"
            description="Area fokus teknologi terapan dan kapabilitas teknis RYVA.ID di bidang AI, Computer Vision, IoT, dan Otomasi."
        >
            {/* Header */}
            <section className="py-16 lg:py-24 border-b border-slate-800/60 bg-[#0C101A]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                            Kapabilitas Teknis
                        </span>
                        <h1 className="mt-3 text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                            Solusi Terapan Berbasis Riset Empiris
                        </h1>
                        <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                            Kami tidak membatasi diri pada satu teknologi teoritis. Fokus kami berpusat pada teknologi yang memiliki daya ungkit nyata untuk menuntaskan permasalahan operasional.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 lg:py-28 border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((srv) => {
                            const Icon = srv.icon;
                            return (
                                <div
                                    key={srv.title}
                                    className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-mono text-emerald-400/90 mb-1 block">
                                            {srv.subtitle}
                                        </span>
                                        <h3 className="text-lg font-bold text-white mb-3">
                                            {srv.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                                            {srv.desc}
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-5 border-t border-slate-800/70">
                                        <span className="text-xs font-semibold text-slate-300 block mb-2">
                                            Cakupan Kapabilitas:
                                        </span>
                                        <ul className="space-y-1.5 text-xs text-slate-400">
                                            {srv.capabilities.map((cap) => (
                                                <li key={cap} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                                    <span>{cap}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Target Sectors */}
            <section className="py-20 lg:py-28 bg-[#0C101A] border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mb-12">
                        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                            Penerapan Lapangan
                        </span>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                            Sektor Industri yang Kami Dukung
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                            Fokus kami bukan pada skala perusahaan, melainkan pada kejelasan masalah yang dapat dituntaskan melalui teknologi terapan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sectors.map((sec) => {
                            const Icon = sec.icon;
                            return (
                                <div
                                    key={sec.title}
                                    className="p-6 rounded-xl bg-slate-900/50 border border-slate-800"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-bold text-white mb-2">
                                        {sec.title}
                                    </h3>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        {sec.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 lg:py-20 bg-[#070A0F]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        Tertarik Mengeksplorasi Riset Bersama Tim Kami?
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
                        Kami mengundang praktisi industri, pemilik usaha, dan institusi untuk mendiskusikan studi kelayakan teknis permasalahan Anda.
                    </p>
                    <div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-colors"
                        >
                            Jadwalkan Diskusi Awal
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
