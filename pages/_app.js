import '../styles/globals.css'
import { useStore } from '../store/store'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp