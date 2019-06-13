// Packages
import { h } from 'preact'
import { storiesOf } from '@storybook/preact'

// Components
import Header from './Header.jsx'

/**
 * @file Organisms stories
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// Header story
storiesOf('Organisms|Header', module).add('default', () => <Header />)
