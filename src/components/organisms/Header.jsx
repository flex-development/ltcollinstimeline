// Packages
import { h, Component } from 'preact'
import $ from 'jquery'

// Components
import { Container } from '../atoms'

/**
 * Class representing the header.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Header extends Component {
  /**
   * Attaches a scroll listener to the window when the component mounts.
   *
   * @returns {undefined}
   */
  componentDidMount() {
    $(window).scroll(() => this.handle_window_scroll())
  }

  /**
   * Component cleanup.
   *
   * @returns {undefined}
   */
  componentWillUnmount() {
    // Remove scroll window listener
    $(window).off('scroll')
  }

  /**
   * Renders a header with the base class 'ado-header'.
   *
   * If props.container is defined, props.children will be wrapped in a
   * container element with the base class 'ada-container'.
   *
   * Pass an empty object for the default container, or defined
   * props.container.id and/or props.container.classes for greater control.
   *
   * @param {object} props - Component properties
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {string} props.id - Element id
   * @param {*} props.children - Footer elements
   * @param {object} props.container - If defined, wrap children in container
   * @param {string} props.container.id - Container element id
   * @param {string} props.container.classes - Extra container classes
   * @param {object} state - Component state
   * @returns {HTMLDivElement}
   */
  render(props, state) {
    const style = (`ado-header ${props.class ? props.class : ''}`).trim()
    const { id, children, container } = props

    return (
      <header id={id} class={style}>
        {
          container
            ? <Container props={{
              container: typeof container === 'boolean' ? {} : { ...container },
              children: children
            }} />
            : { children }
        }
      </header>
    )
  }

  // Helpers

  /**
   * On scroll, the header will have the class ui-sticky to it once the user has
   * scrolled past 75% of the hero's outer height.
   *
   * When the user scrolls back to the top, the class will be removed.
   *
   * @returns {undefined}
   */
  handle_window_scroll = () => {
    const class_name = 'ui-sticky'
    const header = $('.ado-header')
    const hero = $('.ado-hero')
    const hero_height = hero.outerHeight()
    const scroll_top = $(window).scrollTop()

    if (scroll_top === 0) {
      header.removeClass(class_name)
    } else if (scroll_top > (hero_height * 0.75)) {
      header.addClass(class_name)
    }
  }
}
