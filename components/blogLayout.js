import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/utils.module.scss'
import Link from 'next/link'

const name = 'Putri Dinar'
export const siteTitle = 'Undermaintenis Blog'

export default function Layout({ children, blog }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {blog ? (
          <>
        <div className={styles.leftSide}>
            <Image
              priority
              src="/images/profile.jpg"
              className={styles.borderCircle}
              height={40}
              width={40}
              alt={name}
            />
            <h1 className={styles.heading}>{name}</h1>
        </div>
        <div className={styles.rightSide}>
        </div>
          </>
        ) : (
          <>
        <div className={styles.leftSide}>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={styles.borderCircle}
                  height={40}
                  width={40}
                  alt={name}
                />
            <h2 className={styles.headingMd}>
              <Link href="/">
                <a className={styles.colorInherit}>{name}</a>
              </Link>
            </h2>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!blog && (
        <div className={styles.backToHome}>
          <Link href="/blog">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
