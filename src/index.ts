import { BadRequestError } from "./errors/bad-request-error.js";
import { CustomError } from "./errors/custom-error.js";
import { DatabaseConnectionError } from "./errors/database-connection-error.js";
import { NotAuthorizedError } from "./errors/not-authorized-error.js";
import { NotFoundError } from "./errors/not-found-error.js";
import { RequestValidationError } from "./errors/request-validation-error.js";

import { currentUser } from "./middlewares/current-user.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { requireAuth } from "./middlewares/require-auth.js";
import { validateRequest } from "./middlewares/validate-request.js";

export {
    BadRequestError,
    CustomError,
    DatabaseConnectionError,
    NotAuthorizedError,
    NotFoundError,
    RequestValidationError,
    currentUser,
    errorHandler,
    requireAuth,
    validateRequest
}