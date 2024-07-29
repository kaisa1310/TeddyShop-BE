import express from 'express'
import { addressController } from '~/controllers/addressController'
import { authMiddleware } from '~/middlewares/authMiddleware'
import { validateAddressData } from '~/validations/addressValidation'

const Router = express.Router()

Router.post('/', authMiddleware, validateAddressData, addressController.createAddress)
  .get('/', authMiddleware, addressController.getAddressByUserId)
  .get('/:id', authMiddleware, addressController.getAddressById)
  .put('/:id', authMiddleware, validateAddressData, addressController.updateAddress)
  .delete('/:id', authMiddleware, addressController.deleteAddress)

export const addressRouter = Router
