// Packages
import { h, Component } from 'preact'

// Components
import { Container } from '../atoms'

/**
 * Class representing the hero.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Footer extends Component {
  /**
   * Renders a hero section with the base class 'ado-hero'.
   *
   *
   * @param {object} props - Component properties
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {string} props.id - Element id
   * @param {object} state - Component state
   * @returns {HTMLElement} HTML section element
   */
  render(props, state) {
    const style = (`ado-hero ${props.class ? props.class : ''}`).trim()
    const { children, id } = props

    return (
      <section id={id} class={style}>
        <Container>
          <div className='hero-content'>
            {children}
          </div>
        </Container>
      </section>
    )
  }
}
