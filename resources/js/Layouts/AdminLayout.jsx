import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    LayoutDashboard,
    FileText,
    FolderTree,
    Tags,
    Image,
    MessageSquare,
    ExternalLink,
    LogOut,
    Menu,
    X,
    Plus,
} from 'lucide-react';

export default function AdminLayout({ title, children }) {
    const page = usePage();
    const url = page.url || (typeof window !== 'undefined' ? window.location.pathname : '/');
    const auth = page.props?.auth;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Artikel', href: '/admin/articles', icon: FileText },
        { name: 'Kategori', href: '/admin/categories', icon: FolderTree },
        { name: 'Tag', href: '/admin/tags', icon: Tags },
        { name: 'Media Library', href: '/admin/media', icon: Image },
        { name: 'Pesan Masuk', href: '/admin/inquiries', icon: MessageSquare },
    ];

    const isActive = (href) => {
        if (!url) return false;
        if (href === '/dashboard') return url === '/dashboard';
        return url.startsWith(href);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex">
            {/* Sidebar Desktop */}
            <aside className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-slate-200 shrink-0">
                {/* Brand Header */}
                <div className="h-16 flex items-center px-6 border-b border-slate-200">
                    <Link href="/dashboard" className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 font-bold text-base">
                            R
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base font-bold text-slate-900 tracking-tight">
                                RYVA<span className="text-emerald-700"> CMS</span>
                            </span>
                            <span className="text-[10px] uppercase font-mono text-slate-500 font-medium">
                                Portal Manajemen
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Quick Action: New Article */}
                <div className="p-4">
                    <Link
                        href="/admin/articles/create"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                        <Plus className="w-4 h-4" />
                        Tulis Artikel Baru
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav aria-label="Navigasi Menu Admin" className="flex-1 px-3 space-y-1 overflow-y-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                                    active
                                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-semibold'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                               初 }`}
                            >
                                <Icon className={`w-4 h-4 shrink-0 ${active ? 'text-emerald-700' : 'text-slate-400'}`} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* View Public Site & User Footer */}
                <div className="p-4 border-t border-slate-200 space-y-1.5">
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    >
                        <span>Lihat Website Publik</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </Link>

                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-50 transition-colors font-medium"
                    >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Keluar Akun</span>
                    </Link>
                </div>
            </aside>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-50 lg:hidden flex">
                    <div
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <div className="relative w-64 max-w-[80vw] bg-white h-full flex flex-col z-10 border-r border-slate-200 p-4 space-y-4 shadow-xl">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                            <span className="text-sm font-bold text-slate-900">RYVA CMS</span>
                            <button
                                type="button"
                                onClick={() => setSidebarOpen(false)}
                                className="p-2 text-slate-500 hover:text-slate-900"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <nav aria-label="Navigasi Menu Admin Mobile" className="flex-1 space-y-1 overflow-y-auto">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setSidebarOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2.5 min-h-[44px] rounded-lg text-xs font-medium ${
                                            active
                                                ? 'bg-emerald-50 text-emerald-800 font-semibold'
                                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{item.name}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                        <div className="pt-2 border-t border-slate-200">
                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="w-full flex items-center gap-2 px-3 py-2 text-xs text-rose-600 hover:bg-rose-50 rounded-lg font-medium"
                            >
                                <LogOut className="w-4 h-4" />
                                <span>Keluar</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Topbar */}
                <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-20">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => setSidebarOpen(true)}
                            aria-label="Buka menu admin"
                            className="lg:hidden p-2 text-slate-500 hover:text-slate-900 focus:outline-none"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                        <h1 className="text-sm font-bold text-slate-900 tracking-tight">
                            {title || 'CMS Dashboard'}
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* User Indicator */}
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 font-semibold text-xs">
                                {auth?.user?.name ? auth.user.name.charAt(0).toUpperCase() : 'A'}
                            </div>
                            <div className="hidden sm:flex flex-col text-left">
                                <span className="text-xs font-semibold text-slate-900 truncate max-w-[120px]">
                                    {auth?.user?.name || 'Administrator'}
                                </span>
                                <span className="text-[10px] text-slate-500 font-medium">Admin</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto bg-slate-50">{children}</main>
            </div>
        </div>
    );
}

