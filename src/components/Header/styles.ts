import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  >div{
    display: flex;
    gap: 1rem;
    align-items: center;

    h1{
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 160%;
    }
  }
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;

  background-color: ${props => props.theme["green-500"]};

  color: ${props => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;

  cursor: pointer;

  &:hover{
    background-color: ${props => props.theme["green-700"]};
    transition: background-color 0.2s;
  }
`;