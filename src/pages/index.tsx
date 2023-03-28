
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import Nav from '../../components/Nav'


export default function Home() {
  return (
    <div className='font-abc'>
      <Head>
        <title>Josh Vilanculo | Developer & Writer</title>
        <meta name="description" content="joshua vilaculo software developer and frontend engineer" />
      </Head>
      <Nav/>
      <Navbar/>
      <Main/>
    </div>
  )
}

