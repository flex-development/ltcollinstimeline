// Packages
import { h, Component } from 'preact'
import $ from 'jquery'

// Components
import { Container, Image, ScrollToTopButton } from '../atoms'

// Utilities
import { toggle_on_scroll } from '../../utilities/ui.utilities'

// Images
import logo_light from '../../assets/images/logo-mini-light.png'

/**
 * Class representing the header.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Header extends Component {
  /**
   * @namespace state - Component state
   * @property {boolean} state.scrolled True if user has scrolled past 90% of
   * the hero
   */
  state = { scrolled: false }

  /**
   * Attaches a scroll listener to the window after user has scrolled past the
   * 90% of hero.
   *
   * @returns {undefined}
   */
  componentDidMount() {
    const class_name = 'ui-sticky'
    const header = '.ado-header'
    const scroll_top = $(window).scrollTop()
    const hero = $('.ado-hero')
    const hero_height = hero.outerHeight()

    if (scroll_top >= (hero_height * 0.90)) {
      this.setState({ scrolled: true })
      $(window).scroll(() => toggle_on_scroll(header, class_name))
    } else {
      this.setState({ scrolled: false })
      $(header).removeClass(class_name)
      $(window).off('scroll')
    }
  }

  /**
   * Component cleanup.
   *
   * @returns {undefined}
   */
  componentWillUnmount() {
    // Remove scroll window listener
    if (this.state.scrolled) $(window).off('scroll')
  }

  /**
   * Renders a header with the base class 'ado-header'.
   *
   * Features the DBK logo and a dropdown navigation, centered across from each
   * other.
   *
   * @param {object} props - Component properties
   * @param {string} props.class - Space delimitted list of extra classes
   * @param {string} props.id - Element id
   * @param {boolean} props.app_ready - True if application has loaded all
   * content
   * @param {object} state - Component state
   * @returns {HTMLElement} HTML header element
   */
  render(props, state) {
    const style = (`ado-header ${props.class ? props.class : ''}`).trim()
    const { id, page_ready } = props

    return (
      <header id={id} class={style}>
        <Container>
          <ScrollToTopButton disabled={page_ready} class='ui-borderless'>
            <Image src={logo_light} alt='DBK logo' />
          </ScrollToTopButton>

          {/*
            TODO: Add dropdown navigation
            <Navigation />
          */}
        </Container>
      </header>
    )
  }
}
