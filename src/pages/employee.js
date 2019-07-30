import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "../components/employee.scss"
import 'bootstrap/dist/css/bootstrap.css'

const Employee = () => (
  <Layout>
    <SEO title="Employee" />
    <div className="tabs is-small">
      <ul>
        <li className="is-active">
          <a>Blog</a>
        </li>
        <li>
          <a>Podcasts</a>
        </li>
      </ul>
    </div>
    <section className="section">
      <div className="columns">
        <div className="container">
          <h1 className="title">
            How to Make It Safe for Employees to Give Feedback
          </h1>
          <p className="content">
            Most organizations make feedback a priority. They encourage managers
            to give good, actionable feedback, and teach employees how to make
            use of...
          </p>
          <Link className="button is-link" to="/contact/">
            Read More
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

export default Employee
