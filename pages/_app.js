import '../styles/globals.css'
import Nav from '../components/nav'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div class="main_container" style={{"display": "flex"}}>
      <Nav />
      <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
