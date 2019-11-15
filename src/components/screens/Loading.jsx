// Packages
import React, { Component } from 'react'

// Components
import { Container, LoadingIcon } from '../atoms'

/**
 * Class representing the loading screen.
 *
 * @todo Update documentation
 *
 * @class Loading
 * @extends Component
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */
export default class Loading extends Component {
  /**
   * Updates the document title.
   *
   * @returns {undefined}
   */
  componentDidMount() {
    document.title = 'Loading...'
  }

  /**
   * Renders a <main> element representing the loading screen.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {HTMLElement} <main> element
   */
  render() {
    const { className, id } = this.props

    return (
      <main id={id} className={(`ads-loading ${className || ''}`).trim()}>
        <Container>
          <LoadingIcon spin />
        </Container>
      </main>
    )
  }
}
