// Packages
import React, { Fragment } from 'react'

// Context
import { UIContext } from '../context'

// Components
import { Container, Image, SmoothScrollButton } from '../atoms'

// Images
import logo_light from '../../assets/images/logo-mini-light.svg'

/**
 * @file Component representing <header> elements.
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

/**
 * Renders a <header> element with the base class 'ado-header'.
 *
 * If props.container is defined, props.children will be wrapped in a
 * container element with the base class 'ada-container'.
 *
 * Pass an empty object for the default container, or defined
 * props.container.id and/or props.container.classes for greater control.
 *
 * @param {object} props - Component properties
 * @param {*} props.children - Header elements
 * @param {string} props.class - Space delimitted list of extra classes
 * @param {object} props.container - If defined, wrap children in container
 * @param {string} props.container.id - Container element id
 * @param {string} props.container.classes - Extra container classes
 * @param {string} props.id - Element id
 * @param {object} state - Component state
 * @returns {HTMLElement} HTML <header> element
 */
const Header = props => {
  const { id, children, container } = props

  const c_props = typeof container === 'boolean'
    ? { children } : { ...container, children }

  return (
    <header id={id} className={(`ado-header ${props.class || ''}`).trim()}>
      {container ? <Container {...c_props} /> : children}
    </header>
  )
}

const SiteHeader = ({ scrolled }) => {
  return (
    <Header container sticky>
      <UIContext.Consumer>
        {({ scrolled }) => {
          const className = scrolled ? 'logo ui-scrolled' : 'logo'

          return (
            <Fragment>
              <SmoothScrollButton className='ui-borderless ui-transparent'>
                <Image
                  className={className} src={logo_light} alt='DBK mini logo'
                />
              </SmoothScrollButton>
            </Fragment>
          )
        }}
      </UIContext.Consumer>
    </Header>
  )
}

export { Header as default, SiteHeader }
