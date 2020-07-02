import React from 'react'
import * as Styled from './sideByside.styles'

const SideBySide = ({ image, alt, children }) => (

    <Styled.Container>
        <div>
            {children}
        </div>
        <img src={image} alt={alt ? alt : ''}/>

    </Styled.Container>
)

export default SideBySide