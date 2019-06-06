// Packages
import { h, Component } from 'preact'

// Components
import { Container } from '../atoms'

/**
 * Class representing the footer.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Footer extends Component {
  /**
   * Renders a footer with the base class 'ado-footer'.
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
    const style = (`ado-footer ${props.class ? props.class : ''}`).trim()
    const { id, children, container } = props

    return (
      <footer id={id} class={style}>
        {
          container
            ? <Container props={{
              container: typeof container === 'boolean' ? {} : { ...container },
              children: children
            }} />
            : { children }
        }
      </footer>
    )
  }
}
