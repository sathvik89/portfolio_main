import { useState } from "react";
import styles from "../Styling/Contact.module.css";
export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }
  function handlemail(e1) {
    setEmail(e1.target.value);
  }
  function handleSubmit() {
    // t.preventDefault();
    {
      email &&
        name &&
        alert(`message sent from ${email}. Thankyou ${name} 🫶🏻`);
    }
  }

  return (
    <div className={styles.mainContact}>
      <h1 className={styles.heading}>Get in touch</h1>
      <p className={styles.subhead}>
        Have a question or want to work together? Feel free to reach out to me
        using the form below or through my social media channels.
      </p>
      <div className={styles.leftcard}>
        <h1>Contact information</h1>
        <div>Email : koriginjasathvik@gmail.com</div>
        <div>Phone : +91 9347868783</div>
      </div>
      <div className={styles.rightcard}>
        <h1 className={styles.cardtitle}>Send me a message</h1>
        <form onSubmit={handleSubmit}>
          <label for="name">Name: </label>
          <input
            value={name}
            id="name"
            type="text"
            onChange={handleChange}
            placeholder="your name ..."
          />
          <label for="email">Email: </label>
          <input
            value={email}
            id="email"
            type="email"
            onChange={handlemail}
            placeholder="your email ..."
          />
          <textarea></textarea>
          <button>Send message</button>
        </form>
      </div>
    </div>
  );
}
