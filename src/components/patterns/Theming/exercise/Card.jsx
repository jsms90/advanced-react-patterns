import theme from "./theme";

export const Card = styled("div")`
    border-radius: ${props => props.theme.borderRadius};
    padding: 16px;
    box-shadow: ${props => props.theme.boxShadow};
    font-size: ${props => props.theme.fontSizeLarge};
    font-weight: 800;
    text-align: center;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.fontColor};
`;