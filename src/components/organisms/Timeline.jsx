// Packages
import { h, Component } from 'preact'

// Components
import { Container } from '../atoms'
import { Event } from '../templates'

/**
 * Class representing a timeline section.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Timeline extends Component {
  /**
   * Renders a timeline section with the base class 'ado-timeline'.
   *
   *
   * @param {object} props - Component properties
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {string} props.id - Element id
   * @param {object} props.events - Object containing the keys 'campus' and
   * 'legal', which map to an array of object events
   * @param {object} state - Component state
   * @returns {HTMLElement} HTML section element
   */
  render(props, state) {
    const style = (`ado-timeline ${props.class ? props.class : ''}`).trim()
    const { events, id } = props
    const { campus, legal } = events

    return (
      <section id={id} class={style}>
        <Container>
          <TimelineColumn class='ui-left ui-stretch' events={campus} />
          <div class='timeline-divider ui-stretch' />
          <TimelineColumn
            id={'legal'} class='ui-right ui-stretch' events={legal}
          />
        </Container>
      </section>
    )
  }
}

/**
 * Functional component representing a timeline column.
 * Renders a <div> element with the base class 'timeline-col'.
 *
 * @param {object} props - Component properties
 * @param {string} props.class - Space delimitted list of extra classes
 * @param {string} props.id - Column event type
 * @param {object[]} props.events - Array of object events
 * @param {string} props.type - Column event type
 * @param {object} state - Component state
 * @returns {HTMLDivElement}
 */
const TimelineColumn = props => {
  const style = (`timeline-col ${props.class ? props.class : ''}`).trim()
  const { events, id } = props

  const type = id || 'campus'

  return (
    <div id={type} class={style}>
      {events ? events.map(event => <Event type={type} {...event} />) : null}
    </div>
  )
}
