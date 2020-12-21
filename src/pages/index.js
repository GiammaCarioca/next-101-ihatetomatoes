import Head from 'next/head'
import Layout from './components/Layout'
import Hero from './components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js 101</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <main className='p-4 bg-white'>
          <Hero />
        </main>
      </Layout>
    </>
  )
}
