class CustomError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      Error.captureStackTrace(this, this.constructor); 
    }
  }
  
  const createCustomError = (msg, statusCode) => {
    return new CustomError(msg, statusCode);
  };
  
  export { createCustomError, CustomError };
  