import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Navbar() {
    const page = usePage();
    const url = page.url || (typeof window !== 'undefined' ? window.location.pathname : '/');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const isHome = url === '/' || url === '';
    const isArticlesIndex = url === '/articles';
    const isArticleDetail = url.startsWith('/articles/') && url !== '/articles';
    const isArticlePage = isArticlesIndex || isArticleDetail;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            name: 'Riset',
            href: isHome ? '#research' : '/#research',
            isAnchor: isHome,
            active: false,
        },
        {
            name: 'Solusi',
            href: isHome ? '#solutions' : '/#solutions',
            isAnchor: isHome,
            active: false,
        },
        {
            name: 'Produk',
            href: isHome ? '#products' : '/#products',
            isAnchor: isHome,
            active: false,
        },
        {
            name: 'Insights',
            href: isHome ? '#insights' : '/articles',
            isAnchor: isHome,
            active: isArticlePage,
        },
        {
            name: 'Tentang',
            href: isHome ? '#about' : '/#about',
            isAnchor: isHome,
            active: url.startsWith('/about'),
        },
        {
            name: 'Kontak',
            href: isHome ? '#contact' : '/#contact',
            isAnchor: isHome,
            active: url.startsWith('/contact'),
        },
    ];

    const handleAnchorClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', href);
        }
        setMobileMenuOpen(false);
    };

    return (
        <div className={isHome ? 'fixed top-0 inset-x-0 z-50 w-full' : 'sticky top-0 z-50 w-full'}>
            {/* Top Announcement Bar */}
            <div className="w-full bg-[#15803D] text-white py-2 px-4 text-center text-xs font-semibold tracking-tight sm:tracking-normal flex items-center justify-center gap-2 border-none">
                <span>✦ Inovasi berbasis riset terapan untuk industri, UMKM, dan masyarakat.</span>
                <a
                    href="#contact"
                    onClick={(e) => handleAnchorClick(e, '#contact')}
                    className="underline font-bold text-[#86EFAC] hover:text-white transition-colors"
                >
                    Diskusikan Kebutuhan &rarr;
                </a>
            </div>

            {/* Main Header / Navbar seamlessly integrated with Hero (Zero line on Hero) */}
            <header
                className={`w-full transition-all duration-300 ${
                    isScrolled
                        ? 'border-b border-white/10 bg-[#14110E]/85 backdrop-blur-xl shadow-lg'
                        : isHome
                        ? 'border-none bg-transparent backdrop-blur-none'
                        : 'border-b border-white/10 bg-[#14110E]/70 backdrop-blur-xl'
                }`}
            >
                <nav className="section-wrap relative flex min-h-[68px] items-center justify-between gap-5" aria-label="Navigasi utama">
                    {/* Brand Logo */}
                    <div className="flex items-center gap-3 z-10">
                        <Link
                            href="/"
                            className="text-xl font-bold tracking-tight text-white flex items-center gap-2"
                        >
                            <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]"></span>
                            <span>RYVA.ID</span>
                        </Link>

                        {/* Breadcrumb if inside article */}
                        {isArticleDetail && (
                            <Link
                                href="/articles"
                                className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono text-[#D4CEBF] hover:text-[#4ADE80] border-l border-white/20 pl-3 transition-colors"
                            >
                                <ArrowLeft className="w-3.5 h-3.5" />
                                <span>Semua Artikel</span>
                            </Link>
                        )}
                    </div>

                    {/* Centered Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2 z-10">
                        {navLinks.map((link) => {
                            const activeClass = link.active
                                ? 'text-[#4ADE80] font-bold border-b-2 border-[#22C55E] pb-0.5 text-sm'
                                : 'text-[#D4CEBF] hover:text-white transition-colors text-sm font-medium';

                            return link.isAnchor ? (
                                <a
                                    key={link.name}
                                    className={activeClass}
                                    href={link.href}
                                    onClick={(e) => handleAnchorClick(e, link.href)}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link key={link.name} className={activeClass} href={link.href}>
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Action CTA Buttons */}
                    <div className="hidden sm:flex items-center gap-2.5 z-10">
                        <a
                            href="#contact"
                            onClick={(e) => handleAnchorClick(e, '#contact')}
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-[#E8E3D9] font-medium text-xs border border-white/15 backdrop-blur-md transition-all hover:border-white/25"
                        >
                            Diskusikan Masalah
                        </a>
                        <a
                            href="#research"
                            onClick={(e) => handleAnchorClick(e, '#research')}
                            className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-xs tracking-tight transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span>Pelajari Research</span>
                            <ArrowRight className="w-3 h-3 text-white" />
                        </a>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        id="menu-toggle"
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden z-10"
                        aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </nav>

                {/* Mobile Menu Panel */}
                <div
                    id="mobile-menu"
                    className={`mobile-panel border-t border-white/10 bg-[#161310] lg:hidden ${mobileMenuOpen ? 'is-open' : ''}`}
                >
                    <div className="section-wrap flex flex-col py-5">
                        {isArticleDetail && (
                            <Link
                                href="/articles"
                                className="flex items-center gap-2 border-b border-white/10 py-3 text-sm font-mono text-[#4ADE80]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>Kembali ke Semua Artikel</span>
                            </Link>
                        )}

                        {navLinks.map((link) => {
                            const activeMobileClass = link.active
                                ? 'border-b border-white/10 py-3 text-[#4ADE80] font-bold text-sm'
                                : 'border-b border-white/10 py-3 text-[#D4CEBF] text-sm';

                            return link.isAnchor ? (
                                <a
                                    key={link.name}
                                    className={activeMobileClass}
                                    href={link.href}
                                    onClick={(e) => handleAnchorClick(e, link.href)}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    className={activeMobileClass}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        <div className="pt-4 flex flex-col gap-2">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold text-sm text-center shadow-sm"
                                onClick={(e) => handleAnchorClick(e, '#contact')}
                            >
                                Diskusikan Masalah Anda
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
