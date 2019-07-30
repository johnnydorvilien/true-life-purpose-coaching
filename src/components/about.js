import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "../components/about.scss"

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className="section has-background-light">
      <div className="container">
        <div className="columns">
          <div className="column">
            <article className="media notification is-info">
              <figure className="media-left">
                <span className="icon is-medium">
                  <i className="fab fa-2x fa-css3-alt" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-3">Our Vision</h1>
                  <p className="is-size-6">
                    Our vision is to see transformation in people’s lives in the
                    corporate world by enabling them to find a clear purpose in
                    their work life while optimizing their performance in the
                    workplace. We want to see people fulfil their life long
                    dreams by reaching their goals and release the power within
                    them. Working smarter and not harder, having a balanced life
                    while enjoying what they do.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column">
            {/* <div className="column is-one-third"> */}
            <article className="media notification is-primary">
              <figure className="media-left">
                <span className="icon fs-medium">
                  <i className="fas fa-2x fa-align-justify" />
                </span>
              </figure>
              <div className="media-content">
                <h1 className="title is-size-3">Our Mission</h1>
                <p className="is-size-6">
                  Our mission is to continously provide customized,
                  self-development, coaching programs to help individuals gain
                  clarity, prevent burnout, and work through the very real
                  problems they face in high stress and fast-paced work
                  environments. We are committed to helping corporate employees
                  be the best version of themselves by bringing all the parts of
                  their life into productive, holistic, and fulfilling
                  alignment.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default About
