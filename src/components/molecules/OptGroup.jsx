// Packages
import { h, Component } from 'preact'

// Components
import { Option } from '../atoms'

/**
 * Preact component representing an <optgroup> element.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class OptGroup extends Component {
  /**
   * Renders an <optgroup> element with the base class 'adm-optgroup'.
   *
   * @param {object} props - Component properties
   * @param {string} props.disabled - Specifies that element should be disabled
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {object} props.events - Event functions
   * @param {string} props.label - Specifies a label for the element
   * @param {string} props.id - Element id
   * @param {object[]} props.opts - Array of dropdown options
   * @param {object} state - Component state
   * @returns {HTMLImageElement}
   */
  render(props, state) {
    const style = (`adm-optgroup ${props.class ? props.class : ''}`).trim()
    const { disabled, label, id, events, opts } = props

    return (
      <optgroup
        id={id} class={style} label={label} disabled={disabled}
        {...events}
      >
        {opts.map(option => <Option {...option} />)}
      </optgroup>
    )
  }
}
