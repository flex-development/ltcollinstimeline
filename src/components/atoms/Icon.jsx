// Packages
import { h, Component } from 'preact'
import { BadRequest } from '@feathersjs/errors'

/**
 * Preact component representing an icon
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Icon extends Component {
  /**
   * Validates the current Icon's name and icon_style property before the
   * component mounts.
   *
   * @returns {undefined}
   * @throws {BadRequest}
   */
  componentWillMount() {
    const { name } = this.props

    try {
      if (!name || (name && !name.length)) {
        throw new BadRequest('Invalid icon name.', { name: null })
      }

      this.get_icon_style()
    } catch (err) {
      console.error('Icon component error ->', err)
      throw err
    }
  }

  /**
   * Renders an span element representing a Font Awesome icon with the base
   * class 'ada-icon'.
   *
   * @param {object} props - Component properties
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {string | undefined} props.icon_style - fab | fal | far | fas
   * @param {string} props.id - Element id
   * @param {string} props.name - Icon name
   * @param {object} state - Component state
   * @returns {HTMLDivElement}
   */
  render(props, state) {
    let style = (`ada-icon ${props.class ? props.class : ''}`).trim()
    const { icon_style, id, name } = props

    // Add icon style to class list
    style += !icon_style || (icon_style && !icon_style.length)
      ? ' far' : ` ${icon_style}`

    return <span id={id} class={`${style} ${name}`} />
  }

  // Helpers

  /**
   * Validates the icon's icon_style property. Throws an error if
   * this.props.icon_style doesn't equal 'fab', 'fal', 'far', or 'fas'.
   *
   * @returns {undefined}
   * @throws {BadRequest}
   */
  get_icon_style = () => {
    if (!['fab', 'fal', 'far', 'fas'].includes(this.props.icon_style)) {
      throw new BadRequest('Invalid icon style.', {
        style: this.props.weight ? this.props.weight : null
      })
    }
  }
}
