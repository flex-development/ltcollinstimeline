// Packages
import { h, Component, Fragment } from 'preact'

// Context
import {
  InitialAsyncState, InitialUIState, AsyncContext, UIContext
} from './context'

// Components
import { Image, SmoothScrollButton } from './atoms'
import { Header, Footer } from './organisms'
import { Home } from './pages'

// Utilities
import {
  handle_window_resize, handle_window_scroll, is_mobile, is_scrolled, timer
} from '../utilities'

// Images
import logo_light from '../assets/images/logo-mini-light.png'

// Style
import '../style/app.sass'

/**
 * Preact component representing the application.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class App extends Component {
  /**
   * Id of the interval that keeps of track of data loading.
   * @type {string | undefined}
   * @instance
   */
  progress

  /**
   * @namespace state - Application state
   * @property {object | null} data - Async data
   * @property {boolean} loading - True if data is loading
   * @property {boolean} menu_open - True if menu is open, closed otherwise
   * @property {boolean} mobile - True if viewport <= 768px
   * @property {number} progress - Loading if value < 100
   */
  state = { ...InitialAsyncState, ...InitialUIState }

  /**
   * Logs that the application has mounted.
   *
   * Attaches a scroll listener to the window after user has scrolled past the
   * 90% of hero.
   *
   * @returns {undefined}
   */
  componentDidMount() {
    console.info('Application mounted.')

    // Attach window listener to update mobile state
    handle_window_resize(this.handle_resize, true)

    // Attach window listener to update scroll state
    handle_window_scroll(this.handle_scroll, true)

    // Start loading progress interval
    this.loading_progress = timer(this.handle_loading_progress)

    // TODO: Get event data
  }

  /**
   * Component cleanup.
   *
   * @returns {undefined}
   */
  componentWillUnmount() {
    // Remove scroll window listener
    handle_window_scroll()

    // Stop loading progress interval
    timer(null, this.loading_progress)
  }

  /**
   * Renders the application.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {Fragment}
   */
  render(props, state) {
    return (
      <Fragment>
        {/* TODO: Implement user interface */}
      </Fragment>
    )
  }

  // Helpers

  /**
   * Gets and transforms the event data for the timeline.
   *
   * @returns {object | null} Object containing campus and legal events
   * @throws {GeneralError}
   */
  get_data = () => {
    return null
  }

  /**
   * Updates the component loading state.
   *
   * @returns {undefined}
   */
  handle_loading_progress = () => {
    const { data, progress } = this.state

    if (data) {
      // Clear progress interval
      timer(null, this.loading_progress)

      // Update loading state
      return this.setState({ loading: false, progress: 100 })
    } else {
      // Increase loading timer by 1
      return this.setState({ loading: true, progress: progress + 1 })
    }
  }

  /**
   * Updates the component @see state.mobile property.
   * If the window width is <= 768px, @see state.mobile will be true.
   *
   * @returns {undefined}
   */
  handle_resize = () => this.setState(state => ({ mobile: is_mobile() }))

  /**
   * Updates the component @see state.scrolled property.
   * If the user has scrolled past 90% of the header, @see state.scrolled will
   * be true.
   *
   * @returns {undefined}
   */
  handle_scroll = () => {
    return this.setState(state => ({ scrolled: is_scrolled('.ado-hero', 0.9) }))
  }
}
