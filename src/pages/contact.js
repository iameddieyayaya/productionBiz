import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  }

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  render() {
    const { firstName, lastName, email, message } = this.state
    console.log(this.state)
    return (
      <Layout>
        <SEO title="Contact" />
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              First Name:{" "}
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                placeholder="Bob"
              />
            </label>
          </p>
          <p>
            <label>
              Last Name:{" "}
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                placeholder="Dylan"
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:{" "}
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="cool@email.com"
              />
            </label>
          </p>
          <p>
            <label>
              Message:{" "}
              <textarea
                name="message"
                value={message}
                onChange={this.handleChange}
                placeholder="Howdy!"
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Layout>
    )
  }
}

export default ContactPage
