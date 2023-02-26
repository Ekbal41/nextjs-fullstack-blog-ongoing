import '@/styles/globals.css'
import Mainlayout from '@/layout/Mainlayout'

export default function App({ Component, pageProps }) {
  return (
    <Mainlayout>
      <Component {...pageProps} />
    </Mainlayout>
  )
}
