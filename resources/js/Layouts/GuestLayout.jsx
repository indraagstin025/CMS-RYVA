import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="tech-grid flex min-h-screen flex-col items-center bg-[#101412] pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="text-white hover:opacity-90 transition-opacity" />
                </Link>
            </div>

            <div className="mt-8 w-full overflow-hidden border border-white/15 bg-[#171d19] px-8 py-8 shadow-2xl sm:max-w-md">
                {children}
            </div>

            <div className="mt-6 text-center">
                <Link href="/" className="mono text-xs text-[#8d9a8f] hover:text-[#b6ee63] transition-colors">
                    ← Kembali ke Beranda RYVA.ID
                </Link>
            </div>
        </div>
    );
}
