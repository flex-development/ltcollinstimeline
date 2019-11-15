// Packages
import React from 'react'

// Components
import {
  Container, Heading, Link, Paragraph, SmoothScrollButton
} from '../atoms'

/**
 * @file Components representing the hero section.
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

/**
 * Renders a hero section with the base class 'ado-hero'.
 *
 * @param {object} props - Component properties
 * @param {string} props.className - Space delimitted list of extra classes
 * @param {string} props.id - Element id
 * @param {object} state - Component state
 * @returns {HTMLElement} HTML section element
 */
const Hero = props => {
  const { children, className, id } = props
  const style = (`ado-hero ${className || ''}`).trim()

  return (
    <section id={id} className={style}>
      <Container>
        <div className='hero-content'>
          {children}
        </div>
      </Container>
    </section>
  )
}

const SiteHero = () => {
  const btn_style = 'ui-borderless ui-accent-med'

  const paragraph = 'On the night of May 19, 2017, two days away from graduation, 2nd Lieutenant Richard Collins was stabbed to death on the University of Maryland’s campus.<br />—<br />One one side, this dual timeline tracks <span>University events</span>, while on the other, the timeline follows the <span>mechanics of the trial and other legal developments</span>.'

  return (
    <Hero>
      <div className='hero-content-main'>
        <Heading>Lt. Collins Timeline</Heading>
        <Paragraph graph={paragraph} />
        <SmoothScrollButton className={btn_style} target='#timeline0'>
          Get Started
        </SmoothScrollButton>
      </div>

      <div className='hero-content-footer'>
        <Link href='https://dbknews.com' target='_blank'>
          The Diamondback
        </Link> |
        <Link href='https://dbknews.com/author/aroberts/' target='_blank'>
          Angela Roberts
        </Link> |
        <Link href='https://dbknews.com/author/jatelsek/' target='_blank'>
          Jillian Atelsek
        </Link>
      </div>
    </Hero>
  )
}

export { Hero as default, SiteHero }
