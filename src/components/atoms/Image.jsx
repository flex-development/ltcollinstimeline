// Packages
import { h, Component } from 'preact'

/**
 * Preact component representing an image.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Image extends Component {
  /**
   * Renders an img element with the base class 'ada-image'.
   *
   * @param {object} props - Component properties
   * @param {string} props.alt - Image description
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {object} props.events - Event functions
   * @param {string} props.id - Element id
   * @param {string} props.src - Image url
   * @param {object} state - Component state
   * @returns {HTMLImageElement}
   */
  render(props, state) {
    const style = (`ada-image ${props.class ? props.class : ''}`).trim()
    const { alt, events, id, src } = props

    return <img id={id} class={style} src={src} alt={alt} {...events} />
  }
}
