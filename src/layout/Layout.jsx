import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <Header />
    <Outlet/>
    <Footer/>
    </>
)
}
