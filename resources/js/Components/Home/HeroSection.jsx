import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Clock, Users, CheckCircle2, MessageSquare, Activity, Radio, Cpu, Shield, Zap, Check, Plus } from 'lucide-react';

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Dynamic animation states
    const [typedText, setTypedText] = useState('');
    const [timerSeconds, setTimerSeconds] = useState(14);
    const [dataFrames, setDataFrames] = useState(8264);
    const [ringCompleted, setRingCompleted] = useState(false);

    const fullPrompt = 'Rancang arsitektur Computer Vision edge berlatensi <25ms untuk otomasi inspeksi kendali mutu...';

    const slides = [
        {
            id: 'applied-research',
            prefix: 'Applied Research',
            serif: 'Research to Reality.',
            subtitle: 'Riset terapan, inovasi teknologi, dan solusi nyata untuk industri, UMKM, dan masyarakat.',
            type: 'typewriter',
        },
        {
            id: 'real-validation',
            prefix: 'Dunia Nyata',
            serif: 'Melampaui Lab.',
            subtitle: 'Membawa teknologi melampaui laboratorium menuju pengujian dan keandalan di lingkungan nyata.',
            type: 'waveform',
        },
        {
            id: 'scalable-solutions',
            prefix: 'Solusi Terukur',
            serif: 'Dampak Nyata.',
            subtitle: 'Mengembangkan inovasi tervalidasi menjadi solusi andal yang siap diterapkan dan diskalakan.',
            type: 'checklist',
        },
    ];

    // Auto-advance slides every 6.5s
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6500);
        return () => clearInterval(interval);
    }, [isPaused, slides.length]);

    // Slide 0: Typewriter animation
    useEffect(() => {
        if (currentSlide === 0) {
            setTypedText('');
            let idx = 0;
            const typingInterval = setInterval(() => {
                if (idx < fullPrompt.length) {
                    setTypedText(fullPrompt.slice(0, idx + 1));
                    idx++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 38);
            return () => clearInterval(typingInterval);
        }
    }, [currentSlide]);

    // Slide 1: Live telemetry timer & frames incrementing
    useEffect(() => {
        if (currentSlide === 1) {
            setTimerSeconds(14);
            setDataFrames(8264);
            const timerInterval = setInterval(() => {
                setTimerSeconds((prev) => prev + 1);
            }, 1000);
            const framesInterval = setInterval(() => {
                setDataFrames((prev) => prev + Math.floor(Math.random() * 14) + 8);
            }, 550);
            return () => {
                clearInterval(timerInterval);
                clearInterval(framesInterval);
            };
        }
    }, [currentSlide]);

    // Slide 2: Segmented progress ring completion
    useEffect(() => {
        if (currentSlide === 2) {
            setRingCompleted(false);
            const timer = setTimeout(() => {
                setRingCompleted(true);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [currentSlide]);

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay muted handled gracefully
            });
        }
    }, []);

    const activeSlide = slides[currentSlide];

    const handleAnchorClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', href);
        }
    };

    return (
        <section
            className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-36 sm:pt-40 lg:pt-44 pb-20 md:pb-28 overflow-hidden text-white transition-colors"
        >
            {/* Ambient Looping Video Background (/images/hero_Section1.webm) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/images/hero-slide-1.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="/images/hero_Section1.webm" type="video/webm" />
                    <source src="/images/hero_section1.webm" type="video/webm" />
                </video>

                {/* Soft Natural Left Scrim: Kept delicate so natural daylight and video details shine through */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/15" />

                {/* Subtle bottom transition into capabilities cream section */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="section-wrap relative z-10 w-full grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] xl:gap-16">
                {/* Left Column: Continuous Cycling Headline, Subtitle & Action Pills */}
                <div>
                    {/* Big Dual-Typography Headline */}
                    <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-bold tracking-tight text-white leading-[1.06]">
                        <span className="inline-block transition-all duration-300">
                            {activeSlide.prefix}
                        </span>
                        <span className="text-[#4ADE80] font-mono ml-0.5 animate-pulse">|</span>
                        <br />
                        <span className="font-serif italic font-normal text-[#4ADE80] tracking-normal block mt-1 text-3xl sm:text-5xl lg:text-[60px]">
                            {activeSlide.serif}
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-6 text-base sm:text-lg text-white/90 drop-shadow-md leading-relaxed max-w-xl font-normal transition-all duration-500">
                        {activeSlide.subtitle}
                    </p>

                    {/* Two Pill Action Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                            href="#contact"
                            onClick={(e) => handleAnchorClick(e, '#contact')}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
                        >
                            <span>Diskusikan Masalah Anda</span>
                            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </a>
                        <a
                            href="#research"
                            onClick={(e) => handleAnchorClick(e, '#research')}
                            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/25 backdrop-blur-md transition-all hover:border-white/40"
                        >
                            <span>Pelajari Research</span>
                        </a>
                    </div>
                </div>

                {/* Right Column: Exact Bobbin Morphing Animated Card */}
                <div className="relative flex justify-center lg:justify-end">
                    <div
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="w-full max-w-[460px] min-h-[390px] rounded-[38px] sm:rounded-[44px] bg-black/25 backdrop-blur-xl border border-white/15 p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col justify-center transition-all duration-500"
                    >
                        {/* STATE 1 (Screenshot 2): Typewriter Prompt Input Card */}
                        {activeSlide.type === 'typewriter' && (
                            <div className="w-full flex flex-col text-left transition-opacity duration-500">
                                <h3 className="text-2xl sm:text-[26px] font-semibold text-white tracking-tight mb-4">
                                    Eksplorasi masalah nyata
                                </h3>

                                {/* Pill Tags Row */}
                                <div className="flex items-center gap-2 mb-4 flex-wrap">
                                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/20 text-white/90 text-xs font-medium backdrop-blur-xs">
                                        <Users className="w-3.5 h-3.5 text-white/70" />
                                        <span>Problem First</span>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/20 text-white/90 text-xs font-medium backdrop-blur-xs">
                                        <Cpu className="w-3.5 h-3.5 text-white/70" />
                                        <span>AI &amp; IoT Edge</span>
                                    </div>
                                    <button
                                        type="button"
                                        className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 text-xs transition-colors"
                                        aria-label="Tambah parameter"
                                    >
                                        <Plus className="w-3.5 h-3.5" />
                                    </button>
                                </div>

                                {/* Textbox with Live Typewriter Animation */}
                                <div className="w-full rounded-2xl bg-white/[0.04] border border-white/15 p-4 sm:p-5 flex flex-col justify-between min-h-[145px]">
                                    <p className="text-sm sm:text-[15px] text-white/95 leading-relaxed font-normal">
                                        {typedText}
                                        <span className="inline-block w-0.5 h-4 bg-[#4ADE80] ml-0.5 animate-pulse align-middle" />
                                    </p>
                                    <div className="self-end mt-3">
                                        <button
                                            type="button"
                                            className="w-11 h-11 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
                                            aria-label="Kirim prompt"
                                        >
                                            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STATE 2 (Screenshot 1): Waveform & Live Telemetry Counters */}
                        {activeSlide.type === 'waveform' && (
                            <div className="w-full flex flex-col items-center text-center transition-opacity duration-500">
                                {/* Center Waveform Icon Graphic */}
                                <div className="w-16 h-16 rounded-2xl bg-[#22C55E] text-white flex items-center justify-center shadow-lg mb-6">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-4 bg-white rounded-full animate-[pulse_0.7s_ease-in-out_infinite]" />
                                        <span className="w-1.5 h-8 bg-white rounded-full animate-[pulse_1.1s_ease-in-out_infinite_100ms]" />
                                        <span className="w-1.5 h-11 bg-white rounded-full animate-[pulse_0.8s_ease-in-out_infinite_200ms]" />
                                        <span className="w-1.5 h-6 bg-white rounded-full animate-[pulse_1.0s_ease-in-out_infinite_150ms]" />
                                        <span className="w-1.5 h-3 bg-white rounded-full animate-[pulse_0.6s_ease-in-out_infinite_50ms]" />
                                    </div>
                                </div>

                                <h3 className="text-2xl sm:text-[26px] font-semibold text-white tracking-tight mb-7 drop-shadow-sm">
                                    Validasi di lingkungan nyata
                                </h3>

                                {/* 4 Pill Badges in 2x2 Grid with Live Animated Numbers */}
                                <div className="grid grid-cols-2 gap-2.5 w-full">
                                    <div className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white/90 text-xs backdrop-blur-xs">
                                        <Clock className="w-3.5 h-3.5 text-white/70" />
                                        <span className="font-mono">49:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}</span>
                                    </div>
                                    <div className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white/90 text-xs backdrop-blur-xs">
                                        <Users className="w-3.5 h-3.5 text-white/70" />
                                        <span className="font-medium">Kondisi Riil</span>
                                    </div>
                                    <div className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white/90 text-xs backdrop-blur-xs">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80]" />
                                        <span className="font-medium">Evidence-Based</span>
                                    </div>
                                    <div className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white/90 text-xs backdrop-blur-xs">
                                        <MessageSquare className="w-3.5 h-3.5 text-white/70" />
                                        <span className="font-mono">{dataFrames.toLocaleString()} telemetri</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STATE 3 (Screenshot 3): Segmented Progress Ring & Animated Checklist Complete */}
                        {activeSlide.type === 'checklist' && (
                            <div className="w-full flex flex-col items-center text-center transition-opacity duration-500">
                                {/* Segmented Circular Progress Ring ala Bobbin Screenshot 3 */}
                                <div className="relative w-16 h-16 flex items-center justify-center mb-5">
                                    <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                                        {/* Outer Segmented Ring Track */}
                                        <circle
                                            cx="32"
                                            cy="32"
                                            r="26"
                                            fill="none"
                                            stroke="rgba(255,255,255,0.15)"
                                            strokeWidth="3.5"
                                            strokeDasharray="36 6"
                                        />
                                        {/* Animated Green Progress Arc */}
                                        <circle
                                            cx="32"
                                            cy="32"
                                            r="26"
                                            fill="none"
                                            stroke="#22C55E"
                                            strokeWidth="3.5"
                                            strokeDasharray="163.36"
                                            strokeDashoffset={ringCompleted ? 0 : 120}
                                            strokeLinecap="round"
                                            className="transition-all duration-1000 ease-out"
                                        />
                                    </svg>
                                    {/* Center Checkmark Badge */}
                                    <div className="absolute w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#4ADE80]">
                                        <Check className="w-4 h-4 stroke-[3]" />
                                    </div>
                                </div>

                                <h3 className="text-2xl sm:text-[26px] font-semibold text-white tracking-tight mb-5 drop-shadow-sm">
                                    Kriteria nilai inovasi RYVA
                                </h3>

                                {/* Checklist Complete Summary reflecting docs/about.md criteria */}
                                <div className="w-full space-y-2.5 text-left">
                                    <div className="flex items-center justify-between p-2.5 px-4 rounded-full bg-white/[0.05] border border-white/15 text-xs text-white/90">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                                            <span>Menyelesaikan masalah nyata</span>
                                        </div>
                                        <span className="font-mono text-[#4ADE80] text-[11px] font-bold">TERCAPAI</span>
                                    </div>
                                    <div className="flex items-center justify-between p-2.5 px-4 rounded-full bg-white/[0.05] border border-white/15 text-xs text-white/90">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                                            <span>Tervalidasi di lingkungan riil</span>
                                        </div>
                                        <span className="font-mono text-[#4ADE80] text-[11px] font-bold">100% VALID</span>
                                    </div>
                                    <div className="flex items-center justify-between p-2.5 px-4 rounded-full bg-white/[0.05] border border-white/15 text-xs text-white/90">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                                            <span>Siap implementasi &amp; skala luas</span>
                                        </div>
                                        <span className="font-mono text-[#4ADE80] text-[11px] font-bold">TERSTANDAR</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
