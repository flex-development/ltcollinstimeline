// Packages
import { h, Component } from 'preact'
import $ from 'jquery'

// Context
import { UIContext } from '../context'

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
   * If this.props.sticky is true, the window will have a scroll listener
   * attached. The header will have the class 'ui-sticky' added to it when the
   * user has scrolled past 90% of the header, and removed and when the user has
   * scrolled to the top of the page.
   *
   * @returns {undefined}
   */
  componentDidMount() {
    const { sticky } = this.props

    if (sticky) {

    }
  }

  /**
   * Renders a <header> element with the base class 'ado-header'.
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
   * @returns {HTMLElement} HTML <footer> element.
   */
  render(props, state) {
    const style = (`ado-header ${props.class ? props.class : ''}`).trim()
    const { id, children, container } = props

    const $el = $('.ado-header')

    return (
      <header id={id} class={style}>
        <UIContext.Consumer>
          {({ menu_open, mobile, scrolled }) => {
            scrolled ? $el.addClass('ui-sticky') : $el.removeClass('ui-sticky')

            if (!container) return children

            const c_props = typeof container === 'boolean'
              ? { children } : { ...container, children }

            return <Container {...c_props} />
          }}
        </UIContext.Consumer>
      </header>
    )
  }
}
