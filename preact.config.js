// Packages
import envVars from 'preact-cli-plugin-env-vars'

/**
 * @file Preact configuration
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Function that mutates the original webpack config.
 * Supports asynchronous changes when a promise is returned (or it's an async
 * function).
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to the CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers for
 * working with the webpack config.
 */
export default function (config, env, helpers) {
  // Initialize environment variables
  envVars(config, env, helpers)

  // Babel config
  let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0]
  let babel_config = rule.options

  let plugins = [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-throw-expressions'
  ]

  plugins.forEach(plugin => babel_config.plugins.push(plugin))
}
