
import { UserContext } from "../App";
import { useContext } from "react";
const Contact = () => {
  return (
    <div className="contact-container"> {/* Add className="contact-container" */}
      <h1>Contact Us</h1>
      <h5>{useContext(UserContext)}</h5>
      <p>Please feel free to reach out to us!</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
