import styled from '@emotion/styled'
import { Link } from "gatsby"

export const Header = styled.header(
    ({theme}) => ({
        backgroundColor: theme.color.light,
        margin: theme.margin
    })
)


export const TitleWrapper = styled.div(
    props => (`
        margin: 0 auto,
        max-width: 960,
        padding: ${props.padding} 1.0875rem;`
    ))

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`