import React from 'react'
import HeroImage from '../HeroImage/HeroImage'
import HeroText from '../HeroText/HeroText'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.section}>
            <HeroText />
            <HeroImage />
    </section>
  )
}
