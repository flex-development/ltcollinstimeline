// Packages
import { h, Component, Fragment } from 'preact'

// Components
import { Header, Footer } from './organisms'

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
   * Logs that the application has mounted.
   *
   * @returns {undefined}
   */
  componentDidMount() {
    console.info('Application mounted.')
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
        <Header container />
        {/* TODO: Implement user interface */}
        <Footer container />
      </Fragment>
    )
  }
}
