import React from "react"
import styles from "./Form.module.css";

function Form(props) {
  const { children, onSubmit } = props;
  return (
    <form onSubmit={onSubmit} className={styles.myForm}>
      {children}
    </form>
  )
}

export default Form