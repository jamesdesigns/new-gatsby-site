import React from "react"
import { Link } from "gatsby"
import Hero from '../components/hero/hero'
import Columns from '../components/columns/columns'
import SideBySides from '../components/sideByside/sideByside'
import IconCard from '../components/iconCard/iconCard'
import cellularIcon from '../images/cellular-monitoring.svg'
import BroadbandIcon from '../images/broadband-monitoring.svg'
import LandlineMonitoring from '../images/landline-monitoring.svg'
import Thermostat from '../images/thermostat.svg'
import SmartLightBulb from '../images/smart-lightbulb.svg'
import Innovation from '../images/innovation.svg'
import Commercial from '../images/commercial-exterior.jpg'
import { css } from '@emotion/core'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BulletPoints from "../components/bulletPoints/bulletPoints"




const ThirdPage = ({ children }) => (
  <Layout>
    <SEO title="Page three" />
    <Hero>
      <h1  css={css`
        font-size: 50px;
        font-family: poppins;
        font-weight: 800;
        padding-top: 80px;
        text-align: left;
        `
        }>Vio Business Security Systems</h1>
      <h4 css={css`text-align: left`}>Tomorrow's tech, today's security.</h4>
      <img src={Commercial} alt="" />
    </Hero>
    <Columns>
        <h2 css={css`
        font-size: 45px;
        font-family: poppins;
        font-weight: 700;
        padding-top: 80px;
        `
        }>Flexible Monitoring Options</h2>
        <h4 css={css`
        margin-top: -10px;
        font-size: 28px;
        `}>Solutions for every business</h4>
        <p>Vio Security creates custom business security packages and plans. That means no matter the size of your business, no matter the industry, we'll cultivate the proper business security system for you.</p>
        <div css={css`
          display: flex;
        `}>
          <IconCard image={cellularIcon} headline="Cellular">
          Cellular monitoring prevents loss of security in case of cut phone lines—and eliminates the mess of additional wires.
          </IconCard>
          <IconCard image={BroadbandIcon} headline="Broadband-internet">
          Broadband-internet monitoring communicates with our monitoring center through your router—at the speed of light.
          </IconCard>
          <IconCard image={LandlineMonitoring} headline="Landline">
          Landline monitoring provides an affordable, stable solution best for remote business locations.
          </IconCard>
        </div>
    </Columns>
    <SideBySides>Test</SideBySides>
    <BulletPoints>
      <h2 css={css`
        font-size: 45px;
        font-family: poppins;
        font-weight: 700;
        padding-top: 80px;
        `
        }>Save Energy, Save Money</h2>
        <div css={css`
          display: flex;
        `}>
      <IconCard image={Thermostat} headline="Smart Thermostat">
        <hr />
         <ul css={css`
          text-align: left;
         `}>
           <li>Create custom settings to craft a hands-off daily routine for your system.</li>
           <li>Cut costs with environmental learning and automatic temperature adjustments.</li>
           <li>Control climate from your Vio app.</li>
         </ul>
      </IconCard>
      <IconCard image={SmartLightBulb} headline="Light Control">
        <hr />
         <ul css={css`
          text-align: left;
         `}>
           <li>Set custom schedules to minimize energy use.</li>
           <li>Control lights from your phone app or a centralized smart panel.</li>
           <li>Activate lights based on motion for greater energy savings.</li>
         </ul>
      </IconCard>
      <IconCard image={Innovation} headline="Security System">
        <hr />
         <ul css={css`
          text-align: left;
         `}>
           <li>Use your security system’s motion sensors to trigger lighting and climate control options..</li>
           <li>Monitor energy savings from your security app.</li>
           <li>Get alerts anywhere.</li>
         </ul>
      </IconCard>
      </div>
    </BulletPoints>

    <br />
    <Link to="/page-2/">Page 2</Link><br />
    <Link to="/">Back Home</Link>
  </Layout>
)

export default ThirdPage
