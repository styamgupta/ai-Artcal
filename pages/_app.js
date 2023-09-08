import '@/styles/globals.css'
import Navbar from './components/Navbar'
import NextNProgress from 'nextjs-progressbar';
import Footer from './components/Footer';

export default function App({ Component, pageProps }) {

  return <>
    <Navbar />
    <div className="mx-4 sm:mx-5 mt-40 ">
    <Component {...pageProps} />
    </div>
    <Footer/>
   <NextNProgress color="green" startPosition={0.4} stopDelayMs={100} height={3} showOnShallow={true} />
  </>
}
