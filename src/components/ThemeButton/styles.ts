import { FaMoon, FaSun } from 'react-icons/fa';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
    position: absolute;
    right: 0px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    display: flex;
    justify-content: center;    
    align-items: center;
    border-radius: 15px;
    padding: 4px;
    gap: 4px;
    transition: 0.3s;

    &:hover {
      border: 1px solid ${({ theme }) => theme.borderFocusColor};
      transition: 0.3s;
    }
`;

export const StyledFaSun = styled(FaSun)`
  font-size: 1rem;
  transition: 0.3s;
  cursor: pointer;
  color: ${({ theme }) => theme.borderColor};

  &:hover *{
    color: ${({ theme }) => theme.borderFocusColor};
    transition: 0.3s;  }
`;

export const StyledFaMoon = styled(FaMoon)`
  font-size: 1rem;
  transition: 0.3s;
  cursor: pointer;
  color: ${({ theme }) => theme.borderColor};

  &:hover *{
    transition: 0.3s;
    color: ${({ theme }) => theme.borderFocusColor};
  }
`;