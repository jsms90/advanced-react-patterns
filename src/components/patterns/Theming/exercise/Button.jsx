import theme from "../exercise/theme";

export const Button = styled.button`
  background-color: ${props => props.theme.backgroundColor};
  border-radius: ${props => props.theme.borderRadius};
  font-size: 24px;
  font-weight: 800;
  padding: 8px 16px;
  transition: all 0.2s ease;
  color: ${props => props.theme.fontColor};
  border: 2px solid ${props => props.theme.fontColor};

  &:hover {
    color: ${props => props.theme.backgroundColor};
    border: 2px solid ${props => props.theme.fontColor};
    border: 2px solid ${props => props.theme.backgroundColor};
  }
`;
