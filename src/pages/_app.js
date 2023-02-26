import '@/styles/globals.css'
import Mainlayout from '@/layout/Mainlayout'
import UserCtx from '@/context/userContext'


export default function App({ Component, pageProps }) {
  return (
    <UserCtx>
    <Mainlayout>
      <Component {...pageProps} />
    </Mainlayout>
    </UserCtx>
  )
}
