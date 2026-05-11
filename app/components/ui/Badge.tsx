interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

export const Badge = ({ children, variant = 'primary' }: BadgeProps) => {
    const style =
        variant === 'primary'
            ? { background: "#FEF7F9", color: "#7A002B", border: "1px solid #EAD9EE" }
            : { background: "#F3F4F6", color: "#5B002C", border: "1px solid #E5E7EB" };

    return (
        <span className="px-3 py-1 rounded-full text-sm font-medium" style={style}>
            {children}
        </span>
    );
};