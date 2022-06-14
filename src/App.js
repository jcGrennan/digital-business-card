// importing components

import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

// composing and exporting the app

export default function App() {
  return (
    <div className="card">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}