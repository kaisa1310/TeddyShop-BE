import { StatusCodes } from 'http-status-codes'
import { addressService } from '~/services/addressService'

import ApiError from '~/utils/ApiError'
import validateMongodbId from '~/utils/validateMongodbId'

const createAddress = async (req, res, next) => {
  try {
    const address = await addressService.createEvent(req.body)

    res.status(StatusCodes.OK).json({ address })
  } catch (error) {
    next(new ApiError(StatusCodes.BAD_REQUEST, 'Error form server, please try again'))
  }
}

const getAddressByUserId = async (req, res, next) => {
  try {
    const { _id } = req.user
    validateMongodbId(_id)
    const addresses = await addressService.getAddressByUserId(_id)

    res.status(StatusCodes.OK).json({ addresses })
  } catch (error) {
    next(new ApiError(StatusCodes.BAD_REQUEST, 'Error form server, please try again'))
  }
}

const getAddressById = async (req, res, next) => {
  try {
    const { id } = req.params
    validateMongodbId(id)
    const addresses = await addressService.getAddressById(id)

    res.status(StatusCodes.OK).json({ addresses })
  } catch (error) {
    next(new ApiError(StatusCodes.BAD_REQUEST, 'Error form server, please try again'))
  }
}

const updateAddress = async (req, res, next) => {
  try {
    const { id } = req.params
    validateMongodbId(id)
    const addresses = await addressService.updateAddress(id, req.body)

    res.status(StatusCodes.OK).json({ addresses })
  } catch (error) {
    next(new ApiError(StatusCodes.BAD_REQUEST, 'Error form server, please try again'))
  }
}

const deleteAddress = async (req, res, next) => {
  try {
    const { id } = req.params
    validateMongodbId(id)
    const addresses = await addressService.deleteAddress(id)

    res.status(StatusCodes.OK).json({ addresses })
  } catch (error) {
    next(new ApiError(StatusCodes.BAD_REQUEST, 'Error form server, please try again'))
  }
}

export const addressController = {
  createAddress,
  getAddressByUserId,
  getAddressById,
  updateAddress,
  deleteAddress
}
