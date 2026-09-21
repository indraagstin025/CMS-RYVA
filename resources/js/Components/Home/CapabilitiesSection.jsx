import React, { useState } from 'react';
import { Plus, X, Check, Eye, Cpu, ShieldCheck, CheckCircle2, Sparkles, Pencil } from 'lucide-react';

export default function CapabilitiesSection() {
    const [activeTab, setActiveTab] = useState(0);

    const partners = [
        'MANUFAKTUR PRESISI',
        'AGRI-TECH NUSANTARA',
        'LOGISTIK CERDAS',
        'SMART FACTORY',
        'ROBOTIKA INDUSTRI',
    ];

    const capabilities = [
        {
            subtitle: 'Formulasi & Eksplorasi',
            title: 'Model AI & Riset Terapan',
            summary: 'Perancangan arsitektur AI dan evaluasi pendekatan teknologi berdasarkan kebutuhan spesifik industri.',
            points: [
                'Perancangan model berbasis kebutuhan industri',
                'Penetapan objektif presisi, dataset, dan batas toleransi',
                'Optimasi efisiensi untuk komputasi edge lokal',
            ],
            mockup: {
                headerTitle: 'Inspeksi Cacat Komponen Presisi',
                headerMeta: 'Computer Vision Pipeline • 13-05-2026 • 15:00-16:00',
                icon: Eye,
                actionTitle: 'Formulasi pipeline AI terstruktur',
                actionDesc: 'Tentukan fokus pengujian untuk menghasilkan arsitektur model yang siap divalidasi.',
                placeholder: 'E.g. Deteksi cacat goresan mikroskopis perakitan logam dengan kamera 60 FPS dan latensi <12ms',
                buttonLabel: 'Formulasikan',
                suggestion1: 'Rancang pipeline inferensi edge <12ms untuk eliminasi false-positive perakitan...',
                suggestion2: 'Kalibrasi model pencahayaan dinamis untuk inspeksi permukaan reflektif...',
            },
        },
        {
            subtitle: 'Purwarupa & Sensor',
            title: 'Purwarupa Hardware & Edge IoT',
            summary: 'Perakitan modul mikrokontroler mandiri dan sensor presisi untuk pengujian kondisi lingkungan nyata.',
            points: [
                'Integrasi modul mikrokontroler (ESP32, LoRaWAN, Edge TPU)',
                'Evaluasi konsumsi daya baterai dan ketahanan lingkungan',
                'Transmisi telemetri stabil tanpa ketergantungan internet publik',
            ],
            mockup: {
                headerTitle: 'Node Telemetri LoRaWAN Mandiri',
                headerMeta: 'Edge Gateway • 13-05-2026 • 15:00-16:00',
                icon: Cpu,
                actionTitle: 'Konfigurasi jaringan sensor edge',
                actionDesc: 'Tentukan topologi node dan interval transmisi untuk pengujian ketahanan mandiri di lapangan.',
                placeholder: 'E.g. Pemantauan getaran mesin industri 3-sumbu dengan ambang batas anomali getaran 4.5 mm/s',
                buttonLabel: 'Konfigurasi',
                suggestion1: 'Konfigurasi interval telemetri hemat energi untuk sensor lapangan...',
                suggestion2: 'Kalibrasi sensor piezoelektrik untuk deteksi dini anomali bearing...',
            },
        },
        {
            subtitle: 'Pengujian Lapangan',
            title: 'Validasi Lapangan Terukur',
            summary: 'Pengujian langsung pada fasilitas operasional untuk memastikan keandalan sistem sebelum penerapan penuh.',
            points: [
                'Uji ketahanan 24/7 di bawah getaran dan suhu ekstrem industri',
                'Verifikasi akurasi inferensi terhadap data aktual',
                'Evaluasi kemudahan adopsi oleh operator lapangan',
            ],
            mockup: {
                headerTitle: 'Log Uji Ketahanan 72 Jam Nonstop',
                headerMeta: 'Stress Test Lapangan • 13-05-2026 • 15:00-16:00',
                icon: ShieldCheck,
                actionTitle: 'Jalankan protokol validasi lapangan',
                actionDesc: 'Pantau performa real-time, packet loss, dan stabilitas inferensi dalam skenario beban operasional penuh.',
                placeholder: 'E.g. Analisis stres pengujian 72 jam nonstop pada suhu kerja 55°C di lini manufaktur aktif',
                buttonLabel: 'Validasi',
                suggestion1: 'Evaluasi false-alarm pada siklus produksi berkecepatan tinggi...',
                suggestion2: 'Uji transmisi sensor saat terjadi interferensi frekuensi tinggi...',
            },
        },
        {
            subtitle: 'Penerapan & Skala',
            title: 'Deployment Skala Industri',
            summary: 'Pengemasan sistem tervalidasi menjadi solusi siap pakai dengan isolasi data on-premise dan SLA tinggi.',
            points: [
                'Paket kontainer mandiri siap integrasi PLC / SCADA',
                'Arsitektur on-premise menjamin kedaulatan data mitra',
                'Dokumentasi API lengkap dan pelatihan tim operasional',
            ],
            mockup: {
                headerTitle: 'Paket Deployment On-Premise v2.1',
                headerMeta: 'Industrial Engine • 13-05-2026 • 15:00-16:00',
                icon: CheckCircle2,
                actionTitle: 'Siapkan rilis sistem produksi',
                actionDesc: 'Konfigurasi integrasi API lokal, webhook alarm otomatis, dan manajemen hak akses tim operasional.',
                placeholder: 'E.g. Konfigurasi webhook notifikasi anomali ke dashboard kontrol pusat SCADA pabrik',
                buttonLabel: 'Deploy',
                suggestion1: 'Konfigurasi webhook notifikasi anomali ke dashboard kontrol SCADA...',
                suggestion2: 'Siapkan kontainer offline mandiri tanpa koneksi internet publik...',
            },
        },
    ];

    const currentItem = capabilities[activeTab];
    const MockupIcon = currentItem.mockup.icon;

    return (
        <section id="research" className="bg-[#F7F4F0] text-[#1D1914] pt-14 pb-24 md:pt-20 md:pb-32">
            {/* Top Partner / Trust Cloud Bar ala Bobbin */}
            <div className="section-wrap pb-12 text-center">
                <p className="text-xs uppercase tracking-widest text-[#70685C] font-medium mb-6 font-sans">
                    Dipercaya oleh mitra industri, manufaktur, dan institusi riset
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all font-sans">
                    {partners.map((partner, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#1D1914]/40"></span>
                            <span className="text-xs sm:text-sm font-semibold tracking-tight text-[#1D1914]">
                                {partner}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section Main Content */}
            <div className="section-wrap mt-10 md:mt-16">
                {/* Section Headline */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#70685C] uppercase">
                        Kapabilitas Rekayasa
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1914] font-normal tracking-tight mt-3">
                        Riset &amp; Kapabilitas Teknologi
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-[#70685C] leading-relaxed font-sans font-normal">
                        Eksplorasi mendalam untuk menyelesaikan tantangan operasional melalui teknologi yang teruji.
                    </p>
                </div>

                {/* Bobbin-Style Interactive Showcase Grid (Matching User Screenshot 1:1) */}
                <div className="mt-12 md:mt-16 grid lg:grid-cols-[1fr_1.25fr] gap-6 lg:gap-8 items-start">
                    {/* Left Column: Minimalist Accordion Cards */}
                    <div className="space-y-3 font-sans">
                        {capabilities.map((item, index) => {
                            const isOpen = activeTab === index;
                            return (
                                <div
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`rounded-2xl transition-all duration-200 cursor-pointer overflow-hidden ${
                                        isOpen
                                            ? 'bg-white p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
                                            : 'bg-white hover:bg-white/95 px-6 py-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-xs flex items-center justify-between'
                                    }`}
                                >
                                    {isOpen ? (
                                        <div>
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <span className="text-sm text-[#70685C] font-normal block">
                                                        {item.subtitle}
                                                    </span>
                                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1D1914] mt-1 tracking-tight">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="h-8 w-8 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white flex items-center justify-center shrink-0 shadow-xs transition-colors"
                                                    aria-label="Tutup detail"
                                                >
                                                    <X className="w-4 h-4 stroke-[2.5]" />
                                                </button>
                                            </div>

                                            <p className="mt-3.5 text-sm text-[#60594F] leading-relaxed font-normal">
                                                {item.summary}
                                            </p>

                                            <div className="mt-5 space-y-2.5">
                                                {item.points.map((pt, i) => (
                                                    <div key={i} className="flex items-start gap-2.5 text-sm text-[#1D1914]">
                                                        <div className="h-4.5 w-4.5 rounded-full bg-[#22C55E] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                                                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                                                        </div>
                                                        <span className="font-normal text-[#1D1914] leading-normal">{pt}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Bottom Progress Accent Bar ala Bobbin */}
                                            <div className="mt-6 pt-1">
                                                <div className="h-[3px] w-24 bg-[#22C55E] rounded-full"></div>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <h3 className="text-base sm:text-[17px] font-bold text-[#1D1914] tracking-tight">
                                                {item.title}
                                            </h3>
                                            <div className="h-8 w-8 rounded-full bg-[#F5F2ED] text-[#1D1914] flex items-center justify-center shrink-0 hover:bg-[#EBE7DF] transition-colors">
                                                <Plus className="w-4 h-4 stroke-[2.5]" />
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column: Exact Bobbin Minimalist Mockup Card */}
                    <div className="rounded-3xl bg-[#ECE8E1] p-4 sm:p-5 flex flex-col gap-3.5 shadow-xs font-sans">
                        {/* Mockup Top Header Strip with Cutout Notch */}
                        <div className="rounded-2xl bg-[#F7F4F0] p-4 sm:p-5 relative overflow-hidden shadow-xs">
                            {/* Signature Bobbin Left Tab Cutout */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-6 bg-[#ECE8E1] rounded-r-full" />
                            <div className="pl-2">
                                <h4 className="text-base sm:text-[17px] font-bold text-[#1D1914] tracking-tight">
                                    {currentItem.mockup.headerTitle}
                                </h4>
                                <p className="text-xs sm:text-[13px] text-[#70685C] mt-1 font-normal">
                                    {currentItem.mockup.headerMeta}
                                </p>
                            </div>
                        </div>

                        {/* Middle Action / Info Box */}
                        <div className="flex items-start gap-4 p-2 sm:p-3">
                            <div className="w-12 h-12 rounded-xl bg-[#22C55E] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                                <MockupIcon className="w-6 h-6 stroke-[2]" />
                            </div>
                            <div>
                                <h5 className="text-base font-bold text-[#1D1914] tracking-tight">
                                    {currentItem.mockup.actionTitle}
                                </h5>
                                <p className="text-xs sm:text-[13px] text-[#60594F] mt-1 leading-relaxed font-normal">
                                    {currentItem.mockup.actionDesc}
                                </p>
                            </div>
                        </div>

                        {/* Interactive Prompt / Input Box */}
                        <div className="rounded-2xl bg-white p-4 sm:p-5 shadow-xs flex flex-col justify-between min-h-[160px] relative">
                            <p className="text-sm text-[#9E978C] leading-relaxed font-normal pr-6">
                                {currentItem.mockup.placeholder}
                            </p>

                            {/* Sleek Mouse Pointer Graphic as in Bobbin screenshot */}
                            <div className="my-2 flex justify-center pointer-events-none select-none">
                                <svg
                                    className="w-5 h-5 text-[#1D1914] drop-shadow-xs"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 5.143V0z" />
                                </svg>
                            </div>

                            <div className="mt-3 flex items-center justify-between gap-3 pt-2">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1.5 text-xs text-[#70685C] hover:text-[#1D1914] font-medium transition-colors"
                                >
                                    <Sparkles className="w-3.5 h-3.5 text-[#8F887C]" />
                                    <span>Panduan Riset</span>
                                </button>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-xs sm:text-sm shadow-xs transition-all hover:scale-105 active:scale-95"
                                >
                                    <span>{currentItem.mockup.buttonLabel}</span>
                                    <span className="tracking-widest text-[11px] font-sans">••••</span>
                                </a>
                            </div>
                        </div>

                        {/* Suggestion Prompts Rows with Pencil Icon */}
                        <div className="space-y-1.5 px-1 pt-0.5">
                            <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#60594F] hover:text-[#1D1914] cursor-pointer transition-colors py-1">
                                <Pencil className="w-3.5 h-3.5 text-[#8F887C] shrink-0" />
                                <span className="truncate">{currentItem.mockup.suggestion1}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#9E978C] hover:text-[#60594F] cursor-pointer transition-colors py-1">
                                <Pencil className="w-3.5 h-3.5 text-[#B8B2A6] shrink-0" />
                                <span className="truncate">{currentItem.mockup.suggestion2}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


