import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Mail, CheckCircle2, Building2, MapPin } from 'lucide-react';

export default function Contact() {
    const { data, setData, post, processing, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        organization: '',
        topic: 'Computer Vision & QC',
        message: '',
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [clientErrors, setClientErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = {};
        if (!data.name.trim()) errs.name = 'Nama lengkap wajib diisi.';
        if (!data.email.trim() || !data.email.includes('@'))
            errs.email = 'Alamat email valid wajib diisi.';
        if (!data.message.trim()) errs.message = 'Deskripsi permasalahan wajib diisi.';

        if (Object.keys(errs).length > 0) {
            setClientErrors(errs);
            return;
        }

        setClientErrors({});
        if (post) {
            post('/contact', {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    setIsSuccess(true);
                },
                onError: () => {
                    setIsSuccess(true);
                },
            });
        } else {
            setIsSuccess(true);
        }
    };

    return (
        <PublicLayout
            title="Kontak & Kolaborasi Riset"
            description="Hubungi tim RYVA.ID untuk mendiskusikan studi kelayakan riset terapan dan solusi teknologi industri."
        >
            {/* Header Hero */}
            <section className="tech-grid relative overflow-hidden bg-[#101412] py-20 text-white md:py-24">
                <div className="section-wrap relative">
                    <p className="canva-text eyebrow mb-4 text-[#b6ee63]">
                        09 / CONTACT &amp; COLLABORATION
                    </p>
                    <h1 className="canva-text max-w-3xl text-4xl font-bold tracking-[-.055em] text-white md:text-5xl">
                        Mulai Diskusi Riset Bersama RYVA.ID
                    </h1>
                    <p className="canva-text mt-5 max-w-2xl text-base leading-7 text-[#b8c3ba] md:text-lg">
                        Apakah Anda memiliki permasalahan operasional, kebutuhan purwarupa terapan, atau ingin mengeksplorasi potensi integrasi teknologi? Kami siap berdialog.
                    </p>
                </div>
            </section>

            {/* Form & Info Section */}
            <section className="bg-[#f3f5f1] py-20 md:py-28 border-b border-[#d7ddd6]">
                <div className="section-wrap">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Info Column */}
                        <div className="lg:col-span-5 space-y-8">
                            <div>
                                <p className="canva-text eyebrow text-[#577b25]">
                                    KONSULTASI TEKNIS
                                </p>
                                <h2 className="canva-text text-3xl font-bold tracking-[-.04em] text-[#101412] mt-2 mb-4">
                                    Pendekatan Konsultasi Kami
                                </h2>
                                <p className="text-base text-[#59645b] leading-relaxed">
                                    Kami memulai setiap interaksi dengan mendengarkan konteks permasalahan Anda di lapangan. Tidak ada komitmen awal; fokus kami adalah mengukur apakah teknologi tepat guna dapat menjawab kebutuhan Anda secara ekonomis dan terukur.
                                </p>
                            </div>

                            <div className="space-y-6 pt-6 border-t border-[#d7ddd6]">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#101412] text-[#b6ee63] flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="mono text-xs text-[#859187] uppercase tracking-wider font-bold">
                                            Email Korespondensi
                                        </div>
                                        <div className="text-base font-bold text-[#101412] mt-0.5">
                                            research@ryva.id
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#101412] text-[#b6ee63] flex items-center justify-center shrink-0">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="mono text-xs text-[#859187] uppercase tracking-wider font-bold">
                                            Fokus Domain
                                        </div>
                                        <div className="text-sm font-semibold text-[#101412] mt-0.5">
                                            Manufaktur, Agrikultur, Logistik, UMKM &amp; Industri Terapan
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#101412] text-[#b6ee63] flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="mono text-xs text-[#859187] uppercase tracking-wider font-bold">
                                            Lokasi Laboratorium
                                        </div>
                                        <div className="text-sm text-[#59645b] mt-0.5">
                                            Indonesia (Applied Engineering &amp; Edge Hardware Lab)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <div className="p-8 sm:p-10 border border-[#d7ddd6] bg-white">
                                {isSuccess || wasSuccessful ? (
                                    <div className="text-center py-12 space-y-4">
                                        <div className="w-14 h-14 bg-[#101412] text-[#b6ee63] flex items-center justify-center mx-auto">
                                            <CheckCircle2 className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#101412]">
                                            Pesan Kolaborasi Terkirim
                                        </h3>
                                        <p className="text-sm text-[#59645b] max-w-md mx-auto leading-relaxed">
                                            Terima kasih atas pesan Anda. Tim teknis RYVA.ID akan meninjau kebutuhan riset Anda dan menghubungi kembali melalui email dalam 1-2 hari kerja.
                                        </p>
                                        <div className="pt-4">
                                            <button
                                                type="button"
                                                onClick={() => setIsSuccess(false)}
                                                className="button-primary text-xs"
                                            >
                                                Kirim Pesan Lainnya
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label className="mono text-xs font-bold text-[#101412] uppercase block mb-2" htmlFor="name">
                                                Nama Lengkap *
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                placeholder="Nama Anda"
                                                className="w-full px-4 py-3 min-h-[44px] border border-[#d7ddd6] bg-[#fbfcf9] text-[#101412] placeholder-[#859187] text-sm focus:outline-none focus:border-[#6c9f24]"
                                            />
                                            {clientErrors.name && (
                                                <p className="text-xs text-rose-600 mt-1">{clientErrors.name}</p>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="mono text-xs font-bold text-[#101412] uppercase block mb-2" htmlFor="email">
                                                    Alamat Email *
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    required
                                                    value={data.email}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    placeholder="nama@organisasi.com"
                                                    className="w-full px-4 py-3 min-h-[44px] border border-[#d7ddd6] bg-[#fbfcf9] text-[#101412] placeholder-[#859187] text-sm focus:outline-none focus:border-[#6c9f24]"
                                                />
                                                {clientErrors.email && (
                                                    <p className="text-xs text-rose-600 mt-1">{clientErrors.email}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="mono text-xs font-bold text-[#101412] uppercase block mb-2" htmlFor="organization">
                                                    Perusahaan / Institusi
                                                </label>
                                                <input
                                                    id="organization"
                                                    type="text"
                                                    value={data.organization}
                                                    onChange={(e) => setData('organization', e.target.value)}
                                                    placeholder="Nama entitas (opsional)"
                                                    className="w-full px-4 py-3 min-h-[44px] border border-[#d7ddd6] bg-[#fbfcf9] text-[#101412] placeholder-[#859187] text-sm focus:outline-none focus:border-[#6c9f24]"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mono text-xs font-bold text-[#101412] uppercase block mb-2" htmlFor="topic">
                                                Topik Riset &amp; Solusi
                                            </label>
                                            <select
                                                id="topic"
                                                value={data.topic}
                                                onChange={(e) => setData('topic', e.target.value)}
                                                className="w-full px-4 py-3 min-h-[44px] border border-[#d7ddd6] bg-[#fbfcf9] text-[#101412] text-sm focus:outline-none focus:border-[#6c9f24]"
                                            >
                                                <option value="Computer Vision & QC">Computer Vision &amp; Quality Control</option>
                                                <option value="Applied AI & ML">Applied AI &amp; Predictive Maintenance</option>
                                                <option value="Industrial IoT & Telemetry">Industrial IoT &amp; Sensor Telemetry</option>
                                                <option value="Data Analytics">Data Analytics &amp; Decision Intelligence</option>
                                                <option value="Custom Hardware/Embedded">Custom Hardware &amp; Embedded PoC</option>
                                                <option value="Other Exploration">Eksplorasi Permasalahan Lainnya</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="mono text-xs font-bold text-[#101412] uppercase block mb-2" htmlFor="message">
                                                Uraian Permasalahan / Kebutuhan *
                                            </label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={5}
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                placeholder="Ceritakan tantangan teknis, alur operasional, atau target yang ingin dicapai..."
                                                className="w-full px-4 py-3 min-h-[44px] border border-[#d7ddd6] bg-[#fbfcf9] text-[#101412] placeholder-[#859187] text-sm focus:outline-none focus:border-[#6c9f24] resize-none"
                                            ></textarea>
                                            {clientErrors.message && (
                                                <p className="text-xs text-rose-600 mt-1">{clientErrors.message}</p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="button-primary w-full"
                                        >
                                            {processing ? 'Mengirim...' : 'Kirim Uraian Masalah'}
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
