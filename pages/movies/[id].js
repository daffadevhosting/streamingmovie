import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.scss'

export default function Post({ postData }) {
  return (
    <Layout post>
      <Head>
        <title>{postData.title}</title>
      </Head>
  <iframe className={utilStyles.responsive_iframe} frameborder="0" name="iframePC" src={postData.movie} width="100%" height="400" allowfullscreen style={{background: '#000', backgroundImage: 'url({ postData.cover1 })', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></iframe>
      <article className={utilStyles.post_movie}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
