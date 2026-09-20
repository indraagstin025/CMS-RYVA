import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
    const { url, auth } = usePage().props;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const navLinks = [
        { name: 'Beranda', href: '/' },
        { name: 'Tentang Kami', href: '/about' },
        { name: 'Fokus & Layanan', href: '/services' },
        { name: 'Portofolio Riset', href: '/portfolio' },
        { name: 'Artikel & Riset', href: '/articles' },
        { name: 'Kontak', href: '/contact' },
    ];

    const isActive = (href) => {
        if (href === '/') return url === '/';
        return url.startsWith(href);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
                isScrolled
                    ? 'bg-[#0A0D14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
                    : 'bg-[#0A0D14]/60 backdrop-blur-sm border-b border-slate-800/40'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Brand Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
                    >
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg group-hover:border-emerald-400/60 transition-colors">
                            R
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-white flex items-center">
                                RYVA<span className="text-emerald-400">.ID</span>
                            </span>
                            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium -mt-1">
                                Research to Reality
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav aria-label="Navigasi Utama" className="hidden md:flex items-center gap-1 lg:gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                                    isActive(link.href)
                                        ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Portal / CTA Button */}
                    <div className="hidden md:flex items-center gap-3">
                        {auth?.user ? (
                            <Link
                                href="/dashboard"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                            >
                                Dashboard CMS
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                            >
                                Admin Portal
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Buka menu navigasi"
                            className="p-2.5 min-w-[44px] min-h-[44px] rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 flex items-center justify-center"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#0D121D] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
                    <nav aria-label="Navigasi Mobile" className="flex flex-col space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`px-4 py-3 min-h-[44px] rounded-lg text-base font-medium flex items-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                                    isActive(link.href)
                                        ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="pt-4 border-t border-slate-800/80">
                        {auth?.user ? (
                            <Link
                                href="/dashboard"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors"
                            >
                                Dashboard CMS
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 font-medium text-sm hover:bg-slate-800 transition-colors"
                            >
                                Masuk Admin Portal
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
