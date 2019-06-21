// Packages
import { h, Component } from 'preact'

// Components
import { Icon, Link, Paragraph } from '../atoms'

/**
 * Class representing a timeline event.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Event extends Component {
  /**
   * Renders an <article> element with the base class 'adt-event'.
   *
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
   * @returns {HTMLElement} HTML section element
   */
  render(props, state) {
    const style = (`adt-event ${props.class ? props.class : ''}`).trim()
    const { date, description, feature, id, img, link, name, type } = props

    const get_class_name = string => name ? `event-${name}` : ''

    const image = img.low || img

    return (
      <article
        id={id} class={style}
        data-feature={feature} data-type={type} data-img={image}
      >
        <div class={get_class_name('content')}>
          <Paragraph class={get_class_name('date')}>{date}</Paragraph>
          <Paragraph class={get_class_name('name')}>{name}</Paragraph>
          <Paragraph class={get_class_name('description')}>
            {description}
          </Paragraph>
          <Link class={get_class_name('link')} {...link}>
            <Icon name='link' /> {link.text}
          </Link>
        </div>
        <div class={get_class_name('connector')} data-event={id} />
      </article>
    )
  }
}
