import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function InsightsSection({ featuredArticles = [] }) {
    const [activeFilter, setActiveFilter] = useState('all');

    const filterCategories = [
        { id: 'all', label: 'Semua' },
        { id: 'research', label: 'Riset' },
        { id: 'technology', label: 'Teknologi' },
        { id: 'ai', label: 'AI' },
        { id: 'iot', label: 'IoT' },
    ];

    const insightArticles = [
        {
            id: 'featured',
            category: 'research',
            categoryLabel: 'RISET TERAPAN',
            title: featuredArticles?.[0]?.title || 'Penerapan Computer Vision untuk Otomasi Quality Control pada Lini Manufaktur',
            copy:
                featuredArticles?.[0]?.excerpt ||
                'Bagaimana riset terapan kamera industri berkecepatan tinggi dan edge computing mampu memangkas tingkat cacat produk hingga ke level mikron secara konsisten.',
            slug: featuredArticles?.[0]?.slug || 'penerapan-computer-vision-quality-control-manufaktur',
            date: 'September 2026',
            readTime: '6 mnt baca',
            isFeatured: true,
        },
        {
            id: 'one',
            category: 'iot',
            categoryLabel: 'EDGE IOT',
            title: featuredArticles?.[1]?.title || 'Arsitektur Sensor IoT Berdaya Rendah untuk Pemantauan Lahan Agrikultur Presisi',
            copy: 'Formulasi jaringan sensor nirkabel berbasis LoRaWAN untuk memantau mikroklimat tanah secara mandiri tanpa listrik grid.',
            slug: featuredArticles?.[1]?.slug || 'arsitektur-iot-telemetri-agrikultur-presisi',
            date: 'Agustus 2026',
            readTime: '5 mnt baca',
            isFeatured: false,
        },
        {
            id: 'two',
            category: 'technology',
            categoryLabel: 'METODOLOGI',
            title: featuredArticles?.[2]?.title || 'Metodologi Research to Reality: Menjembatani Eksperimen Lab ke Dunia Nyata',
            copy: 'Mengapa metrik akurasi tinggi di laboratorium sering gagal di pabrik, dan bagaimana RYVA mengatasi kesenjangan tersebut.',
            slug: featuredArticles?.[2]?.slug || 'metodologi-research-to-reality-dalam-pengembangan-ai',
            date: 'Juli 2026',
            readTime: '8 mnt baca',
            isFeatured: false,
        },
    ];

    const visibleArticles = insightArticles.filter(
        (art) => activeFilter === 'all' || art.category === activeFilter
    );

    return (
        <section id="insights" className="bg-[#F7F4F0] text-[#1D1914] py-20 md:py-28 border-b border-[#E8E4DE]">
            <div className="section-wrap">
                {/* Section Header */}
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <span className="text-xs font-mono font-bold tracking-widest text-[#70685C] uppercase">
                            Publikasi &amp; Catatan Riset
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1914] font-normal tracking-tight mt-3">
                            Insights &amp; Publikasi
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-[#70685C] leading-relaxed max-w-2xl">
                            Dokumentasi hasil riset terapan, metodologi teknis, dan pembelajaran dari lapangan.
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter kategori insights">
                        {filterCategories.map((btn) => {
                            const isSelected = activeFilter === btn.id;
                            return (
                                <button
                                    key={btn.id}
                                    type="button"
                                    onClick={() => setActiveFilter(btn.id)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                        isSelected
                                            ? 'bg-[#1D1914] text-white shadow-sm'
                                            : 'bg-white hover:bg-white/80 text-[#70685C] border border-[#E8E4DE]'
                                    }`}
                                >
                                    {btn.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="mt-14 grid gap-6 lg:grid-cols-2">
                    {/* Featured Article Card (Dark Espresso) */}
                    {visibleArticles.find((a) => a.isFeatured) && (() => {
                        const feat = visibleArticles.find((a) => a.isFeatured);
                        return (
                            <article className="rounded-3xl bg-[#161310] text-white p-8 sm:p-12 border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between text-xs font-mono">
                                        <span className="text-[#4ADE80] font-semibold uppercase tracking-wider">
                                            {feat.categoryLabel}
                                        </span>
                                        <span className="text-[#A8A196]">{feat.readTime}</span>
                                    </div>

                                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mt-6 leading-snug group-hover:text-[#4ADE80] transition-colors">
                                        <Link href={`/articles/${feat.slug}`}>
                                            {feat.title}
                                        </Link>
                                    </h3>

                                    <p className="mt-4 text-sm text-[#D4CEBF] leading-relaxed">
                                        {feat.copy}
                                    </p>
                                </div>

                                <div className="relative z-10 mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                                    <span className="text-xs text-[#A8A196]">{feat.date}</span>
                                    <Link
                                        href={`/articles/${feat.slug}`}
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4ADE80] hover:underline"
                                    >
                                        <span>Baca Insight</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </article>
                        );
                    })()}

                    {/* Secondary Article Cards Stack */}
                    <div className="flex flex-col gap-6">
                        {visibleArticles.filter((a) => !a.isFeatured).map((art) => (
                            <article
                                key={art.id}
                                className="rounded-3xl bg-white text-[#1D1914] p-8 border border-[#E8E4DE] shadow-md hover:shadow-lg transition-all flex flex-col justify-between flex-1 group"
                            >
                                <div>
                                    <div className="flex items-center justify-between text-xs font-mono">
                                        <span className="text-[#70685C] font-semibold uppercase tracking-wider">
                                            {art.categoryLabel}
                                        </span>
                                        <span className="text-[#70685C]">{art.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#1D1914] mt-4 leading-snug group-hover:text-black transition-colors">
                                        <Link href={`/articles/${art.slug}`}>
                                            {art.title}
                                        </Link>
                                    </h3>

                                    <p className="mt-2 text-xs sm:text-sm text-[#70685C] leading-relaxed">
                                        {art.copy}
                                    </p>
                                </div>

                                <div className="mt-6 pt-5 border-t border-[#E8E4DE] flex items-center justify-between">
                                    <span className="text-xs text-[#70685C]">{art.date}</span>
                                    <Link
                                        href={`/articles/${art.slug}`}
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D1914] hover:underline"
                                    >
                                        <span>Baca Insight</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* View All Articles Action */}
                <div className="mt-14 text-center">
                    <Link
                        href="/articles"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-white/80 text-[#1D1914] font-bold text-xs border border-[#E8E4DE] shadow-sm transition-all"
                    >
                        <BookOpen className="w-4 h-4 text-[#70685C]" />
                        <span>Lihat Semua Publikasi Riset</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
