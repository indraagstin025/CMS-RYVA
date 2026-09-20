import React from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { ArrowLeft, Compass } from 'lucide-react';

export default function Error({ status = 404 }) {
    const title = {
        503: '503: Layanan Sedang Pemeliharaan',
        500: '500: Terjadi Kendala Sistem',
        404: '404: Halaman Tidak Ditemukan',
        403: '403: Akses Ditolak',
    }[status] || 'Terjadi Kendala';

    const description = {
        503: 'Mohon maaf, sistem kami sedang menjalani pemeliharaan berkala untuk peningkatan performa. Silakan kunjungi beberapa saat lagi.',
        500: 'Terjadi kesalahan teknis pada sistem kami. Tim kami sedang menindaklanjuti kendala ini.',
        404: 'Halaman atau artikel yang Anda tuju tidak ditemukan atau telah dipindahkan ke tautan lain.',
        403: 'Mohon maaf, Anda tidak memiliki hak akses untuk membuka halaman ini.',
    }[status] || 'Terjadi kendala saat memuat halaman.';

    return (
        <PublicLayout title={title}>
            <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
                <div className="max-w-md w-full text-center p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                        <Compass className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                            Status {status}
                        </span>
                        <h1 className="text-2xl font-bold text-white tracking-tight">{title}</h1>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="pt-2">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Kembali ke Beranda
                        </Link>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
