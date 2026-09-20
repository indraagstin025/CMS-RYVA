import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function PublicLayout({ title, description, children }) {
    const siteTitle = title ? `${title} | RYVA.ID` : 'RYVA.ID - Research to Reality';
    const metaDescription =
        description ||
        'RYVA.ID adalah perusahaan teknologi yang berfokus pada applied research, pengembangan teknologi, dan penerapan solusi nyata di dunia industri, UMKM, dan masyarakat.';

    return (
        <div className="min-h-screen flex flex-col bg-[#0A0D14] text-slate-100 antialiased">
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={siteTitle} />
                <meta name="twitter:description" content={metaDescription} />
            </Head>

            <Navbar />

            <main className="flex-grow pt-20">{children}</main>

            <Footer />
        </div>
    );
}
