class appError extends Error {
  public reason: string;
  public message: string;
  constructor(message: string,reason: string,) {
    super(message);
    this.reason = reason;
    this.message = message;
  }
}
export default appError;