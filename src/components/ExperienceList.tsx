import { experiences } from '../data/experience'
import { SectionTitle } from './SectionTitle'
import { WorkExperience } from './WorkExperience'
import workStyles from './WorkExperience.module.css'

export function ExperienceList() {
  return (
    <section
      id="experience"
      className={workStyles.experienceList}
      aria-labelledby="experience-title"
      data-nav-section
    >
      {experiences.map((experience, index) => (
        <div className={workStyles.section} key={experience.id}>
          {index === 0 && <SectionTitle id="experience-title">Work experience</SectionTitle>}
          <WorkExperience experience={experience} prioritizeImage={index === 0} />
        </div>
      ))}
    </section>
  )
}
