import styles from './HeroImage.module.css'

export default function HeroImage() {
  return (
    <div className={styles.half}>
        <img className={styles.image} src='https://www.lambdatest.com/resources/images/main/home_banner.webp' />
    </div>
  )
}
