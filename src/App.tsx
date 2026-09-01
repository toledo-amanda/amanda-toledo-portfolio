import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { AboutSection } from './components/AboutSection'
import { ExperienceList } from './components/ExperienceList'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { ParticleBackground } from './components/ParticleBackground'
import { ScrollProgress } from './components/ScrollProgress'
import { SiteHeader } from './components/SiteHeader'

function App() {
  return (
    <>
      <ParticleBackground />
      <div className="siteContent">
        <SiteHeader />
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <ExperienceList />
        </main>
        <Footer />
        <ScrollProgress />
        <Analytics />
        <SpeedInsights />
      </div>
    </>
  )
}

export default App
