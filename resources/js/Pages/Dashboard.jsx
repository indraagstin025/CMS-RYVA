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
    Eye,
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
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/20',
        },
        {
            title: 'Artikel Diterbitkan',
            value: dataStats.publishedArticles,
            icon: CheckCircle2,
            color: 'text-cyan-400',
            bg: 'bg-cyan-500/10',
            border: 'border-cyan-500/20',
        },
        {
            title: 'Draft Belum Terbit',
            value: dataStats.draftArticles,
            icon: Clock,
            color: 'text-amber-400',
            bg: 'bg-amber-500/10',
            border: 'border-amber-500/20',
        },
        {
            title: 'Kategori Konten',
            value: dataStats.totalCategories,
            icon: FolderTree,
            color: 'text-purple-400',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/20',
        },
        {
            title: 'Media Unggahan',
            value: dataStats.totalMedia,
            icon: Image,
            color: 'text-blue-400',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20',
        },
        {
            title: 'Pesan Masuk Baru',
            value: dataStats.unreadInquiries,
            icon: MessageSquare,
            color: 'text-rose-400',
            bg: 'bg-rose-500/10',
            border: 'border-rose-500/20',
        },
    ];

    return (
        <AdminLayout title="Dashboard Ringkasan">
            <Head title="Dashboard Ringkasan | RYVA CMS" />

            {/* Top Overview Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                        Ringkasan Konten & Aktivitas
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                        Kelola publikasi riset terapan, kategori, tag, dan aset media RYVA.ID.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/admin/articles/create"
                        className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-emerald-500/20"
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
                            className={`p-4 rounded-xl bg-slate-900/60 border ${stat.border} flex flex-col justify-between`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs text-slate-400 font-medium truncate">
                                    {stat.title}
                                </span>
                                <div
                                    className={`w-7 h-7 rounded-lg ${stat.bg} flex items-center justify-center ${stat.color}`}
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                </div>
                            </div>
                            <div className="text-2xl font-bold text-white font-mono">
                                {stat.value}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Recent Articles Table */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden">
                <div className="p-5 sm:p-6 border-b border-slate-800/80 flex items-center justify-between">
                    <div>
                        <h3 className="text-sm font-bold text-white">Artikel Terbaru</h3>
                        <p className="text-xs text-slate-400">
                            Daftar artikel yang baru saja dibuat atau diperbarui.
                        </p>
                    </div>
                    <Link
                        href="/admin/articles"
                        className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                    >
                        Lihat Semua Artikel
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-slate-950/60 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
                            <tr>
                                <th className="py-3.5 px-6">Judul Artikel</th>
                                <th className="py-3.5 px-6">Kategori</th>
                                <th className="py-3.5 px-6">Status</th>
                                <th className="py-3.5 px-6">Tanggal</th>
                                <th className="py-3.5 px-6 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-300">
                            {articles.map((art) => (
                                <tr key={art.id} className="hover:bg-slate-800/30 transition-colors">
                                    <td className="py-4 px-6 font-medium text-white max-w-sm truncate">
                                        {art.title}
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">
                                            {art.category}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        {art.status === 'published' ? (
                                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold">
                                                Diterbitkan
                                            </span>
                                        ) : (
                                            <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-semibold">
                                                Draft
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-4 px-6 font-mono text-slate-400 text-[11px]">
                                        {art.published_at}
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <div className="inline-flex items-center gap-2">
                                            <Link
                                                href={`/admin/articles/${art.id}/edit`}
                                                className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
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
