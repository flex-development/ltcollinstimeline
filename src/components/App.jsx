// Packages
import React, { Component } from 'react'
import $ from 'jquery'

// Context
import { UIContext } from './context'

// Components
import { SiteHeader, SiteHero, SiteFooter, Timeline } from './organisms'
// import { Error, Loading } from './screens'

/**
 * Component representing the web application.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */
export default class App extends Component {
  constructor(props) {
    super(props)

    /**
     * @property {object} state - Application state
     * @property {object | null} state.data - Event data
     * @property {object[] | undefined} state.data.campus - Campus events
     * @property {object[] | undefined} state.data.legal - Legal events
     * @property {FeathersError | null} state.error - Current error
     * @property {object} state.info - Error information
     * @property {boolean} state.menu - If menu is open
     * @property {boolean} state.mobile - If viewport <= 768px
     * @property {boolean} state.near_bottom - If user has scrolled within 100px
     * of the bottom of the page
     * @property {boolean} state.scrolled - If user has scrolled past 90% of the
     * hero
     */
    this.state = {
      data: null,
      error: null,
      info: null,
      loading: true,
      menu: false,
      mobile: false,
      near_bottom: false,
      scrolled: false
    }
  }

  /**
   * Updates the internal @see @class App state based on @see @param props .
   *
   * @param {object} props - Incoming props
   * @param {object} state - Current state
   * @returns {object | null}
   */
  static getDerivedStateFromProps(props, state) {
    const { is_mobile, is_scrolled, near_bottom } = props

    return {
      mobile: is_mobile(),
      near_bottom: near_bottom(),
      scrolled: is_scrolled('.ado-hero', 0.9)
    }
  }

  /**
   * If an error is caught, the component's internal error state will be
   * updated. Afterwards, the error will be logged with the prefix '!TV-ERR =>'.
   *
   * @param {Error | FeathersError} error - Current error
   * @param {object} info - Error information
   * @returns {undefined}
   */
  componentDidCatch(error, info) {
    this.error(error, info)
  }

  /**
   * Logs that the application has mounted.
   *
   * The application will fetch the current event data from the database.
   * Afterwards, window listeners will be attached to update the internal mobile
   * state, as well as check the user's scroll position.
   *
   * @async
   * @returns {undefined}
   */
  async componentDidMount() {
    console.info('Application mounted.')

    // Attach window listeners to update ui states
    this.resize(true)
    this.scroll(true)
  }

  /**
   * Remove window listeners.
   *
   * @returns {undefined}
   */
  componentWillUnmount() {
    this.resize()
    this.scroll()
  }

  /**
   * Renders the website.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {Fragment}
   */
  render() {
    const { menu_open, mobile, near_bottom, scrolled } = this.state

    return (
      <UIContext.Provider value={{ menu_open, mobile, near_bottom, scrolled }}>
        <SiteHeader />
        <SiteHero />
        <Timeline mobile={mobile} />
        <SiteFooter />
      </UIContext.Provider>
    )
  }

  // Helpers

  /**
   * Logs the error and updates the internal error state.
   *
   * @param {FeathersError | Error} error - Exception that was thrown
   * @param {object} info - Error infomation
   * @returns {undefined}
   */
  error = (error, info = null) => {
    info = (info || error.stack) || null

    console.error(error.message, info)
    return this.setState({ error, info })
  }

  /**
   * Updates the internal ui state. When the window is being resized, the
   * internal mobile state will be true if the window width is <= 768px.
   *
   * @returns {undefined}
   */
  resize = listen => {
    if (listen) {
      const { is_mobile } = this.props

      $(window).resize(() => this.setState({ mobile: is_mobile() }))
    } else {
      $(window).off('scroll')
    }
  }

  /**
   * Updates the internal ui state. After scrolling, the method will check if
   * the user has scrolled passed 90% of the header and if the user is near the
   * bottom of the page.
   *
   * @returns {undefined}
   */
  scroll = listen => {
    if (listen) {
      const { is_scrolled, near_bottom } = this.props

      $(window).scroll(() => this.setState({
        near_bottom: near_bottom(), scrolled: is_scrolled('.ado-hero', 0.9)
      }))
    } else {
      $(window).off('resize')
    }
  }
}
