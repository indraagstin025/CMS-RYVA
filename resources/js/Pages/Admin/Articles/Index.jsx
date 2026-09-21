import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    Plus,
    Search,
    Edit,
    Trash2,
    Eye,
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
                        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                            Daftar Artikel & Publikasi
                        </h2>
                        <p className="text-xs text-slate-600 mt-0.5">
                            Kelola penerbitan, draf, dan metadata SEO dari setiap artikel riset.
                        </p>
                    </div>

                    <Link
                        href="/admin/articles/create"
                        className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                        <Plus className="w-4 h-4" />
                        Tulis Artikel Baru
                    </Link>
                </div>

                {/* Search & Filter Bar */}
                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari judul artikel..."
                            aria-label="Cari judul artikel"
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-emerald-600"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setStatusFilter('all')}
                            className={`px-3 py-1.5 min-h-[36px] rounded-lg text-xs font-semibold transition-colors ${
                                statusFilter === 'all'
                                    ? 'bg-emerald-600 text-white shadow-sm'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                        >
                            Semua
                        </button>
                        <button
                            type="button"
                            onClick={() => setStatusFilter('published')}
                            className={`px-3 py-1.5 min-h-[36px] rounded-lg text-xs font-semibold transition-colors ${
                                statusFilter === 'published'
                                    ? 'bg-emerald-600 text-white shadow-sm'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                        >
                            Diterbitkan
                        </button>
                        <button
                            type="button"
                            onClick={() => setStatusFilter('draft')}
                            className={`px-3 py-1.5 min-h-[36px] rounded-lg text-xs font-semibold transition-colors ${
                                statusFilter === 'draft'
                                    ? 'bg-emerald-600 text-white shadow-sm'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                        >
                            Draft
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
                    {filtered.length === 0 ? (
                        <div className="text-center py-16 px-4">
                            <FileText className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                            <h3 className="text-sm font-bold text-slate-900 mb-1">
                                Tidak ada artikel yang ditemukan
                            </h3>
                            <p className="text-xs text-slate-500">
                                Coba sesuaikan kata kunci pencarian atau filter status Anda.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead className="bg-slate-50 text-slate-600 uppercase font-mono text-[11px] border-b border-slate-200">
                                    <tr>
                                        <th className="py-3.5 px-6 font-semibold">Judul Artikel</th>
                                        <th className="py-3.5 px-6 font-semibold">Kategori</th>
                                        <th className="py-3.5 px-6 font-semibold">Penulis</th>
                                        <th className="py-3.5 px-6 font-semibold">Status</th>
                                        <th className="py-3.5 px-6 font-semibold">Tanggal Rilis</th>
                                        <th className="py-3.5 px-6 text-right font-semibold">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-slate-700">
                                    {filtered.map((art) => (
                                        <tr
                                            key={art.id}
                                            className="hover:bg-slate-50/80 transition-colors"
                                        >
                                            <td className="py-4 px-6 font-semibold text-slate-900 max-w-sm truncate">
                                                {art.title}
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200">
                                                    {art.category}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-slate-600">
                                                {art.author}
                                            </td>
                                            <td className="py-4 px-6">
                                                {art.status === 'published' ? (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-[11px]">
                                                        <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                                                        Diterbitkan
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-semibold text-[11px]">
                                                        <Clock className="w-3 h-3 text-amber-700" />
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
                                                        href={`/articles/${art.slug}`}
                                                        target="_blank"
                                                        className="p-1.5 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                                                        title="Lihat di Web Publik"
                                                    >
                                                        <Eye className="w-3.5 h-3.5" />
                                                    </Link>
                                                    <Link
                                                        href={`/admin/articles/${art.id}/edit`}
                                                        className="p-1.5 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                                                        title="Edit Artikel"
                                                    >
                                                        <Edit className="w-3.5 h-3.5" />
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDelete(art)}
                                                        className="p-1.5 rounded text-rose-600 hover:text-rose-700 hover:bg-rose-50 transition-colors"
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
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                    <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xl">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                            <h3 className="text-sm font-bold text-slate-900">Konfirmasi Penghapusan</h3>
                            <button
                                type="button"
                                onClick={() => setDeleteModalOpen(false)}
                                className="text-slate-400 hover:text-slate-600"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            Apakah Anda yakin ingin menghapus artikel{' '}
                            <strong className="text-slate-900">"{articleToDelete.title}"</strong>?
                            Tindakan ini tidak dapat dibatalkan.
                        </p>
                        <div className="flex justify-end gap-3 pt-2">
                            <button
                                type="button"
                                onClick={() => setDeleteModalOpen(false)}
                                className="px-4 py-2 min-h-[44px] rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors"
                            >
                                Batalkan
                            </button>
                            <button
                                type="button"
                                onClick={confirmDelete}
                                className="px-4 py-2 min-h-[44px] rounded-lg bg-rose-600 hover:bg-rose-500 text-xs font-semibold text-white transition-colors"
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

