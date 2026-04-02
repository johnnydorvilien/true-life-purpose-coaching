import React, { Component } from "react"
import Layout from "../components/layout"
import { toast } from "react-toastify"
import Amplify, { API, graphqlOperation } from "aws-amplify"
import * as mutations from "../graphql/mutations"
import aws_config from "../aws-exports"
import SEO from "../components/seo"

import "../components/contact.scss"

Amplify.configure(aws_config)
Amplify.configure({
  API: {
    graphql_headers: async () => ({
      "x-api-key": aws_config.aws_appsync_apiKey,
    }),
    graphql_endpoint: aws_config.aws_appsync_graphqlEndpoint,
  },
})

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      emailAddress: "",
      phoneNumber: "",
      inquiry: "",
      message: "",
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.storeContact = this.storeContact.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    let contactInfo = {
      userName: event.target.userName.value,
      emailAddress: event.target.emailAddress.value,
      phoneNumber: event.target.phoneNumber.value,
      inquiry: event.target.inquiry.value,
      message: event.target.message.value,
    }

    this.storeContact(contactInfo)

    this.setState({
      userName: "",
      emailAddress: "",
      phoneNumber: "",
      inquiry: "",
      message: "",
    })
  }

  async storeContact(contactInfo) {
    function sendEmail() {
      let endpoint =
        "https://b054kyf0fc.execute-api.us-east-1.amazonaws.com/default/ContactFormLambda"
      let body = {
        email: contactInfo.emailAddress,
        subject: "User contact through web application",
        message: contactInfo.message,
      }
      let lambdaRequest = new Request(endpoint, {
        method: "POST",
        // Quick note: 'no-cors' mode is for development on localhost only!
        mode: "no-cors",
        body: JSON.stringify(body),
      })
      fetch(lambdaRequest)
        .then(response => console.log(response))
        .catch(err => console.error(err))
    }
    try {
      await API.graphql(
        graphqlOperation(mutations.createContact, { input: contactInfo })
      )
      toast.info(
        "Your information was submitted and we will get back to you shortly.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        }
      )
      sendEmail()
    } catch (error) {
      toast.error(
        "There was an error submitting your contact information. Please try again.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        }
      )
    }
  }
  //I had to make all the form fields required because of an issue in graphql not accepting empty strings from the frontend
  //TODO: Fix the schema so phone number and website can be optional
  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered">Send Us a Message</h1>
            <p className="content" />
          </div>
        </section>
        <div className="container">
          <div className="columns">
            <div className="column">
              <section className="section">
                <h2 className="has-text-weight-bold-office	">Office Address:</h2>
                <p>3340 Peachtree Rd. Suite 1800 Atlanta, GA 30326</p>

                <h2 className="has-text-weight-bold-hours	">Working Hours:</h2>
                <p>9:00AM To 6:00PM</p>
              </section>
            </div>
            <div className="column is-three-quarters">
              <form onSubmit={this.handleSubmit}>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <label className="label">Name *</label>
                      <div className="control">
                        <input
                          className="input"
                          name="userName"
                          type="text"
                          placeholder="Full Name"
                          required
                          onChange={this.handleInputChange}
                          value={this.state.userName}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label">Email Address *</label>
                      <div className="control">
                        <input
                          className="input"
                          name="emailAddress"
                          type="email"
                          placeholder="example@email.com"
                          required
                          onChange={this.handleInputChange}
                          value={this.state.emailAddress}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <label className="label">Phone Number *</label>
                      <div className="control">
                        <input
                          className="input"
                          name="phoneNumber"
                          type="tel"
                          required
                          placeholder="555-555-5555"
                          onChange={this.handleInputChange}
                          value={this.state.phoneNumber}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label">Inquiry *</label>
                      <div className="select">
                        <select
                          name="inquiry"
                          className="field"
                          value={this.state.inquiry.value}
                          onChange={this.handleInputChange}
                        >
                          <option selected value="General Info">
                            General Info
                          </option>
                          <option value="Coaching Inquiry">
                            Coaching Inquiry
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Message *</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="type your message..."
                      name="message"
                      required
                      onChange={this.handleInputChange}
                      value={this.state.message}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button className="button is-link" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default Contact
