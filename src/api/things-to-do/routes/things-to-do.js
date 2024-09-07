'use strict';

/**
 * things-to-do router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::things-to-do.things-to-do');
