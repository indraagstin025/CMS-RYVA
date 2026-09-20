import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Plus, Trash2, Tags, X } from 'lucide-react';

export default function TagsIndex({ tags = [] }) {
    const defaultTags = [
        { id: 1, name: 'AI Vision', slug: 'ai-vision', articles_count: 2 },
        { id: 2, name: 'Edge Computing', slug: 'edge-computing', articles_count: 3 },
        { id: 3, name: 'Smart Agriculture', slug: 'smart-agriculture', articles_count: 1 },
        { id: 4, name: 'LoRaWAN', slug: 'lorawan', articles_count: 1 },
        { id: 5, name: 'Methodology', slug: 'methodology', articles_count: 1 },
        { id: 6, name: 'Deep Learning', slug: 'deep-learning', articles_count: 2 },
        { id: 7, name: 'Industrial QC', slug: 'industrial-qc', articles_count: 1 },
    ];

    const list = tags.length > 0 ? tags : defaultTags;
    const [tagName, setTagName] = useState('');

    const handleCreateTag = (e) => {
        e.preventDefault();
        if (!tagName.trim()) return;
        setTagName('');
    };

    return (
        <AdminLayout title="Manajemen Tag">
            <Head title="Manajemen Tag | RYVA CMS" />

            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                        Tag & Topik Spesifik
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                        Berikan label spesifik untuk menghubungkan artikel dengan topik terkait.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Add Tag Form (4 cols) */}
                    <div className="lg:col-span-4">
                        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                            <h3 className="text-sm font-bold text-white">Tambah Tag Baru</h3>
                            <form onSubmit={handleCreateTag} className="space-y-3">
                                <div>
                                    <label className="block text-xs text-slate-400 mb-1">
                                        Nama Tag
                                    </label>
                                    <input
                                        type="text"
                                        value={tagName}
                                        onChange={(e) => setTagName(e.target.value)}
                                        placeholder="Contoh: TensorRT, Sensorika..."
                                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                    Tambahkan Tag
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Tag Cloud & List (8 cols) */}
                    <div className="lg:col-span-8">
                        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                            <h3 className="text-sm font-bold text-white">Daftar Tag Aktif</h3>

                            <div className="flex flex-wrap gap-2.5">
                                {list.map((tag) => (
                                    <div
                                        key={tag.id}
                                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-slate-200"
                                    >
                                        <span>#{tag.name}</span>
                                        <span className="px-1.5 py-0.2 rounded-full bg-slate-900 text-emerald-400 text-[10px]">
                                            {tag.articles_count}
                                        </span>
                                        <button
                                            type="button"
                                            className="text-slate-400 hover:text-rose-400 transition-colors ml-0.5"
                                            title="Hapus Tag"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
