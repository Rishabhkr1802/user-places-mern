class HttpError extends Error {
    constructor(message, error) {
        super(message);
        this.error = error;

        // Maintains proper stack trace for where error was thrown (only on V8 engines like Node.js)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HttpError);
        }
    }
}

export default HttpError;