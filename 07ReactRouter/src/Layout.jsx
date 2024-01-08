import {Outlet} from 'react-router-dom'
import {Footer, Header} from './components/index'

function Layout() {
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout;