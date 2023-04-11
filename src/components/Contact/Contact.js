import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles className="section">
      <form name="contact" netlify>
        <input placeholder="Your name..." type="text" name="name" required />
        <input placeholder="Your email..." type="email" name="email" required />

        <input placeholder="Website URL (optional)" type="url" name="website" />
        <select placeholder="Service..." name="website">
          <option value="website-performance-optimization">
            Website Performance Optimization
          </option>
          <option value="web-app-development">Web App Development</option>
          <option value="other">Other</option>
        </select>
        <textarea
          placeholder="Tell us about your project..."
          name="message"
          rows="5"
        ></textarea>
        <Button text="Send Message" />
      </form>
    </ContactStyles>
  )
}

export default Contact
