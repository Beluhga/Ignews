import { GetServerSideProps} from 'next';
import Head from 'next/head';
import {stripe} from '../services/stripe';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
  <> 
    <Head>
      <title>Home | ig.news</title>
    </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
        <span>👏 Hey, welcome</span>
        <h1>News about the <span>React</span> wolrd.</h1>
        <p>
          Get access to all the publications <br />
          <span>for {product.amount} month</span>
        </p>
        <SubscribeButton priceId={product.priceId}/>
         
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
  </>
  )
}

// para fazer a chamada do Server-Side-Redering(SSR) API
export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1L9IfAK50IQ4cS2eUuyyNeCX', {
    expand: ['product'] // para ter todas as informações do produto
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR',{
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    }
  }

}

/*
import Head from 'next/head';
é para ter um titulo para cada uma das paginas

aqui é o card da tela


*/

