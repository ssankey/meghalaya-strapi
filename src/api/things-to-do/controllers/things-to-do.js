'use strict';

/**
 * things-to-do controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::things-to-do.things-to-do');
