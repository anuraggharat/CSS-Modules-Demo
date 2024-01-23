import React from 'react'
import styles from './Button.module.css'

export default function Button({text,type}) {
  return (
    <button className={styles.button + " " + styles[type]}>{text}</button>
  )
}
