import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import '../component/Navbar.scss'
import './sassStyles/index.scss'
import '../component/TopContent/TopContent.scss'
import '../component/BlogNav/BlogNav.scss'
import '../component/BlogContainer/BlogContainer.scss'
import '../component/BlogContent/BlogContent.scss'
import '../component/BlogContent/BlogContent.scss'
import '../component/Footer/Footer.scss'
import 'remixicon/fonts/remixicon.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
