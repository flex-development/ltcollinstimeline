// Packages
import { createContext } from 'preact'
import $ from 'jquery'

/**
 * @file Context configuration
 * @module context
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 * @see
 * {@link https://reactjs.org/docs/context.html#consuming-multiple-contexts}
 */

/**
 * @namsespace InitialAsyncState - Initial async request state
 * @property {object | null} data - Async data
 * @property {boolean} loading - True if data is loading
 * @property {number} progress - Loading if value < 100
 * @exports InitialAsyncState
 */
const InitialAsyncState = { data: null, loading: true, progress: 0 }

/**
 * @namsespace InitialUIState - Initial user interface state
 * @property {boolean} menu_open - True if menu is open, closed otherwise
 * @property {boolean} mobile - True if viewport <= 768px
 * @property {boolean} scrolled - True if user has scrolled the page
 * @exports InitialUIState
 */
const InitialUIState = {
  menu_open: false,
  mobile: false,
  scrolled: $(window).scrollTop() >= $('.ado-hero').outerHeight() * 0.9
}

const AsyncContext = createContext(InitialAsyncState)
const UIContext = createContext(InitialUIState)

export { AsyncContext, InitialAsyncState, InitialUIState, UIContext }
