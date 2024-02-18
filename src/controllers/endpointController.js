import Util from "../utils/util.js";
const util = new Util();

const EndpointController = {
  /**
   * Create new endpoint
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @returns {JSON} Json Response
   */
  createNewEndpoint: async (req, res) => {
    try {
    } catch (error) {}
  },

  /**
   * Get endpoint details
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @returns {JSON} Json Response
   */
  getEndpointDetails: async (req, res) => {
    try {
      const { apiKey } = req.params;
      util.setSuccess(200, "Endpoint retrieved", apiKey);
      return util.send(res);
    } catch (error) {}
  },
};

export default EndpointController;
