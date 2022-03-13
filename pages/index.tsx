import type { NextPage } from 'next'
import { sendMail } from "../services/sendMail";

const Home: NextPage = () => {
  const buttonWrapperStyle = {
    color: "white",
    display: "inline-block",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    maxWidth: '240px',
    margin: '0 auto',
    borderRadius: '3px'
  }

  return (
    <form style={buttonWrapperStyle} onSubmit={sendMail}>
      <input id="name" name="name" type="text" required />
      <input id="subject" name="subject" type="text" required />
      <input id="email" name="email" type="text" required />
      <input id="msg" name="message" type="text" required />
      <button type='submit'>Send</button>
    </form>
  );
}

export default Home
