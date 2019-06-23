// Packages
import { h, Component } from 'preact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faLink } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

// Components
import { Container, Link, Paragraph } from '../atoms'

/**
 * Class representing a timeline event.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Event extends Component {
  /**
   * Renders an <div> element with the base class 'adt-event'.
   *
   * @param {object} props - Component properties
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {string} props.description - Event description
   * @param {boolean} props.feature - True if feature event
   * @param {string} props.id - Element id
   * @param {object} props.img - Object containing <img> element properties or
   * keys 'low' and 'high' with corressponding <img> element properties
   * @param {object} props.link - Object containing <a> element properties
   * @param {string} props.name - Event name
   * @param {string} props.type - Event type
   * @param {object} state - Component state
   * @returns {HTMLDivElement}
   */
  render(props, state) {
    const style = (`adt-event ${props.class ? props.class : ''}`).trim()
    const { date, description, feature, id, img, link, name, type } = props

    const get_class = string => string ? `event-${string}` : ''

    const image = img ? (img.low || img).src : null

    if (image) {
      $(`#${id} > .event-content`).css({
        backgroundImage: `url('${image}')`
      })
    }

    return (
      <div id={id} class={style} data-type={type}>
        <article class={get_class('content')}>
          <Paragraph class={get_class('date')}>{date}</Paragraph>
          {
            feature || image
              ? (
                <Link class={get_class('name')} href={image} target='_blank'>
                  <FontAwesomeIcon className='ada-icon' icon={faImage} /> {name}
                </Link>
              )
              : (
                <Paragraph class={get_class('name')}>
                  {name}
                </Paragraph>
              )
          }
          <Paragraph class={get_class('description')}>
            {description}
          </Paragraph>
          <Link class={get_class('link')} {...link}>
            <FontAwesomeIcon className='ada-icon' icon={faLink} /> {link.text}
          </Link>
        </article>
        <div class={get_class('connector')} data-event={id} />
      </div>
    )
  }
}

/**
 * Class representing the feature event.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export class FeatureEvent extends Component {
  /**
   * Renders a feature event section with the base class 'adt-feature'.
   *
   *
   * @param {object} props - Component properties
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {string} props.id - Element id
   * @param {object} props.event - Event data @see Event#render
   * @param {object} state - Component state
   * @returns {HTMLElement} HTML section element
   */
  render(props, state) {
    let style = (`adt-feature ${props.class ? props.class : ''}`).trim()
    const { event, id } = props

    const feature_event = { ...event, img: {} }
    const feature_image = event.img.low || event.img

    $(`#${id}`).css({ backgroundImage: `url('${feature_image.src}')` })

    return (
      <section id={id} class={style}>
        <Container>
          <Event class='feature' {...feature_event} />
        </Container>
      </section>
    )
  }
}
