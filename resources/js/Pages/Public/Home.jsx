import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import HeroSection from '@/Components/Home/HeroSection';
import CapabilitiesSection from '@/Components/Home/CapabilitiesSection';
import MethodSection from '@/Components/Home/MethodSection';
import DisciplinesSection from '@/Components/Home/DisciplinesSection';
import ContextsSection from '@/Components/Home/ContextsSection';
import SelectedWorkSection from '@/Components/Home/SelectedWorkSection';
import ProductsSection from '@/Components/Home/ProductsSection';
import InsightsSection from '@/Components/Home/InsightsSection';
import AboutSection from '@/Components/Home/AboutSection';
import ContactSection from '@/Components/Home/ContactSection';

export default function Home({ featuredArticles = [] }) {
    return (
        <PublicLayout
            title="Technology Company"
            description="RYVA.ID is a technology company focused on applied research, innovation, and real-world technology solutions."
        >
            <main id="top">
                <HeroSection />
                <CapabilitiesSection />
                <MethodSection />
                <DisciplinesSection />
                <ContextsSection />
                <SelectedWorkSection />
                <ProductsSection />
                <InsightsSection featuredArticles={featuredArticles} />
                <AboutSection />
                <ContactSection />
            </main>
        </PublicLayout>
    );
}
