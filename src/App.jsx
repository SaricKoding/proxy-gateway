import Header from './components/Header'
import PanoramicRoom from './components/PanoramicRoom/PanoramicRoom'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <PanoramicRoom />
      </main>
      <Footer />
    </div>
  )
}
