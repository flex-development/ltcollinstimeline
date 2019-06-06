// Packages
import { h, Component } from 'preact'

/**
 * Preact component representing a basic button.
 * 
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Button extends Component {

  /**
   * Renders a button with the base class 'ada-button'.
   *
   * @param {object} props - Component properties
   * @param {boolean} props.disabled - If button is disabled or not
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {string} props.id - Element id
   * @param {*} props.children - Inner children
   * @param {object} state - Component state
   * @returns {HTMLButtonElement}
   */
  render(props, state) {
    const style = (`ada-button ${props.class ? props.class : ''}`).trim()
    const { children, disabled, id, onClick } = props

    return (
      <button id={id} class={style} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    )
  }
}

