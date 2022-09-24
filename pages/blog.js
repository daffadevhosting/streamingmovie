import Head from 'next/head'
import Layout, { siteTitle } from '../components/blogLayout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedBlogsData } from '../lib/blogs'
import Link from 'next/link'
import Date from '../components/date'

export default function Blog({ allBlogsData }) {
  return (
    <Layout blog>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>BlogGoblog</p>
        <p>
          (building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className={utilStyles.list}>
          {allBlogsData.map(({ id, date, title }) => (
            <div className={utilStyles.listItem} key={id}>
              <Link href={`/blogs/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allBlogsData = getSortedBlogsData()
  return {
    props: {
      allBlogsData
    }
  }
}
