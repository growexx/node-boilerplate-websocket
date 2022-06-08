const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('../public/swagger.json');

const baseURL = process.env.BASE_URL.split('://');
swaggerJson.host = baseURL[1];
swaggerJson.info.description = `HostName / URL : ${swaggerJson.host}`;
swaggerJson.schemes[0] = baseURL[0];
module.exports = function (router) {
    router.use('/charts/api-docs', swaggerUi.serve);
    router.get('/charts/api-docs', swaggerUi.setup(swaggerJson));
};
