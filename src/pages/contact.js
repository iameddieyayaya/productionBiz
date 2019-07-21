import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import SfBridgeImg from "../components/sfBridgeImg"

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

  clearState = () => {
    this.setState({ firstName: "", lastName: "", email: "", message: "" })
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Winning!"), this.clearState())
      .catch(error => alert(error))

    e.preventDefault()
  }

  render() {
    const { firstName, lastName, email, message } = this.state
    return (
      <Layout>
        <SEO title="Contact" />
        <SfBridgeImg />
        <div
          style={{
            display: "flex",
            padding: "100px",
          }}
        >
          <div style={{ margin: "0 auto" }}>
            <Header sectionTitle="Reach out!">
              <p style={{ width: "20vw" }}>
                Thank you for taking the time to check out my website! If you
                have any questions or would like to inquire about working
                together I would love to connect.
              </p>
            </Header>
          </div>
          <form
            onSubmit={this.handleSubmit}
            style={{ margin: "0 auto" }}
            className="contactForm"
          >
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
        </div>
      </Layout>
    )
  }
}

export default ContactPage
