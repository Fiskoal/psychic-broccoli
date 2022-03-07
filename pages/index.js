import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor</p>
        <Link href="/lists">
          <a className={styles.btn}>See all lists</a>
        </Link>
      </div>
  )
}
