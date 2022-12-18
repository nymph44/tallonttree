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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

      </Head>
      <div className="flex">

      </div>

    </>
  )
}
