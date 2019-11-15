// Packages
import { createContext } from 'react'

// Utilities
import utils from '../utils'

const { is_scrolled, near_bottom } = utils

/**
 * @file Context configuration
 * @module context
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
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
 * @property {boolean} mobile - If viewport <= 768px
 * @property {boolean} near_bottom - If user has scrolled within 100px of the
 * bottom of the page
 * @property {boolean} scrolled - If user has scrolled past 90% of the
 * hero
 * @exports InitialUIState
 */
const InitialUIState = {
  menu_open: false,
  mobile: false,
  near_bottom: near_bottom(),
  scrolled: is_scrolled('.ado-hero', 0.9)
}

const AsyncContext = createContext(InitialAsyncState)
const UIContext = createContext(InitialUIState)

export { AsyncContext, InitialAsyncState, InitialUIState, UIContext }
