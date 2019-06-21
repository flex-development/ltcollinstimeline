// Packages
import { h, Component } from 'preact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

// Components
import { Link, Paragraph } from '../atoms'

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

    const get_class_name = string => string ? `event-${string}` : ''

    const image = img.low || img

    return (
      <div
        id={id} class={style}
        data-feature={feature} data-type={type} data-img={image.src}
      >
        <article class={get_class_name('content')}>
          <Paragraph class={get_class_name('date')}>{date}</Paragraph>
          <Paragraph class={get_class_name('name')}>{name}</Paragraph>
          <Paragraph class={get_class_name('description')}>
            {description}
          </Paragraph>
          <Link class={get_class_name('link')} {...link}>
            <FontAwesomeIcon className='ada-icon' icon={faLink} /> {link.text}
          </Link>
        </article>
        <div class={get_class_name('connector')} data-event={id} />
      </div>
    )
  }
}
