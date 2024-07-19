import { SeparatorDiv } from "./styles";

interface SeparatorProps {
    width?: string;
}
const Separator: React.FC<SeparatorProps> = ({ width }) => {
    return <SeparatorDiv $width={width ?? "100%"} />;
};

export default Separator;