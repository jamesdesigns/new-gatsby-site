import React from 'react'
import * as Styled from './hero.style'

const Hero = ({ children, image }) => (
    <Styled.FullHeroContainer>
        <Styled.Main>
            {children}
        </Styled.Main>
        <Styled.HeroImg>{image}</Styled.HeroImg>
    </Styled.FullHeroContainer>
)

export default Hero