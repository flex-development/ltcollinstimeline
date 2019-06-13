// Packages
import { h, Component } from 'preact'

// Components
import { Heading, Container, Paragraph } from '../atoms'

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
    const { id } = props

    return (
      <section id={id} class={style}>
        <Container>
          <div className='hero-content'>
            <Heading children='Lt. Collins Timeline' />
            <Paragraph>
              On the night of May 19, 2017, two days away from graduation, 2nd Lt. Richard Collins was stabbed to death on the University of Maryland’s campus.
              <br />
              —
              <br />
              One one side, this dual timeline tracks <span>University events</span>, while on the other, the timeline follows the <span>
                mechanics of the trial and other legal developments</span>.
            </Paragraph>
          </div>
        </Container>
      </section>
    )
  }
}
