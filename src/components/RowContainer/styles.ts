import styled from 'styled-components';

export const Row = styled.div<{ $width: string, justifyContent: string }>`
    display: flex;
    flex-direction: row;
    width: ${props => (props.$width)};
    justify-content: ${props => (props.justifyContent)};
`;
