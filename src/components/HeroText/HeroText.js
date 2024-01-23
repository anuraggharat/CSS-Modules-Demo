import React from 'react'
import styles from './HeroText.module.css'
import Button from '../Button/Button'

export default function HeroText() {
  return (
    <div className={styles.half}>
        <h1 className={styles.leading}>Next-Generation Mobile Apps and Cross Browser Testing Cloud</h1>
        <div className={styles.buttoncontainer}>
          <Button text={'Start free with Google'} type={'primary'} />
          <Button text={'Start free with Email'} type={'secondary'} />

        </div>
    </div>
  )
}
