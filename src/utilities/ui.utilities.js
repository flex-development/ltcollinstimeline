// Packages
import { BadRequest, GeneralError } from '@feathersjs/errors'
import $ from 'jquery'

/**
 * @file UI utility functions
 * @module utilities/ui
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Checks if an element is in the viewport.
 *
 * @param {string} selector - A string containing a selector expression
 * @returns {object} A set of booleans for each side of the element
 * @throws {GeneralError}
 */
export const in_viewport = selector => {
  if (!selector) throw new GeneralError('Missing selector.')

  // Get coordinates of the bounding box
  let element = $(selector)
  const bounds = element.offset()

  // Boumds for comparison
  const comparison = {
    height: window.innerHeight || document.documentElement.clientHeight,
    width: window.innerWidth || document.documentElement.clientWidth
  }

  // Build a set of booleans for each side of the original element
  element = {}

  element.top = bounds.top < 0
  element.left = bounds.left < 0
  element.bottom = bounds.bottom > comparison.height
  element.right = bounds.right > comparison.width

  element.any = element.top || element.left || element.bottom || element.right
  element.all = element.top && element.left && element.bottom && element.right

  return element
}

/**
 * Smooth scrolls to the top of @see @param target .
 *
 * @param {Event} event - onClick event *
 * @param {string} target - Element to scroll to the top of
 * @param {number} speed - Animation speed in milliseconds
 * @returns {undefined}
 */
export const smooth_scroll = (event, target = 'body', speed = 750) => {
  $('html, body').animate({ scrollTop: target }, speed)
  if (process.env.NODE_ENV !== 'production') console.info('Smooth scrolled.')
  event.preventDefault()
}

/**
 * Checks if an element is in the viewport.
 *
 * @param {string} selector - A string containing a selector expression
 * @param {string} class_name - CSS class to add to the selected element when
 * the user has scrolled the page, or remove when the user has scrolled to the
 * top of the window
 * @returns {undefined}
 * @throws {BadRequest}
 */
export const toggle_on_scroll = (selector, class_name) => {
  if (!selector || (selector && !selector.length)) {
    throw new BadRequest('HTML element is required.')
  } else if (!class_name || (class_name && !selector.length)) {
    throw new BadRequest('Class to add is required.')
  }

  const $element = $(selector)
  const scroll_height = $(window).scrollTop()

  if (scroll_height === 0) {
    $element.removeClass(class_name)
  } else {
    $element.addClass(class_name)
  }
}
