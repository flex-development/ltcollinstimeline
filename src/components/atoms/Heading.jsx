// Packages
import { h, Component } from 'preact'

/**
 * Preact component representing a heading element.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Heading extends Component {

  /**
   * Renders a heading element with the base class 'ada-heading'.
   *
   * @param {object} props - Component properties
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {string} props.id - Element id
   * @param {number} props.size - Heading size. Defaults to 1
   * @param {*} props.children - Inner children
   * @param {object} state - Component state
   * @returns {HTMLHeadingElement}
   */
  render(props, state) {
    const style = (`ada-heading ${props.class ? props.class : ''}`).trim()
    const { id, size, children } = props

    let element

    switch (size) {
      case 2:
        element = <h2 class={style} id={id}>{children}</h2>
        break
      case 3:
        element = <h3 class={style} id={id}>{children}</h3>
        break
      case 4:
        element = <h4 class={style} id={id}>{children}</h4>
        break
      case 5:
        element = <h5 class={style} id={id}>{children}</h5>
        break
      case 6:
        element = <h6 class={style} id={id}>{children}</h6>
        break
      default:
        element = <h1 class={style} id={id}>{children}</h1>
        break
    }

    return element
  }
}
