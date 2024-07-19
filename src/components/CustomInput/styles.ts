import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Label = styled.label`
    font-size: 1rem;
    font-weight: bold;
`;

export const Field = styled.input`
    width: 100%;
    height: 40px;
    border: 0px;
    border-radius: 4px;
    padding-left: 8px;
    border: 1px solid var(--color-02);
    
    &:focus {
    border-color: ${({ theme }) => theme.borderFocusColor};
    outline: none; /* Remove o outline padrão do navegador */
  }
`;
