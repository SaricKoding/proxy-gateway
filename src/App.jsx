import Header from './components/Header'
import HeroGateway from './components/HeroGateway'
import AboutSection from './components/AboutSection'
import ProductShowcase from './components/ProductShowcase'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroGateway />
        <AboutSection />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  )
}
