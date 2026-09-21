export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center gap-2 rounded-sm bg-[#b6ee63] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#13200c] transition duration-150 ease-in-out hover:bg-[#cdf58b] focus:outline-none focus:ring-2 focus:ring-[#b6ee63] focus:ring-offset-2 active:bg-[#a5db52] disabled:opacity-50 ${
                    disabled && 'opacity-50 cursor-not-allowed'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
