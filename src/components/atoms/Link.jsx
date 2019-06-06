// Packages
import { h, Component } from 'preact'

/**
 * Class representing a link.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Link extends Component {
  /**
   * Renders an anchor element with the base class 'ada-link'.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLAnchorElement}
   */
  render(props, state) {
    const style = (`ada-link ${props.class ? props.class : ''}`).trim()
    const { id, href, target, children } = props

    return <a id={id} class={style} href={href} target={target}>{children}</a>
  }
}
