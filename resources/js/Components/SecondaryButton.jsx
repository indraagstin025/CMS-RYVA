export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center justify-center gap-2 rounded-sm border border-[#d7ddd6] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#101412] shadow-sm transition duration-150 ease-in-out hover:border-[#b6ee63] hover:text-[#6c9f24] focus:outline-none focus:ring-2 focus:ring-[#b6ee63] focus:ring-offset-2 disabled:opacity-50 ${
                    disabled && 'opacity-50 cursor-not-allowed'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
