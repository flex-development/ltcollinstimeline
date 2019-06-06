// Packages
import { h, Component, createRef } from 'preact'

/**
 * Preact component representing a paragraph element.
 * 
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Paragraph extends Component {
  /**
   * Paragraph reference.
   *
   * @type {RefObject<any>}
   * @instance
   */
  paragraph = createRef()

  /**
   * Renders a paragraph element with the base class 'ada-paragraph'.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLParagraphElement}
   */
  render(props, state) {
    const style = (`ada-paragraph ${props.class ? props.class : ''}`).trim()
    const { id, children } = props

    return <p ref={this.paragraph} id={id} class={style}>{children}</p>
  }
}
