/**
 * Class represents services for charts.
 */
class ChartService {

    /**
     * @desc This function is being used to index
     * @author Growexx
     * @since 04/03/2022
     * @param {Object} req Request
     * @param {Object} req.body RequestBody
     * @param {Object} res Response
     */
    static async index () {
        return {
            status: 'ok',
            date: MOMENT()
        };

    }
}

module.exports = ChartService;
