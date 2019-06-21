// Packages
import { h, Component } from 'preact'
import { BadRequest } from '@feathersjs/errors'

// Utilities
import { smooth_scroll } from '../../utilities'

/**
 * Button components.
 *
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing a basic button.
 *
 * @extends Component
 */
export default class Button extends Component {
  /**
   * Renders a button with the base class 'ada-button'.
   *
   * @param {object} props - Component properties
   * @param {boolean} props.disabled - If button is disabled or not
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {object} props.events - Event functions
   * @param {string} props.id - Element id
   * @param {*} props.children - Inner children
   * @param {object} state - Component state
   * @returns {HTMLButtonElement}
   */
  render(props, state) {
    const style = (`ada-button ${props.class ? props.class : ''}`).trim()
    const { children, disabled, events, id } = props

    return (
      <button id={id} class={style} disabled={disabled} {...events}>
        {children}
      </button>
    )
  }
}

/**
 * Preact component representing a button that when clicked, scrolls to the top
 * of an element. By default, the button will scroll to the top of window.
 *
 * @extends Component
 */
export class SmoothScrollButton extends Component {
  /**
   * @namespace state Component state
   * @property {number} state.speed - Animation speed in milliseconds
   * @property {string} state.target - Element to scroll to the top of
   */
  state = { speed: 750, target: 'body' }

  /**
   * Updates the state based on the incoming props.
   *
   * @param {object} props - Incoming props
   * @param {number} props.speed - Animation speed in milliseconds
   * @param {string} props.target - Element to scroll to the top of
   * @param {object} state - Current state
   * @param {number} state.speed - @see @param props.speed
   * @param {string} state.target - @see @param props.target
   * @returns {object} Object to update state with
   * @throws {BadRequest} If @see @param props.target is an empty string
   */
  static getDerivedStateFromProps(props, state) {
    if (props.target && !props.target.length) {
      throw new BadRequest('An element to scroll to is required.')
    }

    const { target, speed } = props
    return { speed: speed && speed >= 0 ? speed : state.speed, target: target }
  }

  /**
   * Renders a button that when clicked, smooth scrolls to the top of
   * this.props.target. The button will have the class 'scroll-to-top-btn'.
   *
   * @param {object} props - Component properties
   * @param {boolean} props.disabled - If button is disabled or not
   * @param {*} props.children - Inner children
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {number} props.speed - Animation speed in milliseconds
   * @param {string} props.target - Element to scroll to the top of
   * @param {object} state - Component state
   * @param {number} state.speed - @see @param props.speed
   * @param {string} state.target - @see @param props.target
   * @returns {HTMLButtonElement}
   */
  render(props, state) {
    const style = (`smooth-scroll-btn ${props.class ? props.class : ''}`).trim()
    const { disabled, children } = props
    const { target, speed } = state

    return (
      <Button
        disabled={disabled} class={style}
        onClick={e => smooth_scroll(e, target, speed)}
      >
        {children}
      </Button>
    )
  }
}
