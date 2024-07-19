import { RowStyled } from './styles';

interface IRowContainerProps {
    width?: string;
    children: JSX.Element | JSX.Element[];
    justifyContent?: string;
    onClick?: () => void;
}

const RowContainer = ({
    width = "100%",
    justifyContent = "flex-start",
    children,
    onClick
}: IRowContainerProps) => {

    return (
        <RowStyled
            onClick={onClick}
            $width={width}
            justifyContent={justifyContent}>
            {children}
        </RowStyled>
    )
}

export default RowContainer;