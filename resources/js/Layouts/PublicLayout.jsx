import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function PublicLayout({ title, description, children }) {
    const siteTitle = title ? `${title} | RYVA.ID` : 'RYVA.ID : Technology Company';
    const metaDescription =
        description ||
        'RYVA.ID is a technology company focused on applied research, innovation, and real-world technology solutions.';

    return (
        <div data-template-id="__page-root" className="site-shell min-h-screen flex flex-col bg-[#101412] text-[#101412]">
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

            <div className="flex-grow">{children}</div>

            <Footer />
        </div>
    );
}
