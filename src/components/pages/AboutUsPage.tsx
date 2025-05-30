import AboutUsHeroBanner from '@/components/AboutUsHeroBanner'
import React from 'react'
import SysdevDetailsSection from '../sections/SysdevDetailsSection'
import MissionVision from '../ui/MissionVision'
import AboutUsProjects from '../AboutUsProjects'
import AboutUsMeetTheTeamSection from '../sections/AboutUsMeetTheTeamSection'
import DevelopersCarousel from '../ui/DevelopersCarousel'
import AboutUsIdea from '../AboutUsIdeaInMind'

function AboutUsPage() {
  return (
    <div>
      <AboutUsHeroBanner />
      <SysdevDetailsSection />
      <MissionVision />
      <AboutUsProjects />
      <AboutUsMeetTheTeamSection />
      <DevelopersCarousel />
      <AboutUsIdea />
    </div>
  )
}

export default AboutUsPage