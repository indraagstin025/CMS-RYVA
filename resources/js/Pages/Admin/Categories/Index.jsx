import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Plus, Edit, Trash2, FolderTree, X, Check } from 'lucide-react';

export default function CategoriesIndex({ categories = [] }) {
    const defaultCategories = [
        {
            id: 1,
            name: 'Computer Vision',
            slug: 'computer-vision',
            description: 'Riset sistem inspeksi visual industri, deteksi cacat mikron, dan tracking konveyor.',
            articles_count: 3,
        },
        {
            id: 2,
            name: 'Artificial Intelligence',
            slug: 'artificial-intelligence',
            description: 'Model machine learning terapan, pemodelan prediktif, dan edge AI inference.',
            articles_count: 2,
        },
        {
            id: 3,
            name: 'Internet of Things',
            slug: 'internet-of-things',
            description: 'Telemetri nirkabel sensorik berdaya rendah, embedded systems, dan gateway industri.',
            articles_count: 2,
        },
        {
            id: 4,
            name: 'Applied Research',
            slug: 'applied-research',
            description: 'Metodologi validasi lapangan dan konversi hasil riset menjadi solusi nyata.',
            articles_count: 1,
        },
        {
            id: 5,
            name: 'Hardware Engineering',
            slug: 'hardware-engineering',
            description: 'Rancang bangun sirkuit, mikrokontroler tahan lingkungan ekstrem, dan modul sensor.',
            articles_count: 1,
        },
    ];

    const list = categories.length > 0 ? categories : defaultCategories;

    const [modalOpen, setModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [form, setForm] = useState({ name: '', slug: '', description: '' });

    const openCreateModal = () => {
        setEditingCategory(null);
        setForm({ name: '', slug: '', description: '' });
        setModalOpen(true);
    };

    const openEditModal = (cat) => {
        setEditingCategory(cat);
        setForm({ name: cat.name, slug: cat.slug, description: cat.description || '' });
        setModalOpen(true);
    };

    const handleNameChange = (e) => {
        const val = e.target.value;
        const slug = val
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
        setForm({ ...form, name: val, slug });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalOpen(false);
    };

    return (
        <AdminLayout title="Manajemen Kategori">
            <Head title="Manajemen Kategori | RYVA CMS" />

            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-white tracking-tight">
                            Kategori Konten & Riset
                        </h2>
                        <p className="text-xs text-slate-400 mt-0.5">
                            Kelompokkan artikel dan studi kasus berdasarkan topik utama.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={openCreateModal}
                        className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-emerald-500/10"
                    >
                        <Plus className="w-4 h-4" />
                        Tambah Kategori
                    </button>
                </div>

                {/* Table */}
                <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-slate-950/60 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
                                <tr>
                                    <th className="py-3.5 px-6">Nama Kategori</th>
                                    <th className="py-3.5 px-6">Slug URL</th>
                                    <th className="py-3.5 px-6">Deskripsi</th>
                                    <th className="py-3.5 px-6">Jumlah Artikel</th>
                                    <th className="py-3.5 px-6 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60 text-slate-300">
                                {list.map((cat) => (
                                    <tr key={cat.id} className="hover:bg-slate-800/30 transition-colors">
                                        <td className="py-4 px-6 font-semibold text-white">
                                            {cat.name}
                                        </td>
                                        <td className="py-4 px-6 font-mono text-slate-400 text-[11px]">
                                            /categories/{cat.slug}
                                        </td>
                                        <td className="py-4 px-6 text-slate-400 max-w-xs truncate">
                                            {cat.description || '-'}
                                        </td>
                                        <td className="py-4 px-6 font-mono text-emerald-400 font-semibold">
                                            {cat.articles_count || 0}
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <div className="inline-flex items-center gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() => openEditModal(cat)}
                                                    className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800"
                                                    title="Edit Kategori"
                                                >
                                                    <Edit className="w-3.5 h-3.5" />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="p-1.5 rounded text-rose-400 hover:text-rose-300 hover:bg-rose-500/10"
                                                    title="Hapus Kategori"
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
                </div>
            </div>

            {/* Modal Form */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <h3 className="text-sm font-bold text-white">
                                {editingCategory ? 'Edit Kategori' : 'Tambah Kategori Baru'}
                            </h3>
                            <button
                                type="button"
                                onClick={() => setModalOpen(false)}
                                className="text-slate-400 hover:text-white"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1">
                                    Nama Kategori <span className="text-rose-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={handleNameChange}
                                    placeholder="Contoh: Computer Vision"
                                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-1">
                                    Slug
                                </label>
                                <input
                                    type="text"
                                    value={form.slug}
                                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono focus:outline-none focus:border-emerald-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1">
                                    Deskripsi Singkat
                                </label>
                                <textarea
                                    rows={3}
                                    value={form.description}
                                    onChange={(e) =>
                                        setForm({ ...form, description: e.target.value })
                                    }
                                    placeholder="Penjelasan topik kategori ini..."
                                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-xs font-bold text-slate-950"
                                >
                                    {editingCategory ? 'Simpan Perubahan' : 'Buat Kategori'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
