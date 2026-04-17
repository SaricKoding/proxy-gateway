import Header from './components/Header'
import Hero from './components/Hero'
import Gateway from './components/Gateway'
import About from './components/About'
import WhyProxy from './components/WhyProxy'
import Warehouse from './components/Warehouse'
import Categories from './components/Categories'
import Doormats from './components/Doormats'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#sadrzaj" className="skip-link">Preskoči na sadržaj</a>
      <Header />
      <main id="sadrzaj">
        <Hero />
        <Gateway />
        <About />
        <WhyProxy />
        <Warehouse />
        <Categories />
        <Doormats />
      </main>
      <Footer />
    </>
  )
}
