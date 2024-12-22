/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from "express"
import mongoose from "mongoose"
import { handleCastError } from "../helpers/handleCastError"
import { handlerDuplicateError } from "../helpers/handleDuplicateError"
import { handleGenericError } from "../helpers/handleGenericError"
import { handleValidationError } from "../helpers/handlerValidationError"
import { handlerZodError } from "../helpers/handleZodError"



// eslint-disable-next-line no-unused-vars
type TErrorResponse = {
    success: boolean
    message: string
    error: any
}

// eslint-disable-next-line no-unused-vars
export const globalErrorHandler = (err: any, req: Request, res: Response, _next: NextFunction) => {
    if (err.name && err.name === "ZodError") {
        handlerZodError(err, res)
    }
    else if (err instanceof mongoose.Error.CastError) {
        handleCastError(err, res)
    }
    else if (err instanceof mongoose.Error.ValidationError) {
        handleValidationError(err, res)
    }
    else if (err.code && err.code === 11000) {
        handlerDuplicateError(err, res)
    }
    else if (err instanceof Error) {
        handleGenericError(err, res)
    }
}



