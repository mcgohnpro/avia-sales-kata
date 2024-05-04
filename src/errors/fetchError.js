export default class FetchError extends Error {
  constructor(message, response) {
    super(message)
    this.name = this.constructor.name
    this.response = response
  }
}
