import React from 'react'
import styles from './NavLinks.module.css'

const links = ['Platform','Resources','Enterprizes','Developers','Pricing']

export default function NavLinks() {
  return (
        <ul className={styles.links}>
            {links.map((link)=>(
              <li key={link} className={styles.link}>
              <a className={styles.anchor} href={link} >{link}</a>
            </li>
            ))}
        </ul>
  )
}
