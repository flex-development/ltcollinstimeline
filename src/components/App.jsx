// Packages
import { h, Component, Fragment } from 'preact'

// Context
import { InitialUIState, UIContext } from './context'

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
   * @namespace state - Application state
   * @property {boolean} state.menu_open - If menu is open
   * @property {boolean} state.mobile - If viewport <= 768px
   * @property {number} state.progress - If value < 100
   * @property {boolean} state.scrolled - If user has scrolled past 90% of the
   * hero
   */
  state = { ...InitialUIState }

  /**
   * Logs that the application has mounted.
   *
   * Attaches scroll listners that update @see App#state.mobile on resize and
   * @see App#state.scrolled when the user scrolls the page.
   *
   * @returns {undefined}
   */
  componentDidMount() {
    console.info('Application mounted.')

    // Attach window listener to update mobile state
    handle_window_resize(this.handle_resize, true)

    // Attach window listener to update scroll state
    handle_window_scroll(this.handle_scroll, true)
  }

  /**
   * Remove window listeners.
   *
   * @returns {undefined}
   */
  componentWillUnmount() {
    handle_window_resize()
    handle_window_scroll()
  }

  /**
   * Renders the application.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {Fragment}
   */
  render(props, state) {
    const { menu_open, mobile, scrolled } = state

    return (
      <UIContext.Provider value={{ menu_open, mobile, scrolled }}>
        <Header container sticky>
          <SmoothScrollButton class='ui-borderless ui-transparent'>
            <Image src={logo_light} alt='DBK mini logo light' />
          </SmoothScrollButton>

        </Header>
        <Home />
        <Footer />
      </UIContext.Provider>
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
  handle_resize = () => this.setState({ mobile: is_mobile() })

  /**
   * Updates the component @see state.scrolled property.
   * If the user has scrolled past 90% of the header, @see state.scrolled will
   * be true.
   *
   * @returns {undefined}
   */
  handle_scroll = () => {
    return this.setState({ scrolled: is_scrolled('.ado-hero', 0.9) })
  }
}
