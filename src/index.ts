import { BadRequestError } from "./errors/bad-request-error";
import { CustomError } from "./errors/custom-error";
import { DatabaseConnectionError } from "./errors/database-connection-error";
import { NotAuthorizedError } from "./errors/not-authorized-error";
import { NotFoundError } from "./errors/not-found-error";
import { RequestValidationError } from "./errors/request-validation-error";

import { currentUser } from "./middlewares/current-user";
import { errorHandler } from "./middlewares/error-handler";
import { requireAuth } from "./middlewares/require-auth";
import { validateRequest } from "./middlewares/validate-request";

export * from "./events/listener";
export * from "./events/publisher";
export * from "./events/subjects";
export * from "./events/ticket-create-event";
export * from "./events/ticket-update-event";
export * from "./events/types/order-status";
export * from "./events/order-cancel-event";
export * from "./events/order-create-event";

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
  validateRequest,
};
