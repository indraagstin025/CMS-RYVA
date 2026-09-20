import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import {
    Eye,
    Radio,
    Cpu,
    Workflow,
    ArrowRight,
    ExternalLink,
    Filter,
} from 'lucide-react';

export default function Portfolio() {
    const [selectedStage, setSelectedStage] = useState('All');

    const stages = ['All', 'Product', 'Solution Service', 'Validated PoC', 'Applied Research'];

    const projects = [
        {
            id: 'qc-manufaktur',
            title: 'Sistem Inspeksi Visual Otomatis untuk Kendali Mutu Manufaktur',
            stage: 'Product',
            stageColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
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
            title: 'Rig Telemetri Nirkabel untuk Pemantauan Agrikultur Presisi',
            stage: 'Solution Service',
            stageColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
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
            title: 'Pelacak Telemetri Suhu Berdaya Mandiri untuk Logistik Rantai Dingin',
            stage: 'Validated PoC',
            stageColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
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
            title: 'Optimasi Model Deep Learning untuk Permukaan Material Reflektif',
            stage: 'Applied Research',
            stageColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
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
            title="Portofolio Riset & Implementasi"
            description="Daftar studi kasus proyek riset terapan, purwarupa, dan solusi teknologi yang dikembangkan oleh RYVA.ID."
        >
            {/* Header */}
            <section className="py-16 lg:py-24 border-b border-slate-800/60 bg-[#0C101A]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                            Studi Kasus & Eksekusi
                        </span>
                        <h1 className="mt-3 text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                            Portofolio Inovasi dari Purwarupa ke Produk
                        </h1>
                        <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                            Setiap proyek di bawah ini menggambarkan perjalanan riset kami: dimulai dari identifikasi masalah, eksperimen laboratorium, validasi lapangan, hingga menjadi solusi yang stabil.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-8 border-b border-slate-800/60 bg-[#090D15] sticky top-20 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5 shrink-0 mr-2">
                            <Filter className="w-3.5 h-3.5 text-emerald-400" />
                            Filter Tahapan:
                        </span>
                        {stages.map((stage) => (
                            <button
                                key={stage}
                                type="button"
                                onClick={() => setSelectedStage(stage)}
                                className={`px-3.5 py-1.5 min-h-[44px] rounded-lg text-xs font-medium shrink-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 flex items-center ${
                                    selectedStage === stage
                                        ? 'bg-emerald-500 text-slate-950 font-semibold'
                                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                                }`}
                            >
                                {stage}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Showcase */}
            <section className="py-20 lg:py-28 border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-10">
                        {filteredProjects.map((project) => {
                            const Icon = project.icon;
                            return (
                                <div
                                    key={project.id}
                                    className="p-8 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800/80">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                                    <span
                                                        className={`px-2.5 py-0.5 rounded text-[11px] font-mono border font-semibold ${project.stageColor}`}
                                                    >
                                                        {project.stage}
                                                    </span>
                                                    <span className="text-xs text-slate-400 font-mono">
                                                        {project.domain}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3 Steps: Problem -> Research -> Solution */}
                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                                            <span className="text-xs font-mono uppercase tracking-wider text-rose-400 block mb-1.5">
                                                01. Masalah Awal
                                            </span>
                                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                                {project.problem}
                                            </p>
                                        </div>

                                        <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                                            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-1.5">
                                                02. Pendekatan Riset
                                            </span>
                                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                                {project.research}
                                            </p>
                                        </div>

                                        <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                                            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-1.5">
                                                03. Hasil Implementasi
                                            </span>
                                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stack Badges */}
                                    <div className="mt-6 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-xs text-slate-500 font-mono mr-1">
                                                Stack:
                                            </span>
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/40"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                                        >
                                            Diskusikan Solusi Serupa
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
