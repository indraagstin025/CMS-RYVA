import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    ArrowLeft,
    Save,
    Image,
    Bold,
    Italic,
    Strikethrough,
    Heading,
    List,
    ListOrdered,
    Quote,
    Code,
    Link as LinkIcon,
    Globe,
} from 'lucide-react';

export default function ArticleForm({ article = null, categories = [], tags = [] }) {
    const isEdit = Boolean(article && article.id);

    const [form, setForm] = useState({
        title: article?.title || '',
        slug: article?.slug || '',
        category_id: article?.category_id || '',
        tags: article?.tags || [],
        excerpt: article?.excerpt || '',
        content: article?.content || '',
        status: article?.status || 'draft',
        published_at: article?.published_at || new Date().toISOString().split('T')[0],
        seo_title: article?.seo_title || '',
        seo_description: article?.seo_description || '',
    });

    const [tagInput, setTagInput] = useState('');
    const [seoAccordionOpen, setSeoAccordionOpen] = useState(false);

    // Auto-generate slug from title
    const handleTitleChange = (e) => {
        const val = e.target.value;
        const generatedSlug = val
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');

        setForm((prev) => ({
            ...prev,
            title: val,
            slug: isEdit ? prev.slug : generatedSlug,
            seo_title: isEdit ? prev.seo_title : val,
        }));
    };

    const handleAddTag = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const trimmed = tagInput.trim().replace(/^#/, '');
            if (trimmed && !form.tags.includes(trimmed)) {
                setForm((prev) => ({ ...prev, tags: [...prev.tags, trimmed] }));
            }
            setTagInput('');
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setForm((prev) => ({
            ...prev,
            tags: prev.tags.filter((t) => t !== tagToRemove),
        }));
    };

    // Insert formatting tag into textarea
    const insertFormat = (before, after = '') => {
        const textarea = document.getElementById('article-content-editor');
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const selected = text.substring(start, end);
        const replacement = `${before}${selected || 'teks'}${after}`;
        const newContent = text.substring(0, start) + replacement + text.substring(end);
        setForm((prev) => ({ ...prev, content: newContent }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Artikel berhasil disimpan (Mock).');
    };

    return (
        <AdminLayout title={isEdit ? 'Edit Artikel' : 'Tulis Artikel Baru'}>
            <Head title={`${isEdit ? 'Edit Artikel' : 'Tulis Artikel Baru'} | RYVA CMS`} />

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Top Action Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/admin/articles"
                            className="p-2 min-h-[44px] min-w-[44px] rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                                {isEdit ? 'Edit Artikel Riset' : 'Tulis Artikel Riset Baru'}
                            </h2>
                            <p className="text-xs text-slate-500">
                                Gunakan editor di bawah untuk menyusun artikel ilmiah atau pembaruan proyek.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="submit"
                            onClick={() => setForm((prev) => ({ ...prev, status: 'draft' }))}
                            className="px-4 py-2.5 min-h-[44px] rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                        >
                            Simpan Draft
                        </button>
                        <button
                            type="submit"
                            onClick={() => setForm((prev) => ({ ...prev, status: 'published' }))}
                            className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm"
                        >
                            <Save className="w-4 h-4" />
                            Terbitkan Artikel
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Editor Column (8 cols) */}
                    <div className="lg:col-span-8 space-y-6">
                        {/* Title & Slug */}
                        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Judul Artikel <span className="text-rose-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={form.title}
                                    onChange={handleTitleChange}
                                    placeholder="Contoh: Penerapan Computer Vision untuk Quality Control..."
                                    className="w-full px-4 py-3 min-h-[44px] rounded-lg bg-white border border-slate-300 text-slate-900 font-medium text-base placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-slate-500 mb-1">
                                    URL Slug
                                </label>
                                <div className="flex items-center rounded-lg bg-white border border-slate-300 overflow-hidden text-xs">
                                    <span className="px-3 py-2 bg-slate-50 text-slate-500 border-r border-slate-300 font-mono">
                                        /articles/
                                    </span>
                                    <input
                                        type="text"
                                        value={form.slug}
                                        onChange={(e) =>
                                            setForm({ ...form, slug: e.target.value })
                                        }
                                        className="w-full px-3 py-2 bg-transparent text-slate-800 font-mono focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Ringkasan / Excerpt (Wajib untuk Preview & SEO)
                                </label>
                                <textarea
                                    rows={2}
                                    value={form.excerpt}
                                    onChange={(e) =>
                                        setForm({ ...form, excerpt: e.target.value })
                                    }
                                    placeholder="Ringkasan singkat 1-2 kalimat mengenai isi artikel..."
                                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                                />
                            </div>
                        </div>

                        {/* Rich Text Editor */}
                        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
                            {/* Formatting Toolbar */}
                            <div className="p-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center gap-1">
                                <button
                                    type="button"
                                    onClick={() => insertFormat('## ', '\n')}
                                    className="p-2 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                                    title="Heading H2"
                                >
                                    <Heading className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => insertFormat('**', '**')}
                                    className="p-2 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                                    title="Tebal (Bold)"
                                >
                                    <Bold className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => insertFormat('*', '*')}
                                    className="p-2 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                                    title="Miring (Italic)"
                                >
                                    <Italic className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => insertFormat('~~', '~~')}
                                    className="p-2 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                                    title="Coret (Strikethrough)"
                                >
                                    <Strikethrough className="w-4 h-4" />
                                </button>
                                <div className="w-px h-5 bg-slate-300 mx-1" />
                                <button
                                    type="button"
                                    onClick={() => insertFormat('> ', '\n')}
                                    className="p-2 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                                    title="Kutipan (Blockquote)"
                                >
                                    <Quote className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => insertFormat('- ', '\n')}
                                    className="p-2 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                                    title="Daftar Poin (List)"
                                >
                                    <List className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => insertFormat('1. ', '\n')}
                                    className="p-2 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                                    title="Daftar Bernomor"
                                >
                                    <ListOrdered className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => insertFormat('```text\n', '\n```')}
                                    className="p-2 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                                    title="Blok Kode"
                                >
                                    <Code className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => insertFormat('[Judul Link](', ')')}
                                    className="p-2 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                                    title="Tautan Link"
                                >
                                    <LinkIcon className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Editor Textarea */}
                            <div className="p-4">
                                <textarea
                                    id="article-content-editor"
                                    rows={16}
                                    value={form.content}
                                    onChange={(e) =>
                                        setForm({ ...form, content: e.target.value })
                                    }
                                    placeholder="Tuliskan isi artikel lengkap di sini menggunakan Markdown atau HTML..."
                                    className="w-full p-3 bg-transparent text-slate-800 text-sm leading-relaxed font-sans focus:outline-none resize-y"
                                />
                            </div>
                        </div>

                        {/* SEO Section (Accordion) */}
                        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
                            <button
                                type="button"
                                onClick={() => setSeoAccordionOpen(!seoAccordionOpen)}
                                className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                            >
                                <div className="flex items-center gap-2">
                                    <Globe className="w-4 h-4 text-emerald-700" />
                                    <span className="text-xs font-bold text-slate-900">
                                        Pengaturan Metadata SEO (Search Engine Optimization)
                                    </span>
                                </div>
                                <span className="text-xs text-slate-500 font-medium">
                                    {seoAccordionOpen ? 'Tutup' : 'Buka'}
                                </span>
                            </button>

                            {seoAccordionOpen && (
                                <div className="p-5 border-t border-slate-200 space-y-4 bg-slate-50/50">
                                    <div>
                                        <label className="block text-xs font-medium text-slate-700 mb-1">
                                            SEO Title (Judul di Google)
                                        </label>
                                        <input
                                            type="text"
                                            value={form.seo_title}
                                            onChange={(e) =>
                                                setForm({ ...form, seo_title: e.target.value })
                                            }
                                            placeholder="Maksimal 60 karakter"
                                            className="w-full px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-slate-700 mb-1">
                                            Meta Description (Deskripsi di Hasil Pencarian)
                                        </label>
                                        <textarea
                                            rows={2}
                                            value={form.seo_description}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    seo_description: e.target.value,
                                                })
                                            }
                                            placeholder="Maksimal 160 karakter"
                                            className="w-full px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600"
                                        />
                                    </div>

                                    {/* Google Snippet Preview */}
                                    <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                                        <span className="text-[10px] font-mono text-slate-500 block mb-1 font-medium">
                                            Preview Hasil Pencarian Google:
                                        </span>
                                        <div className="text-xs text-slate-500 font-mono truncate">
                                            https://ryva.id/articles/{form.slug || 'judul-artikel'}
                                        </div>
                                        <div className="text-sm font-semibold text-emerald-700 hover:underline cursor-pointer truncate">
                                            {form.seo_title || form.title || 'Judul Artikel Anda'}
                                        </div>
                                        <div className="text-xs text-slate-600 line-clamp-2">
                                            {form.seo_description ||
                                                form.excerpt ||
                                                'Deskripsi artikel Anda akan tampil di sini saat ditemukan di search engine.'}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar Column (4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Status & Date */}
                        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                Penerbitan
                            </h3>

                            <div>
                                <label className="block text-xs text-slate-600 mb-1">Status</label>
                                <select
                                    value={form.status}
                                    onChange={(e) =>
                                        setForm({ ...form, status: e.target.value })
                                    }
                                    className="w-full px-3 py-2 min-h-[44px] rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                                >
                                    <option value="draft">Draft (Belum Ditampilkan)</option>
                                    <option value="published">Diterbitkan (Publik)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs text-slate-600 mb-1">
                                    Tanggal Terbit
                                </label>
                                <input
                                    type="date"
                                    value={form.published_at}
                                    onChange={(e) =>
                                        setForm({ ...form, published_at: e.target.value })
                                    }
                                    className="w-full px-3 py-2 min-h-[44px] rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                                />
                            </div>
                        </div>

                        {/* Category & Tags */}
                        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                Taksonomi
                            </h3>

                            <div>
                                <label className="block text-xs text-slate-600 mb-1">
                                    Kategori Utama
                                </label>
                                <select
                                    value={form.category_id}
                                    onChange={(e) =>
                                        setForm({ ...form, category_id: e.target.value })
                                    }
                                    className="w-full px-3 py-2 min-h-[44px] rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                                >
                                    <option value="">Pilih Kategori...</option>
                                    <option value="1">Computer Vision</option>
                                    <option value="2">Artificial Intelligence</option>
                                    <option value="3">Internet of Things</option>
                                    <option value="4">Applied Research</option>
                                    <option value="5">Hardware Engineering</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs text-slate-600 mb-1">
                                    Tag Artikel (Ketik lalu tekan Enter)
                                </label>
                                <input
                                    type="text"
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyDown={handleAddTag}
                                    placeholder="Contoh: AI Vision, PyTorch..."
                                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600"
                                />

                                <div className="flex flex-wrap gap-1.5 mt-2">
                                    {form.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono"
                                        >
                                            #{t}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveTag(t)}
                                                className="text-slate-400 hover:text-rose-600 ml-1"
                                            >
                                                ×
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                Gambar Sampul (Featured Image)
                            </h3>
                            <div className="p-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center space-y-2">
                                <Image className="w-8 h-8 text-slate-400 mx-auto" />
                                <div className="text-xs text-slate-600">
                                    Pilih dari Media Library atau unggah file baru
                                </div>
                                <Link
                                    href="/admin/media"
                                    className="inline-block px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-medium shadow-sm transition-colors"
                                >
                                    Buka Media Library
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}

