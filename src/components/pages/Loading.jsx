// Packages
import { h, Component } from 'preact'

/**
 * Preact component representing the loading screen.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Loading extends Component {
  /**
   * Renders a <main> element with the base class 'adp-loading'.
   *
   * @param {object} props - Component properties
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {string} props.id - Element id
   * @param {object} state - Component state
   * @returns {HTMLElement} HTML <main> element
   */
  render(props, state) {
    const style = (`adp-home ${props.class ? props.class : ''}`).trim()

    return (
      <main id={props.id} class={style}>
        {/* Loading animation */}
      </main>
    )
  }
}
