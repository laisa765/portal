import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'

import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Adassa</title>
      </Head>
      <Header></Header>
      <div id={styles.conteudo}>
        <p className={styles.texto}>O BocaWeb é um portal que visa facilitar o acesso de pessoas com deficiência visual a informações de imagens por meio de audiodescrição. Estamos formando uma equipe voluntária para criar descrições sonoras de diversos objetos. Se interessou? Cadastre-se, explore o portal e, se quiser colaborar, entre em contato. Aguardamos a sua participação!</p>
        <img id={styles.principeUm} src='banner.png'></img>
      </div>
      <Footer></Footer>
    </>
  )
}
