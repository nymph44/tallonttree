import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/global/Sidebar'
import { meta } from '../data/config'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name={meta.name} content={meta.content} />
        <meta name={meta.viewport} content={meta.viewportContent} />
        <link rel="icon" href={meta.favicon} />
      </Head>
      <div className="flex">

      </div>

    </>
  )
}
