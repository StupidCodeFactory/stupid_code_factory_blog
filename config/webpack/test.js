// Note: You must restart bin/webpack-dev-server for changes to take effect

const merge = require('webpack-merge')
const sharedConfig = require('./shared.js')

sharedConfig.plugins = sharedConfig.plugins.filter(plugin => plugin.constructor.name !== 'ManifestPlugin')
module.exports = merge(sharedConfig, {})
