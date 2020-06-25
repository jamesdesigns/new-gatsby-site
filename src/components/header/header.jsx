import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as Styled from './header.styles'

const Header = ({ siteTitle }) => (
  <Styled.Header>
    <Styled.TitleWrapper padding="3rem">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: 30
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Styled.TitleWrapper>
  </Styled.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
