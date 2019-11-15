// Packages
import React, { Component, Fragment } from 'react'

// Context
import { UIContext } from '../context'

// Components
import { Container } from '../atoms'
import Event from './Event'

/**
 * Class representing a timeline section.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */
export default class Events extends Component {
  /**
   * Creates a new timeline section.
   *
   * @param {object} props - Component properties
   * @param {string} props.className - Space delimitted list of extra classes
   * @param {string} props.id - Element id
   * @param {object} props.events - Object containing the keys 'campus' and
   * 'legal', which map to an array of object events
   * @returns {Timeline}
   */
  constructor(props) {
    super(props)
    this.state = {}
  }

  /**
   * Renders a timeline section with the base class 'adt-timeline'.
   *
   * @returns {HTMLElement} HTML section element
   */
  render() {
    const { campus, className, events, id, legal } = this.props
    const style = (`adt-events ${className || ''}`).trim()

    return (
      <section id={id} className={style}>
        <Container>
          <UIContext.Consumer>
            {({ mobile }) => {
              return mobile
                ? <TimelineColumn class='ui-stretch' events={events} />
                : (
                  <Fragment>
                    <TimelineColumn class='ui-left ui-stretch' events={campus} />
                    <div className='timeline-divider ui-stretch' />
                    <TimelineColumn
                      id='legal' class='ui-right ui-stretch' events={legal}
                    />
                  </Fragment>
                )
            }}
          </UIContext.Consumer>
        </Container>
      </section>
    )
  }
}

/**
 * Component representing a timeline column.
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
    <div id={type} className={style}>
      {
        events
          ? events.map((event, i) => <Event type={type} {...event} key={i} />)
          : null
      }
    </div>
  )
}
