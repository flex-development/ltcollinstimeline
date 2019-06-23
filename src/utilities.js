// Packages
import { GeneralError } from '@feathersjs/errors'
import $ from 'jquery'

/**
 * @file Component utility functions
 * @module utilities
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Attaches or detaches a window scroll listener to the window resize event.
 *
 * @see @param fn defaults to null, @see @param on defaults to false.
 *
 * @param {Function} fn - Function to call on window resize
 * @param {boolean} on - True if scroll window listener should be added
 * @returns {boolean} @see @param on
 * @throws {GeneralError}
 */
export const handle_window_resize = (fn = null, on = false) => {
  // Check if resize function exists. If so, attach listener
  if (on && !fn) throw new GeneralError('Resize function is required.', { on })

  /**
   * Remove scroll window listener if @see @param on is false,
   * or attach the listener
   */
  on ? $(window).resize(() => fn()) : $(window).off('resize')

  return on
}

/**
 * Attaches or detaches a window scroll listener to window scroll event.
 *
 * @see @param fn defaults to null, @see @param on defaults to false.
 *
 * @param {Function} fn - Function to call on window scroll
 * @param {boolean} on - True if scroll window listener should be added
 * @returns {boolean} @see @param on
 * @throws {BadRequest}
 */
export const handle_window_scroll = (fn = null, on = false) => {
  // Check if scroll function exists. If so, attach listener
  if (on && !fn) throw new GeneralError('Scroll function is required.', { on })

  /*
   * Remove scroll window listener if @see @param on is false,
   * or attach the listener
   */
  on ? $(window).scroll(() => fn()) : $(window).off('scroll')

  return on
}

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
 * Returns true if the viewport width is <= 768px.
 *
 * @returns {boolean} If viewport width is <= 768px.
 */
export const is_mobile = () => $(window).width() <= 768

/**
 * Returns true if the user has scrolled the page.
 *
 * If @see @param selector is defined, and @see @param value defined as a
 * value between 0 and 1, the function will return true if the user has
 * scrolled past @param value of the element associated with @param selector .
 *
 * @param selector must be a valid non-empty string and @param value must be
 * between 0 and 1, inclusive, otherwise the function will check if the user has
 * scrolled the page in general.
 *
 * @see @param target defaults to the global window object.
 *
 * @param {string} selector - String matching element with class to check if
 * header has scrolled past @see @param value
 * @param {number} value - If defined as a value between 0 and 1, the function
 * will return true if the user has scrolled past @param value of the element
 * associated with @param selector
 * @param {string} target - Element to get scroll to top value from
 * @returns {boolean}
 */
export const is_scrolled = (selector, value, target = window) => {
  const no_selector = !selector || (selector && !selector.length)
  const no_value = !value || (value && (value < 0 || value > 1))

  if (no_selector || no_value) return $(target).scrollTop() > 0
  return $(target).scrollTop() >= $(selector).outerHeight() * value
}

/**
 * Smooth scrolls to the top of @see @param target .
 *
 * @see @param target defaults to 'body', @see @param speed defaults to 750.
 *
 * @param {Event} event - onClick event
 * @param {string} target - Element to scroll to the top of
 * @param {number} speed - Animation speed in milliseconds
 * @returns {undefined}
 */
export const smooth_scroll = (event, target = 'body', speed = 500) => {
  $('html, body').animate({ scrollTop: $(target).offset().top }, speed)
  if (process.env.NODE_ENV !== 'production') console.info('Smooth scrolled.')
  event.preventDefault()
}

/**
 * Every @see @param lap, the function identified by @see @param start will be
 * executed. If @see @param interval is defined, the interval associated with
 * the id will be cleared.
 *
 *
 * @param {Function} start - A function to be executed every @see @param lap
 * milliseconds. The function is not passed any parameters, and no return value
 * is expected.
 * @param {string} interval - If defined, the interval associated with the id
 * will be cleared
 * @param {string} lap - The time, in milliseconds the timer should delay in
 * between executions @see @param start
 * @returns {string | undefined} Interval id if interval was created, undefined
 * if the interval was cleared
 * @throws {GeneralError}
 */
export const timer = (start, interval, lap = 1000) => {
  if (start && !(start instanceof Function)) {
    throw new GeneralError('Invalid start function.', { start: start || null })
  } else if (interval && !interval.length) {
    throw new GeneralError('Invalid interval id.', { interval })
  } else if (lap < 0) {
    throw new GeneralError('Invalid lap', { lap })
  }

  if (start) return setInterval(() => start(), lap)
  if (interval) return clearInterval()
}
