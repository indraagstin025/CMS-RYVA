import React from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Calendar, ArrowLeft, Share2, Tag, Clock } from 'lucide-react';

export default function ArticleShow({ article, relatedArticles = [] }) {
    // Default fallback article if opened directly
    const item = article || {
        title: 'Penerapan Computer Vision untuk Otomasi Quality Control pada Lini Manufaktur',
        slug: 'penerapan-computer-vision-quality-control-manufaktur',
        category: 'Computer Vision',
        author: 'Tim Riset RYVA',
        published_at: '20 September 2026',
        readTime: '6 min read',
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

            <h2>Kesimpulan &amp; Arah Pengembangan</h2>
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
            <article className="bg-[#f3f5f1] py-12 md:py-20">
                <div className="section-wrap max-w-4xl">
                    {/* Back Link */}
                    <div className="mb-8">
                        <Link
                            href="/articles"
                            className="inline-flex items-center gap-2 text-xs font-mono text-[#59645b] hover:text-[#101412] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Kembali ke Daftar Artikel</span>
                        </Link>
                    </div>

                    {/* Main Article Container */}
                    <div className="border border-[#d7ddd6] bg-white p-8 md:p-12">
                        {/* Article Header */}
                        <header className="space-y-4 pb-8 border-b border-[#d7ddd6]">
                            <div className="flex flex-wrap items-center gap-3 text-xs">
                                <span className="mono text-xs font-bold text-[#6c9f24]">
                                    {item.category}
                                </span>
                                <span className="text-[#859187]">•</span>
                                <span className="flex items-center gap-1.5 text-[#859187] font-mono text-xs">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {item.published_at}
                                </span>
                                <span className="text-[#859187]">•</span>
                                <span className="flex items-center gap-1.5 text-[#859187] font-mono text-xs">
                                    <Clock className="w-3.5 h-3.5" />
                                    {item.readTime}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101412] tracking-[-.04em] leading-tight">
                                {item.title}
                            </h1>

                            <p className="text-base md:text-lg text-[#59645b] leading-relaxed pt-2">
                                {item.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-[#101412] text-[#b6ee63] flex items-center justify-center font-bold text-sm">
                                        R
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-[#101412]">
                                            {item.author}
                                        </div>
                                        <div className="mono text-xs text-[#859187]">
                                            Divisi Riset &amp; Rekayasa Sistem
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleShare}
                                    aria-label="Bagikan artikel"
                                    className="button-secondary text-xs !py-2 !px-3"
                                    style={{ color: '#101412', borderColor: '#d7ddd6' }}
                                >
                                    <Share2 className="w-3.5 h-3.5 text-[#59645b]" />
                                    <span>Bagikan</span>
                                </button>
                            </div>
                        </header>

                        {/* Article Body Content */}
                        <div
                            className="py-10 text-[#101412] text-base leading-relaxed space-y-6
                            [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#101412] [&>h2]:tracking-[-.03em] [&>h2]:mt-10 [&>h2]:mb-4
                            [&>p]:text-[#59645b] [&>p]:leading-relaxed
                            [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2.5 [&>ul]:text-[#59645b]
                            [&>li>strong]:text-[#101412]
                            "
                            dangerouslySetInnerHTML={{ __html: item.content }}
                        />

                        {/* Tags */}
                        {item.tags && item.tags.length > 0 && (
                            <div className="pt-8 border-t border-[#d7ddd6]">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="mono text-xs text-[#859187] flex items-center gap-1 mr-2">
                                        <Tag className="w-3.5 h-3.5" />
                                        TOPIK:
                                    </span>
                                    {item.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-1 text-xs mono bg-[#f3f5f1] border border-[#d7ddd6] text-[#101412]"
                                        >
                                            #{t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Author Box */}
                        <div className="mt-10 p-6 sm:p-8 bg-[#fbfcf9] border border-[#d7ddd6] flex flex-col sm:flex-row items-start sm:items-center gap-5">
                            <div className="w-12 h-12 bg-[#101412] text-[#b6ee63] flex items-center justify-center font-bold text-lg shrink-0">
                                R
                            </div>
                            <div className="space-y-1">
                                <div className="text-sm font-bold text-[#101412]">
                                    {item.author} (RYVA.ID)
                                </div>
                                <p className="text-xs text-[#59645b] leading-relaxed">
                                    Berfokus pada riset terapan perangkat keras, algoritma kecerdasan buatan, dan integrasi operasional industri nyata.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </PublicLayout>
    );
}
