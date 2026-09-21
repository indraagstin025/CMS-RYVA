import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    UploadCloud,
    Image as ImageIcon,
    Copy,
    Trash2,
    Check,
} from 'lucide-react';

export default function MediaIndex({ media = [] }) {
    const defaultMedia = [
        {
            id: 1,
            filename: 'qc-inspection-rig.webp',
            url: '/storage/media/qc-inspection-rig.webp',
            size: '420 KB',
            mime_type: 'image/webp',
            alt_text: 'Kamera industri pendeteksi cacat komponen mikron pada konveyor',
            created_at: '20 Sep 2026',
        },
        {
            id: 2,
            filename: 'iot-telemetry-sensor.webp',
            url: '/storage/media/iot-telemetry-sensor.webp',
            size: '280 KB',
            mime_type: 'image/webp',
            alt_text: 'Sensor pemantau kelembaban dan nutrisi tanah di greenhouse',
            created_at: '15 Sep 2026',
        },
        {
            id: 3,
            filename: 'ryva-research-pipeline.svg',
            url: '/storage/media/ryva-research-pipeline.svg',
            size: '45 KB',
            mime_type: 'image/svg+xml',
            alt_text: 'Diagram alur inovasi dari masalah menuju produk skala luas',
            created_at: '10 Sep 2026',
        },
    ];

    const list = media.length > 0 ? media : defaultMedia;
    const [copiedId, setCopiedId] = useState(null);

    const handleCopyUrl = (item) => {
        navigator.clipboard.writeText(window.location.origin + item.url);
        setCopiedId(item.id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <AdminLayout title="Media Library">
            <Head title="Media Library | RYVA CMS" />

            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                        Pustaka Media & Aset Visual
                    </h2>
                    <p className="text-xs text-slate-600 mt-0.5">
                        Unggah dan kelola gambar sampul artikel, diagram sistem, dan dokumentasi visual (JPG, PNG, WEBP, SVG).
                    </p>
                </div>

                {/* Upload Dropzone Box */}
                <div className="p-8 rounded-2xl border-2 border-dashed border-slate-300 bg-white hover:border-emerald-600 transition-colors text-center space-y-3 shadow-sm cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mx-auto">
                        <UploadCloud className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-900">
                            Klik atau tarik file gambar ke area ini
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                            Format didukung: WEBP, JPG, PNG, SVG (Maksimal 5 MB per file)
                        </div>
                    </div>
                    <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/svg+xml"
                        className="hidden"
                        id="media-file-input"
                    />
                    <label
                        htmlFor="media-file-input"
                        className="inline-block px-4 py-2 min-h-[44px] leading-[28px] rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer shadow-sm transition-colors"
                    >
                        Pilih File dari Perangkat
                    </label>
                </div>

                {/* Media Grid */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                            Semua File ({list.length})
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {list.map((item) => (
                            <div
                                key={item.id}
                                className="group p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
                            >
                                <div className="h-36 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-slate-200 mb-3 relative">
                                    <div className="text-slate-400 flex flex-col items-center gap-1">
                                        <ImageIcon className="w-8 h-8" />
                                        <span className="text-[10px] font-mono uppercase font-semibold text-slate-500">
                                            {item.mime_type.split('/')[1]}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs font-semibold text-slate-900 truncate mb-1">
                                        {item.filename}
                                    </div>
                                    <div className="text-[11px] text-slate-500 font-mono mb-3">
                                        {item.size} • {item.created_at}
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                                    <button
                                        type="button"
                                        onClick={() => handleCopyUrl(item)}
                                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                                    >
                                        {copiedId === item.id ? (
                                            <>
                                                <Check className="w-3 h-3 text-emerald-700" />
                                                <span>Tersalin!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-3 h-3 text-emerald-700" />
                                                <span>Salin URL</span>
                                            </>
                                        )}
                                    </button>

                                    <button
                                        type="button"
                                        className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                                        title="Hapus File"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

