import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'
import { css } from '@emotion/core'


import Layout from "../components/layout"
import SEO from "../components/seo"

const TextArea = styled.textarea(
  {
    backgroundColor: 'rebeccapurple',
    color: 'white',
    fontFamily: 'helvetica',
    padding: '20px',
    borderRadius: '15px',
    outline: 'none'
  },
  props => ({
    fontSize: props.fontSize
  })
)

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 css={css`
      margin-top: 60px;
    `}>Styled Components</h1>
    <TextArea fontSize={20}>
      Type here...
    </TextArea>
    <p>This sets up a styled component in object format to accept a passed prop.</p>
    <Link to="/page-3/">Page 3</Link><br />
    <Link to="/">Back Home</Link>
  </Layout>
)

export default SecondPage
