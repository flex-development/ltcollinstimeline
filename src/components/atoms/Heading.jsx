// Packages
import React from 'react'

/**
 * @file Component representing a <h1>, <h2>, <h3>, <h4>, <h5>, or <h6> element.
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

/**
 * Renders a heading element with the base class 'ada-heading'.
 *
 * @param {object} props - Component properties
 * @param {string} props.children - Inner HTML
 * @param {string} props.className - Space delimitted list of extra classes
 * @param {string} props.id - Element id
 * @param {number} props.size - Heading size. Defaults to 1
 * @returns {Heading}
 */
const Heading = props => {
  const { className, children, id, size } = props
  const style = (`ada-heading ${className || ''}`).trim()

  let element

  switch (size) {
    case 2:
      element = <h2 className={style} id={id}>{children}</h2>
      break
    case 3:
      element = <h3 className={style} id={id}>{children}</h3>
      break
    case 4:
      element = <h4 className={style} id={id}>{children}</h4>
      break
    case 5:
      element = <h5 className={style} id={id}>{children}</h5>
      break
    case 6:
      element = <h6 className={style} id={id}>{children}</h6>
      break
    default:
      element = <h1 className={style} id={id}>{children}</h1>
      break
  }

  return element
}

export default Heading
