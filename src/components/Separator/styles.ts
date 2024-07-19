import styled from 'styled-components';

export const SeparatorDiv = styled.div<{ $width: string }>`
    width: ${props => props.$width};
    border: 0px;
    padding: 0.4px;
    background-color: ${({ theme }) => theme.borderColor};
    min-height: 1px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, 
    ${({ theme }) => theme.borderColor} 50%, rgba(255, 255, 255, 0) 100%);

    &:hover {
        background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, 
        ${({ theme }) => theme.borderFocusColor} 50%, rgba(255, 255, 255, 0) 100%);
        transition: 0.3s;
    }
`;