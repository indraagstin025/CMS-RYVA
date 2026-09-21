import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import {
    Eye,
    Radio,
    Cpu,
    Workflow,
    ArrowRight,
    Filter,
} from 'lucide-react';

export default function Portfolio() {
    const [selectedStage, setSelectedStage] = useState('All');

    const stages = ['All', 'Product', 'Solution Service', 'Validated PoC', 'Applied Research'];

    const projects = [
        {
            id: 'qc-manufaktur',
            code: 'PROJECT / 001',
            title: 'Sistem Inspeksi Visual Otomatis untuk Kendali Mutu Manufaktur',
            stage: 'Product',
            domain: 'Computer Vision',
            icon: Eye,
            problem:
                'Pemeriksaan manual terhadap cacat mikron pada suku cadang presisi sering kali tidak konsisten antar shift kerja dan memperlambat throughput lini produksi.',
            research:
                'Riset segmentasi permukaan reflektif menggunakan edge computing dan pencahayaan terpolarisasi terarah.',
            solution:
                'Stasiun kamera industri kompak terintegrasi langsung di atas konveyor produksi dengan deteksi anomali berkecepatan 120 FPS dan pencatatan riwayat otomatis.',
            technologies: ['PyTorch Edge', 'Industrial GigE Vision', 'Inference TensorRT', 'Modbus TCP'],
        },
        {
            id: 'iot-agrikultur',
            code: 'PROJECT / 002',
            title: 'Rig Telemetri Nirkabel untuk Pemantauan Agrikultur Presisi',
            stage: 'Solution Service',
            domain: 'Internet of Things',
            icon: Radio,
            problem:
                'Penggunaan air dan pupuk pada greenhouse skala menengah sering kali boros karena minimnya data kelembaban dan konduktivitas tanah secara real-time.',
            research:
                'Eksperimen kompensasi suhu sensor kapasitif tanah dan protokol transmisi LoRa berdaya sangat rendah (baterai tahan 18 bulan).',
            solution:
                'Jaringan node sensor mandiri berdaya solar mini yang mengirim data telemetri berkala ke gateway lokal dan dasbor analitik berbasis web.',
            technologies: ['LoRaWAN', 'FreeRTOS Microcontroller', 'Soil EC Sensors', 'Web Telemetry'],
        },
        {
            id: 'cold-chain-tracker',
            code: 'PROJECT / 003',
            title: 'Pelacak Telemetri Suhu Berdaya Mandiri untuk Logistik Rantai Dingin',
            stage: 'Validated PoC',
            domain: 'Embedded Systems',
            icon: Cpu,
            problem:
                'Fluktuasi suhu muatan farmasi dan bahan beku selama distribusi darat sering kali baru diketahui saat barang tiba di tujuan dalam kondisi rusak.',
            research:
                'Kajian algoritma kompresi data telemetri suhu dan mitigasi dead-zone jaringan seluler dengan buffering flash internal.',
            solution:
                'Unit pelacak tahan banting dengan sertifikasi food-grade yang memicu alarm instan saat suhu menyentuh ambang batas kritis.',
            technologies: ['LTE-M / NB-IoT', 'Ultra-Low Power MCU', 'Encrypted Flash Storage'],
        },
        {
            id: 'ai-defect-classification',
            code: 'PROJECT / 004',
            title: 'Optimasi Model Deep Learning untuk Permukaan Material Reflektif',
            stage: 'Applied Research',
            domain: 'Machine Learning',
            icon: Workflow,
            problem:
                'Pantulan cahaya pada komponen logam presisi sering kali menimbulkan false-positive tinggi pada algoritma deteksi cacat standar.',
            research:
                'Eksplorasi fungsi loss khusus yang mengombinasikan filter gradien tepi dengan arsitektur transformer visual.',
            solution:
                'Paper riset terapan dan repositori model benchmark yang siap digunakan untuk kasus inspeksi komponen logam aluminium dan stainless steel.',
            technologies: ['Vision Transformers', 'Self-Supervised Learning', 'Synthetic Data Augmentation'],
        },
    ];

    const filteredProjects =
        selectedStage === 'All'
            ? projects
            : projects.filter((p) => p.stage === selectedStage);

    return (
        <PublicLayout
            title="Portofolio Riset &amp; Implementasi"
            description="Daftar studi kasus proyek riset terapan, purwarupa, dan solusi teknologi yang dikembangkan oleh RYVA.ID."
        >
            {/* Header Hero */}
            <section className="tech-grid relative overflow-hidden bg-[#101412] py-20 text-white md:py-24">
                <div className="section-wrap relative">
                    <p className="canva-text eyebrow mb-4 text-[#b6ee63]">
                        03 / SELECTED WORK &amp; CASE STUDIES
                    </p>
                    <h1 className="canva-text max-w-3xl text-4xl font-bold tracking-[-.055em] text-white md:text-5xl">
                        Portofolio Inovasi dari Purwarupa ke Produk
                    </h1>
                    <p className="canva-text mt-5 max-w-2xl text-base leading-7 text-[#b8c3ba] md:text-lg">
                        Setiap proyek menggambarkan perjalanan riset kami: dimulai dari identifikasi masalah, eksperimen laboratorium, validasi lapangan, hingga menjadi solusi yang stabil.
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="border-b border-[#d7ddd6] bg-white py-6">
                <div className="section-wrap">
                    <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none" role="group" aria-label="Filter tahapan proyek">
                        <span className="mono text-xs text-[#59645b] font-bold flex items-center gap-1.5 shrink-0 mr-2 uppercase tracking-wider">
                            <Filter className="w-3.5 h-3.5 text-[#6c9f24]" />
                            Tahapan:
                        </span>
                        {stages.map((stage) => (
                            <button
                                key={stage}
                                type="button"
                                onClick={() => setSelectedStage(stage)}
                                className={`filter-button rounded-sm border border-[#b8c1b8] px-3.5 py-2 text-xs font-semibold shrink-0 transition-colors ${
                                    selectedStage === stage ? 'active' : ''
                                }`}
                                aria-pressed={selectedStage === stage}
                            >
                                {stage}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Showcase */}
            <section className="bg-[#f3f5f1] py-20 md:py-28 border-b border-[#d7ddd6]">
                <div className="section-wrap">
                    <div className="space-y-10">
                        {filteredProjects.map((project) => {
                            const Icon = project.icon;
                            return (
                                <article
                                    key={project.id}
                                    className="border border-[#d7ddd6] bg-white overflow-hidden shadow-sm"
                                >
                                    <div className="p-8 bg-[#101412] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-[#171d19] border border-white/20 flex items-center justify-center text-[#b6ee63] shrink-0">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="mono text-xs text-[#b6ee63] font-bold">
                                                        {project.code}
                                                    </span>
                                                    <span className="text-white/40">•</span>
                                                    <span className="mono text-xs text-[#8d9a8f] uppercase">
                                                        {project.stage}
                                                    </span>
                                                </div>
                                                <h2 className="text-xl sm:text-2xl font-bold tracking-[-.03em] text-white">
                                                    {project.title}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3 Steps: Problem -> Research -> Solution */}
                                    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white">
                                        <div className="p-5 border border-[#d7ddd6] bg-[#fbfcf9]">
                                            <span className="mono text-xs uppercase tracking-wider text-[#101412] font-bold block mb-2">
                                                01. Masalah Awal
                                            </span>
                                            <p className="text-sm text-[#59645b] leading-relaxed">
                                                {project.problem}
                                            </p>
                                        </div>

                                        <div className="p-5 border border-[#d7ddd6] bg-[#fbfcf9]">
                                            <span className="mono text-xs uppercase tracking-wider text-[#6c9f24] font-bold block mb-2">
                                                02. Pendekatan Riset
                                            </span>
                                            <p className="text-sm text-[#59645b] leading-relaxed">
                                                {project.research}
                                            </p>
                                        </div>

                                        <div className="p-5 border border-[#d7ddd6] bg-[#fbfcf9]">
                                            <span className="mono text-xs uppercase tracking-wider text-[#101412] font-bold block mb-2">
                                                03. Hasil Implementasi
                                            </span>
                                            <p className="text-sm text-[#59645b] leading-relaxed">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stack Badges */}
                                    <div className="px-8 py-5 border-t border-[#d7ddd6] bg-[#fbfcf9] flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="mono text-xs text-[#859187] mr-1 uppercase">
                                                Stack:
                                            </span>
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 text-xs mono bg-white text-[#101412] border border-[#d7ddd6]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <Link
                                            href="/contact"
                                            className="mono text-xs font-bold text-[#6c9f24] hover:text-[#101412] flex items-center gap-1 transition-colors"
                                        >
                                            Diskusikan Solusi Serupa
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
