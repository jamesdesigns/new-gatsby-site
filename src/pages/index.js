import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/core'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const color = 'rebeccapurple'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 css={css`
    margin-top: 60px;
    `}>Homework</h1>
   <ul css={css`
    color: ${color};
    font-family: helvetica;
   `}>
     <li>Turn inline styles in default layout.js and index.js into styled components</li>
     <li>Use the css prop to modify an element</li>
     <li>Set up a styled component in object format to accept a passed prop</li>
     <li>Create a styled div that uses preset styles from your theme.js file</li>
     <li>Set up an object in theme.js that defines font sizes and then use this to style the header component.</li>
   </ul>
   <p>(This unordered list uses css props to style the color and font-family.) </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Page 2</Link> <br />
    <Link to="/page-3/">Page 3</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
