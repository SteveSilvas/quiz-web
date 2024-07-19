import styled from 'styled-components';

export const SeparatorDiv = styled.div<{ $width: string }>`
    width: ${props => props.$width};
    border: 0px;
    padding: 0.4px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, var(--color-03) 50%, rgba(255, 255, 255, 0) 100%);
`;