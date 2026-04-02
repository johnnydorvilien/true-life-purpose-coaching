import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "../components/about.scss"
// import 'bootstrap/dist/css/bootstrap.css'
import "util/util.js"

const Events = () => (
  <Layout>
    <SEO title="Events" />
    <section className="section">
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>
                <abbr title="Position">Event</abbr>
              </th>
              <th>Type</th>
              <th>
                <abbr title="Won">Name</abbr>
              </th>
              <th>
                <abbr title="Played">Date</abbr>
              </th>
              <th>
                <abbr title="Won">Time</abbr>
              </th>
              <th>
                <abbr title="Drawn">Location</abbr>
              </th>
              <th>
                <abbr title="Points">Resevation</abbr>
              </th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>
                <abbr title="Position">Event</abbr>
              </th>
              <th>Type</th>
              <th>
                <abbr title="Played">Name</abbr>
              </th>
              <th>
                <abbr title="Won">Date</abbr>
              </th>
              <th>
                <abbr title="Won">Time</abbr>
              </th>
              <th>
                <abbr title="Drawn">Location</abbr>
              </th>
              <th>
                <abbr title="Points">Resevation</abbr>
              </th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <th>1</th>
              <td>Workshop</td>
              <td>
                <a href="">Come Tell The Story</a>
              </td>
              <td>8-15-2019</td>
              <td>6:00 p.m</td>
              <td>Atlanta, GA</td>
              <td>
                <a href="" title="2016–17 UEFA Champions League">
                  Reserve Your Seat
                </a>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Workshop</td>
              <td>
                <a href="">Performance at The Work Place</a>
              </td>
              <td>9-21-2019</td>
              <td>6:00 p.m</td>
              <td>Atlanta, GA</td>
              <td>
                <a href="" title="2016–17 UEFA Champions League">
                  Reserve Your Seat
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </Layout>
)

export default Events
