/**
 * This file is used for chart API's routes.
 * Created by Growexx on 11/03/2022.
 * @name chartsRoutes
 */
const router = require('express').Router();
const ChartController = require('../services/charts/chartController');

router.get('/', ChartController.index);

if (process.env.NODE_ENV !== 'production') {
    require('../util/swagger')(router);
}
module.exports = router;
