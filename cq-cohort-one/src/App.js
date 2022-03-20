import React from 'react';
import Form from "./Components/Form"

// const Menu = (props) => {
//   console.log("Hello")
//   return (
//     <div className={styles.cont}>
//       <div>{props.left}</div>
//       <div>{props.right}</div>
//     </div>
//   )
// }

// const Title = ({label}) => <div>{label}</div>

function App() {
  const username = "";
  const password = "";
  const email = "";
  return (
    <div>
      {/* <Menu left={<Title label="LEFT" />} right={<Title label="RIGHT" />} /> */}
      <Form>
        <input placeholder="Enter name" name="username" value={username} />
        <input placeholder="Enter Password" name="password" value={password} />
        <input placeholder="Enter Email ID" name="email" value={email} />
      </Form>
    </div>
  )
}

export default App