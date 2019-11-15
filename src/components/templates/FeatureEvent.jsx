// Packages
import React from 'react'
import $ from 'jquery'

// Components
import { Container } from '../atoms'
import Event from './Event'

/**
 * @file Component representing a feature event.
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

/**
 * Renders a feature event section with the base class 'adt-feature'.
 *
 * @returns {HTMLElement} HTML section element
 */
const FeatureEvent = props => {
  const { className, event, id } = props
  let style = (`adt-feature ${className || ''}`).trim()

  const feature_event = { ...event, img: {} }

  /*
   * Set the section background image.
   * Other image styling will be applied via CSS
   */

  $(`#${id}`).css({ backgroundImage: `url('${event.img.src}')` })

  return (
    <section id={id} className={style}>
      <Container>
        <Event class='feature' {...feature_event} />
      </Container>
    </section>
  )
}

export default FeatureEvent
