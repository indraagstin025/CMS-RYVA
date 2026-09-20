import React from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Calendar, User, ArrowLeft, Share2, Tag, BookOpen, Clock } from 'lucide-react';

export default function ArticleShow({ article, relatedArticles = [] }) {
    // Default fallback article if opened directly
    const item = article || {
        title: 'Penerapan Computer Vision untuk Otomasi Quality Control pada Lini Manufaktur',
        slug: 'penerapan-computer-vision-quality-control-manufaktur',
        category: 'Computer Vision',
        author: 'Tim Riset RYVA',
        published_at: '20 September 2026',
        readTime: '6 menit baca',
        tags: ['AI Vision', 'Industrial QC', 'Edge Computing', 'Deep Learning'],
        excerpt:
            'Bagaimana riset terapan kamera industri berkecepatan tinggi dan edge computing mampu memangkas tingkat cacat produk hingga ke level mikron secara konsisten.',
        content: `
            <h2>Latar Belakang Permasalahan</h2>
            <p>Pada jalur perakitan manufaktur berkecepatan tinggi, inspeksi kualitas manual kerap menjadi titik rawan. Keterbatasan fokus manusia, kelelahan mata akibat jam kerja panjang, dan variasi standar antar operator menyebabkan cacat mikron pada permukaan komponen presisi berisiko lolos ke tahap pengemasan.</p>
            
            <p>Tantangan utama yang dihadapi di lapangan bukan sekadar akurasi pendeteksian di lingkungan laboratorium, melainkan bagaimana model kecerdasan buatan mampu beroperasi secara stabil di kondisi riil: getaran konveyor konstan, fluktuasi pencahayaan pabrik, serta kecepatan proses yang menuntut keputusan dalam hitungan milidetik.</p>

            <h2>Pendekatan Riset Terapan RYVA</h2>
            <p>Menjawab tantangan tersebut, tim rekayasa RYVA.ID menyusun pendekatan bertahap yang mengombinasikan perangkat keras optik industri dan komputasi inferensi edge:</p>
            <ul>
                <li><strong>Optik Terpolarisasi:</strong> Memasang filter optik polarisasi menyilang untuk mereduksi kilau pantulan cahaya pada permukaan material aluminium dan baja presisi.</li>
                <li><strong>Segmentasi Edge Real-time:</strong> Mengoptimasi model segmentasi berbasis arsitektur konvolusi ramping yang dikompilasi menggunakan TensorRT pada unit akselerator lokal (edge box).</li>
                <li><strong>Protokol Industri Terbuka:</strong> Menghubungkan output deteksi ke PLC konveyor melalui sinyal Modbus TCP, sehingga komponen yang teridentifikasi cacat dapat disingkirkan secara otomatis tanpa jeda proses.</li>
            </ul>

            <h2>Hasil Pengujian Lapangan</h2>
            <p>Selama masa uji coba pilot selama 30 hari kerja berkelanjutan pada lini konveyor perakitan mitra industri, sistem mampu memproses 120 komponen per menit dengan stabilitas latensi inferensi di bawah 8.5 milidetik per frame. Tingkat deteksi anomali mikron meningkat drastis dibandingkan inspeksi manual berkala.</p>

            <h2>Kesimpulan & Arah Pengembangan</h2>
            <p>Keberhasilan proyek ini membuktikan bahwa riset teknologi mutakhir tidak boleh berhenti pada simulasi. Melalui validasi di lingkungan operasional sebenarnya, teknologi AI dan computer vision dapat memberikan dampak efisiensi yang terukur bagi sektor manufaktur.</p>
        `,
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: item.title,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Tautan artikel berhasil disalin ke papan klip.');
        }
    };

    return (
        <PublicLayout
            title={item.title}
            description={item.excerpt}
        >
            <article className="py-12 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Link */}
                    <div className="mb-8">
                        <Link
                            href="/articles"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Kembali ke Daftar Artikel
                        </Link>
                    </div>

                    {/* Article Header */}
                    <header className="space-y-4 pb-8 border-b border-slate-800/80">
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                            <span className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold">
                                {item.category}
                            </span>
                            <span className="flex items-center gap-1.5 text-slate-400 font-mono text-xs">
                                <Calendar className="w-3.5 h-3.5" />
                                {item.published_at}
                            </span>
                            <span className="flex items-center gap-1.5 text-slate-400 font-mono text-xs">
                                <Clock className="w-3.5 h-3.5" />
                                {item.readTime}
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                            {item.title}
                        </h1>

                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
                            {item.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 font-bold text-sm">
                                    R
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">
                                        {item.author}
                                    </div>
                                    <div className="text-xs text-slate-400">
                                        Divisi Riset & Rekayasa Teknologi
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={handleShare}
                                aria-label="Bagikan artikel"
                                className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                <Share2 className="w-4 h-4 text-slate-400" />
                                Bagikan
                            </button>
                        </div>
                    </header>

                    {/* Article Body Content */}
                    <div
                        className="prose prose-invert max-w-none py-10 text-slate-300 text-sm sm:text-base leading-relaxed space-y-6
                        [&>h2]:text-xl [&>h2]:sm:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-4
                        [&>p]:text-slate-300 [&>p]:leading-relaxed
                        [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2.5 [&>ul]:text-slate-300
                        [&>li>strong]:text-emerald-400
                        "
                        dangerouslySetInnerHTML={{ __html: item.content }}
                    />

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                        <div className="pt-8 border-t border-slate-800/80">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-xs text-slate-500 flex items-center gap-1 mr-2 font-mono">
                                    <Tag className="w-3.5 h-3.5" />
                                    Topik Terkait:
                                </span>
                                {item.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 rounded text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                                    >
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Author Box */}
                    <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                        <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xl shrink-0">
                            R
                        </div>
                        <div className="space-y-1">
                            <div className="text-sm font-bold text-white">
                                {item.author} (RYVA.ID)
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Berfokus pada riset terapan perangkat keras, algoritma kecerdasan buatan, dan integrasi operasional industri nyata.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </PublicLayout>
    );
}
