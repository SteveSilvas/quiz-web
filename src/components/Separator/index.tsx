interface SeparatorProps {
    width?: string;
}
const Separator: React.FC<SeparatorProps> = ({ width }) => {
    return (
        <div style={{
            padding: '0.4px',
            width: width ?? '100%',
            backgroundColor: 'var(--color-01)',
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, var(--color-03) 50%, rgba(255, 255, 255, 0) 100%)',
        }}>
        </div>
    );
};

export default Separator;