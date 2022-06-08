
const ChartService = require('./chartService');
const Utils = require('../../util/utilFunctions');

/**
 * Class represents controller for charts.
 */
class ChartController {
    /**
     * @desc This function is being used to index
     * @author Growexx
     * @since 04/03/2021
     * @param {Object} req Request
     * @param {Object} req.body RequestBody
     * @param {function} res Response
     */
    static async index (req, res) {
        try {
            const data = await ChartService.index(res);
            Utils.sendResponse(null, data, res, res.__('SUCCESS'));
        } catch (error) {
            Utils.sendResponse(error, null, res, error.message);
        }
    }

}

module.exports = ChartController;
