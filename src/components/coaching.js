import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "../components/coaching.scss"

const Coaching = () => (
  <Layout>
    <SEO title="Coaching" />
    <section className="section">
      <div className="columns">
        <div className="container">
          <h1 className="title">Our Mission</h1>
          <p className="content">
            Our mission is to continously provide customized, self-development,
            coaching programs to help individuals gain clarity, prevent burnout,
            and work through the very real problems they face in high stress and
            fast-paced work environments. We are committed to helping corporate
            employees be the best version of themselves by bringing all the
            parts of their life into productive, holistic, and fulfilling
            alignment.
          </p>
          <Link className="button is-link" to="/contact/">
            Reach Out to
          </Link>
        </div>

        <div className="container">
          <div className="columns">
            <figure className="image is-128x128">
              <img
                className="is-rounded"
                src="https://www.insideoutdev.com/wp-content/themes/iod2/img/img_solutions_section2.png?x34735"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="columns">
        <div className="container">
          <h1 className="title">Our Vision</h1>
          <p className="content">
            Our vision is to see transformation in people’s lives in the
            corporate world by enabling them to find a clear purpose in their
            work life while optimizing their performance in the workplace. We
            want to see people fulfil their life long dreams by reaching their
            goals and release the power within them. Working smarter and not
            harder, having a balanced life while enjoying what they do.
          </p>
          <Link className="button is-link" to="/contact/">
            Reach Out to
          </Link>
        </div>

        <div className="container">
          <div className="columns">
            <figure className="image is-128x128">
              <img
                className="is-rounded"
                src="https://www.insideoutdev.com/wp-content/themes/iod2/img/img_solutions_section2.png?x34735"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Coaching
