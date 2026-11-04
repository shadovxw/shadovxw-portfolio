import Scene from './scene/Scene.jsx'
import Nav from './ui/Nav.jsx'
import Hero from './ui/Hero.jsx'

export default function App() {
  return (
    <>
      {/* One fixed canvas behind everything: later sections reuse it via scroll */}
      <div className="fixed inset-0 z-0">
        <Scene />
      </div>
      <div className="relative z-10">
        <Nav />
        <Hero />
      </div>
    </>
  )
}
