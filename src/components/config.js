// Packages
import { configure } from '@storybook/preact'

/**
 * @file Storybook configuration
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

// Tell Storybook where to find our component stories
configure(() => {
  // Load atoms, molecules, organisms, templates, and pages
  require('./organisms/organisms.stories')
}, module)
