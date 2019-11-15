// Packages
import React from 'react'
import ReactDOM from 'react-dom'

// Utilities
import utils from './utils'

// Compiled Sass stylesheet
import './sass/app.sass'

// Service worker
import * as sw from './serviceWorker'

// Application
import App from './components/App'

/**
 * @file Application entry point
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

// Application will be rendered inside of <div id="root"></div>
// with utility functions passed as props
ReactDOM.render(<App {...utils} />, document.getElementById('root'))

/**
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * @see {@link https://bit.ly/CRA-PWA}
 */
sw.unregister()
