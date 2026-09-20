import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Search, Calendar, User, ArrowRight, Tag, BookOpen, Layers } from 'lucide-react';

export default function ArticlesIndex({ articles = [], categories = [] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Default sample data if not provided via props yet
    const fallbackArticles = [
        {
            id: 1,
            slug: 'penerapan-computer-vision-quality-control-manufaktur',
            title: 'Penerapan Computer Vision untuk Otomasi Quality Control pada Lini Manufaktur',
            excerpt:
                'Bagaimana riset terapan kamera industri berkecepatan tinggi dan edge computing mampu memangkas tingkat cacat produk hingga ke level mikron secara konsisten.',
            category: 'Computer Vision',
            author: 'Tim Riset RYVA',
            date: '20 September 2026',
            readTime: '6 menit baca',
            tags: ['AI Vision', 'Industrial QC', 'Edge Computing'],
        },
        {
            id: 2,
            slug: 'arsitektur-iot-telemetri-agrikultur-presisi',
            title: 'Arsitektur Sensor IoT Berdaya Rendah untuk Pemantauan Lahan Agrikultur Presisi',
            excerpt:
                'Eksplorasi integrasi mikrokontroler mandiri dan transmisi telemetri LoRa dalam menyajikan data kelembaban dan nutrisi tanah di area perkebunan.',
            category: 'Internet of Things',
            author: 'Lab Hardware RYVA',
            date: '15 September 2026',
            readTime: '8 menit baca',
            tags: ['IoT', 'Smart Agriculture', 'LoRaWAN'],
        },
        {
            id: 3,
            slug: 'metodologi-research-to-reality-dalam-pengembangan-ai',
            title: 'Metodologi Research to Reality: Menjembatani Eksperimen Lab ke Dunia Nyata',
            excerpt:
                'Mengapa akurasi model di laboratorium sering kali menurun drastis saat dideploy ke lapangan, dan bagaimana siklus validasi bertahap RYVA menanganinya.',
            category: 'Applied Research',
            author: 'Divisi Inovasi',
            date: '08 September 2026',
            readTime: '5 menit baca',
            tags: ['Methodology', 'Machine Learning', 'Validation'],
        },
        {
            id: 4,
            slug: 'desain-sistem-embedded-tahan-lingkungan-ekstrem',
            title: 'Panduan Rancang Bangun Perangkat Embedded untuk Kondisi Suhu & Getaran Ekstrem',
            excerpt:
                'Praktik teknik pengemasan sirkuit dan manajemen termal pasif saat merancang unit monitoring telemetri di area ruang mesin kapal dan genset pabrik.',
            category: 'Hardware Engineering',
            author: 'Lab Hardware RYVA',
            date: '01 September 2026',
            readTime: '7 menit baca',
            tags: ['Embedded Hardware', 'Thermal Design', 'Industrial'],
        },
    ];

    const currentArticles = articles && articles.length > 0 ? articles : fallbackArticles;

    const availableCategories =
        categories && categories.length > 0
            ? ['All', ...categories.map((c) => (typeof c === 'string' ? c : c.name))]
            : ['All', 'Computer Vision', 'Internet of Things', 'Applied Research', 'Hardware Engineering'];

    const filtered = currentArticles.filter((item) => {
        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
        return matchesSearch && matchesCat;
    });

    return (
        <PublicLayout
            title="Artikel & Publikasi Riset"
            description="Jurnal teknis, laporan studi kasus, dan wawasan riset terapan dari tim engineering RYVA.ID."
        >
            {/* Header */}
            <section className="py-16 lg:py-24 border-b border-slate-800/60 bg-[#0C101A]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                            Publikasi & Analisis
                        </span>
                        <h1 className="mt-3 text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                            Wawasan Riset Terapan & Teknologi
                        </h1>
                        <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                            Dokumentasi terbuka mengenai eksperimen laboratorium, metodologi rekayasa sistem, dan pelajaran yang kami dapatkan dari pengujian lapangan langsung.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter & Search Bar */}
            <section className="py-6 border-b border-slate-800/60 bg-[#090D15]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                        {/* Search Input */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Cari topik atau kata kunci riset..."
                                aria-label="Cari artikel"
                                className="w-full pl-10 pr-4 py-2.5 min-h-[44px] rounded-lg bg-slate-900/80 border border-slate-800 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                            />
                        </div>

                        {/* Category Buttons */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                            {availableCategories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-3.5 py-2 min-h-[44px] rounded-lg text-xs font-medium shrink-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 flex items-center ${
                                        selectedCategory === cat
                                            ? 'bg-emerald-500 text-slate-950 font-semibold'
                                            : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles List */}
            <section className="py-16 lg:py-24 border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Empty State (Antislop Rule R-27) */}
                    {filtered.length === 0 ? (
                        <div className="text-center py-20 px-4 rounded-2xl bg-slate-900/30 border border-slate-800">
                            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">
                                Tidak ada artikel yang sesuai
                            </h3>
                            <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
                                Coba sesuaikan kata kunci pencarian Anda atau pilih kategori lain untuk melihat publikasi yang tersedia.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('All');
                                }}
                                className="px-4 py-2 min-h-[44px] rounded-lg bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 transition-colors"
                            >
                                Reset Filter Pencarian
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filtered.map((article) => (
                                <Link
                                    key={article.slug}
                                    href={`/articles/${article.slug}`}
                                    className="group p-7 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-colors flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                                            <span className="px-2.5 py-1 rounded bg-slate-800 text-emerald-400 font-medium">
                                                {article.category}
                                            </span>
                                            <span className="text-[11px] font-mono text-slate-500">
                                                {article.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                                            {article.title}
                                        </h3>

                                        <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-5 border-t border-slate-800/70">
                                        <div className="flex items-center justify-between text-xs text-slate-400">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 text-[10px] font-bold">
                                                    R
                                                </div>
                                                <span className="truncate max-w-[120px]">
                                                    {article.author}
                                                </span>
                                            </div>
                                            <span className="font-semibold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                                Baca Artikel
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}
