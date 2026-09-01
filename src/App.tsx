import { Toast } from '@base-ui/react/toast'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceList } from './components/ExperienceList'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { ParticleBackground } from './components/ParticleBackground'
import { ScrollProgress } from './components/ScrollProgress'
import { SiteHeader } from './components/SiteHeader'
import { ToastRegion } from './components/ToastRegion'

function App() {
  return (
    <Toast.Provider limit={2}>
      <ParticleBackground />
      <div className="siteContent">
        <SiteHeader />
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <ExperienceList />
          <ContactSection />
        </main>
        <Footer />
        <ToastRegion />
        <ScrollProgress />
        <Analytics />
        <SpeedInsights />
      </div>
    </Toast.Provider>
  )
}

export default App
