import type { NextPage } from 'next'

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
    <div style={buttonWrapperStyle}>
      <input type="text" value="https://craftcode.design/" />
      <button>Send</button>
    </div>
  );
}

export default Home
