// Packages
import { h, Component } from 'preact'

/**
 * Class representing a container element.
 *
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Container extends Component {
  /**
   * Renders a <div> element with the base class 'ada-container'.
   *
   * @param {object} props - Component properties
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {string} props.id - Element id
   * @param {*} props.children - Container elements
   * @param {object} state - Component state
   * @returns {HTMLDivElement}
   */
  render(props, state) {
    const style = (`ada-container ${props.class ? props.class : ''}`).trim()
    const { id, children } = props

    return <div id={id} class={style}>{children}</div>
  }
}
