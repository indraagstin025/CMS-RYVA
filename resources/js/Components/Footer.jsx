import React from 'react';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-[#100E0C] py-16 text-white border-t border-white/10">
            <div className="section-wrap">
                <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_.9fr]">
                    <div>
                        <Link
                            href="/"
                            className="text-2xl font-bold tracking-tight text-white flex items-center gap-2"
                        >
                            <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]"></span>
                            <span>RYVA.ID</span>
                        </Link>
                        <p className="mt-3 text-sm text-[#A8A196] max-w-sm leading-relaxed">
                            Riset terapan, inovasi teknologi, dan solusi nyata untuk industri, UMKM, dan masyarakat.
                        </p>
                        <p className="mt-4 text-xs font-mono text-[#4ADE80] uppercase tracking-wider font-semibold">
                            Research to Reality.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#4ADE80] mb-4">
                            Navigasi Utama
                        </h4>
                        <nav aria-label="Navigasi footer" className="grid grid-cols-2 gap-3 text-sm text-[#D4CEBF]">
                            <a href="/#research" className="hover:text-[#4ADE80] transition-colors">Riset</a>
                            <a href="/#solutions" className="hover:text-[#4ADE80] transition-colors">Solusi</a>
                            <a href="/#products" className="hover:text-[#4ADE80] transition-colors">Produk</a>
                            <Link href="/articles" className="hover:text-[#4ADE80] transition-colors">Insights</Link>
                            <a href="/#about" className="hover:text-[#4ADE80] transition-colors">Tentang</a>
                            <a href="/#contact" className="hover:text-[#4ADE80] transition-colors">Kontak</a>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#4ADE80] mb-4">
                            Kemitraan &amp; Kontak
                        </h4>
                        <div className="text-sm text-[#D4CEBF] space-y-2.5">
                            <p>Surel: <span className="text-white font-medium">research@ryva.id</span></p>
                            <p>Media Sosial: <span className="text-white font-medium">@ryva.id</span></p>
                            <p>Wilayah: <span className="text-white font-medium">Indonesia</span></p>
                        </div>
                    </div>
                </div>

                <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8578]">
                    <p>&copy; 2026 RYVA.ID. Research to Reality. Seluruh hak cipta dilindungi.</p>
                    <p className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        <span>Sistem Operasional Normal</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
