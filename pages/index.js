import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Image from 'next/image'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
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
        <p>
          Nonton Film Terbaru Gratisan.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Movie Stream</h2>
        <div className={utilStyles.list}>
          {allPostsData.map(({ id, midb, date, title, img }) => (
            <div className={utilStyles.listItem} key={id}>
              <Link href={`/movies/${id}`}><a>
            <Image src={img} width={200} height={240} alt={title} className={utilStyles.image_post} />
        <div className={utilStyles.post_body}>
                <span className={utilStyles.title_text}>{title}</span>
              <br />
            <div className={utilStyles.footSec}>
              <small className={`${utilStyles.lightText} ${utilStyles.tgl}`}>
                Rilis: <Date dateString={date} />
              </small>
              <small className={`${utilStyles.lightText} ${utilStyles.tgl}`}>
                MIDB: {midb} 
              </small>
            </div>
        </div>
            </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
