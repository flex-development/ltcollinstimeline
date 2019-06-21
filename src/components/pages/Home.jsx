// Packages
import { h, Component } from 'preact'

// Components
import { Heading, Paragraph, SmoothScrollButton } from '../atoms'
import { Hero, Timeline } from '../organisms'

// Event data
import campus from '../../api/campus.events.json'
import legal from '../../api/legal.events.json'

/**
 * Preact component representing the homepage.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Home extends Component {
  /**
   * Renders a <main> element with the base class 'adp-home'.
   *
   * @param {object} props - Component properties
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {string} props.id - Element id
   * @param {object} state - Component state
   * @returns {HTMLElement} HTML <main> element
   */
  render(props, state) {
    const style = (`adp-home ${props.class ? props.class : ''}`).trim()

    return (
      <main id={props.id} class={style}>
        <Hero>
          <Heading children='Lt. Collins Timeline' />
          <Paragraph>
            On the night of May 19, 2017, two days away from graduation, 2nd Lieutenant Richard Collins was stabbed to death on the University of Maryland’s campus.
            <br />
            —
            <br />
            One one side, this dual timeline tracks <span>University events</span>, while on the other, the timeline follows the <span>mechanics of the trial and other legal developments</span>.
          </Paragraph>
          <SmoothScrollButton
            class='ui-borderless ui-accent-med' target='#timeline-section-0'
          >
            Get Started
          </SmoothScrollButton>
        </Hero>
        <Timeline events={{ campus: this.events(campus, 0, 2) }} />
        {/* Feature Event */}
        <Timeline events={{
          campus: this.events(campus, 2, campus.length),
          legal: this.events(legal, 1, legal.length)
        }} />
      </main>
    )
  }

  events = (events, start, end) => events.slice(start, end)
}
