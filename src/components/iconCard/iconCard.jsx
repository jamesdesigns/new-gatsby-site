import React from 'react'
import * as Styled from './iconCard.styles'

const IconCard = ({ image, alt = '', headline, children }) => (

    <Styled.Container>
        <Styled.Icon src={image} alt={alt} />
        <Styled.Subtitle>{headline}</Styled.Subtitle>
        <Styled.Content>{children}</Styled.Content>
    </Styled.Container>
)

export default IconCard