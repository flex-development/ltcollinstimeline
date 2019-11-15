// Packages
import React from 'react'

// Components
import { ArrowIcon, Container, Image, Link, SmoothScrollButton } from '../atoms'

// Images
import logo_red from '../../assets/images/logo-mini-accent-med.svg'

/**
 * @file Component representing <footer> elements.
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

/**
 * Renders a <footer> element with the base class 'ado-footer'.
 *
 * If props.container is defined, props.children will be wrapped in a
 * container element with the base class 'ada-container'.
 *
 * Pass an empty object for the default container, or defined
 * props.container.id and/or props.container.classes for greater control.
 *
 * @param {object} props - Component properties
 * @param {*} props.children - Footer elements
 * @param {string} props.className - Space delimitted list of extra classes
 * @param {object} props.container - If defined, wrap children in container
 * @param {string} props.container.id - Container element id
 * @param {string} props.container.classes - Extra container classes
 * @param {string} props.id - Element id
 * @param {object} state - Component state
 * @returns {HTMLElement} HTML <footer> element.
 */
const Footer = props => {
  const { children, container, className, id } = props

  const c_props = typeof container === 'boolean'
    ? { children } : { ...container, children }

  return (
    <footer id={id} className={(`ado-footer ${className || ''}`).trim()}>
      {
        container
          ? <Container {...c_props} />
          : children
      }
    </footer>
  )
}

const SiteFooter = () => {
  return (
    <Footer container>
      <Link id='footer-logo' href='https://dbknews.com' target='_blank'>
        <Image src={logo_red} alt='DBK mini logo' />
      </Link>

      <div className='footer-links'>
        <Link href='https://flexdevelopment.llc' target='_blank'>
          Designed & Developed by Flex Development, LLC
        </Link>
        <SmoothScrollButton class='ui-borderless ui-transparent'>
          <ArrowIcon type='up' />
        </SmoothScrollButton>
      </div>
    </Footer>
  )
}

export { Footer as default, SiteFooter }
