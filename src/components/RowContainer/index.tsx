import { Row } from './styles';

interface IRowContainerProps {
    width?: string;
    children: JSX.Element | JSX.Element[];
    justifyContent?: string;
}

const RowContainer = ({
    width = "100%",
    justifyContent = "flex-start",
    children }: IRowContainerProps) => {

    return (
        <Row
            $width={width}
            justifyContent={justifyContent}>
            {children}
        </Row>
    )
}

export default RowContainer;