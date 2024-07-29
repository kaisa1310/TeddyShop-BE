import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

import ApiError from '~/utils/ApiError'

const validateAddressData = async (req, res, next) => {
  const correctCondition = Joi.object({
    fullName: Joi.string().required().max(255).trim(),
    phoneNumber: Joi.string().max(10).required(),
    location: Joi.string().required(),
    addressCity: Joi.string().required(),
    addressDistrict: Joi.string().required(),
    addressWard: Joi.string().required().required()
  })

  await correctCondition
    .validateAsync(req.body, { abortEarly: false })
    .then(() => next())
    .catch(() => {
      next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, 'Dữ liệu địa chỉ không hợp lệ'))
    })
}

export { validateAddressData }
