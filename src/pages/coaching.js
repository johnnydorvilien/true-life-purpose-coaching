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
          <aside className="menu">
            <ul className="menu-list">
              <li>
                <a>True Life Purpose Coaching</a>
              </li>
              <li>
                <a className="is-active">Manage Your Team</a>
                <ul>
                  <li>
                    <a>Members</a>
                  </li>
                  <li>
                    <a>Plugins</a>
                  </li>
                  <li>
                    <a>Add a member</a>
                  </li>
                </ul>
              </li>
            </ul>
            <p className="menu-label">Administration</p>
            <ul className="menu-list">
              <li>
                <a>Team Settings</a>
              </li>
              <li>
                <a className="is-active">Manage Your Team</a>
                <ul>
                  <li>
                    <a>Members</a>
                  </li>
                  <li>
                    <a>Plugins</a>
                  </li>
                  <li>
                    <a>Add a member</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Invitations</a>
              </li>
              <li>
                <a>Cloud Storage Environment Settings</a>
              </li>
              <li>
                <a>Authentication</a>
              </li>
            </ul>
            <p className="menu-label">Transactions</p>
            <ul className="menu-list">
              <li>
                <a>Payments</a>
              </li>
              <li>
                <a>Transfers</a>
              </li>
              <li>
                <a>Balance</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  </Layout>
)

export default Coaching
