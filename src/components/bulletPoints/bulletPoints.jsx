import React from 'react'
import * as Styled from './bulletPoints.style'

const BulletPoints = ({ children }) =>  (
    <Styled.FullContainer>
        <Styled.Benefits>{children}</Styled.Benefits>
    </Styled.FullContainer>
)
export default BulletPoints