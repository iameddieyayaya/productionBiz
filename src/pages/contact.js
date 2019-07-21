import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    // event.preventDefault()
    console.log(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }

  render() {
    console.log(this.state)

    return (
      <Layout>
        <SEO title="Contact" />
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          // netlify-honeypot="bot-field"
          // onSubmit={this.handleSubmit}
          style={{
            border: "1px solid red",
            position: "relative",
            top: "200px",
          }}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label>
            First name
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              placeholder="Bob"
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              placeholder="Dylan"
            />
          </label>
          <label>
            Email
            <input name="email" placeholder="cool@emai.com" type="email" />
          </label>
          <textarea name="message" />
          <button type="submit">Submit</button>
        </form>
      </Layout>
    )
  }
}

export default ContactPage
