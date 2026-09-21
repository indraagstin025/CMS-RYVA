import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"DM Sans"', 'Inter', ...defaultTheme.fontFamily.sans],
                serif: ['"Newsreader"', 'Georgia', 'Cambria', ...defaultTheme.fontFamily.serif],
                mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                brand: {
                    base: '#F8FAFC',
                    surface: '#FFFFFF',
                    elevated: '#F1F5F9',
                    border: '#E2E8F0',
                    emerald: '#059669',
                    emeraldLight: '#ECFDF5',
                    cyan: '#0284C7',
                    cyanLight: '#F0F9FF',
                },
            },
        },
    },

    plugins: [forms],
};
