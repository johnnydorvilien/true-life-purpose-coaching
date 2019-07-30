import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaPhone,
} from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import "./globalStyle.scss"

const copywrightStyle = {
  background: "#336699",
  padding: "1.5rem 1.5rem 1.5rem",
}

const logoStyle = {
  margin: "1rem",
}

const navigationStyle = {
  marginLeft: "2vw",
}

const bottomNavigationStyle = {
  margin: "0 0 2vh 2vw",
}

const socialMediaStyle = {
  fontSize: "xx-large",
  color: "#336699",
  margin: "0 0 0 1vw",
}

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        logoImage: file(relativePath: { eq: "True-Life-Purpose-Logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <footer>
        <div className="has-background-grey-lighter">
          <div className="columns">
            <div className="column">
              <Link to="/">
                <img
                  style={logoStyle}
                  src={data.logoImage.childImageSharp.fluid.src}
                  width="180"
                  height="90"
                />
              </Link>
            </div>
            <div className="column">
              <div style={navigationStyle}>
                <Link
                  className="has-text-white has-text-weight-medium is-size-5"
                  to="/"
                >
                  Home
                </Link>
              </div>

              <div style={navigationStyle}>
                <Link
                  className=" has-text-white has-text-weight-medium is-size-5"
                  to="/about/"
                >
                  About
                </Link>
              </div>

              <div style={bottomNavigationStyle}>
                <Link
                  className="has-text-white has-text-weight-medium is-size-5"
                  to="/contact/"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="column">
              <h1
                style={navigationStyle}
                className="has-text-white has-text-weight-semibold is-size-4"
              >
                Follow Us
              </h1>
              <a
                style={socialMediaStyle}
                href="https://www.linkedin.com/in/johnny-dorvilien-71b90545/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                style={socialMediaStyle}
                href="https://www.facebook.com/johnny.dorvilien.9?ref=bookmarks"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                style={socialMediaStyle}
                href="https://www.instagram.com/truelifepurposecoaching/"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                style={socialMediaStyle}
                href="https://twitter.com/truelifepurpos1"
                target="_blank"
              >
                <FaTwitterSquare />
              </a>
            </div>
            <div className="column">
              <a style={navigationStyle} href="tel:+16786727315">
                <FaPhone /> 678-672-7315
              </a>

              <a
                style={navigationStyle}
                href="mailto:support@truelifepurpose.com?Subject=Reaching%20out"
                target="_top"
              >
                <MdEmail />
                support@truelifepurpose.com
              </a>
            </div>
          </div>
        </div>
        <div style={copywrightStyle}>
          <div className="content has-text-centered has-text-white">
            <p>2019 © True Life Purpose Coaching - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    )}
  />
)

export default Footer
