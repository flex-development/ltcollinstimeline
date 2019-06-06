// Packages
import { createContext } from 'preact'

/**
 * @file Context configuration
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 * @see
 * {@link https://reactjs.org/docs/context.html#consuming-multiple-contexts}
 */

/**
 * @namsespace InitialAsyncState - Initial async request state
 * @property {object | null} data - Async data
 * @property {number} progress - Loading if value < 100
 * @exports InitialAsyncState
 */
const InitialAsyncState = { data: null, progress: 0 }

/**
 * @namsespace InitialUIState - Initial user interface state
 * @property {boolean} menu_open - True if menu is open, closed otherwise
 * @property {boolean} mobile - True if viewport <= 768px
 * @exports InitialUIState
 */
const InitialUIState = { menu_open: false, mobile: false }

const AsyncContext = createContext(InitialAsyncState)
const UIContext = createContext(InitialUIState)

export { AsyncContext, InitialAsyncState, InitialUIState, UIContext }
