import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Footer() {
  return (
    <div >
      <footer className={styles.footer}>
        <p>Test footer</p>
        
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}