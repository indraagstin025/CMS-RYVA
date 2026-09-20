import React, { useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Building2, HelpCircle } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        topic: 'Computer Vision & QC',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = {};
        if (!formData.name.trim()) errs.name = 'Nama lengkap wajib diisi.';
        if (!formData.email.trim() || !formData.email.includes('@'))
            errs.email = 'Alamat email valid wajib diisi.';
        if (!formData.message.trim()) errs.message = 'Deskripsi permasalahan wajib diisi.';

        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        // Simulate submission or handle Inertia submit
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({
                name: '',
                email: '',
                organization: '',
                topic: 'Computer Vision & QC',
                message: '',
            });
        }, 800);
    };

    return (
        <PublicLayout
            title="Kontak & Kolaborasi Riset"
            description="Hubungi tim RYVA.ID untuk mendiskusikan studi kelayakan riset terapan dan solusi teknologi industri."
        >
            {/* Header */}
            <section className="py-16 lg:py-24 border-b border-slate-800/60 bg-[#0C101A]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                            Kolaborasi & Kemitraan
                        </span>
                        <h1 className="mt-3 text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                            Mulai Diskusi Riset Bersama RYVA.ID
                        </h1>
                        <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                            Apakah Anda memiliki permasalahan operasional, kebutuhan purwarupa terapan, atau ingin mengeksplorasi potensi integrasi teknologi? Kami siap berdialog.
                        </p>
                    </div>
                </div>
            </section>

            {/* Form & Info Section */}
            <section className="py-20 lg:py-28 border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Info Column */}
                        <div className="lg:col-span-5 space-y-8">
                            <div>
                                <h2 className="text-xl font-bold text-white mb-3">
                                    Pendekatan Konsultasi Kami
                                </h2>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Kami memulai setiap interaksi dengan mendengarkan konteks permasalahan Anda di lapangan. Tidak ada komitmen awal; fokus kami adalah mengukur apakah teknologi tepat guna dapat menjawab kebutuhan Anda secara ekonomis dan terukur.
                                </p>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-slate-800">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                                            Email Korespondensi
                                        </div>
                                        <div className="text-sm font-semibold text-white mt-0.5">
                                            contact@ryva.id
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                                            Fokus Kolaborasi
                                        </div>
                                        <div className="text-sm font-semibold text-white mt-0.5">
                                            Manufaktur, Agrikultur, Logistik, UMKM & Industri Terapan
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl">
                                {isSuccess ? (
                                    <div className="text-center py-12 space-y-4">
                                        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                                            <CheckCircle2 className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">
                                            Pesan Kolaborasi Terkirim
                                        </h3>
                                        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                                            Terima kasih atas pesan Anda. Tim teknis RYVA.ID akan meninjau kebutuhan riset Anda dan menghubungi kembali melalui email dalam 1-2 hari kerja.
                                        </p>
                                        <div className="pt-4">
                                            <button
                                                type="button"
                                                onClick={() => setIsSuccess(false)}
                                                className="px-6 py-2.5 min-h-[44px] rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
                                            >
                                                Kirim Pesan Lainnya
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">
                                                Formulir Minat Kolaborasi
                                            </h3>
                                            <p className="text-xs text-slate-400">
                                                Silakan isi informasi singkat di bawah ini agar kami dapat mempersiapkan materi diskusi yang relevan.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                                    Nama Lengkap <span className="text-rose-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, name: e.target.value })
                                                    }
                                                    placeholder="Nama Anda"
                                                    className={`w-full px-3.5 py-2.5 min-h-[44px] rounded-lg bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                                                        errors.name
                                                            ? 'border-rose-500'
                                                            : 'border-slate-800 focus:border-emerald-500'
                                                    }`}
                                                />
                                                {errors.name && (
                                                    <p className="text-xs text-rose-400 mt-1">
                                                        {errors.name}
                                                    </p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                                    Alamat Email <span className="text-rose-400">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, email: e.target.value })
                                                    }
                                                    placeholder="email@instansi.com"
                                                    className={`w-full px-3.5 py-2.5 min-h-[44px] rounded-lg bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                                                        errors.email
                                                            ? 'border-rose-500'
                                                            : 'border-slate-800 focus:border-emerald-500'
                                                    }`}
                                                />
                                                {errors.email && (
                                                    <p className="text-xs text-rose-400 mt-1">
                                                        {errors.email}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                                    Perusahaan / Institusi (Opsional)
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.organization}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            organization: e.target.value,
                                                        })
                                                    }
                                                    placeholder="Nama perusahaan atau organisasi"
                                                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                                    Bidang / Topik Riset
                                                </label>
                                                <select
                                                    value={formData.topic}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, topic: e.target.value })
                                                    }
                                                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                                                >
                                                    <option value="Computer Vision & QC">
                                                        Computer Vision & Inspeksi Mutu
                                                    </option>
                                                    <option value="Applied AI & Machine Learning">
                                                        Applied AI & Machine Learning
                                                    </option>
                                                    <option value="IoT & Industrial Telemetry">
                                                        IoT & Telemetri Industri
                                                    </option>
                                                    <option value="Automation & Systems">
                                                        Otomasi & Sistem Cerdas
                                                    </option>
                                                    <option value="Lainnya">Diskusi Kebutuhan Lain</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                                Deskripsi Kebutuhan atau Masalah <span className="text-rose-400">*</span>
                                            </label>
                                            <textarea
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, message: e.target.value })
                                                }
                                                placeholder="Ceritakan gambaran masalah di lapangan atau ide riset yang ingin dijajaki..."
                                                className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                                                    errors.message
                                                        ? 'border-rose-500'
                                                            : 'border-slate-800 focus:border-emerald-500'
                                                }`}
                                            />
                                            {errors.message && (
                                                <p className="text-xs text-rose-400 mt-1">
                                                    {errors.message}
                                                </p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <span>Mengirimkan pesan...</span>
                                            ) : (
                                                <>
                                                    <span>Kirim Permohonan Diskusi</span>
                                                    <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
