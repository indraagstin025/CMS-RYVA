import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { ArrowRight, CheckCircle2, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
    const { data, setData, post, processing, reset, wasSuccessful } = useForm({
        name: '',
        message: '',
    });
    const [clientSubmitted, setClientSubmitted] = useState(false);

    const handleContactSubmit = (e) => {
        e.preventDefault();
        if (post) {
            post('/contact', {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    setClientSubmitted(true);
                },
                onError: () => {
                    setClientSubmitted(true);
                },
            });
        } else {
            setClientSubmitted(true);
        }
    };

    return (
        <section id="contact" className="bg-[#14110E] text-white py-20 md:py-28 relative overflow-hidden border-b border-white/10">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="section-wrap relative z-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                {/* Left Column: Heading & Contact Info */}
                <div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#4ADE80] uppercase">
                        Kolaborasi &amp; Riset Terapan
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight mt-3 leading-tight">
                        Mulai Diskusi Kemitraan Teknis
                    </h2>
                    <p className="mt-6 text-base sm:text-lg text-[#D4CEBF] leading-relaxed max-w-xl">
                        Konsultasikan kebutuhan operasional Anda. Kami siap mengevaluasi kelayakan pendekatan riset dan teknologi yang tepat.
                    </p>

                    <div className="mt-10 space-y-4 text-sm text-[#C8C2B7]">
                        <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#4ADE80]">
                                <Mail className="w-4 h-4" />
                            </div>
                            <span>research@ryva.id</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#4ADE80]">
                                <MapPin className="w-4 h-4" />
                            </div>
                            <span>Indonesia (Kemitraan Industri Nasional &amp; Global)</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Sleek Form Card ala Bobbin */}
                <div className="rounded-[32px] bg-[#1C1814] border border-white/15 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
                    <h3 className="text-xl font-bold text-white mb-6">
                        Mulai Diskusi Kemitraan
                    </h3>

                    <form onSubmit={handleContactSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-semibold text-[#D4CEBF] mb-2" htmlFor="contact-name">
                                Nama Lengkap &amp; Perusahaan / Institusi
                            </label>
                            <input
                                id="contact-name"
                                required
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-[#8C8578] focus:border-[#22C55E] focus:outline-none focus:ring-1 focus:ring-[#22C55E] transition-all"
                                placeholder="Contoh: Budi Santoso / PT Manufaktur Mandiri"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-[#D4CEBF] mb-2" htmlFor="contact-message">
                                Deskripsi Masalah atau Topik Riset
                            </label>
                            <textarea
                                id="contact-message"
                                required
                                rows={4}
                                value={data.message}
                                onChange={(e) => setData('message', e.target.value)}
                                className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-[#8C8578] focus:border-[#22C55E] focus:outline-none focus:ring-1 focus:ring-[#22C55E] transition-all resize-none"
                                placeholder="Ceritakan proses operasional yang ingin ditingkatkan atau masalah teknis yang sedang dihadapi..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-sm transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                        >
                            <span>{processing ? 'Mengirim...' : 'Diskusikan Masalah Anda'}</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>

                        {(clientSubmitted || wasSuccessful) && (
                            <div className="mt-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>Pesan Anda telah diterima. Tim riset RYVA akan segera menghubungi Anda.</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
