import styled from "styled-components";

export const CardContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  justify-self: center;
  // background-color: #95dada;
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
`;

export const WizardName = styled.h2`
  // color: #923459;
  color: ${(props) => props.theme.colors.primarytext};
`;

export const CharacterImage = styled.img`
  max-width: 50%;
  max-height: 50%;
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    background-color: #bf4f74;
    color: white;
  }
`;

export const SecondButton = styled(Button)`
  background-color: #000;
`;
