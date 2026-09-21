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
            <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-slate-50">
                <div className="max-w-md w-full text-center p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mx-auto">
                        <Compass className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold">
                            Status {status}
                        </span>
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h1>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="pt-2">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-sm transition-colors"
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

