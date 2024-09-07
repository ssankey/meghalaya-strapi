'use strict';

/**
 * selling-package service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::selling-package.selling-package');
