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
            subtitle: 'DETEKSI VISUAL BERKECEPATAN TINGGI',
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
            subtitle: 'MODEL CERDAS BERORIENTASI BUKTI',
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
            subtitle: 'KONEKTIVITAS SENSORIKA & LINGKUNGAN',
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
            subtitle: 'EKSTRAKSI WAWASAN DARI ALIRAN DATA',
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
            subtitle: 'FONDASI DIGITAL HANDAL & MODULAR',
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
            subtitle: 'OTOMASI ALUR KERJA TERPADU',
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
            {/* Header Hero */}
            <section className="tech-grid relative overflow-hidden bg-[#101412] py-20 text-white md:py-24">
                <div className="section-wrap relative">
                    <p className="canva-text eyebrow mb-4 text-[#b6ee63]">
                        02 / CAPABILITIES &amp; FOCUS
                    </p>
                    <h1 className="canva-text max-w-3xl text-4xl font-bold tracking-[-.055em] text-white md:text-5xl">
                        Solusi Terapan Berbasis Riset Empiris
                    </h1>
                    <p className="canva-text mt-5 max-w-2xl text-base leading-7 text-[#b8c3ba] md:text-lg">
                        Kami tidak membatasi diri pada satu teknologi teoritis. Fokus kami berpusat pada teknologi yang memiliki daya ungkit nyata untuk menuntaskan permasalahan operasional.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-[#f3f5f1] py-20 md:py-28 border-b border-[#d7ddd6]">
                <div className="section-wrap">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((srv) => {
                            const Icon = srv.icon;
                            return (
                                <article
                                    key={srv.title}
                                    className="canva-card system-card border border-[#d7ddd6] bg-white p-7 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-12 h-12 bg-[#101412] text-[#b6ee63] flex items-center justify-center mb-5">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="mono text-xs text-[#6c9f24] font-bold mb-2 block">
                                            {srv.subtitle}
                                        </span>
                                        <h2 className="text-xl font-bold text-[#101412] mb-3">
                                            {srv.title}
                                        </h2>
                                        <p className="text-sm text-[#59645b] leading-relaxed">
                                            {srv.desc}
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-5 border-t border-[#d7ddd6]">
                                        <span className="mono text-xs font-bold text-[#101412] block mb-3 uppercase tracking-wider">
                                            Cakupan Kapabilitas:
                                        </span>
                                        <ul className="space-y-1.5 text-xs text-[#59645b]">
                                            {srv.capabilities.map((cap) => (
                                                <li key={cap} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-[#6c9f24] shrink-0" />
                                                    <span>{cap}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Target Sectors */}
            <section className="bg-white py-20 md:py-28 border-b border-[#d7ddd6]">
                <div className="section-wrap">
                    <div className="max-w-2xl mb-12">
                        <p className="canva-text eyebrow text-[#577b25]">
                            PENERAPAN LAPANGAN
                        </p>
                        <h2 className="canva-text mt-2 text-3xl font-bold tracking-[-.04em] text-[#101412]">
                            Sektor Industri yang Kami Dukung
                        </h2>
                        <p className="mt-3 text-base text-[#59645b] leading-relaxed">
                            Fokus kami bukan pada skala perusahaan, melainkan pada kejelasan masalah yang dapat dituntaskan melalui teknologi terapan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sectors.map((sec) => {
                            const Icon = sec.icon;
                            return (
                                <article
                                    key={sec.title}
                                    className="canva-card application-card border border-[#d7ddd6] bg-[#fbfcf9] p-6"
                                >
                                    <div className="w-10 h-10 bg-[#f3f5f1] border border-[#d7ddd6] flex items-center justify-center text-[#101412] mb-4">
                                        <Icon className="w-5 h-5 text-[#6c9f24]" />
                                    </div>
                                    <h3 className="text-base font-bold text-[#101412] mb-2">
                                        {sec.title}
                                    </h3>
                                    <p className="text-xs text-[#59645b] leading-relaxed">
                                        {sec.desc}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-[#101412] py-20 text-white">
                <div className="section-wrap max-w-3xl text-center space-y-6">
                    <p className="canva-text eyebrow text-[#b6ee63]">
                        KOLABORASI RISET
                    </p>
                    <h2 className="canva-text text-2xl sm:text-4xl font-bold tracking-[-.04em]">
                        Tertarik Mengeksplorasi Riset Bersama Tim Kami?
                    </h2>
                    <p className="text-base text-[#a9b3ab] leading-relaxed">
                        Kami mengundang praktisi industri, pemilik usaha, dan institusi untuk mendiskusikan studi kelayakan teknis permasalahan Anda.
                    </p>
                    <div className="pt-4">
                        <Link
                            href="/contact"
                            className="button-primary"
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
