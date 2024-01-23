import React from 'react'
import NavLinks from '../NavLinks/NavLinks'
import Button from '../Button/Button'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <div>
            <p className={styles.logo}>LambdaTest</p>
        </div>
        <NavLinks />
        <div className={styles.buttons}>
        <Button text='Book a Demo' type='secondary' />
        <Button text='Get Started Free' type='primary' />
        </div>
    </div>
  )
}
