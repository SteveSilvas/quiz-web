import styled from 'styled-components';

interface IRowStyledProps {
    $width: string;
    justifyContent: string;
    onClick?: () => void;
}

export const RowStyled = styled.div<IRowStyledProps>`
    display: flex;
    flex-direction: row;
    width: ${props => props.$width};
    justify-content: ${props => props.justifyContent};
    ${props => props.onClick && `cursor: pointer;`}
`;
