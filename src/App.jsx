import { LocaleProvider, useLocale } from './i18n/LocaleContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Gateway from './components/Gateway'
import About from './components/About'
import WhyProxy from './components/WhyProxy'
import Warehouse from './components/Warehouse'
import Categories from './components/Categories'
import Doormats from './components/Doormats'
import Footer from './components/Footer'

function AppInner() {
  const { t } = useLocale()
  const nav = t('nav')
  return (
    <>
      <a href="#sadrzaj" className="skip-link">{nav.skip}</a>
      <Header />
      <main id="sadrzaj">
        <Hero />
        <Gateway />
        <Categories />
        <Doormats />
        <About />
        <WhyProxy />
        <Warehouse />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LocaleProvider>
      <AppInner />
    </LocaleProvider>
  )
}
