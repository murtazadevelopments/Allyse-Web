import About from '../components/About'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import MotionReel from '../components/MotionReel'
import Portfolio from '../components/Portfolio'
import Process from '../components/Process'
import Reviews from '../components/Reviews'
import Services from '../components/Services'
import Stats from '../components/Stats'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Marquee />
      <MotionReel />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Reviews />
      <FAQ />
      <Contact />
    </main>
  )
}
