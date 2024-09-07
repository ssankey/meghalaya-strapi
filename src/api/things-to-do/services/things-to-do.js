'use strict';

/**
 * things-to-do service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::things-to-do.things-to-do');
