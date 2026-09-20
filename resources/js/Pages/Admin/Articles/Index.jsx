import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    Plus,
    Search,
    Edit,
    Trash2,
    Eye,
    Filter,
    FileText,
    CheckCircle2,
    Clock,
    X,
} from 'lucide-react';

export default function ArticlesIndex({ articles = [], categories = [] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [articleToDelete, setArticleToDelete] = useState(null);

    const sampleArticles =
        articles.length > 0
            ? articles
            : [
                  {
                      id: 1,
                      title: 'Penerapan Computer Vision untuk Otomasi Quality Control pada Lini Manufaktur',
                      slug: 'penerapan-computer-vision-quality-control-manufaktur',
                      category: 'Computer Vision',
                      author: 'Tim Riset RYVA',
                      status: 'published',
                      published_at: '20 Sep 2026',
                  },
                  {
                      id: 2,
                      title: 'Arsitektur Sensor IoT Berdaya Rendah untuk Pemantauan Lahan Agrikultur Presisi',
                      slug: 'arsitektur-iot-telemetri-agrikultur-presisi',
                      category: 'Internet of Things',
                      author: 'Lab Hardware RYVA',
                      status: 'published',
                      published_at: '15 Sep 2026',
                  },
                  {
                      id: 3,
                      title: 'Metodologi Research to Reality: Menjembatani Eksperimen Lab ke Dunia Nyata',
                      slug: 'metodologi-research-to-reality-dalam-pengembangan-ai',
                      category: 'Applied Research',
                      author: 'Divisi Inovasi',
                      status: 'published',
                      published_at: '08 Sep 2026',
                  },
                  {
                      id: 4,
                      title: 'Panduan Rancang Bangun Perangkat Embedded untuk Kondisi Suhu & Getaran Ekstrem',
                      slug: 'desain-sistem-embedded-tahan-lingkungan-ekstrem',
                      category: 'Hardware Engineering',
                      author: 'Lab Hardware RYVA',
                      status: 'draft',
                      published_at: 'Draft',
                  },
              ];

    const filtered = sampleArticles.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const handleDelete = (article) => {
        setArticleToDelete(article);
        setDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        // Handle deletion via Inertia or local state
        setDeleteModalOpen(false);
        setArticleToDelete(null);
    };

    return (
        <AdminLayout title="Manajemen Artikel">
            <Head title="Manajemen Artikel | RYVA CMS" />

            <div className="space-y-6">
                {/* Header Action Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-white tracking-tight">
                            Daftar Artikel & Publikasi
                        </h2>
                        <p className="text-xs text-slate-400 mt-0.5">
                            Kelola penerbitan, draf, dan metadata SEO dari setiap artikel riset.
                        </p>
                    </div>

                    <Link
                        href="/admin/articles/create"
                        className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-emerald-500/10"
                    >
                        <Plus className="w-4 h-4" />
                        Tulis Artikel Baru
                    </Link>
                </div>

                {/* Search & Filter Bar */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari judul artikel..."
                            aria-label="Cari judul artikel"
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setStatusFilter('all')}
                            className={`px-3 py-1.5 min-h-[36px] rounded-lg text-xs font-semibold transition-colors ${
                                statusFilter === 'all'
                                    ? 'bg-emerald-500 text-slate-950'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                        >
                            Semua
                        </button>
                        <button
                            type="button"
                            onClick={() => setStatusFilter('published')}
                            className={`px-3 py-1.5 min-h-[36px] rounded-lg text-xs font-semibold transition-colors ${
                                statusFilter === 'published'
                                    ? 'bg-emerald-500 text-slate-950'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                        >
                            Diterbitkan
                        </button>
                        <button
                            type="button"
                            onClick={() => setStatusFilter('draft')}
                            className={`px-3 py-1.5 min-h-[36px] rounded-lg text-xs font-semibold transition-colors ${
                                statusFilter === 'draft'
                                    ? 'bg-emerald-500 text-slate-950'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                        >
                            Draft
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden">
                    {filtered.length === 0 ? (
                        <div className="text-center py-16 px-4">
                            <FileText className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                            <h3 className="text-sm font-bold text-white mb-1">
                                Tidak ada artikel yang ditemukan
                            </h3>
                            <p className="text-xs text-slate-400">
                                Coba sesuaikan kata kunci pencarian atau filter status Anda.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead className="bg-slate-950/60 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
                                    <tr>
                                        <th className="py-3.5 px-6">Judul Artikel</th>
                                        <th className="py-3.5 px-6">Kategori</th>
                                        <th className="py-3.5 px-6">Penulis</th>
                                        <th className="py-3.5 px-6">Status</th>
                                        <th className="py-3.5 px-6">Tanggal Rilis</th>
                                        <th className="py-3.5 px-6 text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                                    {filtered.map((art) => (
                                        <tr
                                            key={art.id}
                                            className="hover:bg-slate-800/30 transition-colors"
                                        >
                                            <td className="py-4 px-6 font-medium text-white max-w-sm truncate">
                                                {art.title}
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">
                                                    {art.category}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-slate-400">
                                                {art.author}
                                            </td>
                                            <td className="py-4 px-6">
                                                {art.status === 'published' ? (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold text-[11px]">
                                                        <CheckCircle2 className="w-3 h-3" />
                                                        Diterbitkan
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold text-[11px]">
                                                        <Clock className="w-3 h-3" />
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
                                                        href={`/articles/${art.slug}`}
                                                        target="_blank"
                                                        className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800"
                                                        title="Lihat di Web Publik"
                                                    >
                                                        <Eye className="w-3.5 h-3.5" />
                                                    </Link>
                                                    <Link
                                                        href={`/admin/articles/${art.id}/edit`}
                                                        className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800"
                                                        title="Edit Artikel"
                                                    >
                                                        <Edit className="w-3.5 h-3.5" />
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDelete(art)}
                                                        className="p-1.5 rounded text-rose-400 hover:text-rose-300 hover:bg-rose-500/10"
                                                        title="Hapus Artikel"
                                                    >
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {deleteModalOpen && articleToDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <h3 className="text-sm font-bold text-white">Konfirmasi Penghapusan</h3>
                            <button
                                type="button"
                                onClick={() => setDeleteModalOpen(false)}
                                className="text-slate-400 hover:text-white"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                            Apakah Anda yakin ingin menghapus artikel{' '}
                            <strong className="text-white">"{articleToDelete.title}"</strong>?
                            Tindakan ini tidak dapat dibatalkan.
                        </p>
                        <div className="flex justify-end gap-3 pt-2">
                            <button
                                type="button"
                                onClick={() => setDeleteModalOpen(false)}
                                className="px-4 py-2 min-h-[44px] rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                            >
                                Batalkan
                            </button>
                            <button
                                type="button"
                                onClick={confirmDelete}
                                className="px-4 py-2 min-h-[44px] rounded-lg bg-rose-600 hover:bg-rose-500 text-xs font-semibold text-white"
                            >
                                Hapus Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
