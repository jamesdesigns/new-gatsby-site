import React from 'react'
import * as Styled from './hero.style'

const Hero = ({ children }) => (
    <Styled.FullHeroContainer>
        <Styled.Main>
            {children}
        </Styled.Main>
    </Styled.FullHeroContainer>
)

export default Hero