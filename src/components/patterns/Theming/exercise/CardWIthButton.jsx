import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import Button from './Button'
import Card from './Card'

const StyledCard = styled(Card)`
    &hover: {
        color: blue;
    }
`

const CardWithButton = ({children, buttonText}) => (
    <ThemeProvider theme={theme}>
    <StyledCard>
        {children}
        <Button>{buttonText}</Button>
    </StyledCard>
    </ThemeProvider>
)

export default CardWithButton