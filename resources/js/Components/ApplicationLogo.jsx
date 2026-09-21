export default function ApplicationLogo({ className = '', ...props }) {
    return (
        <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight text-white ${className}`} {...props}>
            <div className="w-8 h-8 bg-[#b6ee63] text-[#13200c] flex items-center justify-center font-bold text-base rounded-sm font-mono">
                R
            </div>
            <span className="text-xl font-bold tracking-[-.04em]">RYVA.ID</span>
        </div>
    );
}
