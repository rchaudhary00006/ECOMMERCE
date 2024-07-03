'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',  ({ strapi }) => ({

    async customRouteController(ctx){
        try {
            const entries = await strapi.entityService.findOne("api::product.product",1);
            return {
                data : entries
            }
        } catch (error) {
            
        }
    }
}));
