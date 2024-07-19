import styled from "styled-components";

export const CustomButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;

  &:hover button {
    border-radius: 15px;
    border: 2px solid ${({ theme }) => theme.borderFocusColor};
    background-color: ${({ theme }) => theme.borderFocusColor};
    color: ${({ theme }) => theme.background};
  }
`;

export const CustomButtonStyled = styled.button`
  max-width: 20rem;
  min-width: 5rem;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.borderColor};
  /* box-shadow: 0.3em 0.5em 0.3em #c3c3c3; */
  background-color: ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.background};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 4px 2px;
  cursor: pointer;
  transition: 0.7s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;

  &:hover {
    border-radius: 15px;
    border: 2px solid ${({ theme }) => theme.borderFocusColor};
    background-color: ${({ theme }) => theme.borderFocusColor};
    color: ${({ theme }) => theme.titleColor};
    box-shadow: 0.3px 1px 3px #c3c3c3;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto rgba(255, 255, 255, 1);
  }
`;
