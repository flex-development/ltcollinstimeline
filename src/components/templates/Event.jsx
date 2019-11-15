// Packages
import React, { Component } from 'react'
import $ from 'jquery'

// Components
import { ImageIcon, Link, LinkIcon, Paragraph } from '../atoms'

/**
 * Class representing a timeline event.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */
export default class Event extends Component {
  /**
   * Creates a new event component.
   *
   * @todo Update documentation
   *
   * @constructor
   * @param {object} props - Component properties
   * @returns {Event}
   */
  constructor(props) {
    super(props)

    /**
     * @property {object} state - Component state
     * @property {object | null} state.img - Event image
     * @property {string} state.style - Component classes
     */
    this.state = { img: null, style: 'adt-event' }
  }

  /**
   * The component image and style state will be updated based on the incoming
   * properties, represented by @see @param props .
   *
   * @param {object} props - @see @constructor
   * @param {object} state - @see @constructor
   */
  static getDerivedStateFromProps(props, state) {
    const { className, img } = props

    return {
      img: img.src && img.src.trim().length > 0 ? img : null,
      style: (`adt-event ${className || ''}`).trim()
    }
  }

  /**
   * Renders an <div> element with the base class 'adt-event'.
   *
   * @returns {HTMLDivElement}
   */
  render(props, state) {
    const { blurb, date, feature, headline, id, name, type } = this.props
    const { img, style } = this.state

    // Update background image
    if (img) {
      const element = `#${id} > .event-content`
      $(element).css({ backgroundImage: `url('${img.src}')` })
    }

    return (
      <article id={id} className={style} data-type={type}>
        <div className='event-content'>
          <div className='event-content-header'>
            <Paragraph className='event-type'>{type}</Paragraph>
            <Paragraph className='event-date'>{date}</Paragraph>
          </div>
          <EventName feature={feature} image={img} name={name} />
          <Paragraph className='event-blurb' graph={blurb} />
          <Link className='event-headline' {...headline}>
            <LinkIcon /> {headline.text}
          </Link>
        </div>
        <div className='event-connector' data-event={id} />
      </article>
    )
  }
}

/**
 * For feature events or events with images, the name of the event will be
 * rendered with an image icon to its left. The icon and text will be a link
 * that opens the image in a new tab.
 *
 * Otherwise, the event name will be rendered as paragraph.
 *
 * @returns {<Link> | <Paragraph>}
 */
const EventName = props => {
  const { image, name } = props

  if (image) {
    return (
      <Link className='event-name' href={image.src} target='_blank'>
        <ImageIcon /> {name}
      </Link>
    )
  }

  return <Paragraph className='event-name' graph={name} />
}
