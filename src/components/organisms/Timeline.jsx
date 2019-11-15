// Packages
import React, { Component } from 'react'
import moment from 'moment'

// Components
import { FeatureEvent, Events } from '../templates'

// Event data
import campus from '../../api/data/campus.events.json'
import legal from '../../api/data/legal.events.json'

/**
 * Component representing the timeline.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */
export default class Timeline extends Component {
  /**
   * Creates a new timeline.
   *
   * @todo Update documentation
   *
   * @param {object} props - Component properties
   * @param {string} props.className - Space delimitted list of extra classes
   * @param {string} props.id - Element id
   * @returns {Timeline}
   */
  constructor(props) {
    super(props)
    this.state = { events: [] }
  }

  componentDidMount() {
    let legal_events = this.events(legal, 1, legal.length)
    legal_events = this.type(legal_events, 'legal')

    const format = date => moment(date, 'MM-DD-YYYY')

    let events = this.type(campus, 'campus').concat(legal_events)
    events = events.sort((a, b) => {
      return format(a.date) - format(b.date)
    })

    this.setState({ events })
  }

  /**
   * Renders a <main> element with the base class 'ado-timeline'.
   *

   * @param {object} state - Component state
   * @returns {HTMLElement} HTML <main> element
   */
  render() {
    const { className, id } = this.props
    const { events } = this.state

    if (!events.length) return null

    return (
      <main id={id} className={(`ado-timeline ${className || ''}`).trim()}>
        <Events
          id='timeline0'
          campus={this.events(campus, 0, 2)}
          legal={this.events(legal, 0, 2)}
          events={this.events(events, 0, 2)}
        />
        <FeatureEvent id='feature0' class='ui-full' event={events[2]} />
        <Events
          campus={this.events(campus, 3, campus.length)}
          legal={this.events(legal, 1, legal.length)}
          events={this.events(events, 3, events.length)}
        />
      </main>
    )
  }

  // Helpers

  /**
   * Returns a segment of an array.
   *
   * @param {*[]} arr - Array to slice
   * @param {number} start - Index to begin slicing
   * @param {number} end - Index to stop slicing
   * @returns {*[]} Modified array
   */
  events = (arr, start, end) => arr.slice(start, end)

  /**
   * Adds a 'type' field to each object in @see @param events
   *
   * @param {object[]} events - Event objects
   * @param {string} type - Type of events
   * @returns {object[]} Modified array
   */
  type = (events, type) => {
    return events.map(e => {
      if (e) {
        e.type = type
        return e
      }

      return null
    })
  }
}
