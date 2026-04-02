import React, { useState } from "react"
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

const navigationStyle = {
  color: "white",
  display: "inline",
  padding: "10px",
  float: "Right",
  marginTop: "20px",
  backgroundColor: "#2B75A1"
}

const myNavStyle={
  display:"inline-flex",
  fontSize:"1rem",
}

const socialMediaStyle = {
  fontSize: "x-large",
  color: "#C0C0C0",
  marginRight: "200px",
  float: "Center",
}

const Header = () => {
  const [activeMenu, toggleMenu] = useState(false)

  return (
    <StaticQuery
      query={graphql`
        query {
          logoImage: file(relativePath: { eq: "True-Life-Purpose-Logo.png" }) {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <nav
          className="is-fullheight-with-navbar"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand" style={myNavStyle}>
            <Link className="navbar-item-logo" to="/">
              <img
                src={data.logoImage.childImageSharp.fluid.src}
                width="180"
                height="130"
              />
            </Link>
            <div className="socialMedia">
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
            <div>
             
                <a style={navigationStyle}>     
                       Schedule Your Free Consultation               
              </a>

            </div>
          </div>

          <a
            role="button"
            className={`has-background-white navbar-burger burger ${
              activeMenu ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
            data-target="customNavMenu"
            onClick={() => toggleMenu(!activeMenu)}
          >
            <span />
            <span />
            <span />
          </a>

          <div
            id="customNavMenu"
            className={`true-life-color-scheme navbar-menu ${
              activeMenu ? "is-active" : ""
            }`}
          >
            <div className="navbar-start">
              <Link
                className="navbar-item has-text-white font-family: Whitney-Semibold-Bas"
                to="/"
              >
                Home
              </Link>

