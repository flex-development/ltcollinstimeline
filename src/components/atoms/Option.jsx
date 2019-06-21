// Packages
import { h, Component } from 'preact'

/**
 * Preact component representing an <option> element.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Option extends Component {
  /**
   * Renders an <option> element with the base class 'ada-option'.
   *
   * @param {object} props - Component properties
   * @param {string} props.disabled - Specifies that element should be disabled
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {string} props.id - Element id
   * @param {string} props.name - Option name
   * @param {string} props.selected - 'selected' if element should be
   * pre-selected when the page loads
   * @param {string} props.value - Value to be sent to a server
   * @param {object} state - Component state
   * @returns {HTMLImageElement}
   */
  render(props, state) {
    const style = (`ada-option ${props.class ? props.class : ''}`).trim()
    const { disabled, label, id, name, selected, value } = props

    return (
      <option
        id={id} class={style} label={label}
        selected={selected} value={value} disabled={disabled}
      >
        {name}
      </option>
    )
  }
}
