import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const getData = "SELECT * FROM 'public'.'huoltorekisteri' LIMIT 100"
  console.log("Huoltorekisteri dataa: ", getData.res)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

export default function Home({ articles }) {

 return (
  <div>
    <Head>
      <title>WebDev News</title>
      <meta name='keywords' content="web development, prorgramming"/>
    </Head>
    <ArticleList articles={articles}/>
  </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
