
module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/orders/customRoute',
        handler: 'order.customRouteController', // or 'plugin::plugin-name.controllerName.functionName' for a plugin-specific controller
        
      },
    ],
  };