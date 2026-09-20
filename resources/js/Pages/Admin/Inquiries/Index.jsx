import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { MessageSquare, Mail, Building2, Calendar, CheckCircle2, Clock, Trash2 } from 'lucide-react';

export default function InquiriesIndex({ inquiries = [] }) {
    const defaultInquiries = [
        {
            id: 1,
            name: 'Budi Santoso',
            email: 'budi@manufakturpresisi.co.id',
            organization: 'PT Manufaktur Presisi Nusantara',
            topic: 'Computer Vision & QC',
            message:
                'Kami memiliki kendala tingginya rasio reject pada lini perakitan komponen aluminium. Ingin berkonsultasi mengenai kemungkinan pemasangan sistem inspeksi berbasis kamera industri.',
            status: 'unread',
            created_at: '20 Sep 2026, 14:32',
        },
        {
            id: 2,
            name: 'Dr. Hendra Wijaya',
            email: 'hendra.w@agri-smart.id',
            organization: 'AgriSmart Greenhouse',
            topic: 'IoT & Industrial Telemetry',
            message:
                'Tertarik mengintegrasikan modul telemetri LoRa untuk pemantauan nutrisi hidroponik skala 2 hektar. Apakah ada waktu untuk mendiskusikan studi kelayakan teknis?',
            status: 'read',
            created_at: '18 Sep 2026, 09:15',
        },
    ];

    const list = inquiries.length > 0 ? inquiries : defaultInquiries;

    return (
        <AdminLayout title="Pesan Masuk & Kolaborasi">
            <Head title="Pesan Masuk | RYVA CMS" />

            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                        Pesan Masuk & Minat Kolaborasi
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                        Daftar formulir permohonan diskusi riset dan kemitraan dari halaman kontak.
                    </p>
                </div>

                <div className="space-y-4">
                    {list.map((item) => (
                        <div
                            key={item.id}
                            className={`p-6 rounded-2xl border transition-colors ${
                                item.status === 'unread'
                                    ? 'bg-slate-900/80 border-emerald-500/40'
                                    : 'bg-slate-900/40 border-slate-800'
                            }`}
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-base font-bold text-white">
                                            {item.name}
                                        </h3>
                                        {item.status === 'unread' ? (
                                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider">
                                                Baru
                                            </span>
                                        ) : (
                                            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px]">
                                                Sudah Dibaca
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <Mail className="w-3.5 h-3.5 text-slate-500" />
                                            {item.email}
                                        </span>
                                        {item.organization && (
                                            <span className="flex items-center gap-1">
                                                <Building2 className="w-3.5 h-3.5 text-slate-500" />
                                                {item.organization}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="text-right text-xs font-mono text-slate-500">
                                    {item.created_at}
                                </div>
                            </div>

                            <div className="py-4 space-y-2">
                                <div className="text-xs font-semibold text-emerald-400 font-mono">
                                    Topik Riset: {item.topic}
                                </div>
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/60">
                                    "{item.message}"
                                </p>
                            </div>

                            <div className="pt-2 flex items-center justify-between text-xs">
                                <a
                                    href={`mailto:${item.email}?subject=Balasan Kolaborasi Riset RYVA.ID`}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 font-semibold transition-colors"
                                >
                                    <Mail className="w-3.5 h-3.5" />
                                    Balas via Email
                                </a>

                                <button
                                    type="button"
                                    className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                                    title="Hapus Pesan"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
}
