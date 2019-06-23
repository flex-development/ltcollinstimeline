// Packages
import { h, Component } from 'preact'

// Components
import { Heading, Paragraph, SmoothScrollButton, Link } from '../atoms'
import { Hero, Timeline } from '../organisms'
import { FeatureEvent } from '../templates'

// Event data
import campus from '../../assets/data/campus.events.json'
import legal from '../../assets/data/legal.events.json'

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
          <div className='hero-content-main'>
            <Heading children='Lt. Collins Timeline' />
            <Paragraph>
              On the night of May 19, 2017, two days away from graduation, 2nd Lieutenant Richard Collins was stabbed to death on the University of Maryland’s campus.
              <br />
              —
              <br />
              One one side, this dual timeline tracks <span>University events</span>, while on the other, the timeline follows the <span>mechanics of the trial and other legal developments</span>.
            </Paragraph>
            <SmoothScrollButton
              class='ui-borderless ui-accent-med' target='#timeline0'
            >
              Get Started
            </SmoothScrollButton>
          </div>

          <div className='hero-content-footer'>
            <Link href='https://dbknews.com' target='_blank'>
              The Diamondback
            </Link> |
            <Link href='https://dbknews.com/author/aroberts/' target='_blank'>
              Angela Roberts
            </Link> |
            <Link href='https://dbknews.com/author/jatelsek/' target='_blank'>
              Jillian Atelsek
            </Link>
          </div>
        </Hero>
        <Timeline
          id='timeline0'
          events={{
            campus: this.events(campus, 0, 2),
            legal: this.events(legal, 0, 2)
          }}
        />
        <FeatureEvent id='feature0' class='ui-full' event={legal[0]} />
        <Timeline events={{
          campus: this.events(campus, 3, campus.length),
          legal: this.events(legal, 1, legal.length)
        }} />
      </main>
    )
  }

  events = (events, start, end) => events.slice(start, end)
}
