export default class Util {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
  }

  /**
   * Setting success
   * @param {number} statusCode - Status code
   * @param {String} message - Message
   * @param {*} data - Data
   */
  setSuccess(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.type = "success";
  }

  /**
   * Setting error
   * @param {number} statusCode - Status code
   * @param {String} message - Message
   */
  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = "error";
  }

  /**
   * Send data to client
   * @param {{
   * status:Function,
   * req:{user:{dataValues:{id:Number}}, originalUrl:String, _parsedUrl:{query:String}, body:Object}
   * }} res - Response
   * @returns {Object}
   */
  send(res) {
    const result = {
      status: this.type,
      message: this.message,
      data: this.data,
    };

    if (this.type === "success") {
      return res.status(this.statusCode).json(result);
    }

    return res.status(this.statusCode).json({
      status: this.type,
      message: this.message,
    });
  }
}
