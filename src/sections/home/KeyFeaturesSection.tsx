import { Features } from '../../components/blocks/features-4'
import ScrollReveal from '../../components/ScrollReveal'

export default function KeyFeaturesSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="content-max-width">
        <ScrollReveal>
          <Features />
        </ScrollReveal>
      </div>
    </section>
  )
}
