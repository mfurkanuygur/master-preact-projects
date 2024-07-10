import './app.css'
import Homepage from './components/Homepage'
import Navbar from './components/navbar/Navbar'

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Homepage />
      </main>
    </>
  )
}
