import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Search, ArrowRight, BookOpen } from 'lucide-react';

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
            readTime: '6 min read',
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
            readTime: '8 min read',
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
            readTime: '5 min read',
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
            readTime: '7 min read',
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
            {/* Header Hero */}
            <section className="tech-grid relative overflow-hidden bg-[#101412] py-20 text-white md:py-24">
                <div className="section-wrap relative">
                    <p className="canva-text eyebrow mb-4 text-[#b6ee63]">
                        04 / KNOWLEDGE &amp; PUBLICATIONS
                    </p>
                    <h1 className="canva-text max-w-3xl text-4xl font-bold tracking-[-.055em] text-white md:text-5xl">
                        Research Insights &amp; Engineering Reports
                    </h1>
                    <p className="canva-text mt-5 max-w-2xl text-base leading-7 text-[#b8c3ba] md:text-lg">
                        Dokumentasi terbuka mengenai eksperimen laboratorium, metodologi rekayasa sistem, dan pelajaran yang kami dapatkan dari pengujian lapangan langsung.
                    </p>
                </div>
            </section>

            {/* Filter & Search Bar */}
            <section className="border-b border-[#d7ddd6] bg-white py-6">
                <div className="section-wrap">
                    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                        {/* Search Input */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#59645b]" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Cari topik atau kata kunci riset..."
                                aria-label="Cari artikel"
                                className="w-full pl-10 pr-4 py-2.5 min-h-[44px] border border-[#d7ddd6] bg-[#fbfcf9] text-[#101412] placeholder-[#859187] text-sm focus:outline-none focus:border-[#6c9f24]"
                            />
                        </div>

                        {/* Category Buttons */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none" role="group" aria-label="Filter kategori artikel">
                            {availableCategories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`filter-button rounded-sm border border-[#b8c1b8] px-3.5 py-2 text-xs font-semibold shrink-0 transition-colors ${
                                        selectedCategory === cat ? 'active' : ''
                                    }`}
                                    aria-pressed={selectedCategory === cat}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles List */}
            <section className="bg-[#f3f5f1] py-16 md:py-24">
                <div className="section-wrap">
                    {/* Empty State */}
                    {filtered.length === 0 ? (
                        <div className="text-center py-20 px-4 border border-[#d7ddd6] bg-white">
                            <BookOpen className="w-12 h-12 text-[#859187] mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-[#101412] mb-2">
                                Tidak ada artikel yang sesuai
                            </h3>
                            <p className="text-sm text-[#59645b] max-w-md mx-auto mb-6">
                                Coba sesuaikan kata kunci pencarian Anda atau pilih kategori lain untuk melihat publikasi yang tersedia.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('All');
                                }}
                                className="button-primary px-4 py-2 text-xs"
                            >
                                Reset Filter Pencarian
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((article) => (
                                <article
                                    key={article.slug}
                                    className="canva-card insight-card border border-[#d7ddd6] bg-white p-7 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between text-xs mb-4">
                                            <span className="mono text-xs text-[#6c9f24] font-bold">
                                                {article.category}
                                            </span>
                                            <span className="mono text-[11px] text-[#859187]">
                                                {article.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-[#101412] leading-snug">
                                            <Link
                                                href={`/articles/${article.slug}`}
                                                className="hover:text-[#6c9f24] transition-colors"
                                            >
                                                {article.title}
                                            </Link>
                                        </h3>

                                        <p className="mt-3 text-sm text-[#59645b] leading-relaxed line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-5 border-t border-[#d7ddd6]">
                                        <div className="flex items-center justify-between text-xs text-[#859187]">
                                            <span className="mono text-[11px]">
                                                {article.author}
                                            </span>
                                            <Link
                                                href={`/articles/${article.slug}`}
                                                className="font-bold text-[#6c9f24] hover:text-[#101412] flex items-center gap-1 transition-colors"
                                            >
                                                Baca
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}
