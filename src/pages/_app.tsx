import '../styles/global.scss';

import { AppProps } from 'next/app';
import { Header } from '../components/Header';


function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <>
   <Header />
   <Component {...pageProps} />
  </>
  )
}

export default MyApp

/*
para uma pagina aparecer em todas as paginas, e so colocar dentro do Component

*/