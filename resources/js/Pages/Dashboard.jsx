import React from 'react';
import { Link, Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    FileText,
    CheckCircle2,
    Clock,
    FolderTree,
    Image,
    Plus,
    ArrowUpRight,
    Edit,
    MessageSquare,
} from 'lucide-react';

export default function Dashboard({ stats, recentArticles = [] }) {
    // Default mock stats if not provided by controller yet
    const dataStats = stats || {
        totalArticles: 4,
        publishedArticles: 3,
        draftArticles: 1,
        totalCategories: 5,
        totalMedia: 12,
        unreadInquiries: 2,
    };

    const articles =
        recentArticles.length > 0
            ? recentArticles
            : [
                  {
                      id: 1,
                      title: 'Penerapan Computer Vision untuk Otomasi Quality Control pada Lini Manufaktur',
                      category: 'Computer Vision',
                      status: 'published',
                      published_at: '20 Sep 2026',
                  },
                  {
                      id: 2,
                      title: 'Arsitektur Sensor IoT Berdaya Rendah untuk Pemantauan Lahan Agrikultur Presisi',
                      category: 'Internet of Things',
                      status: 'published',
                      published_at: '15 Sep 2026',
                  },
                  {
                      id: 3,
                      title: 'Metodologi Research to Reality: Menjembatani Eksperimen Lab ke Dunia Nyata',
                      category: 'Applied Research',
                      status: 'published',
                      published_at: '08 Sep 2026',
                  },
                  {
                      id: 4,
                      title: 'Panduan Rancang Bangun Perangkat Embedded untuk Kondisi Suhu & Getaran Ekstrem',
                      category: 'Hardware Engineering',
                      status: 'draft',
                      published_at: 'Draft',
                  },
              ];

    const statCards = [
        {
            title: 'Total Artikel',
            value: dataStats.totalArticles,
            icon: FileText,
            color: 'text-emerald-700',
            bg: 'bg-emerald-50',
            border: 'border-emerald-200/70',
        },
        {
            title: 'Artikel Terbit',
            value: dataStats.publishedArticles,
            icon: CheckCircle2,
            color: 'text-sky-700',
            bg: 'bg-sky-50',
            border: 'border-sky-200/70',
        },
        {
            title: 'Draft Artikel',
            value: dataStats.draftArticles,
            icon: Clock,
            color: 'text-amber-700',
            bg: 'bg-amber-50',
            border: 'border-amber-200/70',
        },
        {
            title: 'Kategori Riset',
            value: dataStats.totalCategories,
            icon: FolderTree,
            color: 'text-indigo-700',
            bg: 'bg-indigo-50',
            border: 'border-indigo-200/70',
        },
        {
            title: 'Media Unggahan',
            value: dataStats.totalMedia,
            icon: Image,
            color: 'text-blue-700',
            bg: 'bg-blue-50',
            border: 'border-blue-200/70',
        },
        {
            title: 'Pesan Masuk Baru',
            value: dataStats.unreadInquiries,
            icon: MessageSquare,
            color: 'text-rose-700',
            bg: 'bg-rose-50',
            border: 'border-rose-200/70',
        },
    ];

    return (
        <AdminLayout title="Dashboard Ringkasan">
            <Head title="Dashboard Ringkasan | RYVA CMS" />

            {/* Top Overview Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                        Ringkasan Konten & Aktivitas
                    </h2>
                    <p className="text-xs text-slate-600 mt-1">
                        Kelola publikasi riset terapan, kategori, tag, dan aset media RYVA.ID.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/admin/articles/create"
                        className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                        <Plus className="w-4 h-4" />
                        Tulis Artikel Baru
                    </Link>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
                {statCards.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.title}
                            className={`p-4 rounded-xl bg-white border ${stat.border} shadow-sm flex flex-col justify-between`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs text-slate-600 font-medium truncate">
                                    {stat.title}
                                </span>
                                <div
                                    className={`w-7 h-7 rounded-lg ${stat.bg} flex items-center justify-center ${stat.color}`}
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                </div>
                            </div>
                            <div className="text-2xl font-bold text-slate-900 font-mono">
                                {stat.value}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Recent Articles Table */}
            <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
                <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-white">
                    <div>
                        <h3 className="text-sm font-bold text-slate-900">Artikel Terbaru</h3>
                        <p className="text-xs text-slate-500">
                            Daftar artikel yang baru saja dibuat atau diperbarui.
                        </p>
                    </div>
                    <Link
                        href="/admin/articles"
                        className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                    >
                        Lihat Semua Artikel
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50 text-slate-600 uppercase font-mono text-[11px] border-b border-slate-200">
                            <tr>
                                <th className="py-3.5 px-6 font-semibold">Judul Artikel</th>
                                <th className="py-3.5 px-6 font-semibold">Kategori</th>
                                <th className="py-3.5 px-6 font-semibold">Status</th>
                                <th className="py-3.5 px-6 font-semibold">Tanggal</th>
                                <th className="py-3.5 px-6 text-right font-semibold">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                            {articles.map((art) => (
                                <tr key={art.id} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="py-4 px-6 font-semibold text-slate-900 max-w-sm truncate">
                                        {art.title}
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200">
                                            {art.category}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        {art.status === 'published' ? (
                                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold">
                                                Diterbitkan
                                            </span>
                                        ) : (
                                            <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-semibold">
                                                Draft
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-4 px-6 font-mono text-slate-500 text-[11px]">
                                        {art.published_at}
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <div className="inline-flex items-center gap-2">
                                            <Link
                                                href={`/admin/articles/${art.id}/edit`}
                                                className="p-1.5 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                                                title="Edit Artikel"
                                            >
                                                <Edit className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}

