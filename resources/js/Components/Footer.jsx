import React from 'react';
import { Link } from '@inertiajs/react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#070A0F] border-t border-slate-800/80 text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                    {/* Column 1: Brand & Philosophy */}
                    <div className="lg:col-span-5 space-y-4">
                        <Link href="/" className="inline-flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-base">
                                R
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                RYVA<span className="text-emerald-400">.ID</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                            Perusahaan teknologi yang berfokus pada applied research, pengembangan teknologi, dan penerapan solusi untuk menyelesaikan permasalahan nyata di dunia industri, UMKM, dan masyarakat.
                        </p>
                        <div className="pt-2 text-xs text-slate-500 font-mono flex items-center gap-2">
                            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Core Philosophy: Research to Reality
                        </div>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                            Navigasi
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/" className="hover:text-emerald-400 transition-colors">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                                    Tentang RYVA.ID
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-emerald-400 transition-colors">
                                    Fokus & Layanan Riset
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="hover:text-emerald-400 transition-colors">
                                    Portofolio & Studi Kasus
                                </Link>
                            </li>
                            <li>
                                <Link href="/articles" className="hover:text-emerald-400 transition-colors">
                                    Artikel & Publikasi
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Focus Domains */}
                    <div className="lg:col-span-4 space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                            Area Fokus Teknologi
                        </h4>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">
                                Artificial Intelligence
                            </span>
                            <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">
                                Computer Vision
                            </span>
                            <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">
                                Internet of Things
                            </span>
                            <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">
                                Machine Learning
                            </span>
                            <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">
                                Automation
                            </span>
                            <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">
                                Intelligent Systems
                            </span>
                        </div>
                        <div className="pt-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                            >
                                Hubungi untuk Kolaborasi Riset
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} RYVA.ID. Hak Cipta Dilindungi.</p>
                    <p className="text-slate-500 font-mono text-[11px]">
                        Research & Innovation Platform
                    </p>
                </div>
            </div>
        </footer>
    );
}
